var viewModel= {
  sale: ko.observable(false),
  mainTime: ko.observable(0),
  mainTimeactive: ko.observable(false),
  //Others
  otherFullTime: ko.observable(0),
  other1: ko.observable(0),
  other1active: ko.observable(false),
  other2: ko.observable(0),
  other2active: ko.observable(false),
  other3: ko.observable(0),
  other3active: ko.observable(false),
  other4: ko.observable(0),
  other4active: ko.observable(false),
  //WirelineVoice
  wirelineVoiceFullTime: ko.observable(0),
  wirelineVoice1: ko.observable(0),
  wirelineVoice1active: ko.observable(false),
  wirelineVoice2: ko.observable(0),
  wirelineVoice2active: ko.observable(false),
  wirelineVoice3: ko.observable(0),
  wirelineVoice3active: ko.observable(false),
  wirelineVoice4: ko.observable(0),
  wirelineVoice4active: ko.observable(false),
  wirelineVoice5: ko.observable(0),
  wirelineVoice5active: ko.observable(false),
  //WirelineBroadband
  wirelineBroadbandFullTime: ko.observable(0),
  wirelineBroadband1: ko.observable(0),
  wirelineBroadband1active: ko.observable(false),
  wirelineBroadband2: ko.observable(0),
  wirelineBroadband2active: ko.observable(false),
  wirelineBroadband3: ko.observable(0),
  wirelineBroadband3active: ko.observable(false),
  wirelineBroadband4: ko.observable(0),
  wirelineBroadband4active: ko.observable(false),
  wirelineBroadband5: ko.observable(0),
  wirelineBroadband5active: ko.observable(false),
  //TV
  tvFullTime: ko.observable(0),
  tv1: ko.observable(0),
  tv1active: ko.observable(false),
  tv2: ko.observable(0),
  tv2active: ko.observable(false),
  tv3: ko.observable(0),
  tv3active: ko.observable(false),
  tv4: ko.observable(0),
  tv4active: ko.observable(false),
  tv5: ko.observable(0),
  tv5active: ko.observable(false),
  //Bundles
  bundlesFullTime: ko.observable(0),
  bundles1: ko.observable(0),
  bundles1active: ko.observable(false),
  bundles2: ko.observable(0),
  bundles2active: ko.observable(false),
  bundles3: ko.observable(0),
  bundles3active: ko.observable(false),
  bundles4: ko.observable(0),
  bundles4active: ko.observable(false),
  //Wireless
  wirelessFullTime: ko.observable(0),
  wireless1: ko.observable(0),
  wireless1active: ko.observable(false),
  wireless2: ko.observable(0),
  wireless2active: ko.observable(false),
  wireless3: ko.observable(0),
  wireless3active: ko.observable(false),
  wireless4: ko.observable(0),
  wireless4active: ko.observable(false),
  wireless5: ko.observable(0),
  wireless5active: ko.observable(false),
  wireless6: ko.observable(0),
  wireless6active: ko.observable(false),
  wireless7: ko.observable(0),
  wireless7active: ko.observable(false)
};
function tick() {
  viewModel.mainTime(viewModel.mainTime() + 1)

  //Others
  if(viewModel.other1active()){
    viewModel.other1(viewModel.other1() + 1)
    othersFullTime()
  }
  if(viewModel.other2active()){
    viewModel.other2(viewModel.other2() + 1)
    othersFullTime()
  }
  if(viewModel.other3active()){
    viewModel.other3(viewModel.other3() + 1)
    othersFullTime()
  }
  if(viewModel.other4active()){
    viewModel.other4(viewModel.other4() + 1)
    othersFullTime()
  }
  function othersFullTime(){
    viewModel.otherFullTime(viewModel.otherFullTime() + 1)
  }

  //WirelineVoice
  if(viewModel.wirelineVoice1active()){
    viewModel.wirelineVoice1(viewModel.wirelineVoice1() + 1)
    wirelineVoiceFullTime()
  }
  if(viewModel.wirelineVoice2active()){
    viewModel.wirelineVoice2(viewModel.wirelineVoice2() + 1)
    wirelineVoiceFullTime()
  }
  if(viewModel.wirelineVoice3active()){
    viewModel.wirelineVoice3(viewModel.wirelineVoice3() + 1)
    wirelineVoiceFullTime()
  }
  if(viewModel.wirelineVoice4active()){
    viewModel.wirelineVoice4(viewModel.wirelineVoice4() + 1)
    wirelineVoiceFullTime()
  }
  if(viewModel.wirelineVoice5active()){
    viewModel.wirelineVoice5(viewModel.wirelineVoice5() + 1)
    wirelineVoiceFullTime()
  }
  function wirelineVoiceFullTime(){
    viewModel.wirelineVoiceFullTime(viewModel.wirelineVoiceFullTime() + 1)
  }

  //WirelineBroadband
  if(viewModel.wirelineBroadband1active()){
    viewModel.wirelineBroadband1(viewModel.wirelineBroadband1() + 1)
    wirelineBroadbandFullTime()
  }
  if(viewModel.wirelineBroadband2active()){
    viewModel.wirelineBroadband2(viewModel.wirelineBroadband2() + 1)
    wirelineBroadbandFullTime()
  }
  if(viewModel.wirelineBroadband3active()){
    viewModel.wirelineBroadband3(viewModel.wirelineBroadband3() + 1)
    wirelineBroadbandFullTime()
  }
  if(viewModel.wirelineBroadband4active()){
    viewModel.wirelineBroadband4(viewModel.wirelineBroadband4() + 1)
    wirelineBroadbandFullTime()
  }
  if(viewModel.wirelineBroadband5active()){
    viewModel.wirelineBroadband5(viewModel.wirelineBroadband5() + 1)
    wirelineBroadbandFullTime()
  }
  function wirelineBroadbandFullTime(){
    viewModel.wirelineBroadbandFullTime(viewModel.wirelineBroadbandFullTime() + 1)
  }

  //TV
  if(viewModel.tv1active()){
    viewModel.tv1(viewModel.tv1() + 1)
    tvFullTime()
  }
  if(viewModel.tv2active()){
    viewModel.tv2(viewModel.tv2() + 1)
    tvFullTime()
  }
  if(viewModel.tv3active()){
    viewModel.tv3(viewModel.tv3() + 1)
    tvFullTime()
  }
  if(viewModel.tv4active()){
    viewModel.tv4(viewModel.tv4() + 1)
    tvFullTime()
  }
  if(viewModel.tv5active()){
    viewModel.tv5(viewModel.tv5() + 1)
    tvFullTime()
  }
  function tvFullTime(){
    viewModel.tvFullTime(viewModel.tvFullTime() + 1)
  }

  //Bundles
  if(viewModel.bundles1active()){
    viewModel.bundles1(viewModel.bundles1() + 1)
    bundlesFullTime()
  }
  if(viewModel.bundles2active()){
    viewModel.bundles2(viewModel.bundles2() + 1)
    bundlesFullTime()
  }
  if(viewModel.bundles3active()){
    viewModel.bundles3(viewModel.bundles3() + 1)
    bundlesFullTime()
  }
  if(viewModel.bundles4active()){
    viewModel.bundles4(viewModel.bundles4() + 1)
    bundlesFullTime()
  }
  function bundlesFullTime(){
    viewModel.bundlesFullTime(viewModel.bundlesFullTime() + 1)
  }

  //Wireless
  if(viewModel.wireless1active()){
    viewModel.wireless1(viewModel.wireless1() + 1)
    wirelessFullTime()
  }
  if(viewModel.wireless2active()){
    viewModel.wireless2(viewModel.wireless2() + 1)
    wirelessFullTime()
  }
  if(viewModel.wireless3active()){
    viewModel.wireless3(viewModel.wireless3() + 1)
    wirelessFullTime()
  }
  if(viewModel.wireless4active()){
    viewModel.wireless4(viewModel.wireless4() + 1)
    wirelessFullTime()
  }
  if(viewModel.wireless5active()){
    viewModel.wireless5(viewModel.wireless5() + 1)
    wirelessFullTime()
  }
  if(viewModel.wireless6active()){
    viewModel.wireless6(viewModel.wireless6() + 1)
    wirelessFullTime()
  }
  if(viewModel.wireless7active()){
    viewModel.wireless7(viewModel.wireless7() + 1)
    wirelessFullTime()
  }
  function wirelessFullTime(){
    viewModel.wirelessFullTime(viewModel.wirelessFullTime() + 1)
  }

  //Loop
  if(viewModel.mainTimeactive()){
    setTimeout(tick, 1000);
  }

}

