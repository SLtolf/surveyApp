<%-- Die folgenden zwei Zeilen sind ASP.NET-Direktiven, die bei der Verwendung von SharePoint-Komponenten erforderlich sind. --%>
<%@ Page language="C#" %>
<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<html>
<head>
<title>
Shop Survey 2016
</title>

<meta charset="utf-8">
<!-- Configure viewport for mobile / tabled devices -->
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
<link rel="shortcut icon" type="image/x-icon" href="https://www.res2.scsstatic.ch/etc/designs/emagazine/resources/favicon.ico">
<link rel="apple-touch-icon" href="http://i.imgur.com/uy3VNER.png" />
<link rel="stylesheet" href="css/normalize.css">
<link rel="stylesheet" href="css/animate.css">
<link rel="stylesheet" href="css/styles.css">
<link rel="stylesheet" href="css/font-awesome.min.css">
<style type="text/css">
/* Disable certain interactions on touch devices */
body { -webkit-touch-callout: none; -webkit-text-size-adjust: none; -webkit-user-select: none; -webkit-highlight: none; -webkit-tap-highlight-color: rgba(0,0,0,0); }
</style>
<!-- JS Sharepoint -->
<script type="text/javascript" src="/_layouts/1033/init.js"></script>
<script type="text/javascript" src="/_layouts/15/MicrosoftAjax.js"></script>
<script type="text/javascript" src="/_layouts/15/sp.core.js"></script>
<script type="text/javascript" src="/_layouts/15/sp.runtime.js"></script>
<script type="text/javascript" src="/_layouts/15/sp.js"></script>
</head>

<body>
<!-- Sharepoint Form -->
<form runat="server">
    <SharePoint:FormDigest ID="FormDigest1" runat="server"></SharePoint:FormDigest>
