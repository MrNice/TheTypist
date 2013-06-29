
var foo= 8;
var typist = (function(){//this is where it is created. see bottom of page for invoke.
  var typist = {
    el: {
      $spaceBar: $('#spaceBar'),
      $body: $('body')
      //,
      // otherStuff: '#otherStuff'
    },
    data: [0],
    dataPenalty: [0],
    labels: ["Start"],
    penalty:5,
    start: function(ops) {
      // ops = ops||{}
      //for (var key in el) {}
      if (ops && ops.el && ops.el.spaceBar) {
        this.el.$spaceBar = $(ops.spaceBar);
      }
      //do some magic
      this.initPage(this.el.$body);
      this.el.$body.keypress(this.keyPressAction);
    },
    initPage:function($body){
      $body.html("press any key to begin your typing challenge!");
    },
    varsForkeyPressAction : function() {
      var timeStart = $.now();
      var snippet = "var chain = barnone";
      var snippet2 = "hH";
      var i = 0;
      var keyHit = 0;
    },

    keyPressAction : function(event) {
      typist.el.$spaceBar.hide("press space bar to begin!"); //check the scope
      console.log(i, snippet[i]);
      var selector = (i < snippet.length) ? snippet[i] : '';//always a string value?
      var end = snippet.length;
      var typed = snippet.slice(0,i);
      console.log("typed",typed);
      var toDo = snippet.slice(i + 1,end);
    },
    //KEY HIT CONDITIONALS/ACTIONS
    //3-5 lines then do find a way to balckbox it, for a clear input an output, all else is not viewable.
    keyHitCondition : function(){if(String.fromCharCode(event.which)!==snippet[i-1]) {
      var x = "Penalty";
      var error = "x";
        $("#sixth p").append(error);
        keyHit+= 2;
      }
    },

    //RENDER SPANS ON EACH KEY*
    renderText : function(i){
      $('#selector').html(selector);
      $('#typed').html(typed);
      $('#toDo').html(toDo);
      return i++;
      //or container var
      //hidden depenbency if i++ inside and above.
    },

    //make this app many times by passing many selectors:
    //place all jquery objects as passible parameters:
    //near start function to pass in.
    // do || pipes for undefined... to do the actual passing in.

    endOfLine: function() {
      if( typed.length === snippet.length){
      //CREATE LINE CHART
      var canvas = $("#myChart").get(0);
      var ctx = canvas.getContext("2d");
      ctx.width = canvas.width = 420;
      ctx.height = canvas.height = 125;
      }
    },

    config : {
      datasets : [
        {
          fillColor : "rgba(220,20,20,0.5)",
          strokeColor : "rgba(220,20,20,1)",
          pointColor : "rgba(220,20,20,1)",
          pointStrokeColor : "#fff",
          data : data
        },
        {
          fillColor : "rgba(111,147,220,0.5)",
          strokeColor : "rgba(111,147,220,1)",
          pointColor : "rgba(111,147,220,1)",
          pointStrokeColor : "#fff",
          data : data //push new value of time stamp/1000
        }
      ]
    },

    stopTime : function(){
    var stop = $.now();
    var result = (stop - timeStart)/1000;
    },

    InsertTime : function(){
      data.push(result);
      console.log(data, 'dp');
      labels.push("Run " + 1);
      dataPenalty.push(keyHit);
      config.datasets[0].data = data;
      config.datasets[1].data = dataPenalty;
      config.labels = labels;
    },

    createChart : function(){
      var myNewChart = new Chart(ctx).Line(config,options);
    }
  };

  return typist;//where it is called
  // }
  // });
}).call(this)//where it is called, an immediatley invoked function.