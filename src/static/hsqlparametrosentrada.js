/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:56:51.25
*/
gx.evt.autoSkip = false;
gx.define('hsqlparametrosentrada', false, function () {
   this.ServerClass =  "hsqlparametrosentrada" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
   };
   this.s132_client=function()
   {
      if ( this.AV29NomeCampo1Data != "" )
      {
         gx.fn.setCtrlProperty("TABCAMPO1","Visible", 1 );
      }
      else
      {
         gx.fn.setCtrlProperty("TABCAMPO1","Visible", 0 );
      }
      if ( this.AV32NomeCampo2Data != "" )
      {
         gx.fn.setCtrlProperty("TABCAMPO2","Visible", 1 );
      }
      else
      {
         gx.fn.setCtrlProperty("TABCAMPO2","Visible", 0 );
      }
      if ( this.AV35NomeCampo3Data != "" )
      {
         gx.fn.setCtrlProperty("TABCAMPO3","Visible", 1 );
      }
      else
      {
         gx.fn.setCtrlProperty("TABCAMPO3","Visible", 0 );
      }
      if ( this.AV38NomeCampo4Data != "" )
      {
         gx.fn.setCtrlProperty("TABCAMPO4","Visible", 1 );
      }
      else
      {
         gx.fn.setCtrlProperty("TABCAMPO4","Visible", 0 );
      }
      if ( this.AV41NomeCampo5Data != "" )
      {
         gx.fn.setCtrlProperty("TABCAMPO5","Visible", 1 );
      }
      else
      {
         gx.fn.setCtrlProperty("TABCAMPO5","Visible", 0 );
      }
      if ( this.AV44NomeCampo6Data != "" )
      {
         gx.fn.setCtrlProperty("TABCAMPO6","Visible", 1 );
      }
      else
      {
         gx.fn.setCtrlProperty("TABCAMPO6","Visible", 0 );
      }
      if ( this.AV30NomeCampo1Integer != "" )
      {
         gx.fn.setCtrlProperty("TABCAMPO7","Visible", 1 );
      }
      else
      {
         gx.fn.setCtrlProperty("TABCAMPO7","Visible", 0 );
      }
      if ( this.AV33NomeCampo2Integer != "" )
      {
         gx.fn.setCtrlProperty("TABCAMPO8","Visible", 1 );
      }
      else
      {
         gx.fn.setCtrlProperty("TABCAMPO8","Visible", 0 );
      }
      if ( this.AV36NomeCampo3Integer != "" )
      {
         gx.fn.setCtrlProperty("TABCAMPO9","Visible", 1 );
      }
      else
      {
         gx.fn.setCtrlProperty("TABCAMPO9","Visible", 0 );
      }
      if ( this.AV39NomeCampo4Integer != "" )
      {
         gx.fn.setCtrlProperty("TABCAMPO10","Visible", 1 );
      }
      else
      {
         gx.fn.setCtrlProperty("TABCAMPO10","Visible", 0 );
      }
      if ( this.AV42NomeCampo5Integer != "" )
      {
         gx.fn.setCtrlProperty("TABCAMPO11","Visible", 1 );
      }
      else
      {
         gx.fn.setCtrlProperty("TABCAMPO11","Visible", 0 );
      }
      if ( this.AV45NomeCampo6Integer != "" )
      {
         gx.fn.setCtrlProperty("TABCAMPO12","Visible", 1 );
      }
      else
      {
         gx.fn.setCtrlProperty("TABCAMPO12","Visible", 0 );
      }
      if ( this.AV47NomeCampo7Integer != "" )
      {
         gx.fn.setCtrlProperty("TABCAMPO13","Visible", 1 );
      }
      else
      {
         gx.fn.setCtrlProperty("TABCAMPO13","Visible", 0 );
      }
      if ( this.AV31NomeCampo1String != "" )
      {
         gx.fn.setCtrlProperty("TABCAMPO14","Visible", 1 );
      }
      else
      {
         gx.fn.setCtrlProperty("TABCAMPO14","Visible", 0 );
      }
      if ( this.AV34NomeCampo2String != "" )
      {
         gx.fn.setCtrlProperty("TABCAMPO15","Visible", 1 );
      }
      else
      {
         gx.fn.setCtrlProperty("TABCAMPO15","Visible", 0 );
      }
      if ( this.AV37NomeCampo3String != "" )
      {
         gx.fn.setCtrlProperty("TABCAMPO16","Visible", 1 );
      }
      else
      {
         gx.fn.setCtrlProperty("TABCAMPO16","Visible", 0 );
      }
      if ( this.AV40NomeCampo4String != "" )
      {
         gx.fn.setCtrlProperty("TABCAMPO17","Visible", 1 );
      }
      else
      {
         gx.fn.setCtrlProperty("TABCAMPO17","Visible", 0 );
      }
      if ( this.AV43NomeCampo5String != "" )
      {
         gx.fn.setCtrlProperty("TABCAMPO18","Visible", 1 );
      }
      else
      {
         gx.fn.setCtrlProperty("TABCAMPO18","Visible", 0 );
      }
      if ( this.AV46NomeCampo6String != "" )
      {
         gx.fn.setCtrlProperty("TABCAMPO19","Visible", 1 );
      }
      else
      {
         gx.fn.setCtrlProperty("TABCAMPO19","Visible", 0 );
      }
      if ( this.AV48NomeCampo7String != "" )
      {
         gx.fn.setCtrlProperty("TABCAMPO20","Visible", 1 );
      }
      else
      {
         gx.fn.setCtrlProperty("TABCAMPO20","Visible", 0 );
      }
      if ( this.AV79NomeCampo1Numerico != "" )
      {
         gx.fn.setCtrlProperty("TABCAMPO21","Visible", 1 );
      }
      else
      {
         gx.fn.setCtrlProperty("TABCAMPO21","Visible", 0 );
      }
      if ( this.AV80NomeCampo2Numerico != "" )
      {
         gx.fn.setCtrlProperty("TABCAMPO22","Visible", 1 );
      }
      else
      {
         gx.fn.setCtrlProperty("TABCAMPO22","Visible", 0 );
      }
      if ( this.AV81NomeCampo3Numerico != "" )
      {
         gx.fn.setCtrlProperty("TABCAMPO23","Visible", 1 );
      }
      else
      {
         gx.fn.setCtrlProperty("TABCAMPO23","Visible", 0 );
      }
      if ( this.AV82NomeCampo4Numerico != "" )
      {
         gx.fn.setCtrlProperty("TABCAMPO24","Visible", 1 );
      }
      else
      {
         gx.fn.setCtrlProperty("TABCAMPO24","Visible", 0 );
      }
   };
   this.e1220d2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1420d2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1620d2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,6,9,12,14,15,16,19,21,22,23,26,28,29,30,33,35,36,37,40,42,43,44,47,49,50,51,54,56,57,58,61,63,64,65,68,70,71,72,75,77,78,79,82,84,85,86,89,91,92,93,96,98,99,100,103,105,106,107,110,112,113,114,117,119,120,121,124,126,127,128,131,133,134,135,138,140,141,142,145,147,148,149,152,154,155,156,159,161,162,163,166,168,169,170,173,175,176,177,185];
   this.GXLastCtrlId =185;
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[6]={fld:"TABLE4",grid:0};
   GXValidFnc[9]={fld:"TABCAMPO1",grid:0};
   GXValidFnc[12]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMECAMPO1DATA",gxz:"ZV29NomeCampo1Data",gxold:"OV29NomeCampo1Data",gxvar:"AV29NomeCampo1Data",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29NomeCampo1Data=Value},v2z:function(Value){gx.O.ZV29NomeCampo1Data=Value},v2c:function(){gx.fn.setControlValue("vNOMECAMPO1DATA",gx.O.AV29NomeCampo1Data,0)},c2v:function(){gx.O.AV29NomeCampo1Data=this.val()},val:function(){return gx.fn.getControlValue("vNOMECAMPO1DATA")},nac:gx.falseFn};
   GXValidFnc[14]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTEUDOCAMPO1DATA",gxz:"ZV6ConteudoCampo1Data",gxold:"OV6ConteudoCampo1Data",gxvar:"AV6ConteudoCampo1Data",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6ConteudoCampo1Data=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV6ConteudoCampo1Data=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCONTEUDOCAMPO1DATA",gx.O.AV6ConteudoCampo1Data,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV6ConteudoCampo1Data=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCONTEUDOCAMPO1DATA")},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[15]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALIDACAMPO1DATA",gxz:"ZV55ValidaCampo1Data",gxold:"OV55ValidaCampo1Data",gxvar:"AV55ValidaCampo1Data",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV55ValidaCampo1Data=Value},v2z:function(Value){gx.O.ZV55ValidaCampo1Data=Value},v2c:function(){gx.fn.setControlValue("vVALIDACAMPO1DATA",gx.O.AV55ValidaCampo1Data,0)},c2v:function(){gx.O.AV55ValidaCampo1Data=this.val()},val:function(){return gx.fn.getControlValue("vVALIDACAMPO1DATA")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TABCAMPO2",grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMECAMPO2DATA",gxz:"ZV32NomeCampo2Data",gxold:"OV32NomeCampo2Data",gxvar:"AV32NomeCampo2Data",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32NomeCampo2Data=Value},v2z:function(Value){gx.O.ZV32NomeCampo2Data=Value},v2c:function(){gx.fn.setControlValue("vNOMECAMPO2DATA",gx.O.AV32NomeCampo2Data,0)},c2v:function(){gx.O.AV32NomeCampo2Data=this.val()},val:function(){return gx.fn.getControlValue("vNOMECAMPO2DATA")},nac:gx.falseFn};
   GXValidFnc[21]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTEUDOCAMPO2DATA",gxz:"ZV9ConteudoCampo2Data",gxold:"OV9ConteudoCampo2Data",gxvar:"AV9ConteudoCampo2Data",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9ConteudoCampo2Data=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV9ConteudoCampo2Data=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCONTEUDOCAMPO2DATA",gx.O.AV9ConteudoCampo2Data,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV9ConteudoCampo2Data=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCONTEUDOCAMPO2DATA")},nac:gx.falseFn};
   this.declareDomainHdlr( 21 , function() {
   });
   GXValidFnc[22]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALIDACAMPO2DATA",gxz:"ZV56ValidaCampo2Data",gxold:"OV56ValidaCampo2Data",gxvar:"AV56ValidaCampo2Data",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV56ValidaCampo2Data=Value},v2z:function(Value){gx.O.ZV56ValidaCampo2Data=Value},v2c:function(){gx.fn.setControlValue("vVALIDACAMPO2DATA",gx.O.AV56ValidaCampo2Data,0)},c2v:function(){gx.O.AV56ValidaCampo2Data=this.val()},val:function(){return gx.fn.getControlValue("vVALIDACAMPO2DATA")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TABCAMPO3",grid:0};
   GXValidFnc[26]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMECAMPO3DATA",gxz:"ZV35NomeCampo3Data",gxold:"OV35NomeCampo3Data",gxvar:"AV35NomeCampo3Data",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35NomeCampo3Data=Value},v2z:function(Value){gx.O.ZV35NomeCampo3Data=Value},v2c:function(){gx.fn.setControlValue("vNOMECAMPO3DATA",gx.O.AV35NomeCampo3Data,0)},c2v:function(){gx.O.AV35NomeCampo3Data=this.val()},val:function(){return gx.fn.getControlValue("vNOMECAMPO3DATA")},nac:gx.falseFn};
   GXValidFnc[28]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTEUDOCAMPO3DATA",gxz:"ZV12ConteudoCampo3Data",gxold:"OV12ConteudoCampo3Data",gxvar:"AV12ConteudoCampo3Data",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12ConteudoCampo3Data=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV12ConteudoCampo3Data=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCONTEUDOCAMPO3DATA",gx.O.AV12ConteudoCampo3Data,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV12ConteudoCampo3Data=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCONTEUDOCAMPO3DATA")},nac:gx.falseFn};
   this.declareDomainHdlr( 28 , function() {
   });
   GXValidFnc[29]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALIDACAMPO3DATA",gxz:"ZV57ValidaCampo3Data",gxold:"OV57ValidaCampo3Data",gxvar:"AV57ValidaCampo3Data",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV57ValidaCampo3Data=Value},v2z:function(Value){gx.O.ZV57ValidaCampo3Data=Value},v2c:function(){gx.fn.setControlValue("vVALIDACAMPO3DATA",gx.O.AV57ValidaCampo3Data,0)},c2v:function(){gx.O.AV57ValidaCampo3Data=this.val()},val:function(){return gx.fn.getControlValue("vVALIDACAMPO3DATA")},nac:gx.falseFn};
   GXValidFnc[30]={fld:"TABCAMPO4",grid:0};
   GXValidFnc[33]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMECAMPO4DATA",gxz:"ZV38NomeCampo4Data",gxold:"OV38NomeCampo4Data",gxvar:"AV38NomeCampo4Data",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38NomeCampo4Data=Value},v2z:function(Value){gx.O.ZV38NomeCampo4Data=Value},v2c:function(){gx.fn.setControlValue("vNOMECAMPO4DATA",gx.O.AV38NomeCampo4Data,0)},c2v:function(){gx.O.AV38NomeCampo4Data=this.val()},val:function(){return gx.fn.getControlValue("vNOMECAMPO4DATA")},nac:gx.falseFn};
   GXValidFnc[35]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTEUDOCAMPO4DATA",gxz:"ZV15ConteudoCampo4Data",gxold:"OV15ConteudoCampo4Data",gxvar:"AV15ConteudoCampo4Data",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15ConteudoCampo4Data=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV15ConteudoCampo4Data=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCONTEUDOCAMPO4DATA",gx.O.AV15ConteudoCampo4Data,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV15ConteudoCampo4Data=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCONTEUDOCAMPO4DATA")},nac:gx.falseFn};
   this.declareDomainHdlr( 35 , function() {
   });
   GXValidFnc[36]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALIDACAMPO4DATA",gxz:"ZV58ValidaCampo4Data",gxold:"OV58ValidaCampo4Data",gxvar:"AV58ValidaCampo4Data",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV58ValidaCampo4Data=Value},v2z:function(Value){gx.O.ZV58ValidaCampo4Data=Value},v2c:function(){gx.fn.setControlValue("vVALIDACAMPO4DATA",gx.O.AV58ValidaCampo4Data,0)},c2v:function(){gx.O.AV58ValidaCampo4Data=this.val()},val:function(){return gx.fn.getControlValue("vVALIDACAMPO4DATA")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TABCAMPO5",grid:0};
   GXValidFnc[40]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMECAMPO5DATA",gxz:"ZV41NomeCampo5Data",gxold:"OV41NomeCampo5Data",gxvar:"AV41NomeCampo5Data",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41NomeCampo5Data=Value},v2z:function(Value){gx.O.ZV41NomeCampo5Data=Value},v2c:function(){gx.fn.setControlValue("vNOMECAMPO5DATA",gx.O.AV41NomeCampo5Data,0)},c2v:function(){gx.O.AV41NomeCampo5Data=this.val()},val:function(){return gx.fn.getControlValue("vNOMECAMPO5DATA")},nac:gx.falseFn};
   GXValidFnc[42]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTEUDOCAMPO5DATA",gxz:"ZV18ConteudoCampo5Data",gxold:"OV18ConteudoCampo5Data",gxvar:"AV18ConteudoCampo5Data",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18ConteudoCampo5Data=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV18ConteudoCampo5Data=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCONTEUDOCAMPO5DATA",gx.O.AV18ConteudoCampo5Data,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV18ConteudoCampo5Data=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCONTEUDOCAMPO5DATA")},nac:gx.falseFn};
   this.declareDomainHdlr( 42 , function() {
   });
   GXValidFnc[43]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALIDACAMPO5DATA",gxz:"ZV59ValidaCampo5Data",gxold:"OV59ValidaCampo5Data",gxvar:"AV59ValidaCampo5Data",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV59ValidaCampo5Data=Value},v2z:function(Value){gx.O.ZV59ValidaCampo5Data=Value},v2c:function(){gx.fn.setControlValue("vVALIDACAMPO5DATA",gx.O.AV59ValidaCampo5Data,0)},c2v:function(){gx.O.AV59ValidaCampo5Data=this.val()},val:function(){return gx.fn.getControlValue("vVALIDACAMPO5DATA")},nac:gx.falseFn};
   GXValidFnc[44]={fld:"TABCAMPO6",grid:0};
   GXValidFnc[47]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMECAMPO6DATA",gxz:"ZV44NomeCampo6Data",gxold:"OV44NomeCampo6Data",gxvar:"AV44NomeCampo6Data",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV44NomeCampo6Data=Value},v2z:function(Value){gx.O.ZV44NomeCampo6Data=Value},v2c:function(){gx.fn.setControlValue("vNOMECAMPO6DATA",gx.O.AV44NomeCampo6Data,0)},c2v:function(){gx.O.AV44NomeCampo6Data=this.val()},val:function(){return gx.fn.getControlValue("vNOMECAMPO6DATA")},nac:gx.falseFn};
   GXValidFnc[49]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTEUDOCAMPO6DATA",gxz:"ZV21ConteudoCampo6Data",gxold:"OV21ConteudoCampo6Data",gxvar:"AV21ConteudoCampo6Data",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21ConteudoCampo6Data=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV21ConteudoCampo6Data=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCONTEUDOCAMPO6DATA",gx.O.AV21ConteudoCampo6Data,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV21ConteudoCampo6Data=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCONTEUDOCAMPO6DATA")},nac:gx.falseFn};
   this.declareDomainHdlr( 49 , function() {
   });
   GXValidFnc[50]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALIDACAMPO6DATA",gxz:"ZV60ValidaCampo6Data",gxold:"OV60ValidaCampo6Data",gxvar:"AV60ValidaCampo6Data",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV60ValidaCampo6Data=Value},v2z:function(Value){gx.O.ZV60ValidaCampo6Data=Value},v2c:function(){gx.fn.setControlValue("vVALIDACAMPO6DATA",gx.O.AV60ValidaCampo6Data,0)},c2v:function(){gx.O.AV60ValidaCampo6Data=this.val()},val:function(){return gx.fn.getControlValue("vVALIDACAMPO6DATA")},nac:gx.falseFn};
   GXValidFnc[51]={fld:"TABCAMPO7",grid:0};
   GXValidFnc[54]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMECAMPO1INTEGER",gxz:"ZV30NomeCampo1Integer",gxold:"OV30NomeCampo1Integer",gxvar:"AV30NomeCampo1Integer",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30NomeCampo1Integer=Value},v2z:function(Value){gx.O.ZV30NomeCampo1Integer=Value},v2c:function(){gx.fn.setControlValue("vNOMECAMPO1INTEGER",gx.O.AV30NomeCampo1Integer,0)},c2v:function(){gx.O.AV30NomeCampo1Integer=this.val()},val:function(){return gx.fn.getControlValue("vNOMECAMPO1INTEGER")},nac:gx.falseFn};
   GXValidFnc[56]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTEUDOCAMPO1INTEGER",gxz:"ZV7ConteudoCampo1Integer",gxold:"OV7ConteudoCampo1Integer",gxvar:"AV7ConteudoCampo1Integer",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7ConteudoCampo1Integer=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7ConteudoCampo1Integer=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTEUDOCAMPO1INTEGER",gx.O.AV7ConteudoCampo1Integer,0)},c2v:function(){gx.O.AV7ConteudoCampo1Integer=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTEUDOCAMPO1INTEGER",'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALIDACAMPO1INTEGER",gxz:"ZV61ValidaCampo1Integer",gxold:"OV61ValidaCampo1Integer",gxvar:"AV61ValidaCampo1Integer",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV61ValidaCampo1Integer=Value},v2z:function(Value){gx.O.ZV61ValidaCampo1Integer=Value},v2c:function(){gx.fn.setControlValue("vVALIDACAMPO1INTEGER",gx.O.AV61ValidaCampo1Integer,0)},c2v:function(){gx.O.AV61ValidaCampo1Integer=this.val()},val:function(){return gx.fn.getControlValue("vVALIDACAMPO1INTEGER")},nac:gx.falseFn};
   GXValidFnc[58]={fld:"TABCAMPO8",grid:0};
   GXValidFnc[61]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMECAMPO2INTEGER",gxz:"ZV33NomeCampo2Integer",gxold:"OV33NomeCampo2Integer",gxvar:"AV33NomeCampo2Integer",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33NomeCampo2Integer=Value},v2z:function(Value){gx.O.ZV33NomeCampo2Integer=Value},v2c:function(){gx.fn.setControlValue("vNOMECAMPO2INTEGER",gx.O.AV33NomeCampo2Integer,0)},c2v:function(){gx.O.AV33NomeCampo2Integer=this.val()},val:function(){return gx.fn.getControlValue("vNOMECAMPO2INTEGER")},nac:gx.falseFn};
   GXValidFnc[63]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTEUDOCAMPO2INTEGER",gxz:"ZV10ConteudoCampo2Integer",gxold:"OV10ConteudoCampo2Integer",gxvar:"AV10ConteudoCampo2Integer",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10ConteudoCampo2Integer=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV10ConteudoCampo2Integer=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTEUDOCAMPO2INTEGER",gx.O.AV10ConteudoCampo2Integer,0)},c2v:function(){gx.O.AV10ConteudoCampo2Integer=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTEUDOCAMPO2INTEGER",'.')},nac:gx.falseFn};
   GXValidFnc[64]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALIDACAMPO2INTEGER",gxz:"ZV62ValidaCampo2Integer",gxold:"OV62ValidaCampo2Integer",gxvar:"AV62ValidaCampo2Integer",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV62ValidaCampo2Integer=Value},v2z:function(Value){gx.O.ZV62ValidaCampo2Integer=Value},v2c:function(){gx.fn.setControlValue("vVALIDACAMPO2INTEGER",gx.O.AV62ValidaCampo2Integer,0)},c2v:function(){gx.O.AV62ValidaCampo2Integer=this.val()},val:function(){return gx.fn.getControlValue("vVALIDACAMPO2INTEGER")},nac:gx.falseFn};
   GXValidFnc[65]={fld:"TABCAMPO9",grid:0};
   GXValidFnc[68]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMECAMPO3INTEGER",gxz:"ZV36NomeCampo3Integer",gxold:"OV36NomeCampo3Integer",gxvar:"AV36NomeCampo3Integer",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36NomeCampo3Integer=Value},v2z:function(Value){gx.O.ZV36NomeCampo3Integer=Value},v2c:function(){gx.fn.setControlValue("vNOMECAMPO3INTEGER",gx.O.AV36NomeCampo3Integer,0)},c2v:function(){gx.O.AV36NomeCampo3Integer=this.val()},val:function(){return gx.fn.getControlValue("vNOMECAMPO3INTEGER")},nac:gx.falseFn};
   GXValidFnc[70]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTEUDOCAMPO3INTEGER",gxz:"ZV13ConteudoCampo3Integer",gxold:"OV13ConteudoCampo3Integer",gxvar:"AV13ConteudoCampo3Integer",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13ConteudoCampo3Integer=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV13ConteudoCampo3Integer=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTEUDOCAMPO3INTEGER",gx.O.AV13ConteudoCampo3Integer,0)},c2v:function(){gx.O.AV13ConteudoCampo3Integer=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTEUDOCAMPO3INTEGER",'.')},nac:gx.falseFn};
   GXValidFnc[71]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALIDACAMPO3INTEGER",gxz:"ZV63ValidaCampo3Integer",gxold:"OV63ValidaCampo3Integer",gxvar:"AV63ValidaCampo3Integer",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV63ValidaCampo3Integer=Value},v2z:function(Value){gx.O.ZV63ValidaCampo3Integer=Value},v2c:function(){gx.fn.setControlValue("vVALIDACAMPO3INTEGER",gx.O.AV63ValidaCampo3Integer,0)},c2v:function(){gx.O.AV63ValidaCampo3Integer=this.val()},val:function(){return gx.fn.getControlValue("vVALIDACAMPO3INTEGER")},nac:gx.falseFn};
   GXValidFnc[72]={fld:"TABCAMPO10",grid:0};
   GXValidFnc[75]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMECAMPO4INTEGER",gxz:"ZV39NomeCampo4Integer",gxold:"OV39NomeCampo4Integer",gxvar:"AV39NomeCampo4Integer",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39NomeCampo4Integer=Value},v2z:function(Value){gx.O.ZV39NomeCampo4Integer=Value},v2c:function(){gx.fn.setControlValue("vNOMECAMPO4INTEGER",gx.O.AV39NomeCampo4Integer,0)},c2v:function(){gx.O.AV39NomeCampo4Integer=this.val()},val:function(){return gx.fn.getControlValue("vNOMECAMPO4INTEGER")},nac:gx.falseFn};
   GXValidFnc[77]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTEUDOCAMPO4INTEGER",gxz:"ZV16ConteudoCampo4Integer",gxold:"OV16ConteudoCampo4Integer",gxvar:"AV16ConteudoCampo4Integer",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16ConteudoCampo4Integer=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16ConteudoCampo4Integer=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTEUDOCAMPO4INTEGER",gx.O.AV16ConteudoCampo4Integer,0)},c2v:function(){gx.O.AV16ConteudoCampo4Integer=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTEUDOCAMPO4INTEGER",'.')},nac:gx.falseFn};
   GXValidFnc[78]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALIDACAMPO4INTEGER",gxz:"ZV64ValidaCampo4Integer",gxold:"OV64ValidaCampo4Integer",gxvar:"AV64ValidaCampo4Integer",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV64ValidaCampo4Integer=Value},v2z:function(Value){gx.O.ZV64ValidaCampo4Integer=Value},v2c:function(){gx.fn.setControlValue("vVALIDACAMPO4INTEGER",gx.O.AV64ValidaCampo4Integer,0)},c2v:function(){gx.O.AV64ValidaCampo4Integer=this.val()},val:function(){return gx.fn.getControlValue("vVALIDACAMPO4INTEGER")},nac:gx.falseFn};
   GXValidFnc[79]={fld:"TABCAMPO11",grid:0};
   GXValidFnc[82]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMECAMPO5INTEGER",gxz:"ZV42NomeCampo5Integer",gxold:"OV42NomeCampo5Integer",gxvar:"AV42NomeCampo5Integer",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42NomeCampo5Integer=Value},v2z:function(Value){gx.O.ZV42NomeCampo5Integer=Value},v2c:function(){gx.fn.setControlValue("vNOMECAMPO5INTEGER",gx.O.AV42NomeCampo5Integer,0)},c2v:function(){gx.O.AV42NomeCampo5Integer=this.val()},val:function(){return gx.fn.getControlValue("vNOMECAMPO5INTEGER")},nac:gx.falseFn};
   GXValidFnc[84]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTEUDOCAMPO5INTEGER",gxz:"ZV19ConteudoCampo5Integer",gxold:"OV19ConteudoCampo5Integer",gxvar:"AV19ConteudoCampo5Integer",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19ConteudoCampo5Integer=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19ConteudoCampo5Integer=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTEUDOCAMPO5INTEGER",gx.O.AV19ConteudoCampo5Integer,0)},c2v:function(){gx.O.AV19ConteudoCampo5Integer=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTEUDOCAMPO5INTEGER",'.')},nac:gx.falseFn};
   GXValidFnc[85]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALIDACAMPO5INTEGER",gxz:"ZV65ValidaCampo5Integer",gxold:"OV65ValidaCampo5Integer",gxvar:"AV65ValidaCampo5Integer",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV65ValidaCampo5Integer=Value},v2z:function(Value){gx.O.ZV65ValidaCampo5Integer=Value},v2c:function(){gx.fn.setControlValue("vVALIDACAMPO5INTEGER",gx.O.AV65ValidaCampo5Integer,0)},c2v:function(){gx.O.AV65ValidaCampo5Integer=this.val()},val:function(){return gx.fn.getControlValue("vVALIDACAMPO5INTEGER")},nac:gx.falseFn};
   GXValidFnc[86]={fld:"TABCAMPO12",grid:0};
   GXValidFnc[89]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMECAMPO6INTEGER",gxz:"ZV45NomeCampo6Integer",gxold:"OV45NomeCampo6Integer",gxvar:"AV45NomeCampo6Integer",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV45NomeCampo6Integer=Value},v2z:function(Value){gx.O.ZV45NomeCampo6Integer=Value},v2c:function(){gx.fn.setControlValue("vNOMECAMPO6INTEGER",gx.O.AV45NomeCampo6Integer,0)},c2v:function(){gx.O.AV45NomeCampo6Integer=this.val()},val:function(){return gx.fn.getControlValue("vNOMECAMPO6INTEGER")},nac:gx.falseFn};
   GXValidFnc[91]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTEUDOCAMPO6INTEGER",gxz:"ZV22ConteudoCampo6Integer",gxold:"OV22ConteudoCampo6Integer",gxvar:"AV22ConteudoCampo6Integer",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22ConteudoCampo6Integer=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22ConteudoCampo6Integer=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTEUDOCAMPO6INTEGER",gx.O.AV22ConteudoCampo6Integer,0)},c2v:function(){gx.O.AV22ConteudoCampo6Integer=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTEUDOCAMPO6INTEGER",'.')},nac:gx.falseFn};
   GXValidFnc[92]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALIDACAMPO6INTEGER",gxz:"ZV66ValidaCampo6Integer",gxold:"OV66ValidaCampo6Integer",gxvar:"AV66ValidaCampo6Integer",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV66ValidaCampo6Integer=Value},v2z:function(Value){gx.O.ZV66ValidaCampo6Integer=Value},v2c:function(){gx.fn.setControlValue("vVALIDACAMPO6INTEGER",gx.O.AV66ValidaCampo6Integer,0)},c2v:function(){gx.O.AV66ValidaCampo6Integer=this.val()},val:function(){return gx.fn.getControlValue("vVALIDACAMPO6INTEGER")},nac:gx.falseFn};
   GXValidFnc[93]={fld:"TABCAMPO13",grid:0};
   GXValidFnc[96]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMECAMPO7INTEGER",gxz:"ZV47NomeCampo7Integer",gxold:"OV47NomeCampo7Integer",gxvar:"AV47NomeCampo7Integer",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV47NomeCampo7Integer=Value},v2z:function(Value){gx.O.ZV47NomeCampo7Integer=Value},v2c:function(){gx.fn.setControlValue("vNOMECAMPO7INTEGER",gx.O.AV47NomeCampo7Integer,0)},c2v:function(){gx.O.AV47NomeCampo7Integer=this.val()},val:function(){return gx.fn.getControlValue("vNOMECAMPO7INTEGER")},nac:gx.falseFn};
   GXValidFnc[98]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTEUDOCAMPO7INTEGER",gxz:"ZV24ConteudoCampo7Integer",gxold:"OV24ConteudoCampo7Integer",gxvar:"AV24ConteudoCampo7Integer",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24ConteudoCampo7Integer=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24ConteudoCampo7Integer=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTEUDOCAMPO7INTEGER",gx.O.AV24ConteudoCampo7Integer,0)},c2v:function(){gx.O.AV24ConteudoCampo7Integer=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTEUDOCAMPO7INTEGER",'.')},nac:gx.falseFn};
   GXValidFnc[99]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALIDACAMPO7INTEGER",gxz:"ZV67ValidaCampo7Integer",gxold:"OV67ValidaCampo7Integer",gxvar:"AV67ValidaCampo7Integer",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV67ValidaCampo7Integer=Value},v2z:function(Value){gx.O.ZV67ValidaCampo7Integer=Value},v2c:function(){gx.fn.setControlValue("vVALIDACAMPO7INTEGER",gx.O.AV67ValidaCampo7Integer,0)},c2v:function(){gx.O.AV67ValidaCampo7Integer=this.val()},val:function(){return gx.fn.getControlValue("vVALIDACAMPO7INTEGER")},nac:gx.falseFn};
   GXValidFnc[100]={fld:"TABCAMPO14",grid:0};
   GXValidFnc[103]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMECAMPO1STRING",gxz:"ZV31NomeCampo1String",gxold:"OV31NomeCampo1String",gxvar:"AV31NomeCampo1String",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31NomeCampo1String=Value},v2z:function(Value){gx.O.ZV31NomeCampo1String=Value},v2c:function(){gx.fn.setControlValue("vNOMECAMPO1STRING",gx.O.AV31NomeCampo1String,0)},c2v:function(){gx.O.AV31NomeCampo1String=this.val()},val:function(){return gx.fn.getControlValue("vNOMECAMPO1STRING")},nac:gx.falseFn};
   GXValidFnc[105]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTEUDOCAMPO1STRING",gxz:"ZV8ConteudoCampo1String",gxold:"OV8ConteudoCampo1String",gxvar:"AV8ConteudoCampo1String",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8ConteudoCampo1String=Value},v2z:function(Value){gx.O.ZV8ConteudoCampo1String=Value},v2c:function(){gx.fn.setControlValue("vCONTEUDOCAMPO1STRING",gx.O.AV8ConteudoCampo1String,0)},c2v:function(){gx.O.AV8ConteudoCampo1String=this.val()},val:function(){return gx.fn.getControlValue("vCONTEUDOCAMPO1STRING")},nac:gx.falseFn};
   GXValidFnc[106]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALIDACAMPO1STRING",gxz:"ZV68ValidaCampo1String",gxold:"OV68ValidaCampo1String",gxvar:"AV68ValidaCampo1String",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV68ValidaCampo1String=Value},v2z:function(Value){gx.O.ZV68ValidaCampo1String=Value},v2c:function(){gx.fn.setControlValue("vVALIDACAMPO1STRING",gx.O.AV68ValidaCampo1String,0)},c2v:function(){gx.O.AV68ValidaCampo1String=this.val()},val:function(){return gx.fn.getControlValue("vVALIDACAMPO1STRING")},nac:gx.falseFn};
   GXValidFnc[107]={fld:"TABCAMPO15",grid:0};
   GXValidFnc[110]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMECAMPO2STRING",gxz:"ZV34NomeCampo2String",gxold:"OV34NomeCampo2String",gxvar:"AV34NomeCampo2String",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34NomeCampo2String=Value},v2z:function(Value){gx.O.ZV34NomeCampo2String=Value},v2c:function(){gx.fn.setControlValue("vNOMECAMPO2STRING",gx.O.AV34NomeCampo2String,0)},c2v:function(){gx.O.AV34NomeCampo2String=this.val()},val:function(){return gx.fn.getControlValue("vNOMECAMPO2STRING")},nac:gx.falseFn};
   GXValidFnc[112]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTEUDOCAMPO2STRING",gxz:"ZV11ConteudoCampo2String",gxold:"OV11ConteudoCampo2String",gxvar:"AV11ConteudoCampo2String",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11ConteudoCampo2String=Value},v2z:function(Value){gx.O.ZV11ConteudoCampo2String=Value},v2c:function(){gx.fn.setControlValue("vCONTEUDOCAMPO2STRING",gx.O.AV11ConteudoCampo2String,0)},c2v:function(){gx.O.AV11ConteudoCampo2String=this.val()},val:function(){return gx.fn.getControlValue("vCONTEUDOCAMPO2STRING")},nac:gx.falseFn};
   GXValidFnc[113]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALIDACAMPO2STRING",gxz:"ZV69ValidaCampo2String",gxold:"OV69ValidaCampo2String",gxvar:"AV69ValidaCampo2String",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV69ValidaCampo2String=Value},v2z:function(Value){gx.O.ZV69ValidaCampo2String=Value},v2c:function(){gx.fn.setControlValue("vVALIDACAMPO2STRING",gx.O.AV69ValidaCampo2String,0)},c2v:function(){gx.O.AV69ValidaCampo2String=this.val()},val:function(){return gx.fn.getControlValue("vVALIDACAMPO2STRING")},nac:gx.falseFn};
   GXValidFnc[114]={fld:"TABCAMPO16",grid:0};
   GXValidFnc[117]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMECAMPO3STRING",gxz:"ZV37NomeCampo3String",gxold:"OV37NomeCampo3String",gxvar:"AV37NomeCampo3String",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37NomeCampo3String=Value},v2z:function(Value){gx.O.ZV37NomeCampo3String=Value},v2c:function(){gx.fn.setControlValue("vNOMECAMPO3STRING",gx.O.AV37NomeCampo3String,0)},c2v:function(){gx.O.AV37NomeCampo3String=this.val()},val:function(){return gx.fn.getControlValue("vNOMECAMPO3STRING")},nac:gx.falseFn};
   GXValidFnc[119]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTEUDOCAMPO3STRING",gxz:"ZV14ConteudoCampo3String",gxold:"OV14ConteudoCampo3String",gxvar:"AV14ConteudoCampo3String",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14ConteudoCampo3String=Value},v2z:function(Value){gx.O.ZV14ConteudoCampo3String=Value},v2c:function(){gx.fn.setControlValue("vCONTEUDOCAMPO3STRING",gx.O.AV14ConteudoCampo3String,0)},c2v:function(){gx.O.AV14ConteudoCampo3String=this.val()},val:function(){return gx.fn.getControlValue("vCONTEUDOCAMPO3STRING")},nac:gx.falseFn};
   GXValidFnc[120]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALIDACAMPO3STRING",gxz:"ZV70ValidaCampo3String",gxold:"OV70ValidaCampo3String",gxvar:"AV70ValidaCampo3String",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV70ValidaCampo3String=Value},v2z:function(Value){gx.O.ZV70ValidaCampo3String=Value},v2c:function(){gx.fn.setControlValue("vVALIDACAMPO3STRING",gx.O.AV70ValidaCampo3String,0)},c2v:function(){gx.O.AV70ValidaCampo3String=this.val()},val:function(){return gx.fn.getControlValue("vVALIDACAMPO3STRING")},nac:gx.falseFn};
   GXValidFnc[121]={fld:"TABCAMPO17",grid:0};
   GXValidFnc[124]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMECAMPO4STRING",gxz:"ZV40NomeCampo4String",gxold:"OV40NomeCampo4String",gxvar:"AV40NomeCampo4String",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40NomeCampo4String=Value},v2z:function(Value){gx.O.ZV40NomeCampo4String=Value},v2c:function(){gx.fn.setControlValue("vNOMECAMPO4STRING",gx.O.AV40NomeCampo4String,0)},c2v:function(){gx.O.AV40NomeCampo4String=this.val()},val:function(){return gx.fn.getControlValue("vNOMECAMPO4STRING")},nac:gx.falseFn};
   GXValidFnc[126]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTEUDOCAMPO4STRING",gxz:"ZV17ConteudoCampo4String",gxold:"OV17ConteudoCampo4String",gxvar:"AV17ConteudoCampo4String",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17ConteudoCampo4String=Value},v2z:function(Value){gx.O.ZV17ConteudoCampo4String=Value},v2c:function(){gx.fn.setControlValue("vCONTEUDOCAMPO4STRING",gx.O.AV17ConteudoCampo4String,0)},c2v:function(){gx.O.AV17ConteudoCampo4String=this.val()},val:function(){return gx.fn.getControlValue("vCONTEUDOCAMPO4STRING")},nac:gx.falseFn};
   GXValidFnc[127]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALIDACAMPO4STRING",gxz:"ZV71ValidaCampo4String",gxold:"OV71ValidaCampo4String",gxvar:"AV71ValidaCampo4String",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV71ValidaCampo4String=Value},v2z:function(Value){gx.O.ZV71ValidaCampo4String=Value},v2c:function(){gx.fn.setControlValue("vVALIDACAMPO4STRING",gx.O.AV71ValidaCampo4String,0)},c2v:function(){gx.O.AV71ValidaCampo4String=this.val()},val:function(){return gx.fn.getControlValue("vVALIDACAMPO4STRING")},nac:gx.falseFn};
   GXValidFnc[128]={fld:"TABCAMPO18",grid:0};
   GXValidFnc[131]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMECAMPO5STRING",gxz:"ZV43NomeCampo5String",gxold:"OV43NomeCampo5String",gxvar:"AV43NomeCampo5String",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV43NomeCampo5String=Value},v2z:function(Value){gx.O.ZV43NomeCampo5String=Value},v2c:function(){gx.fn.setControlValue("vNOMECAMPO5STRING",gx.O.AV43NomeCampo5String,0)},c2v:function(){gx.O.AV43NomeCampo5String=this.val()},val:function(){return gx.fn.getControlValue("vNOMECAMPO5STRING")},nac:gx.falseFn};
   GXValidFnc[133]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTEUDOCAMPO5STRING",gxz:"ZV20ConteudoCampo5String",gxold:"OV20ConteudoCampo5String",gxvar:"AV20ConteudoCampo5String",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20ConteudoCampo5String=Value},v2z:function(Value){gx.O.ZV20ConteudoCampo5String=Value},v2c:function(){gx.fn.setControlValue("vCONTEUDOCAMPO5STRING",gx.O.AV20ConteudoCampo5String,0)},c2v:function(){gx.O.AV20ConteudoCampo5String=this.val()},val:function(){return gx.fn.getControlValue("vCONTEUDOCAMPO5STRING")},nac:gx.falseFn};
   GXValidFnc[134]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALIDACAMPO5STRING",gxz:"ZV72ValidaCampo5String",gxold:"OV72ValidaCampo5String",gxvar:"AV72ValidaCampo5String",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV72ValidaCampo5String=Value},v2z:function(Value){gx.O.ZV72ValidaCampo5String=Value},v2c:function(){gx.fn.setControlValue("vVALIDACAMPO5STRING",gx.O.AV72ValidaCampo5String,0)},c2v:function(){gx.O.AV72ValidaCampo5String=this.val()},val:function(){return gx.fn.getControlValue("vVALIDACAMPO5STRING")},nac:gx.falseFn};
   GXValidFnc[135]={fld:"TABCAMPO19",grid:0};
   GXValidFnc[138]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMECAMPO6STRING",gxz:"ZV46NomeCampo6String",gxold:"OV46NomeCampo6String",gxvar:"AV46NomeCampo6String",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV46NomeCampo6String=Value},v2z:function(Value){gx.O.ZV46NomeCampo6String=Value},v2c:function(){gx.fn.setControlValue("vNOMECAMPO6STRING",gx.O.AV46NomeCampo6String,0)},c2v:function(){gx.O.AV46NomeCampo6String=this.val()},val:function(){return gx.fn.getControlValue("vNOMECAMPO6STRING")},nac:gx.falseFn};
   GXValidFnc[140]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTEUDOCAMPO6STRING",gxz:"ZV23ConteudoCampo6String",gxold:"OV23ConteudoCampo6String",gxvar:"AV23ConteudoCampo6String",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23ConteudoCampo6String=Value},v2z:function(Value){gx.O.ZV23ConteudoCampo6String=Value},v2c:function(){gx.fn.setControlValue("vCONTEUDOCAMPO6STRING",gx.O.AV23ConteudoCampo6String,0)},c2v:function(){gx.O.AV23ConteudoCampo6String=this.val()},val:function(){return gx.fn.getControlValue("vCONTEUDOCAMPO6STRING")},nac:gx.falseFn};
   GXValidFnc[141]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALIDACAMPO6STRING",gxz:"ZV73ValidaCampo6String",gxold:"OV73ValidaCampo6String",gxvar:"AV73ValidaCampo6String",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV73ValidaCampo6String=Value},v2z:function(Value){gx.O.ZV73ValidaCampo6String=Value},v2c:function(){gx.fn.setControlValue("vVALIDACAMPO6STRING",gx.O.AV73ValidaCampo6String,0)},c2v:function(){gx.O.AV73ValidaCampo6String=this.val()},val:function(){return gx.fn.getControlValue("vVALIDACAMPO6STRING")},nac:gx.falseFn};
   GXValidFnc[142]={fld:"TABCAMPO20",grid:0};
   GXValidFnc[145]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMECAMPO7STRING",gxz:"ZV48NomeCampo7String",gxold:"OV48NomeCampo7String",gxvar:"AV48NomeCampo7String",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV48NomeCampo7String=Value},v2z:function(Value){gx.O.ZV48NomeCampo7String=Value},v2c:function(){gx.fn.setControlValue("vNOMECAMPO7STRING",gx.O.AV48NomeCampo7String,0)},c2v:function(){gx.O.AV48NomeCampo7String=this.val()},val:function(){return gx.fn.getControlValue("vNOMECAMPO7STRING")},nac:gx.falseFn};
   GXValidFnc[147]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTEUDOCAMPO7STRING",gxz:"ZV25ConteudoCampo7String",gxold:"OV25ConteudoCampo7String",gxvar:"AV25ConteudoCampo7String",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25ConteudoCampo7String=Value},v2z:function(Value){gx.O.ZV25ConteudoCampo7String=Value},v2c:function(){gx.fn.setControlValue("vCONTEUDOCAMPO7STRING",gx.O.AV25ConteudoCampo7String,0)},c2v:function(){gx.O.AV25ConteudoCampo7String=this.val()},val:function(){return gx.fn.getControlValue("vCONTEUDOCAMPO7STRING")},nac:gx.falseFn};
   GXValidFnc[148]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALIDACAMPO7STRING",gxz:"ZV74ValidaCampo7String",gxold:"OV74ValidaCampo7String",gxvar:"AV74ValidaCampo7String",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV74ValidaCampo7String=Value},v2z:function(Value){gx.O.ZV74ValidaCampo7String=Value},v2c:function(){gx.fn.setControlValue("vVALIDACAMPO7STRING",gx.O.AV74ValidaCampo7String,0)},c2v:function(){gx.O.AV74ValidaCampo7String=this.val()},val:function(){return gx.fn.getControlValue("vVALIDACAMPO7STRING")},nac:gx.falseFn};
   GXValidFnc[149]={fld:"TABCAMPO21",grid:0};
   GXValidFnc[152]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMECAMPO1NUMERICO",gxz:"ZV79NomeCampo1Numerico",gxold:"OV79NomeCampo1Numerico",gxvar:"AV79NomeCampo1Numerico",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV79NomeCampo1Numerico=Value},v2z:function(Value){gx.O.ZV79NomeCampo1Numerico=Value},v2c:function(){gx.fn.setControlValue("vNOMECAMPO1NUMERICO",gx.O.AV79NomeCampo1Numerico,0)},c2v:function(){gx.O.AV79NomeCampo1Numerico=this.val()},val:function(){return gx.fn.getControlValue("vNOMECAMPO1NUMERICO")},nac:gx.falseFn};
   GXValidFnc[154]={lvl:0,type:"decimal",len:18,dec:6,sign:false,pic:"ZZ,ZZZ,ZZZ,ZZ9.999999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTEUDOCAMPO1NUMERICO",gxz:"ZV75ConteudoCampo1Numerico",gxold:"OV75ConteudoCampo1Numerico",gxvar:"AV75ConteudoCampo1Numerico",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV75ConteudoCampo1Numerico=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV75ConteudoCampo1Numerico=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCONTEUDOCAMPO1NUMERICO",gx.O.AV75ConteudoCampo1Numerico,6,',')},c2v:function(){gx.O.AV75ConteudoCampo1Numerico=this.val()},val:function(){return gx.fn.getDecimalValue("vCONTEUDOCAMPO1NUMERICO",'.',',')},nac:gx.falseFn};
   GXValidFnc[155]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALIDACAMPO1NUMERICO",gxz:"ZV83ValidaCampo1Numerico",gxold:"OV83ValidaCampo1Numerico",gxvar:"AV83ValidaCampo1Numerico",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV83ValidaCampo1Numerico=Value},v2z:function(Value){gx.O.ZV83ValidaCampo1Numerico=Value},v2c:function(){gx.fn.setControlValue("vVALIDACAMPO1NUMERICO",gx.O.AV83ValidaCampo1Numerico,0)},c2v:function(){gx.O.AV83ValidaCampo1Numerico=this.val()},val:function(){return gx.fn.getControlValue("vVALIDACAMPO1NUMERICO")},nac:gx.falseFn};
   GXValidFnc[156]={fld:"TABCAMPO22",grid:0};
   GXValidFnc[159]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMECAMPO2NUMERICO",gxz:"ZV80NomeCampo2Numerico",gxold:"OV80NomeCampo2Numerico",gxvar:"AV80NomeCampo2Numerico",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV80NomeCampo2Numerico=Value},v2z:function(Value){gx.O.ZV80NomeCampo2Numerico=Value},v2c:function(){gx.fn.setControlValue("vNOMECAMPO2NUMERICO",gx.O.AV80NomeCampo2Numerico,0)},c2v:function(){gx.O.AV80NomeCampo2Numerico=this.val()},val:function(){return gx.fn.getControlValue("vNOMECAMPO2NUMERICO")},nac:gx.falseFn};
   GXValidFnc[161]={lvl:0,type:"decimal",len:18,dec:6,sign:false,pic:"ZZ,ZZZ,ZZZ,ZZ9.999999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTEUDOCAMPO2NUMERICO",gxz:"ZV76ConteudoCampo2Numerico",gxold:"OV76ConteudoCampo2Numerico",gxvar:"AV76ConteudoCampo2Numerico",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV76ConteudoCampo2Numerico=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV76ConteudoCampo2Numerico=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCONTEUDOCAMPO2NUMERICO",gx.O.AV76ConteudoCampo2Numerico,6,',')},c2v:function(){gx.O.AV76ConteudoCampo2Numerico=this.val()},val:function(){return gx.fn.getDecimalValue("vCONTEUDOCAMPO2NUMERICO",'.',',')},nac:gx.falseFn};
   GXValidFnc[162]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALIDACAMPO2NUMERICO",gxz:"ZV84ValidaCampo2Numerico",gxold:"OV84ValidaCampo2Numerico",gxvar:"AV84ValidaCampo2Numerico",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV84ValidaCampo2Numerico=Value},v2z:function(Value){gx.O.ZV84ValidaCampo2Numerico=Value},v2c:function(){gx.fn.setControlValue("vVALIDACAMPO2NUMERICO",gx.O.AV84ValidaCampo2Numerico,0)},c2v:function(){gx.O.AV84ValidaCampo2Numerico=this.val()},val:function(){return gx.fn.getControlValue("vVALIDACAMPO2NUMERICO")},nac:gx.falseFn};
   GXValidFnc[163]={fld:"TABCAMPO23",grid:0};
   GXValidFnc[166]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMECAMPO3NUMERICO",gxz:"ZV81NomeCampo3Numerico",gxold:"OV81NomeCampo3Numerico",gxvar:"AV81NomeCampo3Numerico",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV81NomeCampo3Numerico=Value},v2z:function(Value){gx.O.ZV81NomeCampo3Numerico=Value},v2c:function(){gx.fn.setControlValue("vNOMECAMPO3NUMERICO",gx.O.AV81NomeCampo3Numerico,0)},c2v:function(){gx.O.AV81NomeCampo3Numerico=this.val()},val:function(){return gx.fn.getControlValue("vNOMECAMPO3NUMERICO")},nac:gx.falseFn};
   GXValidFnc[168]={lvl:0,type:"decimal",len:18,dec:6,sign:false,pic:"ZZ,ZZZ,ZZZ,ZZ9.999999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTEUDOCAMPO3NUMERICO",gxz:"ZV77ConteudoCampo3Numerico",gxold:"OV77ConteudoCampo3Numerico",gxvar:"AV77ConteudoCampo3Numerico",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV77ConteudoCampo3Numerico=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV77ConteudoCampo3Numerico=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCONTEUDOCAMPO3NUMERICO",gx.O.AV77ConteudoCampo3Numerico,6,',')},c2v:function(){gx.O.AV77ConteudoCampo3Numerico=this.val()},val:function(){return gx.fn.getDecimalValue("vCONTEUDOCAMPO3NUMERICO",'.',',')},nac:gx.falseFn};
   GXValidFnc[169]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALIDACAMPO3NUMERICO",gxz:"ZV85ValidaCampo3Numerico",gxold:"OV85ValidaCampo3Numerico",gxvar:"AV85ValidaCampo3Numerico",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV85ValidaCampo3Numerico=Value},v2z:function(Value){gx.O.ZV85ValidaCampo3Numerico=Value},v2c:function(){gx.fn.setControlValue("vVALIDACAMPO3NUMERICO",gx.O.AV85ValidaCampo3Numerico,0)},c2v:function(){gx.O.AV85ValidaCampo3Numerico=this.val()},val:function(){return gx.fn.getControlValue("vVALIDACAMPO3NUMERICO")},nac:gx.falseFn};
   GXValidFnc[170]={fld:"TABCAMPO24",grid:0};
   GXValidFnc[173]={lvl:0,type:"svchar",len:31,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMECAMPO4NUMERICO",gxz:"ZV82NomeCampo4Numerico",gxold:"OV82NomeCampo4Numerico",gxvar:"AV82NomeCampo4Numerico",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV82NomeCampo4Numerico=Value},v2z:function(Value){gx.O.ZV82NomeCampo4Numerico=Value},v2c:function(){gx.fn.setControlValue("vNOMECAMPO4NUMERICO",gx.O.AV82NomeCampo4Numerico,0)},c2v:function(){gx.O.AV82NomeCampo4Numerico=this.val()},val:function(){return gx.fn.getControlValue("vNOMECAMPO4NUMERICO")},nac:gx.falseFn};
   GXValidFnc[175]={lvl:0,type:"decimal",len:18,dec:6,sign:false,pic:"ZZ,ZZZ,ZZZ,ZZ9.999999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTEUDOCAMPO4NUMERICO",gxz:"ZV78ConteudoCampo4Numerico",gxold:"OV78ConteudoCampo4Numerico",gxvar:"AV78ConteudoCampo4Numerico",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV78ConteudoCampo4Numerico=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV78ConteudoCampo4Numerico=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCONTEUDOCAMPO4NUMERICO",gx.O.AV78ConteudoCampo4Numerico,6,',')},c2v:function(){gx.O.AV78ConteudoCampo4Numerico=this.val()},val:function(){return gx.fn.getDecimalValue("vCONTEUDOCAMPO4NUMERICO",'.',',')},nac:gx.falseFn};
   GXValidFnc[176]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALIDACAMPO4NUMERICO",gxz:"ZV86ValidaCampo4Numerico",gxold:"OV86ValidaCampo4Numerico",gxvar:"AV86ValidaCampo4Numerico",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV86ValidaCampo4Numerico=Value},v2z:function(Value){gx.O.ZV86ValidaCampo4Numerico=Value},v2c:function(){gx.fn.setControlValue("vVALIDACAMPO4NUMERICO",gx.O.AV86ValidaCampo4Numerico,0)},c2v:function(){gx.O.AV86ValidaCampo4Numerico=this.val()},val:function(){return gx.fn.getControlValue("vVALIDACAMPO4NUMERICO")},nac:gx.falseFn};
   GXValidFnc[177]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[185]={fld:"JS", format:2,grid:0};
   this.AV29NomeCampo1Data = "" ;
   this.ZV29NomeCampo1Data = "" ;
   this.OV29NomeCampo1Data = "" ;
   this.AV6ConteudoCampo1Data = gx.date.nullDate() ;
   this.ZV6ConteudoCampo1Data = gx.date.nullDate() ;
   this.OV6ConteudoCampo1Data = gx.date.nullDate() ;
   this.AV55ValidaCampo1Data = "" ;
   this.ZV55ValidaCampo1Data = "" ;
   this.OV55ValidaCampo1Data = "" ;
   this.AV32NomeCampo2Data = "" ;
   this.ZV32NomeCampo2Data = "" ;
   this.OV32NomeCampo2Data = "" ;
   this.AV9ConteudoCampo2Data = gx.date.nullDate() ;
   this.ZV9ConteudoCampo2Data = gx.date.nullDate() ;
   this.OV9ConteudoCampo2Data = gx.date.nullDate() ;
   this.AV56ValidaCampo2Data = "" ;
   this.ZV56ValidaCampo2Data = "" ;
   this.OV56ValidaCampo2Data = "" ;
   this.AV35NomeCampo3Data = "" ;
   this.ZV35NomeCampo3Data = "" ;
   this.OV35NomeCampo3Data = "" ;
   this.AV12ConteudoCampo3Data = gx.date.nullDate() ;
   this.ZV12ConteudoCampo3Data = gx.date.nullDate() ;
   this.OV12ConteudoCampo3Data = gx.date.nullDate() ;
   this.AV57ValidaCampo3Data = "" ;
   this.ZV57ValidaCampo3Data = "" ;
   this.OV57ValidaCampo3Data = "" ;
   this.AV38NomeCampo4Data = "" ;
   this.ZV38NomeCampo4Data = "" ;
   this.OV38NomeCampo4Data = "" ;
   this.AV15ConteudoCampo4Data = gx.date.nullDate() ;
   this.ZV15ConteudoCampo4Data = gx.date.nullDate() ;
   this.OV15ConteudoCampo4Data = gx.date.nullDate() ;
   this.AV58ValidaCampo4Data = "" ;
   this.ZV58ValidaCampo4Data = "" ;
   this.OV58ValidaCampo4Data = "" ;
   this.AV41NomeCampo5Data = "" ;
   this.ZV41NomeCampo5Data = "" ;
   this.OV41NomeCampo5Data = "" ;
   this.AV18ConteudoCampo5Data = gx.date.nullDate() ;
   this.ZV18ConteudoCampo5Data = gx.date.nullDate() ;
   this.OV18ConteudoCampo5Data = gx.date.nullDate() ;
   this.AV59ValidaCampo5Data = "" ;
   this.ZV59ValidaCampo5Data = "" ;
   this.OV59ValidaCampo5Data = "" ;
   this.AV44NomeCampo6Data = "" ;
   this.ZV44NomeCampo6Data = "" ;
   this.OV44NomeCampo6Data = "" ;
   this.AV21ConteudoCampo6Data = gx.date.nullDate() ;
   this.ZV21ConteudoCampo6Data = gx.date.nullDate() ;
   this.OV21ConteudoCampo6Data = gx.date.nullDate() ;
   this.AV60ValidaCampo6Data = "" ;
   this.ZV60ValidaCampo6Data = "" ;
   this.OV60ValidaCampo6Data = "" ;
   this.AV30NomeCampo1Integer = "" ;
   this.ZV30NomeCampo1Integer = "" ;
   this.OV30NomeCampo1Integer = "" ;
   this.AV7ConteudoCampo1Integer = 0 ;
   this.ZV7ConteudoCampo1Integer = 0 ;
   this.OV7ConteudoCampo1Integer = 0 ;
   this.AV61ValidaCampo1Integer = "" ;
   this.ZV61ValidaCampo1Integer = "" ;
   this.OV61ValidaCampo1Integer = "" ;
   this.AV33NomeCampo2Integer = "" ;
   this.ZV33NomeCampo2Integer = "" ;
   this.OV33NomeCampo2Integer = "" ;
   this.AV10ConteudoCampo2Integer = 0 ;
   this.ZV10ConteudoCampo2Integer = 0 ;
   this.OV10ConteudoCampo2Integer = 0 ;
   this.AV62ValidaCampo2Integer = "" ;
   this.ZV62ValidaCampo2Integer = "" ;
   this.OV62ValidaCampo2Integer = "" ;
   this.AV36NomeCampo3Integer = "" ;
   this.ZV36NomeCampo3Integer = "" ;
   this.OV36NomeCampo3Integer = "" ;
   this.AV13ConteudoCampo3Integer = 0 ;
   this.ZV13ConteudoCampo3Integer = 0 ;
   this.OV13ConteudoCampo3Integer = 0 ;
   this.AV63ValidaCampo3Integer = "" ;
   this.ZV63ValidaCampo3Integer = "" ;
   this.OV63ValidaCampo3Integer = "" ;
   this.AV39NomeCampo4Integer = "" ;
   this.ZV39NomeCampo4Integer = "" ;
   this.OV39NomeCampo4Integer = "" ;
   this.AV16ConteudoCampo4Integer = 0 ;
   this.ZV16ConteudoCampo4Integer = 0 ;
   this.OV16ConteudoCampo4Integer = 0 ;
   this.AV64ValidaCampo4Integer = "" ;
   this.ZV64ValidaCampo4Integer = "" ;
   this.OV64ValidaCampo4Integer = "" ;
   this.AV42NomeCampo5Integer = "" ;
   this.ZV42NomeCampo5Integer = "" ;
   this.OV42NomeCampo5Integer = "" ;
   this.AV19ConteudoCampo5Integer = 0 ;
   this.ZV19ConteudoCampo5Integer = 0 ;
   this.OV19ConteudoCampo5Integer = 0 ;
   this.AV65ValidaCampo5Integer = "" ;
   this.ZV65ValidaCampo5Integer = "" ;
   this.OV65ValidaCampo5Integer = "" ;
   this.AV45NomeCampo6Integer = "" ;
   this.ZV45NomeCampo6Integer = "" ;
   this.OV45NomeCampo6Integer = "" ;
   this.AV22ConteudoCampo6Integer = 0 ;
   this.ZV22ConteudoCampo6Integer = 0 ;
   this.OV22ConteudoCampo6Integer = 0 ;
   this.AV66ValidaCampo6Integer = "" ;
   this.ZV66ValidaCampo6Integer = "" ;
   this.OV66ValidaCampo6Integer = "" ;
   this.AV47NomeCampo7Integer = "" ;
   this.ZV47NomeCampo7Integer = "" ;
   this.OV47NomeCampo7Integer = "" ;
   this.AV24ConteudoCampo7Integer = 0 ;
   this.ZV24ConteudoCampo7Integer = 0 ;
   this.OV24ConteudoCampo7Integer = 0 ;
   this.AV67ValidaCampo7Integer = "" ;
   this.ZV67ValidaCampo7Integer = "" ;
   this.OV67ValidaCampo7Integer = "" ;
   this.AV31NomeCampo1String = "" ;
   this.ZV31NomeCampo1String = "" ;
   this.OV31NomeCampo1String = "" ;
   this.AV8ConteudoCampo1String = "" ;
   this.ZV8ConteudoCampo1String = "" ;
   this.OV8ConteudoCampo1String = "" ;
   this.AV68ValidaCampo1String = "" ;
   this.ZV68ValidaCampo1String = "" ;
   this.OV68ValidaCampo1String = "" ;
   this.AV34NomeCampo2String = "" ;
   this.ZV34NomeCampo2String = "" ;
   this.OV34NomeCampo2String = "" ;
   this.AV11ConteudoCampo2String = "" ;
   this.ZV11ConteudoCampo2String = "" ;
   this.OV11ConteudoCampo2String = "" ;
   this.AV69ValidaCampo2String = "" ;
   this.ZV69ValidaCampo2String = "" ;
   this.OV69ValidaCampo2String = "" ;
   this.AV37NomeCampo3String = "" ;
   this.ZV37NomeCampo3String = "" ;
   this.OV37NomeCampo3String = "" ;
   this.AV14ConteudoCampo3String = "" ;
   this.ZV14ConteudoCampo3String = "" ;
   this.OV14ConteudoCampo3String = "" ;
   this.AV70ValidaCampo3String = "" ;
   this.ZV70ValidaCampo3String = "" ;
   this.OV70ValidaCampo3String = "" ;
   this.AV40NomeCampo4String = "" ;
   this.ZV40NomeCampo4String = "" ;
   this.OV40NomeCampo4String = "" ;
   this.AV17ConteudoCampo4String = "" ;
   this.ZV17ConteudoCampo4String = "" ;
   this.OV17ConteudoCampo4String = "" ;
   this.AV71ValidaCampo4String = "" ;
   this.ZV71ValidaCampo4String = "" ;
   this.OV71ValidaCampo4String = "" ;
   this.AV43NomeCampo5String = "" ;
   this.ZV43NomeCampo5String = "" ;
   this.OV43NomeCampo5String = "" ;
   this.AV20ConteudoCampo5String = "" ;
   this.ZV20ConteudoCampo5String = "" ;
   this.OV20ConteudoCampo5String = "" ;
   this.AV72ValidaCampo5String = "" ;
   this.ZV72ValidaCampo5String = "" ;
   this.OV72ValidaCampo5String = "" ;
   this.AV46NomeCampo6String = "" ;
   this.ZV46NomeCampo6String = "" ;
   this.OV46NomeCampo6String = "" ;
   this.AV23ConteudoCampo6String = "" ;
   this.ZV23ConteudoCampo6String = "" ;
   this.OV23ConteudoCampo6String = "" ;
   this.AV73ValidaCampo6String = "" ;
   this.ZV73ValidaCampo6String = "" ;
   this.OV73ValidaCampo6String = "" ;
   this.AV48NomeCampo7String = "" ;
   this.ZV48NomeCampo7String = "" ;
   this.OV48NomeCampo7String = "" ;
   this.AV25ConteudoCampo7String = "" ;
   this.ZV25ConteudoCampo7String = "" ;
   this.OV25ConteudoCampo7String = "" ;
   this.AV74ValidaCampo7String = "" ;
   this.ZV74ValidaCampo7String = "" ;
   this.OV74ValidaCampo7String = "" ;
   this.AV79NomeCampo1Numerico = "" ;
   this.ZV79NomeCampo1Numerico = "" ;
   this.OV79NomeCampo1Numerico = "" ;
   this.AV75ConteudoCampo1Numerico = 0 ;
   this.ZV75ConteudoCampo1Numerico = 0 ;
   this.OV75ConteudoCampo1Numerico = 0 ;
   this.AV83ValidaCampo1Numerico = "" ;
   this.ZV83ValidaCampo1Numerico = "" ;
   this.OV83ValidaCampo1Numerico = "" ;
   this.AV80NomeCampo2Numerico = "" ;
   this.ZV80NomeCampo2Numerico = "" ;
   this.OV80NomeCampo2Numerico = "" ;
   this.AV76ConteudoCampo2Numerico = 0 ;
   this.ZV76ConteudoCampo2Numerico = 0 ;
   this.OV76ConteudoCampo2Numerico = 0 ;
   this.AV84ValidaCampo2Numerico = "" ;
   this.ZV84ValidaCampo2Numerico = "" ;
   this.OV84ValidaCampo2Numerico = "" ;
   this.AV81NomeCampo3Numerico = "" ;
   this.ZV81NomeCampo3Numerico = "" ;
   this.OV81NomeCampo3Numerico = "" ;
   this.AV77ConteudoCampo3Numerico = 0 ;
   this.ZV77ConteudoCampo3Numerico = 0 ;
   this.OV77ConteudoCampo3Numerico = 0 ;
   this.AV85ValidaCampo3Numerico = "" ;
   this.ZV85ValidaCampo3Numerico = "" ;
   this.OV85ValidaCampo3Numerico = "" ;
   this.AV82NomeCampo4Numerico = "" ;
   this.ZV82NomeCampo4Numerico = "" ;
   this.OV82NomeCampo4Numerico = "" ;
   this.AV78ConteudoCampo4Numerico = 0 ;
   this.ZV78ConteudoCampo4Numerico = 0 ;
   this.OV78ConteudoCampo4Numerico = 0 ;
   this.AV86ValidaCampo4Numerico = "" ;
   this.ZV86ValidaCampo4Numerico = "" ;
   this.OV86ValidaCampo4Numerico = "" ;
   this.AV29NomeCampo1Data = "" ;
   this.AV6ConteudoCampo1Data = gx.date.nullDate() ;
   this.AV55ValidaCampo1Data = "" ;
   this.AV32NomeCampo2Data = "" ;
   this.AV9ConteudoCampo2Data = gx.date.nullDate() ;
   this.AV56ValidaCampo2Data = "" ;
   this.AV35NomeCampo3Data = "" ;
   this.AV12ConteudoCampo3Data = gx.date.nullDate() ;
   this.AV57ValidaCampo3Data = "" ;
   this.AV38NomeCampo4Data = "" ;
   this.AV15ConteudoCampo4Data = gx.date.nullDate() ;
   this.AV58ValidaCampo4Data = "" ;
   this.AV41NomeCampo5Data = "" ;
   this.AV18ConteudoCampo5Data = gx.date.nullDate() ;
   this.AV59ValidaCampo5Data = "" ;
   this.AV44NomeCampo6Data = "" ;
   this.AV21ConteudoCampo6Data = gx.date.nullDate() ;
   this.AV60ValidaCampo6Data = "" ;
   this.AV30NomeCampo1Integer = "" ;
   this.AV7ConteudoCampo1Integer = 0 ;
   this.AV61ValidaCampo1Integer = "" ;
   this.AV33NomeCampo2Integer = "" ;
   this.AV10ConteudoCampo2Integer = 0 ;
   this.AV62ValidaCampo2Integer = "" ;
   this.AV36NomeCampo3Integer = "" ;
   this.AV13ConteudoCampo3Integer = 0 ;
   this.AV63ValidaCampo3Integer = "" ;
   this.AV39NomeCampo4Integer = "" ;
   this.AV16ConteudoCampo4Integer = 0 ;
   this.AV64ValidaCampo4Integer = "" ;
   this.AV42NomeCampo5Integer = "" ;
   this.AV19ConteudoCampo5Integer = 0 ;
   this.AV65ValidaCampo5Integer = "" ;
   this.AV45NomeCampo6Integer = "" ;
   this.AV22ConteudoCampo6Integer = 0 ;
   this.AV66ValidaCampo6Integer = "" ;
   this.AV47NomeCampo7Integer = "" ;
   this.AV24ConteudoCampo7Integer = 0 ;
   this.AV67ValidaCampo7Integer = "" ;
   this.AV31NomeCampo1String = "" ;
   this.AV8ConteudoCampo1String = "" ;
   this.AV68ValidaCampo1String = "" ;
   this.AV34NomeCampo2String = "" ;
   this.AV11ConteudoCampo2String = "" ;
   this.AV69ValidaCampo2String = "" ;
   this.AV37NomeCampo3String = "" ;
   this.AV14ConteudoCampo3String = "" ;
   this.AV70ValidaCampo3String = "" ;
   this.AV40NomeCampo4String = "" ;
   this.AV17ConteudoCampo4String = "" ;
   this.AV71ValidaCampo4String = "" ;
   this.AV43NomeCampo5String = "" ;
   this.AV20ConteudoCampo5String = "" ;
   this.AV72ValidaCampo5String = "" ;
   this.AV46NomeCampo6String = "" ;
   this.AV23ConteudoCampo6String = "" ;
   this.AV73ValidaCampo6String = "" ;
   this.AV48NomeCampo7String = "" ;
   this.AV25ConteudoCampo7String = "" ;
   this.AV74ValidaCampo7String = "" ;
   this.AV79NomeCampo1Numerico = "" ;
   this.AV75ConteudoCampo1Numerico = 0 ;
   this.AV83ValidaCampo1Numerico = "" ;
   this.AV80NomeCampo2Numerico = "" ;
   this.AV76ConteudoCampo2Numerico = 0 ;
   this.AV84ValidaCampo2Numerico = "" ;
   this.AV81NomeCampo3Numerico = "" ;
   this.AV77ConteudoCampo3Numerico = 0 ;
   this.AV85ValidaCampo3Numerico = "" ;
   this.AV82NomeCampo4Numerico = "" ;
   this.AV78ConteudoCampo4Numerico = 0 ;
   this.AV86ValidaCampo4Numerico = "" ;
   this.Events = {"e1220d2_client": ["ENTER", true] ,"e1420d2_client": ["'FECHAR'", true] ,"e1620d2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV29NomeCampo1Data',fld:'vNOMECAMPO1DATA'},{av:'AV32NomeCampo2Data',fld:'vNOMECAMPO2DATA'},{av:'AV35NomeCampo3Data',fld:'vNOMECAMPO3DATA'},{av:'AV38NomeCampo4Data',fld:'vNOMECAMPO4DATA'},{av:'AV41NomeCampo5Data',fld:'vNOMECAMPO5DATA'},{av:'AV44NomeCampo6Data',fld:'vNOMECAMPO6DATA'},{av:'AV30NomeCampo1Integer',fld:'vNOMECAMPO1INTEGER'},{av:'AV33NomeCampo2Integer',fld:'vNOMECAMPO2INTEGER'},{av:'AV36NomeCampo3Integer',fld:'vNOMECAMPO3INTEGER'},{av:'AV39NomeCampo4Integer',fld:'vNOMECAMPO4INTEGER'},{av:'AV42NomeCampo5Integer',fld:'vNOMECAMPO5INTEGER'},{av:'AV45NomeCampo6Integer',fld:'vNOMECAMPO6INTEGER'},{av:'AV47NomeCampo7Integer',fld:'vNOMECAMPO7INTEGER'},{av:'AV79NomeCampo1Numerico',fld:'vNOMECAMPO1NUMERICO'},{av:'AV80NomeCampo2Numerico',fld:'vNOMECAMPO2NUMERICO'},{av:'AV81NomeCampo3Numerico',fld:'vNOMECAMPO3NUMERICO'},{av:'AV82NomeCampo4Numerico',fld:'vNOMECAMPO4NUMERICO'},{av:'AV31NomeCampo1String',fld:'vNOMECAMPO1STRING'},{av:'AV34NomeCampo2String',fld:'vNOMECAMPO2STRING'},{av:'AV37NomeCampo3String',fld:'vNOMECAMPO3STRING'},{av:'AV40NomeCampo4String',fld:'vNOMECAMPO4STRING'},{av:'AV43NomeCampo5String',fld:'vNOMECAMPO5STRING'},{av:'AV46NomeCampo6String',fld:'vNOMECAMPO6STRING'},{av:'AV48NomeCampo7String',fld:'vNOMECAMPO7STRING'}],[{av:'gx.fn.getCtrlProperty("vVALIDACAMPO1DATA","Visible")',ctrl:'vVALIDACAMPO1DATA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vVALIDACAMPO2DATA","Visible")',ctrl:'vVALIDACAMPO2DATA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vVALIDACAMPO3DATA","Visible")',ctrl:'vVALIDACAMPO3DATA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vVALIDACAMPO4DATA","Visible")',ctrl:'vVALIDACAMPO4DATA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vVALIDACAMPO5DATA","Visible")',ctrl:'vVALIDACAMPO5DATA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vVALIDACAMPO6DATA","Visible")',ctrl:'vVALIDACAMPO6DATA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vVALIDACAMPO1INTEGER","Visible")',ctrl:'vVALIDACAMPO1INTEGER',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vVALIDACAMPO2INTEGER","Visible")',ctrl:'vVALIDACAMPO2INTEGER',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vVALIDACAMPO3INTEGER","Visible")',ctrl:'vVALIDACAMPO3INTEGER',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vVALIDACAMPO4INTEGER","Visible")',ctrl:'vVALIDACAMPO4INTEGER',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vVALIDACAMPO5INTEGER","Visible")',ctrl:'vVALIDACAMPO5INTEGER',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vVALIDACAMPO6INTEGER","Visible")',ctrl:'vVALIDACAMPO6INTEGER',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vVALIDACAMPO7INTEGER","Visible")',ctrl:'vVALIDACAMPO7INTEGER',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vVALIDACAMPO1STRING","Visible")',ctrl:'vVALIDACAMPO1STRING',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vVALIDACAMPO2STRING","Visible")',ctrl:'vVALIDACAMPO2STRING',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vVALIDACAMPO3STRING","Visible")',ctrl:'vVALIDACAMPO3STRING',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vVALIDACAMPO4STRING","Visible")',ctrl:'vVALIDACAMPO4STRING',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vVALIDACAMPO5STRING","Visible")',ctrl:'vVALIDACAMPO5STRING',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vVALIDACAMPO6STRING","Visible")',ctrl:'vVALIDACAMPO6STRING',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vVALIDACAMPO7STRING","Visible")',ctrl:'vVALIDACAMPO7STRING',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vVALIDACAMPO1NUMERICO","Visible")',ctrl:'vVALIDACAMPO1NUMERICO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vVALIDACAMPO2NUMERICO","Visible")',ctrl:'vVALIDACAMPO2NUMERICO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vVALIDACAMPO3NUMERICO","Visible")',ctrl:'vVALIDACAMPO3NUMERICO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vVALIDACAMPO4NUMERICO","Visible")',ctrl:'vVALIDACAMPO4NUMERICO',prop:'Visible'},{av:'AV50SdtCampos',fld:'vSDTCAMPOS'},{av:'AV89GXV1',fld:'vGXV1'},{av:'AV51SdtCamposItem',fld:'vSDTCAMPOSITEM'},{av:'AV44NomeCampo6Data',fld:'vNOMECAMPO6DATA'},{av:'AV60ValidaCampo6Data',fld:'vVALIDACAMPO6DATA'},{av:'AV41NomeCampo5Data',fld:'vNOMECAMPO5DATA'},{av:'AV59ValidaCampo5Data',fld:'vVALIDACAMPO5DATA'},{av:'AV38NomeCampo4Data',fld:'vNOMECAMPO4DATA'},{av:'AV58ValidaCampo4Data',fld:'vVALIDACAMPO4DATA'},{av:'AV35NomeCampo3Data',fld:'vNOMECAMPO3DATA'},{av:'AV57ValidaCampo3Data',fld:'vVALIDACAMPO3DATA'},{av:'AV32NomeCampo2Data',fld:'vNOMECAMPO2DATA'},{av:'AV56ValidaCampo2Data',fld:'vVALIDACAMPO2DATA'},{av:'AV29NomeCampo1Data',fld:'vNOMECAMPO1DATA'},{av:'AV55ValidaCampo1Data',fld:'vVALIDACAMPO1DATA'},{av:'AV47NomeCampo7Integer',fld:'vNOMECAMPO7INTEGER'},{av:'AV67ValidaCampo7Integer',fld:'vVALIDACAMPO7INTEGER'},{av:'AV45NomeCampo6Integer',fld:'vNOMECAMPO6INTEGER'},{av:'AV66ValidaCampo6Integer',fld:'vVALIDACAMPO6INTEGER'},{av:'AV42NomeCampo5Integer',fld:'vNOMECAMPO5INTEGER'},{av:'AV65ValidaCampo5Integer',fld:'vVALIDACAMPO5INTEGER'},{av:'AV39NomeCampo4Integer',fld:'vNOMECAMPO4INTEGER'},{av:'AV64ValidaCampo4Integer',fld:'vVALIDACAMPO4INTEGER'},{av:'AV36NomeCampo3Integer',fld:'vNOMECAMPO3INTEGER'},{av:'AV63ValidaCampo3Integer',fld:'vVALIDACAMPO3INTEGER'},{av:'AV33NomeCampo2Integer',fld:'vNOMECAMPO2INTEGER'},{av:'AV62ValidaCampo2Integer',fld:'vVALIDACAMPO2INTEGER'},{av:'AV30NomeCampo1Integer',fld:'vNOMECAMPO1INTEGER'},{av:'AV61ValidaCampo1Integer',fld:'vVALIDACAMPO1INTEGER'},{av:'AV79NomeCampo1Numerico',fld:'vNOMECAMPO1NUMERICO'},{av:'AV83ValidaCampo1Numerico',fld:'vVALIDACAMPO1NUMERICO'},{av:'AV80NomeCampo2Numerico',fld:'vNOMECAMPO2NUMERICO'},{av:'AV84ValidaCampo2Numerico',fld:'vVALIDACAMPO2NUMERICO'},{av:'AV81NomeCampo3Numerico',fld:'vNOMECAMPO3NUMERICO'},{av:'AV85ValidaCampo3Numerico',fld:'vVALIDACAMPO3NUMERICO'},{av:'AV82NomeCampo4Numerico',fld:'vNOMECAMPO4NUMERICO'},{av:'AV86ValidaCampo4Numerico',fld:'vVALIDACAMPO4NUMERICO'},{av:'AV48NomeCampo7String',fld:'vNOMECAMPO7STRING'},{av:'AV74ValidaCampo7String',fld:'vVALIDACAMPO7STRING'},{av:'AV46NomeCampo6String',fld:'vNOMECAMPO6STRING'},{av:'AV73ValidaCampo6String',fld:'vVALIDACAMPO6STRING'},{av:'AV43NomeCampo5String',fld:'vNOMECAMPO5STRING'},{av:'AV72ValidaCampo5String',fld:'vVALIDACAMPO5STRING'},{av:'AV40NomeCampo4String',fld:'vNOMECAMPO4STRING'},{av:'AV71ValidaCampo4String',fld:'vVALIDACAMPO4STRING'},{av:'AV37NomeCampo3String',fld:'vNOMECAMPO3STRING'},{av:'AV70ValidaCampo3String',fld:'vVALIDACAMPO3STRING'},{av:'AV34NomeCampo2String',fld:'vNOMECAMPO2STRING'},{av:'AV69ValidaCampo2String',fld:'vVALIDACAMPO2STRING'},{av:'AV31NomeCampo1String',fld:'vNOMECAMPO1STRING'},{av:'AV68ValidaCampo1String',fld:'vVALIDACAMPO1STRING'}]];
   this.EvtParms["ENTER"] = [[{av:'gx.fn.getCtrlProperty("TABCAMPO1","Visible")',ctrl:'TABCAMPO1',prop:'Visible'},{av:'AV6ConteudoCampo1Data',fld:'vCONTEUDOCAMPO1DATA'},{av:'AV29NomeCampo1Data',fld:'vNOMECAMPO1DATA'},{av:'gx.fn.getCtrlProperty("TABCAMPO2","Visible")',ctrl:'TABCAMPO2',prop:'Visible'},{av:'AV52SnErro',fld:'vSNERRO'},{av:'AV9ConteudoCampo2Data',fld:'vCONTEUDOCAMPO2DATA'},{av:'AV32NomeCampo2Data',fld:'vNOMECAMPO2DATA'},{av:'AV55ValidaCampo1Data',fld:'vVALIDACAMPO1DATA'},{av:'AV56ValidaCampo2Data',fld:'vVALIDACAMPO2DATA'},{av:'gx.fn.getCtrlProperty("TABCAMPO3","Visible")',ctrl:'TABCAMPO3',prop:'Visible'},{av:'AV12ConteudoCampo3Data',fld:'vCONTEUDOCAMPO3DATA'},{av:'AV35NomeCampo3Data',fld:'vNOMECAMPO3DATA'},{av:'AV57ValidaCampo3Data',fld:'vVALIDACAMPO3DATA'},{av:'gx.fn.getCtrlProperty("TABCAMPO4","Visible")',ctrl:'TABCAMPO4',prop:'Visible'},{av:'AV15ConteudoCampo4Data',fld:'vCONTEUDOCAMPO4DATA'},{av:'AV38NomeCampo4Data',fld:'vNOMECAMPO4DATA'},{av:'AV58ValidaCampo4Data',fld:'vVALIDACAMPO4DATA'},{av:'gx.fn.getCtrlProperty("TABCAMPO5","Visible")',ctrl:'TABCAMPO5',prop:'Visible'},{av:'AV18ConteudoCampo5Data',fld:'vCONTEUDOCAMPO5DATA'},{av:'AV41NomeCampo5Data',fld:'vNOMECAMPO5DATA'},{av:'AV59ValidaCampo5Data',fld:'vVALIDACAMPO5DATA'},{av:'gx.fn.getCtrlProperty("TABCAMPO6","Visible")',ctrl:'TABCAMPO6',prop:'Visible'},{av:'AV21ConteudoCampo6Data',fld:'vCONTEUDOCAMPO6DATA'},{av:'AV44NomeCampo6Data',fld:'vNOMECAMPO6DATA'},{av:'AV60ValidaCampo6Data',fld:'vVALIDACAMPO6DATA'},{av:'gx.fn.getCtrlProperty("TABCAMPO7","Visible")',ctrl:'TABCAMPO7',prop:'Visible'},{av:'AV7ConteudoCampo1Integer',fld:'vCONTEUDOCAMPO1INTEGER'},{av:'gx.fn.getCtrlProperty("TABCAMPO8","Visible")',ctrl:'TABCAMPO8',prop:'Visible'},{av:'AV10ConteudoCampo2Integer',fld:'vCONTEUDOCAMPO2INTEGER'},{av:'AV61ValidaCampo1Integer',fld:'vVALIDACAMPO1INTEGER'},{av:'AV62ValidaCampo2Integer',fld:'vVALIDACAMPO2INTEGER'},{av:'AV30NomeCampo1Integer',fld:'vNOMECAMPO1INTEGER'},{av:'AV33NomeCampo2Integer',fld:'vNOMECAMPO2INTEGER'},{av:'gx.fn.getCtrlProperty("TABCAMPO9","Visible")',ctrl:'TABCAMPO9',prop:'Visible'},{av:'AV13ConteudoCampo3Integer',fld:'vCONTEUDOCAMPO3INTEGER'},{av:'AV63ValidaCampo3Integer',fld:'vVALIDACAMPO3INTEGER'},{av:'AV36NomeCampo3Integer',fld:'vNOMECAMPO3INTEGER'},{av:'gx.fn.getCtrlProperty("TABCAMPO10","Visible")',ctrl:'TABCAMPO10',prop:'Visible'},{av:'AV16ConteudoCampo4Integer',fld:'vCONTEUDOCAMPO4INTEGER'},{av:'AV64ValidaCampo4Integer',fld:'vVALIDACAMPO4INTEGER'},{av:'AV39NomeCampo4Integer',fld:'vNOMECAMPO4INTEGER'},{av:'gx.fn.getCtrlProperty("TABCAMPO11","Visible")',ctrl:'TABCAMPO11',prop:'Visible'},{av:'AV19ConteudoCampo5Integer',fld:'vCONTEUDOCAMPO5INTEGER'},{av:'AV65ValidaCampo5Integer',fld:'vVALIDACAMPO5INTEGER'},{av:'AV42NomeCampo5Integer',fld:'vNOMECAMPO5INTEGER'},{av:'gx.fn.getCtrlProperty("TABCAMPO12","Visible")',ctrl:'TABCAMPO12',prop:'Visible'},{av:'AV22ConteudoCampo6Integer',fld:'vCONTEUDOCAMPO6INTEGER'},{av:'AV66ValidaCampo6Integer',fld:'vVALIDACAMPO6INTEGER'},{av:'AV45NomeCampo6Integer',fld:'vNOMECAMPO6INTEGER'},{av:'gx.fn.getCtrlProperty("TABCAMPO13","Visible")',ctrl:'TABCAMPO13',prop:'Visible'},{av:'AV24ConteudoCampo7Integer',fld:'vCONTEUDOCAMPO7INTEGER'},{av:'AV67ValidaCampo7Integer',fld:'vVALIDACAMPO7INTEGER'},{av:'AV47NomeCampo7Integer',fld:'vNOMECAMPO7INTEGER'},{av:'gx.fn.getCtrlProperty("TABCAMPO14","Visible")',ctrl:'TABCAMPO14',prop:'Visible'},{av:'AV8ConteudoCampo1String',fld:'vCONTEUDOCAMPO1STRING'},{av:'AV31NomeCampo1String',fld:'vNOMECAMPO1STRING'},{av:'gx.fn.getCtrlProperty("TABCAMPO15","Visible")',ctrl:'TABCAMPO15',prop:'Visible'},{av:'AV11ConteudoCampo2String',fld:'vCONTEUDOCAMPO2STRING'},{av:'AV34NomeCampo2String',fld:'vNOMECAMPO2STRING'},{av:'AV68ValidaCampo1String',fld:'vVALIDACAMPO1STRING'},{av:'AV69ValidaCampo2String',fld:'vVALIDACAMPO2STRING'},{av:'gx.fn.getCtrlProperty("TABCAMPO16","Visible")',ctrl:'TABCAMPO16',prop:'Visible'},{av:'AV14ConteudoCampo3String',fld:'vCONTEUDOCAMPO3STRING'},{av:'AV37NomeCampo3String',fld:'vNOMECAMPO3STRING'},{av:'AV70ValidaCampo3String',fld:'vVALIDACAMPO3STRING'},{av:'gx.fn.getCtrlProperty("TABCAMPO17","Visible")',ctrl:'TABCAMPO17',prop:'Visible'},{av:'AV17ConteudoCampo4String',fld:'vCONTEUDOCAMPO4STRING'},{av:'AV40NomeCampo4String',fld:'vNOMECAMPO4STRING'},{av:'AV71ValidaCampo4String',fld:'vVALIDACAMPO4STRING'},{av:'gx.fn.getCtrlProperty("TABCAMPO18","Visible")',ctrl:'TABCAMPO18',prop:'Visible'},{av:'AV20ConteudoCampo5String',fld:'vCONTEUDOCAMPO5STRING'},{av:'AV43NomeCampo5String',fld:'vNOMECAMPO5STRING'},{av:'AV72ValidaCampo5String',fld:'vVALIDACAMPO5STRING'},{av:'gx.fn.getCtrlProperty("TABCAMPO19","Visible")',ctrl:'TABCAMPO19',prop:'Visible'},{av:'AV23ConteudoCampo6String',fld:'vCONTEUDOCAMPO6STRING'},{av:'AV46NomeCampo6String',fld:'vNOMECAMPO6STRING'},{av:'AV73ValidaCampo6String',fld:'vVALIDACAMPO6STRING'},{av:'gx.fn.getCtrlProperty("TABCAMPO20","Visible")',ctrl:'TABCAMPO20',prop:'Visible'},{av:'AV25ConteudoCampo7String',fld:'vCONTEUDOCAMPO7STRING'},{av:'AV48NomeCampo7String',fld:'vNOMECAMPO7STRING'},{av:'gx.fn.getCtrlProperty("TABCAMPO21","Visible")',ctrl:'TABCAMPO21',prop:'Visible'},{av:'AV75ConteudoCampo1Numerico',fld:'vCONTEUDOCAMPO1NUMERICO'},{av:'gx.fn.getCtrlProperty("TABCAMPO22","Visible")',ctrl:'TABCAMPO22',prop:'Visible'},{av:'AV76ConteudoCampo2Numerico',fld:'vCONTEUDOCAMPO2NUMERICO'},{av:'AV83ValidaCampo1Numerico',fld:'vVALIDACAMPO1NUMERICO'},{av:'AV84ValidaCampo2Numerico',fld:'vVALIDACAMPO2NUMERICO'},{av:'AV79NomeCampo1Numerico',fld:'vNOMECAMPO1NUMERICO'},{av:'AV80NomeCampo2Numerico',fld:'vNOMECAMPO2NUMERICO'},{av:'gx.fn.getCtrlProperty("TABCAMPO23","Visible")',ctrl:'TABCAMPO23',prop:'Visible'},{av:'AV77ConteudoCampo3Numerico',fld:'vCONTEUDOCAMPO3NUMERICO'},{av:'AV85ValidaCampo3Numerico',fld:'vVALIDACAMPO3NUMERICO'},{av:'AV81NomeCampo3Numerico',fld:'vNOMECAMPO3NUMERICO'},{av:'gx.fn.getCtrlProperty("TABCAMPO24","Visible")',ctrl:'TABCAMPO24',prop:'Visible'},{av:'AV78ConteudoCampo4Numerico',fld:'vCONTEUDOCAMPO4NUMERICO'},{av:'AV86ValidaCampo4Numerico',fld:'vVALIDACAMPO4NUMERICO'},{av:'AV82NomeCampo4Numerico',fld:'vNOMECAMPO4NUMERICO'}],[{av:'AV52SnErro',fld:'vSNERRO'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EnterCtrl = ["BTNCONFIRMAR"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hsqlparametrosentrada());
