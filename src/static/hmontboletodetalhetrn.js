/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:44:1.88
*/
gx.evt.autoSkip = false;
gx.define('hmontboletodetalhetrn', false, function () {
   this.ServerClass =  "hmontboletodetalhetrn" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV35MontBarrasBoletoTipo=gx.fn.getControlValue("vMONTBARRASBOLETOTIPO") ;
      this.AV32Modo=gx.fn.getControlValue("vMODO") ;
   };
   this.Validv_Montbarrasboletoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vMONTBARRASBOLETOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Montboletodetalhemontagem=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vMONTBOLETODETALHEMONTAGEM");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Montboletodetalheordem=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vMONTBOLETODETALHEORDEM");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.s112_client=function()
   {
      gx.fn.setCtrlProperty("vMONTBOLETODETALHETIPOCAMPO","Enabled", 0 );
      gx.fn.setCtrlProperty("vMONTBOLETODETALHECAMPOFIXO","Enabled", 0 );
      gx.fn.setCtrlProperty("vMONTBOLETODETALHETABELA","Enabled", 0 );
      gx.fn.setCtrlProperty("vMONTBOLETODETALHECAMPOTABELA","Enabled", 0 );
      gx.fn.setCtrlProperty("vMONTBOLETODETALHECAMPOPOSINI","Enabled", 0 );
      gx.fn.setCtrlProperty("vMONTBOLETODETALHECAMPOPOSFIN","Enabled", 0 );
   };
   this.e13j42_client=function()
   {
      this.executeServerEvent("VMONTBOLETODETALHETIPOCAMPO.CLICK", true, null, false, true);
   };
   this.e14j42_client=function()
   {
      this.executeServerEvent("VMONTBOLETODETALHETABELA.CLICK", true, null, false, true);
   };
   this.e16j42_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e11j42_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e18j42_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,26,28,29,32,34,35,38,40,43,45,46,49,51,54,56,59,62,64,66,76];
   this.GXLastCtrlId =76;
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE7",grid:0};
   GXValidFnc[8]={fld:"TABLE4",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Montbarrasboletoid,isvalid:null,rgrid:[],fld:"vMONTBARRASBOLETOID",gxz:"ZV20MontBarrasBoletoId",gxold:"OV20MontBarrasBoletoId",gxvar:"AV20MontBarrasBoletoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20MontBarrasBoletoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20MontBarrasBoletoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMONTBARRASBOLETOID",gx.O.AV20MontBarrasBoletoId,0)},c2v:function(){gx.O.AV20MontBarrasBoletoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMONTBARRASBOLETOID",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Montboletodetalhemontagem,isvalid:null,rgrid:[],fld:"vMONTBOLETODETALHEMONTAGEM",gxz:"ZV21MontBoletoDetalheMontagem",gxold:"OV21MontBoletoDetalheMontagem",gxvar:"AV21MontBoletoDetalheMontagem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV21MontBoletoDetalheMontagem=Value},v2z:function(Value){gx.O.ZV21MontBoletoDetalheMontagem=Value},v2c:function(){gx.fn.setComboBoxValue("vMONTBOLETODETALHEMONTAGEM",gx.O.AV21MontBoletoDetalheMontagem)},c2v:function(){gx.O.AV21MontBoletoDetalheMontagem=this.val()},val:function(){return gx.fn.getControlValue("vMONTBOLETODETALHEMONTAGEM")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Montboletodetalheordem,isvalid:null,rgrid:[],fld:"vMONTBOLETODETALHEORDEM",gxz:"ZV22MontBoletoDetalheOrdem",gxold:"OV22MontBoletoDetalheOrdem",gxvar:"AV22MontBoletoDetalheOrdem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22MontBoletoDetalheOrdem=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22MontBoletoDetalheOrdem=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMONTBOLETODETALHEORDEM",gx.O.AV22MontBoletoDetalheOrdem,0)},c2v:function(){gx.O.AV22MontBoletoDetalheOrdem=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMONTBOLETODETALHEORDEM",'.')},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMONTBOLETODETALHETIPOCAMPO",gxz:"ZV23MontBoletoDetalheTipoCampo",gxold:"OV23MontBoletoDetalheTipoCampo",gxvar:"AV23MontBoletoDetalheTipoCampo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV23MontBoletoDetalheTipoCampo=Value},v2z:function(Value){gx.O.ZV23MontBoletoDetalheTipoCampo=Value},v2c:function(){gx.fn.setComboBoxValue("vMONTBOLETODETALHETIPOCAMPO",gx.O.AV23MontBoletoDetalheTipoCampo)},c2v:function(){gx.O.AV23MontBoletoDetalheTipoCampo=this.val()},val:function(){return gx.fn.getControlValue("vMONTBOLETODETALHETIPOCAMPO")},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TABLEFIX",grid:0};
   GXValidFnc[32]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMONTBOLETODETALHECAMPOFIXO",gxz:"ZV24MontBoletoDetalheCampoFixo",gxold:"OV24MontBoletoDetalheCampoFixo",gxvar:"AV24MontBoletoDetalheCampoFixo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24MontBoletoDetalheCampoFixo=Value},v2z:function(Value){gx.O.ZV24MontBoletoDetalheCampoFixo=Value},v2c:function(){gx.fn.setControlValue("vMONTBOLETODETALHECAMPOFIXO",gx.O.AV24MontBoletoDetalheCampoFixo,0)},c2v:function(){gx.O.AV24MontBoletoDetalheCampoFixo=this.val()},val:function(){return gx.fn.getControlValue("vMONTBOLETODETALHECAMPOFIXO")},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TABLETAB",grid:0};
   GXValidFnc[38]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMONTBOLETODETALHETABELA",gxz:"ZV25MontBoletoDetalheTabela",gxold:"OV25MontBoletoDetalheTabela",gxvar:"AV25MontBoletoDetalheTabela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV25MontBoletoDetalheTabela=Value},v2z:function(Value){gx.O.ZV25MontBoletoDetalheTabela=Value},v2c:function(){gx.fn.setComboBoxValue("vMONTBOLETODETALHETABELA",gx.O.AV25MontBoletoDetalheTabela)},c2v:function(){gx.O.AV25MontBoletoDetalheTabela=this.val()},val:function(){return gx.fn.getControlValue("vMONTBOLETODETALHETABELA")},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMONTBOLETODETALHECAMPOTABELA",gxz:"ZV26MontBoletoDetalheCampoTabela",gxold:"OV26MontBoletoDetalheCampoTabela",gxvar:"AV26MontBoletoDetalheCampoTabela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"listbx",v2v:function(Value){gx.O.AV26MontBoletoDetalheCampoTabela=Value},v2z:function(Value){gx.O.ZV26MontBoletoDetalheCampoTabela=Value},v2c:function(){gx.fn.setComboBoxValue("vMONTBOLETODETALHECAMPOTABELA",gx.O.AV26MontBoletoDetalheCampoTabela)},c2v:function(){gx.O.AV26MontBoletoDetalheCampoTabela=this.val()},val:function(){return gx.fn.getControlValue("vMONTBOLETODETALHECAMPOTABELA")},nac:gx.falseFn};
   GXValidFnc[46]={fld:"TABLEPOS",grid:0};
   GXValidFnc[49]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[51]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMONTBOLETODETALHECAMPOPOSINI",gxz:"ZV27MontBoletoDetalheCampoPosIni",gxold:"OV27MontBoletoDetalheCampoPosIni",gxvar:"AV27MontBoletoDetalheCampoPosIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27MontBoletoDetalheCampoPosIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27MontBoletoDetalheCampoPosIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMONTBOLETODETALHECAMPOPOSINI",gx.O.AV27MontBoletoDetalheCampoPosIni,0)},c2v:function(){gx.O.AV27MontBoletoDetalheCampoPosIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMONTBOLETODETALHECAMPOPOSINI",'.')},nac:gx.falseFn};
   GXValidFnc[54]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[56]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMONTBOLETODETALHECAMPOPOSFIN",gxz:"ZV28MontBoletoDetalheCampoPosFin",gxold:"OV28MontBoletoDetalheCampoPosFin",gxvar:"AV28MontBoletoDetalheCampoPosFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28MontBoletoDetalheCampoPosFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28MontBoletoDetalheCampoPosFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMONTBOLETODETALHECAMPOPOSFIN",gx.O.AV28MontBoletoDetalheCampoPosFin,0)},c2v:function(){gx.O.AV28MontBoletoDetalheCampoPosFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMONTBOLETODETALHECAMPOPOSFIN",'.')},nac:gx.falseFn};
   GXValidFnc[59]={fld:"TABLE1",grid:0};
   GXValidFnc[62]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[64]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMONTBOLETODETALHEUSUARIOALT",gxz:"ZV29MontBoletoDetalheUsuarioAlt",gxold:"OV29MontBoletoDetalheUsuarioAlt",gxvar:"AV29MontBoletoDetalheUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29MontBoletoDetalheUsuarioAlt=Value},v2z:function(Value){gx.O.ZV29MontBoletoDetalheUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("vMONTBOLETODETALHEUSUARIOALT",gx.O.AV29MontBoletoDetalheUsuarioAlt,0)},c2v:function(){gx.O.AV29MontBoletoDetalheUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("vMONTBOLETODETALHEUSUARIOALT")},nac:gx.falseFn};
   GXValidFnc[66]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMONTBOLETODETALHEDATAALT",gxz:"ZV30MontBoletoDetalheDataAlt",gxold:"OV30MontBoletoDetalheDataAlt",gxvar:"AV30MontBoletoDetalheDataAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30MontBoletoDetalheDataAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV30MontBoletoDetalheDataAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vMONTBOLETODETALHEDATAALT",gx.O.AV30MontBoletoDetalheDataAlt,0)},c2v:function(){gx.O.AV30MontBoletoDetalheDataAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vMONTBOLETODETALHEDATAALT")},nac:gx.falseFn};
   GXValidFnc[76]={fld:"BTNHELP",grid:0};
   this.AV20MontBarrasBoletoId = 0 ;
   this.ZV20MontBarrasBoletoId = 0 ;
   this.OV20MontBarrasBoletoId = 0 ;
   this.AV21MontBoletoDetalheMontagem = "" ;
   this.ZV21MontBoletoDetalheMontagem = "" ;
   this.OV21MontBoletoDetalheMontagem = "" ;
   this.AV22MontBoletoDetalheOrdem = 0 ;
   this.ZV22MontBoletoDetalheOrdem = 0 ;
   this.OV22MontBoletoDetalheOrdem = 0 ;
   this.AV23MontBoletoDetalheTipoCampo = "" ;
   this.ZV23MontBoletoDetalheTipoCampo = "" ;
   this.OV23MontBoletoDetalheTipoCampo = "" ;
   this.AV24MontBoletoDetalheCampoFixo = "" ;
   this.ZV24MontBoletoDetalheCampoFixo = "" ;
   this.OV24MontBoletoDetalheCampoFixo = "" ;
   this.AV25MontBoletoDetalheTabela = "" ;
   this.ZV25MontBoletoDetalheTabela = "" ;
   this.OV25MontBoletoDetalheTabela = "" ;
   this.AV26MontBoletoDetalheCampoTabela = "" ;
   this.ZV26MontBoletoDetalheCampoTabela = "" ;
   this.OV26MontBoletoDetalheCampoTabela = "" ;
   this.AV27MontBoletoDetalheCampoPosIni = 0 ;
   this.ZV27MontBoletoDetalheCampoPosIni = 0 ;
   this.OV27MontBoletoDetalheCampoPosIni = 0 ;
   this.AV28MontBoletoDetalheCampoPosFin = 0 ;
   this.ZV28MontBoletoDetalheCampoPosFin = 0 ;
   this.OV28MontBoletoDetalheCampoPosFin = 0 ;
   this.AV29MontBoletoDetalheUsuarioAlt = "" ;
   this.ZV29MontBoletoDetalheUsuarioAlt = "" ;
   this.OV29MontBoletoDetalheUsuarioAlt = "" ;
   this.AV30MontBoletoDetalheDataAlt = gx.date.nullDate() ;
   this.ZV30MontBoletoDetalheDataAlt = gx.date.nullDate() ;
   this.OV30MontBoletoDetalheDataAlt = gx.date.nullDate() ;
   this.AV20MontBarrasBoletoId = 0 ;
   this.AV21MontBoletoDetalheMontagem = "" ;
   this.AV22MontBoletoDetalheOrdem = 0 ;
   this.AV23MontBoletoDetalheTipoCampo = "" ;
   this.AV24MontBoletoDetalheCampoFixo = "" ;
   this.AV25MontBoletoDetalheTabela = "" ;
   this.AV26MontBoletoDetalheCampoTabela = "" ;
   this.AV27MontBoletoDetalheCampoPosIni = 0 ;
   this.AV28MontBoletoDetalheCampoPosFin = 0 ;
   this.AV29MontBoletoDetalheUsuarioAlt = "" ;
   this.AV30MontBoletoDetalheDataAlt = gx.date.nullDate() ;
   this.AV35MontBarrasBoletoTipo = "" ;
   this.AV32Modo = "" ;
   this.A2832MontBoletoDetalheOrdem = 0 ;
   this.A2831MontBoletoDetalheMontagem = "" ;
   this.A2820MontBarrasBoletoId = 0 ;
   this.A2819MontBarrasBoletoEmpresaId = "" ;
   this.A2833MontBoletoDetalheTipoCampo = "" ;
   this.A2834MontBoletoDetalheCampoFixo = "" ;
   this.A2835MontBoletoDetalheTabela = "" ;
   this.A2836MontBoletoDetalheCampoTabela = "" ;
   this.A2837MontBoletoDetalheCampoPosIni = 0 ;
   this.A2838MontBoletoDetalheCampoPosFin = 0 ;
   this.A2840MontBoletoDetalheUsuarioAlt = "" ;
   this.A2839MontBoletoDetalheDataAlt = gx.date.nullDate() ;
   this.Events = {"e13j42_client": ["VMONTBOLETODETALHETIPOCAMPO.CLICK", true] ,"e14j42_client": ["VMONTBOLETODETALHETABELA.CLICK", true] ,"e16j42_client": ["ENTER", true] ,"e11j42_client": ["'FECHAR'", true] ,"e18j42_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV23MontBoletoDetalheTipoCampo',fld:'vMONTBOLETODETALHETIPOCAMPO'},{av:'AV25MontBoletoDetalheTabela',fld:'vMONTBOLETODETALHETABELA'},{av:'AV26MontBoletoDetalheCampoTabela',fld:'vMONTBOLETODETALHECAMPOTABELA'},{av:'AV27MontBoletoDetalheCampoPosIni',fld:'vMONTBOLETODETALHECAMPOPOSINI'},{av:'AV28MontBoletoDetalheCampoPosFin',fld:'vMONTBOLETODETALHECAMPOPOSFIN'},{av:'AV24MontBoletoDetalheCampoFixo',fld:'vMONTBOLETODETALHECAMPOFIXO'}],[{av:'gx.fn.getCtrlProperty("TABLETAB","Visible")',ctrl:'TABLETAB',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLEPOS","Visible")',ctrl:'TABLEPOS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLEFIX","Visible")',ctrl:'TABLEFIX',prop:'Visible'},{av:'AV25MontBoletoDetalheTabela',fld:'vMONTBOLETODETALHETABELA'},{av:'AV26MontBoletoDetalheCampoTabela',fld:'vMONTBOLETODETALHECAMPOTABELA'},{av:'AV27MontBoletoDetalheCampoPosIni',fld:'vMONTBOLETODETALHECAMPOPOSINI'},{av:'AV28MontBoletoDetalheCampoPosFin',fld:'vMONTBOLETODETALHECAMPOPOSFIN'},{av:'AV24MontBoletoDetalheCampoFixo',fld:'vMONTBOLETODETALHECAMPOFIXO'}]];
   this.EvtParms["VMONTBOLETODETALHETIPOCAMPO.CLICK"] = [[{av:'AV23MontBoletoDetalheTipoCampo',fld:'vMONTBOLETODETALHETIPOCAMPO'},{av:'AV25MontBoletoDetalheTabela',fld:'vMONTBOLETODETALHETABELA'},{av:'AV26MontBoletoDetalheCampoTabela',fld:'vMONTBOLETODETALHECAMPOTABELA'},{av:'AV27MontBoletoDetalheCampoPosIni',fld:'vMONTBOLETODETALHECAMPOPOSINI'},{av:'AV28MontBoletoDetalheCampoPosFin',fld:'vMONTBOLETODETALHECAMPOPOSFIN'},{av:'AV24MontBoletoDetalheCampoFixo',fld:'vMONTBOLETODETALHECAMPOFIXO'}],[{av:'gx.fn.getCtrlProperty("TABLETAB","Visible")',ctrl:'TABLETAB',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLEPOS","Visible")',ctrl:'TABLEPOS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLEFIX","Visible")',ctrl:'TABLEFIX',prop:'Visible'},{av:'AV25MontBoletoDetalheTabela',fld:'vMONTBOLETODETALHETABELA'},{av:'AV26MontBoletoDetalheCampoTabela',fld:'vMONTBOLETODETALHECAMPOTABELA'},{av:'AV27MontBoletoDetalheCampoPosIni',fld:'vMONTBOLETODETALHECAMPOPOSINI'},{av:'AV28MontBoletoDetalheCampoPosFin',fld:'vMONTBOLETODETALHECAMPOPOSFIN'},{av:'AV24MontBoletoDetalheCampoFixo',fld:'vMONTBOLETODETALHECAMPOFIXO'}]];
   this.EvtParms["VMONTBOLETODETALHETABELA.CLICK"] = [[{av:'AV25MontBoletoDetalheTabela',fld:'vMONTBOLETODETALHETABELA'}],[{av:'AV26MontBoletoDetalheCampoTabela',fld:'vMONTBOLETODETALHECAMPOTABELA'}]];
   this.EvtParms["ENTER"] = [[{av:'AV23MontBoletoDetalheTipoCampo',fld:'vMONTBOLETODETALHETIPOCAMPO'},{av:'AV24MontBoletoDetalheCampoFixo',fld:'vMONTBOLETODETALHECAMPOFIXO'},{av:'AV25MontBoletoDetalheTabela',fld:'vMONTBOLETODETALHETABELA'},{av:'AV26MontBoletoDetalheCampoTabela',fld:'vMONTBOLETODETALHECAMPOTABELA'},{av:'AV27MontBoletoDetalheCampoPosIni',fld:'vMONTBOLETODETALHECAMPOPOSINI'},{av:'AV28MontBoletoDetalheCampoPosFin',fld:'vMONTBOLETODETALHECAMPOPOSFIN'},{av:'AV35MontBarrasBoletoTipo',fld:'vMONTBARRASBOLETOTIPO'},{av:'AV32Modo',fld:'vMODO'},{av:'A2819MontBarrasBoletoEmpresaId',fld:'MONTBARRASBOLETOEMPRESAID'},{av:'AV36MontBarrasBoletoEmpresaId',fld:'vMONTBARRASBOLETOEMPRESAID'},{av:'A2820MontBarrasBoletoId',fld:'MONTBARRASBOLETOID'},{av:'AV20MontBarrasBoletoId',fld:'vMONTBARRASBOLETOID'},{av:'A2831MontBoletoDetalheMontagem',fld:'MONTBOLETODETALHEMONTAGEM'},{av:'AV21MontBoletoDetalheMontagem',fld:'vMONTBOLETODETALHEMONTAGEM'},{av:'A2833MontBoletoDetalheTipoCampo',fld:'MONTBOLETODETALHETIPOCAMPO'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV22MontBoletoDetalheOrdem',fld:'vMONTBOLETODETALHEORDEM'},{av:'AV34Retorno',fld:'vRETORNO'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV29MontBoletoDetalheUsuarioAlt',fld:'vMONTBOLETODETALHEUSUARIOALT'},{av:'AV30MontBoletoDetalheDataAlt',fld:'vMONTBOLETODETALHEDATAALT'}],[{av:'AV31tpErro',fld:'vTPERRO'},{av:'AV22MontBoletoDetalheOrdem',fld:'vMONTBOLETODETALHEORDEM'},{av:'AV34Retorno',fld:'vRETORNO'},{av:'AV32Modo',fld:'vMODO'},{av:'AV28MontBoletoDetalheCampoPosFin',fld:'vMONTBOLETODETALHECAMPOPOSFIN'},{av:'AV27MontBoletoDetalheCampoPosIni',fld:'vMONTBOLETODETALHECAMPOPOSINI'},{av:'AV26MontBoletoDetalheCampoTabela',fld:'vMONTBOLETODETALHECAMPOTABELA'},{av:'AV25MontBoletoDetalheTabela',fld:'vMONTBOLETODETALHETABELA'},{av:'AV24MontBoletoDetalheCampoFixo',fld:'vMONTBOLETODETALHECAMPOFIXO'},{av:'AV23MontBoletoDetalheTipoCampo',fld:'vMONTBOLETODETALHETIPOCAMPO'},{av:'AV21MontBoletoDetalheMontagem',fld:'vMONTBOLETODETALHEMONTAGEM'},{av:'AV20MontBarrasBoletoId',fld:'vMONTBARRASBOLETOID'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV29MontBoletoDetalheUsuarioAlt',fld:'vMONTBOLETODETALHEUSUARIOALT'},{av:'AV30MontBoletoDetalheDataAlt',fld:'vMONTBOLETODETALHEDATAALT'},{av:'AV35MontBarrasBoletoTipo',fld:'vMONTBARRASBOLETOTIPO'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV20MontBarrasBoletoId',fld:'vMONTBARRASBOLETOID'},{av:'AV35MontBarrasBoletoTipo',fld:'vMONTBARRASBOLETOTIPO'}],[{av:'AV35MontBarrasBoletoTipo',fld:'vMONTBARRASBOLETOTIPO'},{av:'AV20MontBarrasBoletoId',fld:'vMONTBARRASBOLETOID'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV35MontBarrasBoletoTipo", "vMONTBARRASBOLETOTIPO", 0, "char");
   this.setVCMap("AV32Modo", "vMODO", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmontboletodetalhetrn());