</form>
<button class="starter-button">Start new Session</button>
<div id="start-overlay" class="starter-overlay">
  <header>
      <div class="page-title">Shop Survey 2016</div>
      <div class="nav-logo"><img src="img/improve_logo.png"></div>
  </header>

  <div class="wrapper" id="wrapper1">
    <div class="session-info">
      <div class="session-timer"><h4 data-bind="text: mainTime() + 's'"></h4></div>
      <div class="session-name"><h4>Session #17</h4></div>
    </div>
    <div class="session-actions">
      <div class="session-canceler">cancel</div>
      <div class="session-finisher">finish session</div>
      <div class="session-success">
        <fieldset class="checkbox-tuto">
        <div>
        <input type="checkbox" id="ios" data-bind="checked: sale"/>
        <label class="label-checkbox" for="ios">Sale</label>
        </div>
        </fieldset>
      </div>
    </div>
  </div>

  <div class="wrapper" id="wrapper2">
    <div>
      <div class="product-title"><h3>Others</h3></div>
      <div class="product-timer"><h3 data-bind="text: otherFullTime() + 's'"></h3></div>
      <ul class="process-list">
        <li>
          <div id="1" class="play-button other1"></div>
          <h4>Begrüssung, Small-Talk</h4>
          <h4 data-bind="text: other1() + 's'"></h4>
        </li>
        <li>
          <div id="2" class="play-button other2"></div>
          <h4>Kommunikation, Identifikation Kunde</h4>
          <h4 data-bind="text: other2() + 's'"></h4>
        </li>
        <li>
          <div id="3" class="play-button other3"></div>
          <h4>Wartezeit</h4>
          <h4 data-bind="text: other3() + 's'"></h4>
        </li>
        <li>
          <div id="4" class="play-button other4"></div>
          <h4>Sonderaufgaben im Shop</h4>
          <h4 data-bind="text: other4() + 's'"></h4>
        </li>
      </ul>
    </div>
    <div>
    <div class="product-title"><h3>Wireline Voice</h3></div>
    <div class="product-timer"><h3 data-bind="text: wirelineVoiceFullTime() + 's'"></h3></div>
    <ul class="process-list">
      <li>
        <div  id="5" class="play-button wirelineVoice1"></div>
        <h4>Beraten, Bestellen, Wechseln</h4>
        <h4 data-bind="text: wirelineVoice1() + 's'"></h4>
      </li>
      <li>
        <div id="6" class="play-button wirelineVoice2"></div>
        <h4>Störung, Analyse & Behebung</h4>
        <h4 data-bind="text: wirelineVoice2() + 's'"></h4>
      </li>
      <li>
        <div id="7" class="play-button wirelineVoice3"></div>
        <h4>Kauf Hardware Zusatzmaterial</h4>
        <h4 data-bind="text: wirelineVoice3() + 's'"></h4>
      </li>
      <li>
        <div id="8" class="play-button wirelineVoice4"></div>
        <h4>Kündigung mitteilen & bearbeiten</h4>
        <h4 data-bind="text: wirelineVoice4() + 's'"></h4>
      </li>
      <li>
        <div  id="9" class="play-button wirelineVoice5"></div>
        <h4>Beschwerde entgegen nehmen/lösen</h4>
        <h4 data-bind="text: wirelineVoice5() + 's'"></h4>
      </li>
    </ul>
    </div>
  </div>

  <div class="wrapper" id="wrapper3">
    <div>
      <div class="product-title"><h3>Wireline Broadband</h3></div>
      <div class="product-timer"><h3 data-bind="text: wirelineBroadbandFullTime() + 's'"></h3></div>
      <ul class="process-list">
        <li>
          <div id="10" class="play-button wirelineBroadband1"></div>
          <h4>Beraten, Bestellen, Wechseln</h4>
          <h4 data-bind="text: wirelineBroadband1() + 's'"></h4>
        </li>
        <li>
          <div id="11" class="play-button wirelineBroadband2"></div>
          <h4>Störung, Analyse & Behebung</h4>
          <h4 data-bind="text: wirelineBroadband2() + 's'"></h4>
        </li>
        <li>
          <div  id="12" class="play-button wirelineBroadband3"></div>
          <h4>Kauf Hardware Zusatzmaterial</h4>
          <h4 data-bind="text: wirelineBroadband3() + 's'"></h4>
        </li>
        <li >
          <div id="13" class="play-button wirelineBroadband4"></div>
          <h4>Kündigung mitteilen & bearbeiten</h4>
          <h4 data-bind="text: wirelineBroadband4() + 's'"></h4>
        </li>
        <li>
          <div id="14" class="play-button wirelineBroadband5"></div>
          <h4>Beschwerde entgegen nehmen/lösen</h4>
          <h4 data-bind="text: wirelineBroadband5() + 's'"></h4>
        </li>
      </ul>
    </div>
    <div>
    <div class="product-title"><h3>TV</h3></div>
    <div class="product-timer"><h3 data-bind="text: tvFullTime() + 's'"></h3></div>
      <ul class="process-list">
        <li>
          <div  id="15" class="play-button tv1"></div>
          <h4>Beraten, Bestellen, Wechseln</h4>
          <h4 data-bind="text: tv1() + 's'"></h4>
        </li>
        <li>
          <div id="16" class="play-button tv2"></div>
          <h4>Störung, Analyse & Behebung</h4>
          <h4 data-bind="text: tv2() + 's'"></h4>
        </li>
        <li>
          <div id="17" class="play-button tv3"></div>
          <h4>Kauf Hardware Zusatzmaterial</h4>
          <h4 data-bind="text: tv3() + 's'"></h4>
        </li>
        <li >
          <div id="18" class="play-button tv4"></div>
          <h4>Kündigung mitteilen & bearbeiten</h4>
          <h4 data-bind="text: tv4() + 's'"></h4>
        </li>
        <li>
          <div id="19" class="play-button tv5"></div>
          <h4>Beschwerde entgegen nehmen/lösen</h4>
          <h4 data-bind="text: tv5() + 's'"></h4>
        </li>
      </ul>
    </div>
  </div>

  <div class="wrapper" id="wrapper4">
  <div>
    <div class="product-title"><h3>Bundles</h3></div>
    <div class="product-timer"><h3 data-bind="text: bundlesFullTime() + 's'"></h3></div>
    <ul class="process-list">
      <li>
        <div id="20" class="play-button bundles1"></div>
        <h4>Beraten, Bestellen, Wechseln</h4>
        <h4 data-bind="text: bundles1() + 's'"></h4>
      </li>
      <li>
        <div id="21" class="play-button bundles2"></div>
        <h4>Kauf Hardware Zusatzmaterial</h4>
        <h4 data-bind="text: bundles2() + 's'"></h4>
      </li>
      <li>
        <div id="22" class="play-button bundles3"></div>
        <h4>Kündigung mitteilen & bearbeiten</h4>
        <h4 data-bind="text: bundles3() + 's'"></h4>
      </li>
      <li>
        <div id="23" class="play-button bundles4"></div>
        <h4>Beschwerde entgegen nehmen/lösen</h4>
        <h4 data-bind="text: bundles4() + 's'"></h4>
      </li>
    </ul>
  </div>
  <div>
    <div class="product-title"><h3>Wireless</h3></div>
    <div class="product-timer"><h3 data-bind="text: wirelessFullTime() + 's'"></h3></div>
    <ul class="process-list">
      <li>
        <div id="24" class="play-button wireless1"></div>
        <h4>Beraten, Bestellen, Wechseln</h4>
        <h4 data-bind="text: wireless1() + 's'"></h4>
      </li>
      <li>
        <div id="25" class="play-button wireless2"></div>
        <h4>Bereitstellen, Produzieren</h4>
        <h4 data-bind="text: wireless2() + 's'"></h4>
      </li>
      <li>
        <div  id="26" class="play-button wireless3"></div>
        <h4>installieren & aktivieren</h4>
        <h4 data-bind="text: wireless3() + 's'"></h4>
      </li>
      <li>
        <div id="27" class="play-button wireless4"></div>
        <h4>Störung, Analyse & Behebung</h4>
        <h4 data-bind="text: wireless4() + 's'"></h4>
      </li>
      <li>
        <div  id="28" class="play-button wireless5"></div>
        <h4>Kauf Hardware Zusatzmaterial</h4>
        <h4 data-bind="text: wireless5() + 's'"></h4>
      </li>
      <li>
        <div id="29" class="play-button wireless6"></div>
        <h4>Kündigung mitteilen & bearbeiten</h4>
        <h4 data-bind="text: wireless6() + 's'"></h4>
      </li>
      <li>
        <div  id="30" class="play-button wireless7"></div>
        <h4>Beschwerde entgegen nehmen/lösen</h4>
        <h4 data-bind="text: wireless7() + 's'"></h4>
      </li>
    </ul>
  </div>
  </div>

</div>
<script src="https://code.jquery.com/jquery-2.2.3.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/fastclick/1.0.6/fastclick.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/knockout/3.4.0/knockout-min.js"></script>
<script src="js/app.js?v=03"></script>
</body>
</html>
