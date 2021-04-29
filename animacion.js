
var t1 = just.animate({
    targets: ".ball1",
    duration: 1524,
    props: {
      innerHTML: ['TECNM', 'ITP'] 
    },
    web: {
        rotateX: [24,1800]
    }
 });

 var t2 = just.animate({
   targets: ".ball2",
   duration: 1524,
   props: {
     innerHTML: ['TECNM', 'ITP'] 
   },
   web: {
       opacity: [0, 1]
   }
});



var t3 = just.animate({
    targets: ".ball3",
    duration: 1500,
    props: {
      innerHTML: ['TECNM','ITP'] 
    },
    web: {
        opacity: [1, 0],
       transform: [
         { offset: 0, value: "scale(1, 1)" },
           { offset: 0.3, value: "scale(1.25, .75, 1)" },
           { offset: 0.4, value: "scale(.75, 1.25,1)" },
           { offset: 0.5, value: "scale(1.15, .85,1)" },
           { offset: 0.65, value: "scale(.95, 1.05,1)" },
           { offset: 0.75, value: "scale(1.05, .95,1)" },
           { offset: 1.0, value: "scale(2.22, 2.90)" },
           { offset: 0, value: "scale(1, 1)" }
       ],transform: [
         { offset: 0, value: "scale(1, 1)" },
           { offset: 0.3, value: "scale(1.25, .75, 1)" },
           { offset: 0.4, value: "scale(.75, 1.25,1)" },
           { offset: 0.5, value: "scale(1.15, .85,1)" },
           { offset: 0.65, value: "scale(.95, 1.05,1)" },
           { offset: 0.75, value: "scale(1.05, .95,1)" },
           { offset: 1.0, value: "scale(2.22, 2.90)" },
           { offset: 0, value: "scale(1, 1)" }
       ]
    }
 })





var t4 = just.animate({
   targets: ".ball4",
   duration: 1524,
   props: {
     innerHTML: ['TECNM', 'ITP'] 
   },
   web: {
       marginTop: [524, 0]
   }
});

var t5 = just.animate({
    targets: ".ball5",
    duration: 500,
    props: {
      innerHTML: ['TECNM','ITP'] 
    },
    web: {
       transform: [
         { offset: 0, value: "scale(1, 1)" },
           { offset: 0.3, value: "scale(1.25, .75)" },
           { offset: 0.4, value: "scale(.75, 1.25)" },
           { offset: 0.5, value: "scale(1.15, .85)" },
           { offset: 0.65, value: "scale(.95, 1.05)" },
           { offset: 0.75, value: "scale(1.05, .95)" },
           { offset: 1.0, value: "scale(2.22, 2.90)" },
          {offset:1.1, value:"scale(1,1)"}
  
       ]
    }
 });


var t6 = just.animate({
    targets: ".ball6",
    duration: 1000,
    props: {
      innerHTML: ['TECNM', 'ITP'] 
    },
    web: {
       transform: [
          { offset: 1, value: "scale(1, 1)" },
          { offset: 2, value: "scale(1, 1)" },
          { offset: 1, value: "scale(.2, .20)" },
          { offset: 2, value: "scale(.1, .30)" },
          { offset: 1, value: "scale(.2, .40)" },
          { offset: 2, value: "scale(.1, .50)" },
          { offset: 1, value: "scale(.2, .60)" },
          { offset: 2, value: "scale(.1, .70)" },
          { offset: 1, value: "scale(.2, .80)" },
          { offset: 2, value: "scale(.1, .90)" },
          { offset: 2, value: "scale(1, 1 )" }
       ]
    }
 });

var t7 = just.animate({
   targets: ".ball7",
   duration: 1524,
   props: {
     innerHTML: ['TECNM', 'ITP'] 
   },
   web: {
       rotateY: [24,1800]
   }
});



var t8 = just.animate({
   targets: ".ball8",
   duration: 1400,
   props: {
     innerHTML: ['TECNM', 'ITP'] 
   },
   web: {
      transform: [
         { offset: 0, value: "scale(1, 2,3)" },
          { offset: 1, value: "scale(1, 2)" },
          { offset: 1.11, value: "scale(1, 2)" },
          { offset: 1.34, value: "scale(3, 2,1)" },
        { offset: 0.3, value: "scale(1.25, .75)" }
      ]
   }
});

var t9 = just.animate({
   targets: ".ball9",
   duration: 1524,
   props: {
     innerHTML: ['ITP'] 
   },
   web: {
       borderTopLeftRadius: [1500]
   }
});

var t10 = just.animate({
    targets: ".ball10",
    duration: 1300,
    props: {
      innerHTML: ['TECNM', 'ITP'] 
    },
    web: {
       transform: [
          { offset: 0, value: "scale(1, 1)" },
          { offset: 0.3, value: "scale(.75, .75)" },
          { offset: 0.4, value: "scale(.50, .50)" },
          { offset: 0.5, value: "scale(.25, .25)" },
          { offset: 0.5, value: "scale(.125, .125)" },
          { offset: 1, value: "scale(1, 1)" }
       ]
    }
 });
