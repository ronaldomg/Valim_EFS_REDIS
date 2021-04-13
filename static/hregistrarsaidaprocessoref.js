/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:36:52.61
*/
gx.evt.autoSkip = false;
gx.define('hregistrarsaidaprocessoref', false, function () {
   this.ServerClass =  "hregistrarsaidaprocessoref" ;
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
      this.AV13SaidaEmpresaid=gx.fn.getControlValue("vSAIDAEMPRESAID") ;
      this.AV14SaidaId=gx.fn.getIntegerValue("vSAIDAID",'.') ;
      this.AV19SaidaProcRefNumeroParm=gx.fn.getControlValue("vSAIDAPROCREFNUMEROPARM") ;
      this.AV16Modo=gx.fn.getControlValue("vMODO") ;
   };
   this.Validv_Saidaprocrefnumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSAIDAPROCREFNUMERO");
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
      this.AV18SnErro =  "N"  ;
      if ( (""==this.AV15SaidaProcRefNumero) && this.AV18SnErro == "N" && this.AV16Modo == "INS" )
      {
         this.addMessage("Informe o número do processo.");
         gx.fn.usrSetFocus("vSAIDAPROCREFNUMERO") ;
         this.AV18SnErro =  "S"  ;
      }
      if ( (""==this.AV17SaidaProcRefOrigem) && this.AV18SnErro == "N" )
      {
         this.addMessage("Informe a origem.");
         gx.fn.usrSetFocus("vSAIDAPROCREFORIGEM") ;
         this.AV18SnErro =  "S"  ;
      }
   };
   this.e121dr2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e131dr2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e151dr2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15];
   this.GXLastCtrlId =15;
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE3",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Saidaprocrefnumero,isvalid:null,rgrid:[],fld:"vSAIDAPROCREFNUMERO",gxz:"ZV15SaidaProcRefNumero",gxold:"OV15SaidaProcRefNumero",gxvar:"AV15SaidaProcRefNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15SaidaProcRefNumero=Value},v2z:function(Value){gx.O.ZV15SaidaProcRefNumero=Value},v2c:function(){gx.fn.setControlValue("vSAIDAPROCREFNUMERO",gx.O.AV15SaidaProcRefNumero,0)},c2v:function(){gx.O.AV15SaidaProcRefNumero=this.val()},val:function(){return gx.fn.getControlValue("vSAIDAPROCREFNUMERO")},nac:gx.falseFn};
   GXValidFnc[13]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDAPROCREFORIGEM",gxz:"ZV17SaidaProcRefOrigem",gxold:"OV17SaidaProcRefOrigem",gxvar:"AV17SaidaProcRefOrigem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV17SaidaProcRefOrigem=Value},v2z:function(Value){gx.O.ZV17SaidaProcRefOrigem=Value},v2c:function(){gx.fn.setComboBoxValue("vSAIDAPROCREFORIGEM",gx.O.AV17SaidaProcRefOrigem)},c2v:function(){gx.O.AV17SaidaProcRefOrigem=this.val()},val:function(){return gx.fn.getControlValue("vSAIDAPROCREFORIGEM")},nac:gx.falseFn};
   this.AV15SaidaProcRefNumero = "" ;
   this.ZV15SaidaProcRefNumero = "" ;
   this.OV15SaidaProcRefNumero = "" ;
   this.AV17SaidaProcRefOrigem = "" ;
   this.ZV17SaidaProcRefOrigem = "" ;
   this.OV17SaidaProcRefOrigem = "" ;
   this.AV15SaidaProcRefNumero = "" ;
   this.AV17SaidaProcRefOrigem = "" ;
   this.AV13SaidaEmpresaid = "" ;
   this.AV14SaidaId = 0 ;
   this.AV19SaidaProcRefNumeroParm = "" ;
   this.AV16Modo = "" ;
   this.A6313SaidaProcRefNumero = "" ;
   this.A4307SaidaId = 0 ;
   this.A4306SaidaEmpresaId = "" ;
   this.A6300SaidaProcRefOrigem = "" ;
   this.AV18SnErro = "" ;
   this.Events = {"e121dr2_client": ["ENTER", true] ,"e131dr2_client": ["'FECHAR'", true] ,"e151dr2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV18SnErro',fld:'vSNERRO'},{av:'AV13SaidaEmpresaid',fld:'vSAIDAEMPRESAID',hsh:true},{av:'AV14SaidaId',fld:'vSAIDAID',hsh:true},{av:'AV15SaidaProcRefNumero',fld:'vSAIDAPROCREFNUMERO'},{av:'AV17SaidaProcRefOrigem',fld:'vSAIDAPROCREFORIGEM'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV16Modo',fld:'vMODO',hsh:true},{av:'AV19SaidaProcRefNumeroParm',fld:'vSAIDAPROCREFNUMEROPARM'}],[{av:'AV18SnErro',fld:'vSNERRO'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV19SaidaProcRefNumeroParm',fld:'vSAIDAPROCREFNUMEROPARM'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV13SaidaEmpresaid", "vSAIDAEMPRESAID", 0, "char");
   this.setVCMap("AV14SaidaId", "vSAIDAID", 0, "int");
   this.setVCMap("AV19SaidaProcRefNumeroParm", "vSAIDAPROCREFNUMEROPARM", 0, "char");
   this.setVCMap("AV16Modo", "vMODO", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hregistrarsaidaprocessoref());