function pauseAll(){
viewModel.other1active(false);
viewModel.other2active(false);
viewModel.other3active(false);
viewModel.other4active(false);
viewModel.wirelineVoice1active(false);
viewModel.wirelineVoice2active(false);
viewModel.wirelineVoice3active(false);
viewModel.wirelineVoice4active(false);
viewModel.wirelineVoice5active(false);
viewModel.wirelineBroadband1active(false);
viewModel.wirelineBroadband2active(false);
viewModel.wirelineBroadband3active(false);
viewModel.wirelineBroadband4active(false);
viewModel.wirelineBroadband5active(false);
viewModel.tv1active(false);
viewModel.tv2active(false);
viewModel.tv3active(false);
viewModel.tv4active(false);
viewModel.tv5active(false);
viewModel.bundles1active(false);
viewModel.bundles2active(false);
viewModel.bundles3active(false);
viewModel.bundles4active(false);
viewModel.wireless1active(false);
viewModel.wireless2active(false);
viewModel.wireless3active(false);
viewModel.wireless4active(false);
viewModel.wireless5active(false);
viewModel.wireless6active(false);
viewModel.wireless7active(false);
}

$('document').ready(function(){
  startSession()
  finishSession()
  cancelSession()
  toggleActiveStatus()
  playandstop()
})

