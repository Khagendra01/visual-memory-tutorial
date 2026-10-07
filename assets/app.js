'use strict';
// All demonstration state stays in this tab. No network calls or persistence.
(() => {
 const $ = id => document.getElementById(id);
 if ($('room')) {
  const places = {table:{label:'side table',xyz:[2,1,3],screen:[460,105]},sofa:{label:'sofa',xyz:[-1.5,1,1.5],screen:[145,195]},shelf:{label:'shelf',xyz:[0.3,1,3.5],screen:[310,85]}};
  let time, actual, memory;
  function reset(){time=0;actual={glasses:'table',keys:'shelf',wallet:'sofa'};memory={glasses:{place:'table',time:0,quality:0.95,map:'living-v1'},keys:{place:'shelf',time:0,quality:0.90,map:'living-v1'}};$('object').value='glasses';$('place').value='table';$('observed').checked=true;$('aligned').checked=true;$('quality').value='0.95';$('quality-value').textContent='0.95';render('Reset complete. Query the glasses or begin an experiment.');}
  function render(message){const id=$('object').value,m=memory[id],p=places[actual[id]];$('actual-dot').setAttribute('cx',p.screen[0]);$('actual-dot').setAttribute('cy',p.screen[1]);$('truth').textContent=`Simulation clock: ${time} min. Actual ${id} position: ${p.label}. This ground truth is visible only for teaching.`;
   const line=$('memory-line');line.style.display=m&&$('aligned').checked&&time-m.time<=30?'':'none';if(m){line.setAttribute('x2',places[m.place].screen[0]);line.setAttribute('y2',places[m.place].screen[1]);}
   $('record').textContent=JSON.stringify(m?{object_id:id,last_seen_min:m.time,location:places[m.place].label,xyz_m:places[m.place].xyz,map_id:m.map,quality:m.quality}:{object_id:id,status:'unknown'},null,2);
   if(message)$('answer').textContent=message;
  }
  function query(){const id=$('object').value,m=memory[id];if(!m)return render(`No observation of the ${id} is stored. Try observing a move.`);const age=time-m.time;let msg=`${id[0].toUpperCase()+id.slice(1)} last seen at the ${places[m.place].label}, ${age} minute${age===1?'':'s'} ago.`;
   if(age>30)msg+=' This memory is stale. Check the evidence before searching; directional guidance is withheld.';
   else if(!$('aligned').checked)msg+=' Relocalization is required. Directional guidance is withheld.';
   else {const [x,,z]=places[m.place].xyz;const distance=Math.hypot(x,z).toFixed(2),angle=Math.atan2(x,z)*180/Math.PI;msg+=` Remembered displacement: ${distance} m, ${Math.abs(angle).toFixed(0)}° ${angle<0?'left':'right'} of forward. The object may have moved. This is not a navigation route.`;}
   render(msg);
  }
  $('move').addEventListener('click',()=>{time++;const id=$('object').value;actual[id]=$('place').value;let msg='Physical position changed. ';if(!$('observed').checked)msg+='The camera did not observe the move, so memory is unchanged.';else if(Number($('quality').value)<0.8)msg+='The observation failed the illustrative 0.80 threshold. The previous accepted record is retained.';else {memory[id]={place:actual[id],time,quality:Number($('quality').value),map:'living-v1'};msg+='The observed position was written to memory.';}render(msg);});
  $('age').addEventListener('click',()=>{time+=40;query();});$('query').addEventListener('click',query);$('reset').addEventListener('click',reset);$('object').addEventListener('change',()=>render('Object changed. Select “Find last seen location” to query its memory.'));$('aligned').addEventListener('change',query);$('quality').addEventListener('input',()=>$('quality-value').textContent=Number($('quality').value).toFixed(2));reset();
 }
 if ($('quiz')) {
  const keys=['b','c','a','b','c'];const explanations=['A dated sighting is supported. An unseen move cannot update the memory.','A pixel gives a ray. Depth or metric scale is needed to estimate distance.','The new session must align with the saved map before coordinates can be compared.','An oracle supplies idealized information. It does not measure real perception reliability.','Accuracy alone hides abstention and wrong confident answers. Report coverage and failure cases.'];
  $('quiz').addEventListener('submit',e=>{e.preventDefault();let score=0,answered=0;keys.forEach((key,i)=>{const v=new FormData($('quiz')).get(`q${i+1}`);if(v)answered++;if(v===key)score++;$(`f${i+1}`).textContent=(v===key?'Correct. ':v?'Review this one. ':'No answer selected. ')+explanations[i];});$('quiz-result').textContent=`${score} of 5 correct; ${answered} of 5 answered. Review the explanations, then try again.`;});
  $('quiz').addEventListener('reset',()=>{for(let i=1;i<=5;i++)$('f'+i).textContent='';$('quiz-result').textContent='';});
 }
 document.querySelectorAll('audio').forEach(a=>a.addEventListener('error',()=>{const p=document.createElement('p');p.textContent='Audio could not load. The complete audio transcript is available below.';p.className='small';a.after(p);},{once:true}));
})();
