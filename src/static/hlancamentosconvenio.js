/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:57:4.2
*/
gx.evt.autoSkip = false;
gx.define('hlancamentosconvenio', false, function () {
   this.ServerClass =  "hlancamentosconvenio" ;
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
   this.Validv_Convenioid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONVENIOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Convenioempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONVENIOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e1220g2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1320g2_client=function()
   {
      this.executeServerEvent("VCONVENIOID.ISVALID", true, null, false, true);
   };
   this.e1420g2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1620g2_client=function()
   {
      this.executeServerEvent("'SALVARTXT'", true, null, false, false);
   };
   this.e1720g2_client=function()
   {
      this.executeServerEvent("VTXTTELA.CLICK", true, null, false, true);
   };
   this.e1820g2_client=function()
   {
      this.executeServerEvent("'EXCLUIRTXT'", true, null, false, false);
   };
   this.e2020g2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,12,14,17,20,23,25,26,28,31,33,36,38,40,46,49,53,55,58,60,62,64,66,68,70,72,74,76,79,81,82,85,87,89,91,93,95,97,99,101,103,106,108,109,110,113,115,117,119,121,123,125,127,129,131,137,143,144,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177];
   this.GXLastCtrlId =177;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABTXT",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK33", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTXTTELA",gxz:"ZV61TxtTela",gxold:"OV61TxtTela",gxvar:"AV61TxtTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV61TxtTela=Value},v2z:function(Value){gx.O.ZV61TxtTela=Value},v2c:function(){gx.fn.setComboBoxValue("vTXTTELA",gx.O.AV61TxtTela)},c2v:function(){gx.O.AV61TxtTela=this.val()},val:function(){return gx.fn.getControlValue("vTXTTELA")},nac:gx.falseFn};
   GXValidFnc[12]={fld:"IMAGE2",grid:0};
   GXValidFnc[14]={fld:"IMAGE1",grid:0};
   GXValidFnc[17]={fld:"TABLE2",grid:0};
   GXValidFnc[20]={fld:"TABLE5",grid:0};
   GXValidFnc[23]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Convenioid,isvalid:'e1320g2_client',rgrid:[],fld:"vCONVENIOID",gxz:"ZV7ConvenioId",gxold:"OV7ConvenioId",gxvar:"AV7ConvenioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7ConvenioId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7ConvenioId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONVENIOID",gx.O.AV7ConvenioId,0)},c2v:function(){gx.O.AV7ConvenioId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONVENIOID",'.')},nac:gx.falseFn};
   GXValidFnc[26]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONVENIODESCRICAO",gxz:"ZV5ConvenioDescricao",gxold:"OV5ConvenioDescricao",gxvar:"AV5ConvenioDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5ConvenioDescricao=Value},v2z:function(Value){gx.O.ZV5ConvenioDescricao=Value},v2c:function(){gx.fn.setControlValue("vCONVENIODESCRICAO",gx.O.AV5ConvenioDescricao,0)},c2v:function(){gx.O.AV5ConvenioDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCONVENIODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[28]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNCSV",gxz:"ZV60SnCSV",gxold:"OV60SnCSV",gxvar:"AV60SnCSV",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV60SnCSV=Value},v2z:function(Value){gx.O.ZV60SnCSV=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNCSV",gx.O.AV60SnCSV,"S")},c2v:function(){gx.O.AV60SnCSV=this.val()},val:function(){return gx.fn.getControlValue("vSNCSV")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[31]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[33]={fld:"TABLERANGEDATA",grid:0};
   GXValidFnc[36]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAINI",gxz:"ZV9DataIni",gxold:"OV9DataIni",gxvar:"AV9DataIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9DataIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV9DataIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAINI",gx.O.AV9DataIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV9DataIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAINI")},nac:gx.falseFn};
   this.declareDomainHdlr( 36 , function() {
   });
   GXValidFnc[38]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAFIM",gxz:"ZV8DataFim",gxold:"OV8DataFim",gxvar:"AV8DataFim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8DataFim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV8DataFim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAFIM",gx.O.AV8DataFim,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV8DataFim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAFIM")},nac:gx.falseFn};
   this.declareDomainHdlr( 40 , function() {
   });
   GXValidFnc[46]={fld:"TABLE6",grid:0};
   GXValidFnc[49]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[53]={fld:"TEXTBLOCK27", format:0,grid:0};
   GXValidFnc[55]={fld:"TABLE7",grid:0};
   GXValidFnc[58]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vHISTORICORESGATE1",gxz:"ZV21HistoricoResgate1",gxold:"OV21HistoricoResgate1",gxvar:"AV21HistoricoResgate1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21HistoricoResgate1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21HistoricoResgate1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vHISTORICORESGATE1",gx.O.AV21HistoricoResgate1,0)},c2v:function(){gx.O.AV21HistoricoResgate1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vHISTORICORESGATE1",'.')},nac:gx.falseFn};
   GXValidFnc[60]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vHISTORICORESGATE2",gxz:"ZV23HistoricoResgate2",gxold:"OV23HistoricoResgate2",gxvar:"AV23HistoricoResgate2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23HistoricoResgate2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23HistoricoResgate2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vHISTORICORESGATE2",gx.O.AV23HistoricoResgate2,0)},c2v:function(){gx.O.AV23HistoricoResgate2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vHISTORICORESGATE2",'.')},nac:gx.falseFn};
   GXValidFnc[62]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vHISTORICORESGATE3",gxz:"ZV24HistoricoResgate3",gxold:"OV24HistoricoResgate3",gxvar:"AV24HistoricoResgate3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24HistoricoResgate3=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24HistoricoResgate3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vHISTORICORESGATE3",gx.O.AV24HistoricoResgate3,0)},c2v:function(){gx.O.AV24HistoricoResgate3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vHISTORICORESGATE3",'.')},nac:gx.falseFn};
   GXValidFnc[64]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vHISTORICORESGATE4",gxz:"ZV25HistoricoResgate4",gxold:"OV25HistoricoResgate4",gxvar:"AV25HistoricoResgate4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25HistoricoResgate4=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV25HistoricoResgate4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vHISTORICORESGATE4",gx.O.AV25HistoricoResgate4,0)},c2v:function(){gx.O.AV25HistoricoResgate4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vHISTORICORESGATE4",'.')},nac:gx.falseFn};
   GXValidFnc[66]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vHISTORICORESGATE5",gxz:"ZV26HistoricoResgate5",gxold:"OV26HistoricoResgate5",gxvar:"AV26HistoricoResgate5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26HistoricoResgate5=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV26HistoricoResgate5=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vHISTORICORESGATE5",gx.O.AV26HistoricoResgate5,0)},c2v:function(){gx.O.AV26HistoricoResgate5=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vHISTORICORESGATE5",'.')},nac:gx.falseFn};
   GXValidFnc[68]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vHISTORICORESGATE6",gxz:"ZV27HistoricoResgate6",gxold:"OV27HistoricoResgate6",gxvar:"AV27HistoricoResgate6",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27HistoricoResgate6=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27HistoricoResgate6=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vHISTORICORESGATE6",gx.O.AV27HistoricoResgate6,0)},c2v:function(){gx.O.AV27HistoricoResgate6=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vHISTORICORESGATE6",'.')},nac:gx.falseFn};
   GXValidFnc[70]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vHISTORICORESGATE7",gxz:"ZV28HistoricoResgate7",gxold:"OV28HistoricoResgate7",gxvar:"AV28HistoricoResgate7",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28HistoricoResgate7=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28HistoricoResgate7=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vHISTORICORESGATE7",gx.O.AV28HistoricoResgate7,0)},c2v:function(){gx.O.AV28HistoricoResgate7=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vHISTORICORESGATE7",'.')},nac:gx.falseFn};
   GXValidFnc[72]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vHISTORICORESGATE8",gxz:"ZV29HistoricoResgate8",gxold:"OV29HistoricoResgate8",gxvar:"AV29HistoricoResgate8",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29HistoricoResgate8=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV29HistoricoResgate8=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vHISTORICORESGATE8",gx.O.AV29HistoricoResgate8,0)},c2v:function(){gx.O.AV29HistoricoResgate8=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vHISTORICORESGATE8",'.')},nac:gx.falseFn};
   GXValidFnc[74]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vHISTORICORESGATE9",gxz:"ZV30HistoricoResgate9",gxold:"OV30HistoricoResgate9",gxvar:"AV30HistoricoResgate9",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30HistoricoResgate9=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30HistoricoResgate9=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vHISTORICORESGATE9",gx.O.AV30HistoricoResgate9,0)},c2v:function(){gx.O.AV30HistoricoResgate9=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vHISTORICORESGATE9",'.')},nac:gx.falseFn};
   GXValidFnc[76]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vHISTORICORESGATE10",gxz:"ZV22HistoricoResgate10",gxold:"OV22HistoricoResgate10",gxvar:"AV22HistoricoResgate10",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22HistoricoResgate10=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22HistoricoResgate10=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vHISTORICORESGATE10",gx.O.AV22HistoricoResgate10,0)},c2v:function(){gx.O.AV22HistoricoResgate10=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vHISTORICORESGATE10",'.')},nac:gx.falseFn};
   GXValidFnc[79]={fld:"TEXTBLOCK28", format:0,grid:0};
   GXValidFnc[81]={fld:"TABLE41",grid:0};
   GXValidFnc[82]={fld:"TABLE8",grid:0};
   GXValidFnc[85]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vHISTORICOAPLICACAO1",gxz:"ZV11HistoricoAplicacao1",gxold:"OV11HistoricoAplicacao1",gxvar:"AV11HistoricoAplicacao1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11HistoricoAplicacao1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11HistoricoAplicacao1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vHISTORICOAPLICACAO1",gx.O.AV11HistoricoAplicacao1,0)},c2v:function(){gx.O.AV11HistoricoAplicacao1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vHISTORICOAPLICACAO1",'.')},nac:gx.falseFn};
   GXValidFnc[87]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vHISTORICOAPLICACAO2",gxz:"ZV13HistoricoAplicacao2",gxold:"OV13HistoricoAplicacao2",gxvar:"AV13HistoricoAplicacao2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13HistoricoAplicacao2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV13HistoricoAplicacao2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vHISTORICOAPLICACAO2",gx.O.AV13HistoricoAplicacao2,0)},c2v:function(){gx.O.AV13HistoricoAplicacao2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vHISTORICOAPLICACAO2",'.')},nac:gx.falseFn};
   GXValidFnc[89]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vHISTORICOAPLICACAO3",gxz:"ZV14HistoricoAplicacao3",gxold:"OV14HistoricoAplicacao3",gxvar:"AV14HistoricoAplicacao3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14HistoricoAplicacao3=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV14HistoricoAplicacao3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vHISTORICOAPLICACAO3",gx.O.AV14HistoricoAplicacao3,0)},c2v:function(){gx.O.AV14HistoricoAplicacao3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vHISTORICOAPLICACAO3",'.')},nac:gx.falseFn};
   GXValidFnc[91]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vHISTORICOAPLICACAO4",gxz:"ZV15HistoricoAplicacao4",gxold:"OV15HistoricoAplicacao4",gxvar:"AV15HistoricoAplicacao4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15HistoricoAplicacao4=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV15HistoricoAplicacao4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vHISTORICOAPLICACAO4",gx.O.AV15HistoricoAplicacao4,0)},c2v:function(){gx.O.AV15HistoricoAplicacao4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vHISTORICOAPLICACAO4",'.')},nac:gx.falseFn};
   GXValidFnc[93]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vHISTORICOAPLICACAO5",gxz:"ZV16HistoricoAplicacao5",gxold:"OV16HistoricoAplicacao5",gxvar:"AV16HistoricoAplicacao5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16HistoricoAplicacao5=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16HistoricoAplicacao5=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vHISTORICOAPLICACAO5",gx.O.AV16HistoricoAplicacao5,0)},c2v:function(){gx.O.AV16HistoricoAplicacao5=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vHISTORICOAPLICACAO5",'.')},nac:gx.falseFn};
   GXValidFnc[95]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vHISTORICOAPLICACAO6",gxz:"ZV17HistoricoAplicacao6",gxold:"OV17HistoricoAplicacao6",gxvar:"AV17HistoricoAplicacao6",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17HistoricoAplicacao6=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17HistoricoAplicacao6=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vHISTORICOAPLICACAO6",gx.O.AV17HistoricoAplicacao6,0)},c2v:function(){gx.O.AV17HistoricoAplicacao6=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vHISTORICOAPLICACAO6",'.')},nac:gx.falseFn};
   GXValidFnc[97]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vHISTORICOAPLICACAO7",gxz:"ZV18HistoricoAplicacao7",gxold:"OV18HistoricoAplicacao7",gxvar:"AV18HistoricoAplicacao7",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18HistoricoAplicacao7=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18HistoricoAplicacao7=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vHISTORICOAPLICACAO7",gx.O.AV18HistoricoAplicacao7,0)},c2v:function(){gx.O.AV18HistoricoAplicacao7=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vHISTORICOAPLICACAO7",'.')},nac:gx.falseFn};
   GXValidFnc[99]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vHISTORICOAPLICACAO8",gxz:"ZV19HistoricoAplicacao8",gxold:"OV19HistoricoAplicacao8",gxvar:"AV19HistoricoAplicacao8",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19HistoricoAplicacao8=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19HistoricoAplicacao8=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vHISTORICOAPLICACAO8",gx.O.AV19HistoricoAplicacao8,0)},c2v:function(){gx.O.AV19HistoricoAplicacao8=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vHISTORICOAPLICACAO8",'.')},nac:gx.falseFn};
   GXValidFnc[101]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vHISTORICOAPLICACAO9",gxz:"ZV20HistoricoAplicacao9",gxold:"OV20HistoricoAplicacao9",gxvar:"AV20HistoricoAplicacao9",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20HistoricoAplicacao9=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20HistoricoAplicacao9=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vHISTORICOAPLICACAO9",gx.O.AV20HistoricoAplicacao9,0)},c2v:function(){gx.O.AV20HistoricoAplicacao9=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vHISTORICOAPLICACAO9",'.')},nac:gx.falseFn};
   GXValidFnc[103]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vHISTORICOAPLICACAO10",gxz:"ZV12HistoricoAplicacao10",gxold:"OV12HistoricoAplicacao10",gxvar:"AV12HistoricoAplicacao10",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12HistoricoAplicacao10=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12HistoricoAplicacao10=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vHISTORICOAPLICACAO10",gx.O.AV12HistoricoAplicacao10,0)},c2v:function(){gx.O.AV12HistoricoAplicacao10=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vHISTORICOAPLICACAO10",'.')},nac:gx.falseFn};
   GXValidFnc[106]={fld:"TEXTBLOCK29", format:0,grid:0};
   GXValidFnc[108]={fld:"TABLE42",grid:0};
   GXValidFnc[109]={fld:"TABLE4",grid:0};
   GXValidFnc[110]={fld:"TABLE9",grid:0};
   GXValidFnc[113]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vHISTORICORENDIMENTO1",gxz:"ZV36HistoricoRendimento1",gxold:"OV36HistoricoRendimento1",gxvar:"AV36HistoricoRendimento1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36HistoricoRendimento1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV36HistoricoRendimento1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vHISTORICORENDIMENTO1",gx.O.AV36HistoricoRendimento1,0)},c2v:function(){gx.O.AV36HistoricoRendimento1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vHISTORICORENDIMENTO1",'.')},nac:gx.falseFn};
   GXValidFnc[115]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vHISTORICORENDIMENTO2",gxz:"ZV37HistoricoRendimento2",gxold:"OV37HistoricoRendimento2",gxvar:"AV37HistoricoRendimento2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37HistoricoRendimento2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV37HistoricoRendimento2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vHISTORICORENDIMENTO2",gx.O.AV37HistoricoRendimento2,0)},c2v:function(){gx.O.AV37HistoricoRendimento2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vHISTORICORENDIMENTO2",'.')},nac:gx.falseFn};
   GXValidFnc[117]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vHISTORICORENDIMENTO3",gxz:"ZV38HistoricoRendimento3",gxold:"OV38HistoricoRendimento3",gxvar:"AV38HistoricoRendimento3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38HistoricoRendimento3=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV38HistoricoRendimento3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vHISTORICORENDIMENTO3",gx.O.AV38HistoricoRendimento3,0)},c2v:function(){gx.O.AV38HistoricoRendimento3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vHISTORICORENDIMENTO3",'.')},nac:gx.falseFn};
   GXValidFnc[119]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vHISTORICORENDIMENTO4",gxz:"ZV39HistoricoRendimento4",gxold:"OV39HistoricoRendimento4",gxvar:"AV39HistoricoRendimento4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39HistoricoRendimento4=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV39HistoricoRendimento4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vHISTORICORENDIMENTO4",gx.O.AV39HistoricoRendimento4,0)},c2v:function(){gx.O.AV39HistoricoRendimento4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vHISTORICORENDIMENTO4",'.')},nac:gx.falseFn};
   GXValidFnc[121]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vHISTORICORENDIMENTO5",gxz:"ZV40HistoricoRendimento5",gxold:"OV40HistoricoRendimento5",gxvar:"AV40HistoricoRendimento5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40HistoricoRendimento5=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV40HistoricoRendimento5=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vHISTORICORENDIMENTO5",gx.O.AV40HistoricoRendimento5,0)},c2v:function(){gx.O.AV40HistoricoRendimento5=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vHISTORICORENDIMENTO5",'.')},nac:gx.falseFn};
   GXValidFnc[123]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vHISTORICORENDIMENTO6",gxz:"ZV41HistoricoRendimento6",gxold:"OV41HistoricoRendimento6",gxvar:"AV41HistoricoRendimento6",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41HistoricoRendimento6=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV41HistoricoRendimento6=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vHISTORICORENDIMENTO6",gx.O.AV41HistoricoRendimento6,0)},c2v:function(){gx.O.AV41HistoricoRendimento6=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vHISTORICORENDIMENTO6",'.')},nac:gx.falseFn};
   GXValidFnc[125]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vHISTORICORENDIMENTO7",gxz:"ZV42HistoricoRendimento7",gxold:"OV42HistoricoRendimento7",gxvar:"AV42HistoricoRendimento7",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42HistoricoRendimento7=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV42HistoricoRendimento7=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vHISTORICORENDIMENTO7",gx.O.AV42HistoricoRendimento7,0)},c2v:function(){gx.O.AV42HistoricoRendimento7=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vHISTORICORENDIMENTO7",'.')},nac:gx.falseFn};
   GXValidFnc[127]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vHISTORICORENDIMENTO8",gxz:"ZV43HistoricoRendimento8",gxold:"OV43HistoricoRendimento8",gxvar:"AV43HistoricoRendimento8",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV43HistoricoRendimento8=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV43HistoricoRendimento8=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vHISTORICORENDIMENTO8",gx.O.AV43HistoricoRendimento8,0)},c2v:function(){gx.O.AV43HistoricoRendimento8=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vHISTORICORENDIMENTO8",'.')},nac:gx.falseFn};
   GXValidFnc[129]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vHISTORICORENDIMENTO9",gxz:"ZV44HistoricoRendimento9",gxold:"OV44HistoricoRendimento9",gxvar:"AV44HistoricoRendimento9",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV44HistoricoRendimento9=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV44HistoricoRendimento9=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vHISTORICORENDIMENTO9",gx.O.AV44HistoricoRendimento9,0)},c2v:function(){gx.O.AV44HistoricoRendimento9=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vHISTORICORENDIMENTO9",'.')},nac:gx.falseFn};
   GXValidFnc[131]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vHISTORICORENDIMENTO10",gxz:"ZV45HistoricoRendimento10",gxold:"OV45HistoricoRendimento10",gxvar:"AV45HistoricoRendimento10",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV45HistoricoRendimento10=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV45HistoricoRendimento10=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vHISTORICORENDIMENTO10",gx.O.AV45HistoricoRendimento10,0)},c2v:function(){gx.O.AV45HistoricoRendimento10=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vHISTORICORENDIMENTO10",'.')},nac:gx.falseFn};
   GXValidFnc[137]={fld:"TABLE3",grid:0};
   GXValidFnc[143]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Convenioempresaid,isvalid:null,rgrid:[],fld:"vCONVENIOEMPRESAID",gxz:"ZV6ConvenioEmpresaId",gxold:"OV6ConvenioEmpresaId",gxvar:"AV6ConvenioEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6ConvenioEmpresaId=Value},v2z:function(Value){gx.O.ZV6ConvenioEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCONVENIOEMPRESAID",gx.O.AV6ConvenioEmpresaId,0)},c2v:function(){gx.O.AV6ConvenioEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCONVENIOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[144]={fld:"JS", format:2,grid:0};
   GXValidFnc[146]={fld:"BTNHELP",grid:0};
   GXValidFnc[147]={fld:"PROMPT_CONVENIOID",grid:0};
   GXValidFnc[148]={fld:"PROMPT_HISTORICORESGATE1",grid:0};
   GXValidFnc[149]={fld:"PROMPT_HISTORICORESGATE2",grid:0};
   GXValidFnc[150]={fld:"PROMPT_HISTORICORESGATE3",grid:0};
   GXValidFnc[151]={fld:"PROMPT_HISTORICORESGATE4",grid:0};
   GXValidFnc[152]={fld:"PROMPT_HISTORICORESGATE5",grid:0};
   GXValidFnc[153]={fld:"PROMPT_HISTORICORESGATE6",grid:0};
   GXValidFnc[154]={fld:"PROMPT_HISTORICORESGATE7",grid:0};
   GXValidFnc[155]={fld:"PROMPT_HISTORICORESGATE8",grid:0};
   GXValidFnc[156]={fld:"PROMPT_HISTORICORESGATE9",grid:0};
   GXValidFnc[157]={fld:"PROMPT_HISTORICORESGATE10",grid:0};
   GXValidFnc[158]={fld:"PROMPT_HISTORICOAPLICACAO1",grid:0};
   GXValidFnc[159]={fld:"PROMPT_HISTORICOAPLICACAO2",grid:0};
   GXValidFnc[160]={fld:"PROMPT_HISTORICOAPLICACAO3",grid:0};
   GXValidFnc[161]={fld:"PROMPT_HISTORICOAPLICACAO4",grid:0};
   GXValidFnc[162]={fld:"PROMPT_HISTORICOAPLICACAO5",grid:0};
   GXValidFnc[163]={fld:"PROMPT_HISTORICOAPLICACAO6",grid:0};
   GXValidFnc[164]={fld:"PROMPT_HISTORICOAPLICACAO7",grid:0};
   GXValidFnc[165]={fld:"PROMPT_HISTORICOAPLICACAO8",grid:0};
   GXValidFnc[166]={fld:"PROMPT_HISTORICOAPLICACAO9",grid:0};
   GXValidFnc[167]={fld:"PROMPT_HISTORICOAPLICACAO10",grid:0};
   GXValidFnc[168]={fld:"PROMPT_HISTORICORENDIMENTO1",grid:0};
   GXValidFnc[169]={fld:"PROMPT_HISTORICORENDIMENTO2",grid:0};
   GXValidFnc[170]={fld:"PROMPT_HISTORICORENDIMENTO3",grid:0};
   GXValidFnc[171]={fld:"PROMPT_HISTORICORENDIMENTO4",grid:0};
   GXValidFnc[172]={fld:"PROMPT_HISTORICORENDIMENTO5",grid:0};
   GXValidFnc[173]={fld:"PROMPT_HISTORICORENDIMENTO6",grid:0};
   GXValidFnc[174]={fld:"PROMPT_HISTORICORENDIMENTO7",grid:0};
   GXValidFnc[175]={fld:"PROMPT_HISTORICORENDIMENTO8",grid:0};
   GXValidFnc[176]={fld:"PROMPT_HISTORICORENDIMENTO9",grid:0};
   GXValidFnc[177]={fld:"PROMPT_HISTORICORENDIMENTO10",grid:0};
   this.AV61TxtTela = "" ;
   this.ZV61TxtTela = "" ;
   this.OV61TxtTela = "" ;
   this.AV7ConvenioId = 0 ;
   this.ZV7ConvenioId = 0 ;
   this.OV7ConvenioId = 0 ;
   this.AV5ConvenioDescricao = "" ;
   this.ZV5ConvenioDescricao = "" ;
   this.OV5ConvenioDescricao = "" ;
   this.AV60SnCSV = "" ;
   this.ZV60SnCSV = "" ;
   this.OV60SnCSV = "" ;
   this.AV9DataIni = gx.date.nullDate() ;
   this.ZV9DataIni = gx.date.nullDate() ;
   this.OV9DataIni = gx.date.nullDate() ;
   this.AV8DataFim = gx.date.nullDate() ;
   this.ZV8DataFim = gx.date.nullDate() ;
   this.OV8DataFim = gx.date.nullDate() ;
   this.AV21HistoricoResgate1 = 0 ;
   this.ZV21HistoricoResgate1 = 0 ;
   this.OV21HistoricoResgate1 = 0 ;
   this.AV23HistoricoResgate2 = 0 ;
   this.ZV23HistoricoResgate2 = 0 ;
   this.OV23HistoricoResgate2 = 0 ;
   this.AV24HistoricoResgate3 = 0 ;
   this.ZV24HistoricoResgate3 = 0 ;
   this.OV24HistoricoResgate3 = 0 ;
   this.AV25HistoricoResgate4 = 0 ;
   this.ZV25HistoricoResgate4 = 0 ;
   this.OV25HistoricoResgate4 = 0 ;
   this.AV26HistoricoResgate5 = 0 ;
   this.ZV26HistoricoResgate5 = 0 ;
   this.OV26HistoricoResgate5 = 0 ;
   this.AV27HistoricoResgate6 = 0 ;
   this.ZV27HistoricoResgate6 = 0 ;
   this.OV27HistoricoResgate6 = 0 ;
   this.AV28HistoricoResgate7 = 0 ;
   this.ZV28HistoricoResgate7 = 0 ;
   this.OV28HistoricoResgate7 = 0 ;
   this.AV29HistoricoResgate8 = 0 ;
   this.ZV29HistoricoResgate8 = 0 ;
   this.OV29HistoricoResgate8 = 0 ;
   this.AV30HistoricoResgate9 = 0 ;
   this.ZV30HistoricoResgate9 = 0 ;
   this.OV30HistoricoResgate9 = 0 ;
   this.AV22HistoricoResgate10 = 0 ;
   this.ZV22HistoricoResgate10 = 0 ;
   this.OV22HistoricoResgate10 = 0 ;
   this.AV11HistoricoAplicacao1 = 0 ;
   this.ZV11HistoricoAplicacao1 = 0 ;
   this.OV11HistoricoAplicacao1 = 0 ;
   this.AV13HistoricoAplicacao2 = 0 ;
   this.ZV13HistoricoAplicacao2 = 0 ;
   this.OV13HistoricoAplicacao2 = 0 ;
   this.AV14HistoricoAplicacao3 = 0 ;
   this.ZV14HistoricoAplicacao3 = 0 ;
   this.OV14HistoricoAplicacao3 = 0 ;
   this.AV15HistoricoAplicacao4 = 0 ;
   this.ZV15HistoricoAplicacao4 = 0 ;
   this.OV15HistoricoAplicacao4 = 0 ;
   this.AV16HistoricoAplicacao5 = 0 ;
   this.ZV16HistoricoAplicacao5 = 0 ;
   this.OV16HistoricoAplicacao5 = 0 ;
   this.AV17HistoricoAplicacao6 = 0 ;
   this.ZV17HistoricoAplicacao6 = 0 ;
   this.OV17HistoricoAplicacao6 = 0 ;
   this.AV18HistoricoAplicacao7 = 0 ;
   this.ZV18HistoricoAplicacao7 = 0 ;
   this.OV18HistoricoAplicacao7 = 0 ;
   this.AV19HistoricoAplicacao8 = 0 ;
   this.ZV19HistoricoAplicacao8 = 0 ;
   this.OV19HistoricoAplicacao8 = 0 ;
   this.AV20HistoricoAplicacao9 = 0 ;
   this.ZV20HistoricoAplicacao9 = 0 ;
   this.OV20HistoricoAplicacao9 = 0 ;
   this.AV12HistoricoAplicacao10 = 0 ;
   this.ZV12HistoricoAplicacao10 = 0 ;
   this.OV12HistoricoAplicacao10 = 0 ;
   this.AV36HistoricoRendimento1 = 0 ;
   this.ZV36HistoricoRendimento1 = 0 ;
   this.OV36HistoricoRendimento1 = 0 ;
   this.AV37HistoricoRendimento2 = 0 ;
   this.ZV37HistoricoRendimento2 = 0 ;
   this.OV37HistoricoRendimento2 = 0 ;
   this.AV38HistoricoRendimento3 = 0 ;
   this.ZV38HistoricoRendimento3 = 0 ;
   this.OV38HistoricoRendimento3 = 0 ;
   this.AV39HistoricoRendimento4 = 0 ;
   this.ZV39HistoricoRendimento4 = 0 ;
   this.OV39HistoricoRendimento4 = 0 ;
   this.AV40HistoricoRendimento5 = 0 ;
   this.ZV40HistoricoRendimento5 = 0 ;
   this.OV40HistoricoRendimento5 = 0 ;
   this.AV41HistoricoRendimento6 = 0 ;
   this.ZV41HistoricoRendimento6 = 0 ;
   this.OV41HistoricoRendimento6 = 0 ;
   this.AV42HistoricoRendimento7 = 0 ;
   this.ZV42HistoricoRendimento7 = 0 ;
   this.OV42HistoricoRendimento7 = 0 ;
   this.AV43HistoricoRendimento8 = 0 ;
   this.ZV43HistoricoRendimento8 = 0 ;
   this.OV43HistoricoRendimento8 = 0 ;
   this.AV44HistoricoRendimento9 = 0 ;
   this.ZV44HistoricoRendimento9 = 0 ;
   this.OV44HistoricoRendimento9 = 0 ;
   this.AV45HistoricoRendimento10 = 0 ;
   this.ZV45HistoricoRendimento10 = 0 ;
   this.OV45HistoricoRendimento10 = 0 ;
   this.AV6ConvenioEmpresaId = "" ;
   this.ZV6ConvenioEmpresaId = "" ;
   this.OV6ConvenioEmpresaId = "" ;
   this.AV61TxtTela = "" ;
   this.AV7ConvenioId = 0 ;
   this.AV5ConvenioDescricao = "" ;
   this.AV60SnCSV = "" ;
   this.AV9DataIni = gx.date.nullDate() ;
   this.AV8DataFim = gx.date.nullDate() ;
   this.AV21HistoricoResgate1 = 0 ;
   this.AV23HistoricoResgate2 = 0 ;
   this.AV24HistoricoResgate3 = 0 ;
   this.AV25HistoricoResgate4 = 0 ;
   this.AV26HistoricoResgate5 = 0 ;
   this.AV27HistoricoResgate6 = 0 ;
   this.AV28HistoricoResgate7 = 0 ;
   this.AV29HistoricoResgate8 = 0 ;
   this.AV30HistoricoResgate9 = 0 ;
   this.AV22HistoricoResgate10 = 0 ;
   this.AV11HistoricoAplicacao1 = 0 ;
   this.AV13HistoricoAplicacao2 = 0 ;
   this.AV14HistoricoAplicacao3 = 0 ;
   this.AV15HistoricoAplicacao4 = 0 ;
   this.AV16HistoricoAplicacao5 = 0 ;
   this.AV17HistoricoAplicacao6 = 0 ;
   this.AV18HistoricoAplicacao7 = 0 ;
   this.AV19HistoricoAplicacao8 = 0 ;
   this.AV20HistoricoAplicacao9 = 0 ;
   this.AV12HistoricoAplicacao10 = 0 ;
   this.AV36HistoricoRendimento1 = 0 ;
   this.AV37HistoricoRendimento2 = 0 ;
   this.AV38HistoricoRendimento3 = 0 ;
   this.AV39HistoricoRendimento4 = 0 ;
   this.AV40HistoricoRendimento5 = 0 ;
   this.AV41HistoricoRendimento6 = 0 ;
   this.AV42HistoricoRendimento7 = 0 ;
   this.AV43HistoricoRendimento8 = 0 ;
   this.AV44HistoricoRendimento9 = 0 ;
   this.AV45HistoricoRendimento10 = 0 ;
   this.AV6ConvenioEmpresaId = "" ;
   this.A1004HistoricoCxaBcoId = 0 ;
   this.A1003HistoricoCxaBcoEmpresaId = "" ;
   this.A1002HistoricoCxaBcoTipo = "" ;
   this.A1681ConvenioId = 0 ;
   this.A1680ConvenioEmpresaId = "" ;
   this.A2082ConvenioDescricao = "" ;
   this.Events = {"e1220g2_client": ["'FECHAR'", true] ,"e1320g2_client": ["VCONVENIOID.ISVALID", true] ,"e1420g2_client": ["ENTER", true] ,"e1620g2_client": ["'SALVARTXT'", true] ,"e1720g2_client": ["VTXTTELA.CLICK", true] ,"e1820g2_client": ["'EXCLUIRTXT'", true] ,"e2020g2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV65Pgmname',fld:'vPGMNAME'},{av:'AV50SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV10EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV61TxtTela',fld:'vTXTTELA'}],[{av:'AV61TxtTela',fld:'vTXTTELA'},{av:'AV72GXV2',fld:'vGXV2'},{av:'AV51SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV71GXV1',fld:'vGXV1'},{av:'AV21HistoricoResgate1',fld:'vHISTORICORESGATE1'},{av:'AV23HistoricoResgate2',fld:'vHISTORICORESGATE2'},{av:'AV24HistoricoResgate3',fld:'vHISTORICORESGATE3'},{av:'AV25HistoricoResgate4',fld:'vHISTORICORESGATE4'},{av:'AV26HistoricoResgate5',fld:'vHISTORICORESGATE5'},{av:'AV27HistoricoResgate6',fld:'vHISTORICORESGATE6'},{av:'AV28HistoricoResgate7',fld:'vHISTORICORESGATE7'},{av:'AV29HistoricoResgate8',fld:'vHISTORICORESGATE8'},{av:'AV30HistoricoResgate9',fld:'vHISTORICORESGATE9'},{av:'AV22HistoricoResgate10',fld:'vHISTORICORESGATE10'},{av:'AV11HistoricoAplicacao1',fld:'vHISTORICOAPLICACAO1'},{av:'AV13HistoricoAplicacao2',fld:'vHISTORICOAPLICACAO2'},{av:'AV14HistoricoAplicacao3',fld:'vHISTORICOAPLICACAO3'},{av:'AV15HistoricoAplicacao4',fld:'vHISTORICOAPLICACAO4'},{av:'AV16HistoricoAplicacao5',fld:'vHISTORICOAPLICACAO5'},{av:'AV17HistoricoAplicacao6',fld:'vHISTORICOAPLICACAO6'},{av:'AV18HistoricoAplicacao7',fld:'vHISTORICOAPLICACAO7'},{av:'AV19HistoricoAplicacao8',fld:'vHISTORICOAPLICACAO8'},{av:'AV20HistoricoAplicacao9',fld:'vHISTORICOAPLICACAO9'},{av:'AV12HistoricoAplicacao10',fld:'vHISTORICOAPLICACAO10'},{av:'AV36HistoricoRendimento1',fld:'vHISTORICORENDIMENTO1'},{av:'AV37HistoricoRendimento2',fld:'vHISTORICORENDIMENTO2'},{av:'AV38HistoricoRendimento3',fld:'vHISTORICORENDIMENTO3'},{av:'AV39HistoricoRendimento4',fld:'vHISTORICORENDIMENTO4'},{av:'AV40HistoricoRendimento5',fld:'vHISTORICORENDIMENTO5'},{av:'AV41HistoricoRendimento6',fld:'vHISTORICORENDIMENTO6'},{av:'AV42HistoricoRendimento7',fld:'vHISTORICORENDIMENTO7'},{av:'AV43HistoricoRendimento8',fld:'vHISTORICORENDIMENTO8'},{av:'AV44HistoricoRendimento9',fld:'vHISTORICORENDIMENTO9'},{av:'AV45HistoricoRendimento10',fld:'vHISTORICORENDIMENTO10'},{av:'AV60SnCSV',fld:'vSNCSV'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["VCONVENIOID.ISVALID"] = [[{av:'AV6ConvenioEmpresaId',fld:'vCONVENIOEMPRESAID'},{av:'AV7ConvenioId',fld:'vCONVENIOID'}],[{av:'AV5ConvenioDescricao',fld:'vCONVENIODESCRICAO'}]];
   this.EvtParms["ENTER"] = [[{av:'AV46TpErro',fld:'vTPERRO'},{av:'AV61TxtTela',fld:'vTXTTELA'},{av:'AV65Pgmname',fld:'vPGMNAME'},{av:'AV58Ordenacao',fld:'vORDENACAO'},{av:'AV59OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV57QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV7ConvenioId',fld:'vCONVENIOID'},{av:'AV9DataIni',fld:'vDATAINI'},{av:'AV8DataFim',fld:'vDATAFIM'},{av:'AV21HistoricoResgate1',fld:'vHISTORICORESGATE1'},{av:'AV23HistoricoResgate2',fld:'vHISTORICORESGATE2'},{av:'AV24HistoricoResgate3',fld:'vHISTORICORESGATE3'},{av:'AV25HistoricoResgate4',fld:'vHISTORICORESGATE4'},{av:'AV26HistoricoResgate5',fld:'vHISTORICORESGATE5'},{av:'AV27HistoricoResgate6',fld:'vHISTORICORESGATE6'},{av:'AV28HistoricoResgate7',fld:'vHISTORICORESGATE7'},{av:'AV29HistoricoResgate8',fld:'vHISTORICORESGATE8'},{av:'AV30HistoricoResgate9',fld:'vHISTORICORESGATE9'},{av:'AV22HistoricoResgate10',fld:'vHISTORICORESGATE10'},{av:'AV11HistoricoAplicacao1',fld:'vHISTORICOAPLICACAO1'},{av:'AV13HistoricoAplicacao2',fld:'vHISTORICOAPLICACAO2'},{av:'AV14HistoricoAplicacao3',fld:'vHISTORICOAPLICACAO3'},{av:'AV15HistoricoAplicacao4',fld:'vHISTORICOAPLICACAO4'},{av:'AV16HistoricoAplicacao5',fld:'vHISTORICOAPLICACAO5'},{av:'AV17HistoricoAplicacao6',fld:'vHISTORICOAPLICACAO6'},{av:'AV18HistoricoAplicacao7',fld:'vHISTORICOAPLICACAO7'},{av:'AV19HistoricoAplicacao8',fld:'vHISTORICOAPLICACAO8'},{av:'AV20HistoricoAplicacao9',fld:'vHISTORICOAPLICACAO9'},{av:'AV12HistoricoAplicacao10',fld:'vHISTORICOAPLICACAO10'},{av:'AV36HistoricoRendimento1',fld:'vHISTORICORENDIMENTO1'},{av:'AV37HistoricoRendimento2',fld:'vHISTORICORENDIMENTO2'},{av:'AV38HistoricoRendimento3',fld:'vHISTORICORENDIMENTO3'},{av:'AV39HistoricoRendimento4',fld:'vHISTORICORENDIMENTO4'},{av:'AV40HistoricoRendimento5',fld:'vHISTORICORENDIMENTO5'},{av:'AV41HistoricoRendimento6',fld:'vHISTORICORENDIMENTO6'},{av:'AV42HistoricoRendimento7',fld:'vHISTORICORENDIMENTO7'},{av:'AV43HistoricoRendimento8',fld:'vHISTORICORENDIMENTO8'},{av:'AV44HistoricoRendimento9',fld:'vHISTORICORENDIMENTO9'},{av:'AV45HistoricoRendimento10',fld:'vHISTORICORENDIMENTO10'},{av:'AV60SnCSV',fld:'vSNCSV'},{av:'A1680ConvenioEmpresaId',fld:'CONVENIOEMPRESAID'},{av:'AV6ConvenioEmpresaId',fld:'vCONVENIOEMPRESAID'},{av:'A1681ConvenioId',fld:'CONVENIOID'},{av:'A2082ConvenioDescricao',fld:'CONVENIODESCRICAO'},{av:'AV52Historico',fld:'vHISTORICO'},{av:'A1003HistoricoCxaBcoEmpresaId',fld:'HISTORICOCXABCOEMPRESAID'},{av:'AV53HistoricoCxaBcoEmpresaId',fld:'vHISTORICOCXABCOEMPRESAID'},{av:'A1004HistoricoCxaBcoId',fld:'HISTORICOCXABCOID'},{av:'A1002HistoricoCxaBcoTipo',fld:'HISTORICOCXABCOTIPO'},{av:'AV10EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[{av:'AV62SNTxtTelaRelat',fld:'vSNTXTTELARELAT'},{av:'AV55NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV56NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV60SnCSV',fld:'vSNCSV'},{av:'AV45HistoricoRendimento10',fld:'vHISTORICORENDIMENTO10'},{av:'AV44HistoricoRendimento9',fld:'vHISTORICORENDIMENTO9'},{av:'AV43HistoricoRendimento8',fld:'vHISTORICORENDIMENTO8'},{av:'AV42HistoricoRendimento7',fld:'vHISTORICORENDIMENTO7'},{av:'AV41HistoricoRendimento6',fld:'vHISTORICORENDIMENTO6'},{av:'AV40HistoricoRendimento5',fld:'vHISTORICORENDIMENTO5'},{av:'AV39HistoricoRendimento4',fld:'vHISTORICORENDIMENTO4'},{av:'AV38HistoricoRendimento3',fld:'vHISTORICORENDIMENTO3'},{av:'AV37HistoricoRendimento2',fld:'vHISTORICORENDIMENTO2'},{av:'AV36HistoricoRendimento1',fld:'vHISTORICORENDIMENTO1'},{av:'AV12HistoricoAplicacao10',fld:'vHISTORICOAPLICACAO10'},{av:'AV20HistoricoAplicacao9',fld:'vHISTORICOAPLICACAO9'},{av:'AV19HistoricoAplicacao8',fld:'vHISTORICOAPLICACAO8'},{av:'AV18HistoricoAplicacao7',fld:'vHISTORICOAPLICACAO7'},{av:'AV17HistoricoAplicacao6',fld:'vHISTORICOAPLICACAO6'},{av:'AV16HistoricoAplicacao5',fld:'vHISTORICOAPLICACAO5'},{av:'AV15HistoricoAplicacao4',fld:'vHISTORICOAPLICACAO4'},{av:'AV14HistoricoAplicacao3',fld:'vHISTORICOAPLICACAO3'},{av:'AV13HistoricoAplicacao2',fld:'vHISTORICOAPLICACAO2'},{av:'AV11HistoricoAplicacao1',fld:'vHISTORICOAPLICACAO1'},{av:'AV22HistoricoResgate10',fld:'vHISTORICORESGATE10'},{av:'AV30HistoricoResgate9',fld:'vHISTORICORESGATE9'},{av:'AV29HistoricoResgate8',fld:'vHISTORICORESGATE8'},{av:'AV28HistoricoResgate7',fld:'vHISTORICORESGATE7'},{av:'AV27HistoricoResgate6',fld:'vHISTORICORESGATE6'},{av:'AV26HistoricoResgate5',fld:'vHISTORICORESGATE5'},{av:'AV25HistoricoResgate4',fld:'vHISTORICORESGATE4'},{av:'AV24HistoricoResgate3',fld:'vHISTORICORESGATE3'},{av:'AV23HistoricoResgate2',fld:'vHISTORICORESGATE2'},{av:'AV21HistoricoResgate1',fld:'vHISTORICORESGATE1'},{av:'AV8DataFim',fld:'vDATAFIM'},{av:'AV9DataIni',fld:'vDATAINI'},{av:'AV7ConvenioId',fld:'vCONVENIOID'},{av:'AV57QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV59OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV46TpErro',fld:'vTPERRO'},{av:'AV67GXLvl79',fld:'vGXLVL79'},{av:'AV5ConvenioDescricao',fld:'vCONVENIODESCRICAO'},{av:'AV54x',fld:'vX'},{av:'AV52Historico',fld:'vHISTORICO'},{av:'AV68GXLvl143',fld:'vGXLVL143'},{av:'AV69GXLvl220',fld:'vGXLVL220'},{av:'AV70GXLvl297',fld:'vGXLVL297'},{av:'AV61TxtTela',fld:'vTXTTELA'},{av:'AV48OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["'SALVARTXT'"] = [[{av:'AV10EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV61TxtTela',fld:'vTXTTELA'},{av:'AV65Pgmname',fld:'vPGMNAME'},{av:'AV21HistoricoResgate1',fld:'vHISTORICORESGATE1'},{av:'AV23HistoricoResgate2',fld:'vHISTORICORESGATE2'},{av:'AV24HistoricoResgate3',fld:'vHISTORICORESGATE3'},{av:'AV25HistoricoResgate4',fld:'vHISTORICORESGATE4'},{av:'AV26HistoricoResgate5',fld:'vHISTORICORESGATE5'},{av:'AV27HistoricoResgate6',fld:'vHISTORICORESGATE6'},{av:'AV28HistoricoResgate7',fld:'vHISTORICORESGATE7'},{av:'AV29HistoricoResgate8',fld:'vHISTORICORESGATE8'},{av:'AV30HistoricoResgate9',fld:'vHISTORICORESGATE9'},{av:'AV22HistoricoResgate10',fld:'vHISTORICORESGATE10'},{av:'AV11HistoricoAplicacao1',fld:'vHISTORICOAPLICACAO1'},{av:'AV13HistoricoAplicacao2',fld:'vHISTORICOAPLICACAO2'},{av:'AV14HistoricoAplicacao3',fld:'vHISTORICOAPLICACAO3'},{av:'AV15HistoricoAplicacao4',fld:'vHISTORICOAPLICACAO4'},{av:'AV16HistoricoAplicacao5',fld:'vHISTORICOAPLICACAO5'},{av:'AV17HistoricoAplicacao6',fld:'vHISTORICOAPLICACAO6'},{av:'AV18HistoricoAplicacao7',fld:'vHISTORICOAPLICACAO7'},{av:'AV19HistoricoAplicacao8',fld:'vHISTORICOAPLICACAO8'},{av:'AV20HistoricoAplicacao9',fld:'vHISTORICOAPLICACAO9'},{av:'AV12HistoricoAplicacao10',fld:'vHISTORICOAPLICACAO10'},{av:'AV36HistoricoRendimento1',fld:'vHISTORICORENDIMENTO1'},{av:'AV37HistoricoRendimento2',fld:'vHISTORICORENDIMENTO2'},{av:'AV38HistoricoRendimento3',fld:'vHISTORICORENDIMENTO3'},{av:'AV39HistoricoRendimento4',fld:'vHISTORICORENDIMENTO4'},{av:'AV40HistoricoRendimento5',fld:'vHISTORICORENDIMENTO5'},{av:'AV41HistoricoRendimento6',fld:'vHISTORICORENDIMENTO6'},{av:'AV42HistoricoRendimento7',fld:'vHISTORICORENDIMENTO7'},{av:'AV43HistoricoRendimento8',fld:'vHISTORICORENDIMENTO8'},{av:'AV44HistoricoRendimento9',fld:'vHISTORICORENDIMENTO9'},{av:'AV45HistoricoRendimento10',fld:'vHISTORICORENDIMENTO10'},{av:'AV60SnCSV',fld:'vSNCSV'}],[{av:'AV48OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["VTXTTELA.CLICK"] = [[{av:'AV65Pgmname',fld:'vPGMNAME'},{av:'AV50SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV61TxtTela',fld:'vTXTTELA'},{av:'AV10EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[{av:'AV71GXV1',fld:'vGXV1'},{av:'AV51SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV21HistoricoResgate1',fld:'vHISTORICORESGATE1'},{av:'AV23HistoricoResgate2',fld:'vHISTORICORESGATE2'},{av:'AV24HistoricoResgate3',fld:'vHISTORICORESGATE3'},{av:'AV25HistoricoResgate4',fld:'vHISTORICORESGATE4'},{av:'AV26HistoricoResgate5',fld:'vHISTORICORESGATE5'},{av:'AV27HistoricoResgate6',fld:'vHISTORICORESGATE6'},{av:'AV28HistoricoResgate7',fld:'vHISTORICORESGATE7'},{av:'AV29HistoricoResgate8',fld:'vHISTORICORESGATE8'},{av:'AV30HistoricoResgate9',fld:'vHISTORICORESGATE9'},{av:'AV22HistoricoResgate10',fld:'vHISTORICORESGATE10'},{av:'AV11HistoricoAplicacao1',fld:'vHISTORICOAPLICACAO1'},{av:'AV13HistoricoAplicacao2',fld:'vHISTORICOAPLICACAO2'},{av:'AV14HistoricoAplicacao3',fld:'vHISTORICOAPLICACAO3'},{av:'AV15HistoricoAplicacao4',fld:'vHISTORICOAPLICACAO4'},{av:'AV16HistoricoAplicacao5',fld:'vHISTORICOAPLICACAO5'},{av:'AV17HistoricoAplicacao6',fld:'vHISTORICOAPLICACAO6'},{av:'AV18HistoricoAplicacao7',fld:'vHISTORICOAPLICACAO7'},{av:'AV19HistoricoAplicacao8',fld:'vHISTORICOAPLICACAO8'},{av:'AV20HistoricoAplicacao9',fld:'vHISTORICOAPLICACAO9'},{av:'AV12HistoricoAplicacao10',fld:'vHISTORICOAPLICACAO10'},{av:'AV36HistoricoRendimento1',fld:'vHISTORICORENDIMENTO1'},{av:'AV37HistoricoRendimento2',fld:'vHISTORICORENDIMENTO2'},{av:'AV38HistoricoRendimento3',fld:'vHISTORICORENDIMENTO3'},{av:'AV39HistoricoRendimento4',fld:'vHISTORICORENDIMENTO4'},{av:'AV40HistoricoRendimento5',fld:'vHISTORICORENDIMENTO5'},{av:'AV41HistoricoRendimento6',fld:'vHISTORICORENDIMENTO6'},{av:'AV42HistoricoRendimento7',fld:'vHISTORICORENDIMENTO7'},{av:'AV43HistoricoRendimento8',fld:'vHISTORICORENDIMENTO8'},{av:'AV44HistoricoRendimento9',fld:'vHISTORICORENDIMENTO9'},{av:'AV45HistoricoRendimento10',fld:'vHISTORICORENDIMENTO10'},{av:'AV60SnCSV',fld:'vSNCSV'}]];
   this.EvtParms["'EXCLUIRTXT'"] = [[{av:'AV10EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV65Pgmname',fld:'vPGMNAME'},{av:'AV61TxtTela',fld:'vTXTTELA'}],[]];
   this.setPrompt("PROMPT_CONVENIOID", [25]);
   this.setPrompt("PROMPT_HISTORICORESGATE1", [58]);
   this.setPrompt("PROMPT_HISTORICORESGATE2", [60]);
   this.setPrompt("PROMPT_HISTORICORESGATE3", [62]);
   this.setPrompt("PROMPT_HISTORICORESGATE4", [64]);
   this.setPrompt("PROMPT_HISTORICORESGATE5", [66]);
   this.setPrompt("PROMPT_HISTORICORESGATE6", [68]);
   this.setPrompt("PROMPT_HISTORICORESGATE7", [70]);
   this.setPrompt("PROMPT_HISTORICORESGATE8", [72]);
   this.setPrompt("PROMPT_HISTORICORESGATE9", [74]);
   this.setPrompt("PROMPT_HISTORICORESGATE10", [76]);
   this.setPrompt("PROMPT_HISTORICOAPLICACAO1", [85]);
   this.setPrompt("PROMPT_HISTORICOAPLICACAO2", [87]);
   this.setPrompt("PROMPT_HISTORICOAPLICACAO3", [89]);
   this.setPrompt("PROMPT_HISTORICOAPLICACAO4", [91]);
   this.setPrompt("PROMPT_HISTORICOAPLICACAO5", [93]);
   this.setPrompt("PROMPT_HISTORICOAPLICACAO6", [95]);
   this.setPrompt("PROMPT_HISTORICOAPLICACAO7", [97]);
   this.setPrompt("PROMPT_HISTORICOAPLICACAO8", [99]);
   this.setPrompt("PROMPT_HISTORICOAPLICACAO9", [101]);
   this.setPrompt("PROMPT_HISTORICOAPLICACAO10", [103]);
   this.setPrompt("PROMPT_HISTORICORENDIMENTO1", [113]);
   this.setPrompt("PROMPT_HISTORICORENDIMENTO2", [115]);
   this.setPrompt("PROMPT_HISTORICORENDIMENTO3", [117]);
   this.setPrompt("PROMPT_HISTORICORENDIMENTO4", [119]);
   this.setPrompt("PROMPT_HISTORICORENDIMENTO5", [121]);
   this.setPrompt("PROMPT_HISTORICORENDIMENTO6", [123]);
   this.setPrompt("PROMPT_HISTORICORENDIMENTO7", [125]);
   this.setPrompt("PROMPT_HISTORICORENDIMENTO8", [127]);
   this.setPrompt("PROMPT_HISTORICORENDIMENTO9", [129]);
   this.setPrompt("PROMPT_HISTORICORENDIMENTO10", [131]);
   this.EnterCtrl = ["BTNIMPRIMIR"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hlancamentosconvenio());