function startSession() {
  $('.starter-button').bind('click', function(){
    $(this).hide()
    $('#start-overlay').removeClass('starter-overlay')
    viewModel.mainTimeactive(true)
    setTimeout(tick, 1000);
  })
}

function finishSession() {
  $('.session-finisher').bind('click', function(){
    viewModel.mainTimeactive(false)
    playandstop()
    saveTimes()
  })
}

function cancelSession() {
  $('.session-canceler').bind('click', function(){
    location.reload()
  })
}

function playandstop() {
  $('.play-button').bind('click', function(){
    $('.play-button').removeClass('pause-process')
    $(this).addClass('pause-process')
  })
}

function toggleActiveStatus(){
  //other
  $('.other1').bind('click', function(){
    if(viewModel.other1active() == false){
      pauseAll()
      viewModel.other1active(true)
    }
  })
  $('.other2').bind('click', function(){
    if(viewModel.other2active() == false){
      pauseAll()
      viewModel.other2active(true)
    }
  })
  $('.other3').bind('click', function(){
    if(viewModel.other3active() == false){
      pauseAll()
      viewModel.other3active(true)
    }
  })
  $('.other4').bind('click', function(){
    if(viewModel.other4active() == false){
      pauseAll()
      viewModel.other4active(true)
    }
  })

  //wirelineVoice
  $('.wirelineVoice1').bind('click', function(){
    if(viewModel.wirelineVoice1active() == false){
      pauseAll()
      viewModel.wirelineVoice1active(true)
    }
  })
  $('.wirelineVoice2').bind('click', function(){
    if(viewModel.wirelineVoice2active() == false){
      pauseAll()
      viewModel.wirelineVoice2active(true)
    }
  })
  $('.wirelineVoice3').bind('click', function(){
    if(viewModel.wirelineVoice3active() == false){
      pauseAll()
      viewModel.wirelineVoice3active(true)
    }
  })
  $('.wirelineVoice4').bind('click', function(){
    if(viewModel.wirelineVoice4active() == false){
      pauseAll()
      viewModel.wirelineVoice4active(true)
    }
  })
  $('.wirelineVoice5').bind('click', function(){
    if(viewModel.wirelineVoice5active() == false){
      pauseAll()
      viewModel.wirelineVoice5active(true)
    }
  })

  //wirelineBroadband
  $('.wirelineBroadband1').bind('click', function(){
    if(viewModel.wirelineBroadband1active() == false){
      pauseAll()
      viewModel.wirelineBroadband1active(true)
    }
  })
  $('.wirelineBroadband2').bind('click', function(){
    if(viewModel.wirelineBroadband2active() == false){
      pauseAll()
      viewModel.wirelineBroadband2active(true)
    }
  })
  $('.wirelineBroadband3').bind('click', function(){
    if(viewModel.wirelineBroadband3active() == false){
      pauseAll()
      viewModel.wirelineBroadband3active(true)
    }
  })
  $('.wirelineBroadband4').bind('click', function(){
    if(viewModel.wirelineBroadband4active() == false){
      pauseAll()
      viewModel.wirelineBroadband4active(true)
    }
  })
  $('.wirelineBroadband5').bind('click', function(){
    if(viewModel.wirelineBroadband5active() == false){
      pauseAll()
      viewModel.wirelineBroadband5active(true)
    }
  })

  //tv
  $('.tv1').bind('click', function(){
    if(viewModel.tv1active() == false){
      pauseAll()
      viewModel.tv1active(true)
    }
  })
  $('.tv2').bind('click', function(){
    if(viewModel.tv2active() == false){
      pauseAll()
      viewModel.tv2active(true)
    }
  })
  $('.tv3').bind('click', function(){
    if(viewModel.tv3active() == false){
      pauseAll()
      viewModel.tv3active(true)
    }
  })
  $('.tv4').bind('click', function(){
    if(viewModel.tv4active() == false){
      pauseAll()
      viewModel.tv4active(true)
    }
  })
  $('.tv5').bind('click', function(){
    if(viewModel.tv5active() == false){
      pauseAll()
      viewModel.tv5active(true)
    }
  })
  //bundles
  $('.bundles1').bind('click', function(){
    if(viewModel.bundles1active() == false){
      pauseAll()
      viewModel.bundles1active(true)
    }
  })
  $('.bundles2').bind('click', function(){
    if(viewModel.bundles2active() == false){
      pauseAll()
      viewModel.bundles2active(true)
    }
  })
  $('.bundles3').bind('click', function(){
    if(viewModel.bundles3active() == false){
      pauseAll()
      viewModel.bundles3active(true)
    }
  })
  $('.bundles4').bind('click', function(){
    if(viewModel.bundles4active() == false){
      pauseAll()
      viewModel.bundles4active(true)
    }
  })

  //wireless
  $('.wireless1').bind('click', function(){
    if(viewModel.wireless1active() == false){
      pauseAll()
      viewModel.wireless1active(true)
    }
  })
  $('.wireless2').bind('click', function(){
    if(viewModel.wireless2active() == false){
      pauseAll()
      viewModel.wireless2active(true)
    }
  })
  $('.wireless3').bind('click', function(){
    if(viewModel.wireless3active() == false){
      pauseAll()
      viewModel.wireless3active(true)
    }
  })
  $('.wireless4').bind('click', function(){
    if(viewModel.wireless4active() == false){
      pauseAll()
      viewModel.wireless4active(true)
    }
  })
  $('.wireless5').bind('click', function(){
    if(viewModel.wireless5active() == false){
      pauseAll()
      viewModel.wireless5active(true)
    }
  })
  $('.wireless6').bind('click', function(){
    if(viewModel.wireless6active() == false){
      pauseAll()
      viewModel.wireless6active(true)
    }
  })
  $('.wireless7').bind('click', function(){
    if(viewModel.wireless7active() == false){
      pauseAll()
      viewModel.wireless7active(true)
    }
  })
}

