from dataclasses import dataclass
from math import sqrt

@dataclass(frozen=True)
class Observation:
    object_id: str
    time_s: int
    map_id: str
    xyz: tuple[float, float, float]
    identity: float       # illustrative score, not probability
    geometry: float       # illustrative score, not probability
    label: str

def remember(memory, obs):
    if min(obs.identity, obs.geometry) < 0.80:
        return False
    old = memory.get(obs.object_id)
    if old is None or obs.time_s > old.time_s:
        memory[obs.object_id] = obs
        return True
    return False

def retrieve(memory, object_id, now_s, map_id, camera_xyz,
             relocalized=True, max_age_s=1800):
    obs = memory.get(object_id)
    if obs is None:
        return {"status": "unknown"}
    result = {"last_seen": obs.label, "time_s": obs.time_s}
    if now_s < obs.time_s:
        return dict(result, status="clock_error")
    if now_s - obs.time_s > max_age_s:
        return dict(result, status="stale")
    if not relocalized or obs.map_id != map_id:
        return dict(result, status="relocalize")
    delta = tuple(p - c for p, c in zip(obs.xyz, camera_xyz))
    distance = sqrt(sum(v*v for v in delta))
    return dict(result, status="last_seen", delta=delta,
                distance_m=round(distance, 2))

if __name__ == "__main__":
    memory = {}
    remember(memory, Observation("glasses-1", 60, "living-v1",
             (2.0, 1.0, 3.0), 0.93, 0.91, "side table"))
    print(retrieve(memory, "glasses-1", 120, "living-v1", (0, 1, 0)))
