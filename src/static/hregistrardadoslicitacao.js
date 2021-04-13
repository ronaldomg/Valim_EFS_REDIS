/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:6:39.52
*/
gx.evt.autoSkip = false;
gx.define('hregistrardadoslicitacao', false, function () {
   this.ServerClass =  "hregistrardadoslicitacao" ;
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
      this.AV23SolicitacaoNumero=gx.fn.getIntegerValue("vSOLICITACAONUMERO",'.') ;
      this.AV34SolicitacaoSituacao=gx.fn.getControlValue("vSOLICITACAOSITUACAO") ;
   };
   this.Validv_Tipolicitacaoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOLICITACAOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Empresapadrao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAPADRAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12px2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13px2_client=function()
   {
      this.executeServerEvent("'CANCELAR'", false, null, false, false);
   };
   this.e14px2_client=function()
   {
      this.executeServerEvent("VTIPOLICITACAOID.ISVALID", true, null, false, true);
   };
   this.e16px2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,11,12,15,17,18,21,23,26,28,30,33,35,38,40,43,45,51,54,55,59,61,63];
   this.GXLastCtrlId =63;
   GXValidFnc[3]={fld:"TABLE4",grid:0};
   GXValidFnc[6]={fld:"TABLE1",grid:0};
   GXValidFnc[9]={fld:"IMAGE1",grid:0};
   GXValidFnc[11]={fld:"MSGERRO", format:0,grid:0};
   GXValidFnc[12]={fld:"MSGERRO2", format:0,grid:0};
   GXValidFnc[15]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tipolicitacaoid,isvalid:'e14px2_client',rgrid:[],fld:"vTIPOLICITACAOID",gxz:"ZV11TipoLicitacaoId",gxold:"OV11TipoLicitacaoId",gxvar:"AV11TipoLicitacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11TipoLicitacaoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11TipoLicitacaoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOLICITACAOID",gx.O.AV11TipoLicitacaoId,0)},c2v:function(){gx.O.AV11TipoLicitacaoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOLICITACAOID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOLICITACAODESCRICAO",gxz:"ZV16TipoLicitacaoDescricao",gxold:"OV16TipoLicitacaoDescricao",gxvar:"AV16TipoLicitacaoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16TipoLicitacaoDescricao=Value},v2z:function(Value){gx.O.ZV16TipoLicitacaoDescricao=Value},v2c:function(){gx.fn.setControlValue("vTIPOLICITACAODESCRICAO",gx.O.AV16TipoLicitacaoDescricao,0)},c2v:function(){gx.O.AV16TipoLicitacaoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTIPOLICITACAODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[23]={fld:"TABLE6",grid:0};
   GXValidFnc[26]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSOLICITACAOANOLICITACAO",gxz:"ZV12SolicitacaoAnoLicitacao",gxold:"OV12SolicitacaoAnoLicitacao",gxvar:"AV12SolicitacaoAnoLicitacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12SolicitacaoAnoLicitacao=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12SolicitacaoAnoLicitacao=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSOLICITACAOANOLICITACAO",gx.O.AV12SolicitacaoAnoLicitacao,0)},c2v:function(){gx.O.AV12SolicitacaoAnoLicitacao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSOLICITACAOANOLICITACAO",'.')},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSOLICITACAONOLICITACAO",gxz:"ZV14SolicitacaoNoLicitacao",gxold:"OV14SolicitacaoNoLicitacao",gxvar:"AV14SolicitacaoNoLicitacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14SolicitacaoNoLicitacao=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV14SolicitacaoNoLicitacao=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSOLICITACAONOLICITACAO",gx.O.AV14SolicitacaoNoLicitacao,0)},c2v:function(){gx.O.AV14SolicitacaoNoLicitacao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSOLICITACAONOLICITACAO",'.')},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSOLICITACAOVALORLICITACAO",gxz:"ZV17SolicitacaoValorLicitacao",gxold:"OV17SolicitacaoValorLicitacao",gxvar:"AV17SolicitacaoValorLicitacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17SolicitacaoValorLicitacao=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV17SolicitacaoValorLicitacao=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vSOLICITACAOVALORLICITACAO",gx.O.AV17SolicitacaoValorLicitacao,2,',')},c2v:function(){gx.O.AV17SolicitacaoValorLicitacao=this.val()},val:function(){return gx.fn.getDecimalValue("vSOLICITACAOVALORLICITACAO",'.',',')},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSOLICITACAODESCRICAOLICITACAO",gxz:"ZV13SolicitacaoDescricaoLicitacao",gxold:"OV13SolicitacaoDescricaoLicitacao",gxvar:"AV13SolicitacaoDescricaoLicitacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13SolicitacaoDescricaoLicitacao=Value},v2z:function(Value){gx.O.ZV13SolicitacaoDescricaoLicitacao=Value},v2c:function(){gx.fn.setControlValue("vSOLICITACAODESCRICAOLICITACAO",gx.O.AV13SolicitacaoDescricaoLicitacao,0)},c2v:function(){gx.O.AV13SolicitacaoDescricaoLicitacao=this.val()},val:function(){return gx.fn.getControlValue("vSOLICITACAODESCRICAOLICITACAO")},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"vchar",len:3000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSOLICITACAOOBJETIVOLICITACAO",gxz:"ZV15SolicitacaoObjetivoLicitacao",gxold:"OV15SolicitacaoObjetivoLicitacao",gxvar:"AV15SolicitacaoObjetivoLicitacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15SolicitacaoObjetivoLicitacao=Value},v2z:function(Value){gx.O.ZV15SolicitacaoObjetivoLicitacao=Value},v2c:function(){gx.fn.setControlValue("vSOLICITACAOOBJETIVOLICITACAO",gx.O.AV15SolicitacaoObjetivoLicitacao,0)},c2v:function(){gx.O.AV15SolicitacaoObjetivoLicitacao=this.val()},val:function(){return gx.fn.getControlValue("vSOLICITACAOOBJETIVOLICITACAO")},nac:gx.falseFn};
   GXValidFnc[51]={fld:"TABLE5",grid:0};
   GXValidFnc[54]={fld:"JS", format:2,grid:0};
   GXValidFnc[55]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapadrao,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAO",gxz:"ZV19EmpresaPadrao",gxold:"OV19EmpresaPadrao",gxvar:"AV19EmpresaPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19EmpresaPadrao=Value},v2z:function(Value){gx.O.ZV19EmpresaPadrao=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAO",gx.O.AV19EmpresaPadrao,0)},c2v:function(){gx.O.AV19EmpresaPadrao=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAO")},nac:gx.falseFn};
   GXValidFnc[59]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOLICITACAOEMPRESAID",gxz:"ZV37TipoLicitacaoEmpresaId",gxold:"OV37TipoLicitacaoEmpresaId",gxvar:"AV37TipoLicitacaoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37TipoLicitacaoEmpresaId=Value},v2z:function(Value){gx.O.ZV37TipoLicitacaoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vTIPOLICITACAOEMPRESAID",gx.O.AV37TipoLicitacaoEmpresaId,0)},c2v:function(){gx.O.AV37TipoLicitacaoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vTIPOLICITACAOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[61]={fld:"BTNHELP",grid:0};
   GXValidFnc[63]={fld:"PROMPT_TIPOLICITACAOID",grid:0};
   this.AV11TipoLicitacaoId = 0 ;
   this.ZV11TipoLicitacaoId = 0 ;
   this.OV11TipoLicitacaoId = 0 ;
   this.AV16TipoLicitacaoDescricao = "" ;
   this.ZV16TipoLicitacaoDescricao = "" ;
   this.OV16TipoLicitacaoDescricao = "" ;
   this.AV12SolicitacaoAnoLicitacao = 0 ;
   this.ZV12SolicitacaoAnoLicitacao = 0 ;
   this.OV12SolicitacaoAnoLicitacao = 0 ;
   this.AV14SolicitacaoNoLicitacao = 0 ;
   this.ZV14SolicitacaoNoLicitacao = 0 ;
   this.OV14SolicitacaoNoLicitacao = 0 ;
   this.AV17SolicitacaoValorLicitacao = 0 ;
   this.ZV17SolicitacaoValorLicitacao = 0 ;
   this.OV17SolicitacaoValorLicitacao = 0 ;
   this.AV13SolicitacaoDescricaoLicitacao = "" ;
   this.ZV13SolicitacaoDescricaoLicitacao = "" ;
   this.OV13SolicitacaoDescricaoLicitacao = "" ;
   this.AV15SolicitacaoObjetivoLicitacao = "" ;
   this.ZV15SolicitacaoObjetivoLicitacao = "" ;
   this.OV15SolicitacaoObjetivoLicitacao = "" ;
   this.AV19EmpresaPadrao = "" ;
   this.ZV19EmpresaPadrao = "" ;
   this.OV19EmpresaPadrao = "" ;
   this.AV37TipoLicitacaoEmpresaId = "" ;
   this.ZV37TipoLicitacaoEmpresaId = "" ;
   this.OV37TipoLicitacaoEmpresaId = "" ;
   this.AV11TipoLicitacaoId = 0 ;
   this.AV16TipoLicitacaoDescricao = "" ;
   this.AV12SolicitacaoAnoLicitacao = 0 ;
   this.AV14SolicitacaoNoLicitacao = 0 ;
   this.AV17SolicitacaoValorLicitacao = 0 ;
   this.AV13SolicitacaoDescricaoLicitacao = "" ;
   this.AV15SolicitacaoObjetivoLicitacao = "" ;
   this.AV19EmpresaPadrao = "" ;
   this.AV37TipoLicitacaoEmpresaId = "" ;
   this.AV23SolicitacaoNumero = 0 ;
   this.AV34SolicitacaoSituacao = "" ;
   this.A3371SolicitacaoNumero = 0 ;
   this.A3370SolicitacaoEmpresaId = "" ;
   this.A2472TipoLicitacaoId = 0 ;
   this.A2473TipoLicitacaoDescricao = "" ;
   this.A4030SolicitacaoAnoLicitacao = 0 ;
   this.A4031SolicitacaoNoLicitacao = 0 ;
   this.A4032SolicitacaoValorLicitacao = 0 ;
   this.A4033SolicitacaoDescricaoLicitacao = "" ;
   this.A4034SolicitacaoObjetivoLicitacao = "" ;
   this.A2471TipoLicitacaoEmpresaId = "" ;
   this.A3120TipoLicitacaoSnExigeDados = "" ;
   this.Events = {"e12px2_client": ["ENTER", true] ,"e13px2_client": ["'CANCELAR'", true] ,"e14px2_client": ["VTIPOLICITACAOID.ISVALID", true] ,"e16px2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV27Permissao',fld:'vPERMISSAO'},{av:'AV23SolicitacaoNumero',fld:'vSOLICITACAONUMERO'},{av:'AV11TipoLicitacaoId',fld:'vTIPOLICITACAOID'},{av:'AV12SolicitacaoAnoLicitacao',fld:'vSOLICITACAOANOLICITACAO'},{av:'AV14SolicitacaoNoLicitacao',fld:'vSOLICITACAONOLICITACAO'},{av:'AV17SolicitacaoValorLicitacao',fld:'vSOLICITACAOVALORLICITACAO'},{av:'AV13SolicitacaoDescricaoLicitacao',fld:'vSOLICITACAODESCRICAOLICITACAO'},{av:'AV15SolicitacaoObjetivoLicitacao',fld:'vSOLICITACAOOBJETIVOLICITACAO'},{av:'AV40Pgmname',fld:'vPGMNAME'},{av:'A2471TipoLicitacaoEmpresaId',fld:'TIPOLICITACAOEMPRESAID'},{av:'AV19EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A2472TipoLicitacaoId',fld:'TIPOLICITACAOID'},{av:'A3120TipoLicitacaoSnExigeDados',fld:'TIPOLICITACAOSNEXIGEDADOS'},{av:'AV25TipoLicitacaoSnExigeDados',fld:'vTIPOLICITACAOSNEXIGEDADOS'},{av:'AV34SolicitacaoSituacao',fld:'vSOLICITACAOSITUACAO'}],[{av:'AV24SnErro',fld:'vSNERRO'},{av:'AV22Retorno',fld:'vRETORNO'},{av:'AV30NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV29NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV31QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV23SolicitacaoNumero',fld:'vSOLICITACAONUMERO'},{av:'AV26SnExisteTpLici',fld:'vSNEXISTETPLICI'},{av:'AV41GXLvl129',fld:'vGXLVL129'},{av:'AV25TipoLicitacaoSnExigeDados',fld:'vTIPOLICITACAOSNEXIGEDADOS'}]];
   this.EvtParms["'CANCELAR'"] = [[{av:'AV34SolicitacaoSituacao',fld:'vSOLICITACAOSITUACAO'},{av:'AV23SolicitacaoNumero',fld:'vSOLICITACAONUMERO'}],[]];
   this.EvtParms["VTIPOLICITACAOID.ISVALID"] = [[{av:'AV37TipoLicitacaoEmpresaId',fld:'vTIPOLICITACAOEMPRESAID'},{av:'AV11TipoLicitacaoId',fld:'vTIPOLICITACAOID'}],[{av:'AV16TipoLicitacaoDescricao',fld:'vTIPOLICITACAODESCRICAO'}]];
   this.setPrompt("PROMPT_TIPOLICITACAOID", [17]);
   this.EnterCtrl = ["BUTTONCONFIRMAR"];
   this.setVCMap("AV23SolicitacaoNumero", "vSOLICITACAONUMERO", 0, "int");
   this.setVCMap("AV34SolicitacaoSituacao", "vSOLICITACAOSITUACAO", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hregistrardadoslicitacao());
