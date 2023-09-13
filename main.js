function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3;
  const φ1 = (lat1 * Math.PI) / 180;
  const φ2 = (lat2 * Math.PI) / 180;
  const Δφ = ((lat2 - lat1) * Math.PI) / 180;
  const Δλ = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);

  const c = 
    c= c= c= c= c=c* Matatanatantn(Math.sqrt(a), Mth.sqrtath.sqrtath.squrtatath.sqrtath.squrta));

return R*c;
}

AFRAME.registerComponent('poi', {
schema:{
name:{type:'string', default:''},
latitude:{type:'number', default:''},
longitude:{type:'number', default:''}
},

init:function() {
this.el.setAttribute('gps-entity-place',{
latitude:this.data.latitude,
longitude:this.data.longitude});

this.textEl=document.createElement('a-text');
this.textEl.setAttribute('scale','15');
this.textEl.setAttribute('look-at','[gps-camera]');
this.textEl.setAttribute('align','center');
this.textEl.setAttribute('position','015'); //position text above the sphere
this.el.appendChild(this.textEl);

this.updateDistance();
},

updateDistance:function() {
const gpsCamera = AFRAME.scenes[0].camera.el.getAttribute("gps-camera");

if(gpsCamera && 'latitude' in gpsCamera && 'longitude' in gpsCamera){
const userLatitude = gpsCamera.latitude;
const userLongitude = gpsCamera.longitude;

const distanceToUser=calculateDistance(userLatitude,userLongitude,this.data.latitude,this.data.longitude);

this.textEl.setAttribute('value',`${this.data.name} \n Distance:${distanceToUser.toFixed(2)} meters`);
}
},

tick:function() {
this.updateDistance();
}
});