ko.applyBindings(viewModel);

function saveTimes(){
  $.ajax({
    url: _spPageContextInfo.webServerRelativeUrl +
             "/_api/web/lists/getByTitle('SurveyResults')/items",
    type: "POST",
    contentType: "application/json;odata=verbose",
    data: JSON.stringify({
            '__metadata': {
                'type': 'SP.Data.SurveyResultsListItem'
            },
            'Title': 'null',
            'FullSessionTime': viewModel.mainTime(),
            'OthersFullTime': viewModel.otherFullTime(),
            'OthersBegruessungSmallTalk': viewModel.other1(),
            'OthersKommunikationIdentifikatio': viewModel.other2(),
            'OthersWartezeit': viewModel.other3(),
            'OthersSonderaufgabenImShop': viewModel.other4(),
            'WirelineVoiceFullTime': viewModel.wirelineVoiceFullTime(),
            'WirelineVoiceBeratenBestellenWec': viewModel.wirelineVoice1(),
            'WirelineVoiceStoerungAnalyseBehe': viewModel.wirelineVoice2(),
            'WirelineVoiceKaufHardwareZusatzm': viewModel.wirelineVoice3(),
            'WirelineVoiceKuendigungMitteilen': viewModel.wirelineVoice4(),
            'WirelineVoiceBeschwerdeEntgegenN': viewModel.wirelineVoice5(),
            'WirelineBroadbandFullTime': viewModel.wirelineBroadbandFullTime(),
            'WirelineBroadbandBeratenBestelle': viewModel.wirelineBroadband1(),
            'WirelineBroadbandStoerungAnalyse': viewModel.wirelineBroadband2(),
            'WirelineBroadbandKuendigungMitte': viewModel.wirelineBroadband3(),
            'WirelineBroadbandBeschwerdeEntge': viewModel.wirelineBroadband4(),
            'TvFullTime': viewModel.tvFullTime(),
            'TvBeratenBestellenWechseln': viewModel.tv1(),
            'TvStoerungAnalyseBehebung': viewModel.tv2(),
            'TvKaufHardwareZusatzmaterial': viewModel.tv3(),
            'TvKuendigungMitteilenBearbeiten': viewModel.tv4(),
            'TvBeschwerdeEntgegenNehmenLoesen': viewModel.tv5(),
            'BundlesFullTime': viewModel.bundlesFullTime(),
            'BundlesBeratenBestellenWechseln': viewModel.bundles1(),
            'BundlesKaufHardwareZusatzmateria': viewModel.bundles2(),
            'BundlesKuendigungMitteilenBearbe': viewModel.bundles3(),
            'BundlesBeschwerdeEntgegenNehmenL': viewModel.bundles4(),
            'WirelessFullTime': viewModel.wirelessFullTime(),
            'WirelessBeratenBestellenWechseln': viewModel.wireless1(),
            'WirelessBereitstellenProduzieren': viewModel.wireless2(),
            'WirelessInstallierenAktivieren': viewModel.wireless3(),
            'WirelessStoerungAnalyseBehebung': viewModel.wireless4(),
            'WirelessKaufHardwareZusatzmateri': viewModel.wireless5(),
            'WirelessKuendigungMitteilenBearb': viewModel.wireless6(),
            'WirelessBeschwerdeEntgegenNehmen': viewModel.wireless7(),
            'Sale': viewModel.sale(),
        }),
    headers: {
        "accept": "application/json;odata=verbose",
        "X-RequestDigest": $("#__REQUESTDIGEST").val()
    },
    success: function (data) {
      alert('Session wurde gespeichert.')
      location.reload()
    },
    error: function (err) {
        console.log(JSON.stringify(err));
    }
  });
}
