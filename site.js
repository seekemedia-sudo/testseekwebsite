(function(){
  var f=document.getElementById('lead-form');if(!f)return;
  var st=document.getElementById('lead-status');
  f.addEventListener('submit',function(e){
    e.preventDefault();
    var d=Object.fromEntries(new FormData(f).entries());
    st.textContent='Sending…';
    fetch("https://wmmukfurstbmwyyoboal.supabase.co/functions/v1/capture-service-lead",{
      method:'POST',
      headers:{'Content-Type':'application/json','apikey':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndtbXVrZnVyc3RibXd5eW9ib2FsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk5MDkxMjUsImV4cCI6MjA3NTQ4NTEyNX0.4D1i89bHYhaDm7jUfamnfwGzeAt7TO5AC4ynawCb-N4",'Authorization':'Bearer '+"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndtbXVrZnVyc3RibXd5eW9ib2FsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk5MDkxMjUsImV4cCI6MjA3NTQ4NTEyNX0.4D1i89bHYhaDm7jUfamnfwGzeAt7TO5AC4ynawCb-N4"},
      body:JSON.stringify(Object.assign(d,{siteId:"a8af875a-a523-49a7-ac88-5db4d240f541",industrySlug:"mechanics",industryLabel:"Auto Repair Shops",referrer:document.referrer,urgency:'today'}))
    }).then(function(r){return r.json()}).then(function(){
      f.innerHTML='<p><strong>Thanks — we got your request.</strong><br/>We will call you shortly.</p>';
    }).catch(function(){st.textContent='Something went wrong. Please call us instead.'});
  });
})();