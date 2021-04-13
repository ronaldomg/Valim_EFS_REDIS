/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:14:52.49
*/
gx.evt.autoSkip = false;
gx.define('halterarcodigobem', false, function () {
   this.ServerClass =  "halterarcodigobem" ;
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
   };
   this.Validv_Bemcodigoatual=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vBEMCODIGOATUAL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Bemsubgrupoatual=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vBEMSUBGRUPOATUAL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Bemcodigonovo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vBEMCODIGONOVO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Bemsubgruponovo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vBEMSUBGRUPONOVO");
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
   this.e11sa2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13sa2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15sa2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,20,22,25,27,30,32,34,40,46,47,49,50,51];
   this.GXLastCtrlId =51;
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE6",grid:0};
   GXValidFnc[8]={fld:"TABLE8",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={fld:"TABLE9",grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Bemcodigoatual,isvalid:null,rgrid:[],fld:"vBEMCODIGOATUAL",gxz:"ZV20BemCodigoAtual",gxold:"OV20BemCodigoAtual",gxvar:"AV20BemCodigoAtual",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20BemCodigoAtual=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20BemCodigoAtual=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBEMCODIGOATUAL",gx.O.AV20BemCodigoAtual,0)},c2v:function(){gx.O.AV20BemCodigoAtual=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBEMCODIGOATUAL",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Bemsubgrupoatual,isvalid:null,rgrid:[],fld:"vBEMSUBGRUPOATUAL",gxz:"ZV22BemSubgrupoAtual",gxold:"OV22BemSubgrupoAtual",gxvar:"AV22BemSubgrupoAtual",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22BemSubgrupoAtual=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22BemSubgrupoAtual=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBEMSUBGRUPOATUAL",gx.O.AV22BemSubgrupoAtual,0)},c2v:function(){gx.O.AV22BemSubgrupoAtual=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBEMSUBGRUPOATUAL",'.')},nac:gx.falseFn};
   GXValidFnc[22]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBEMDESCRICAORESUMIDA",gxz:"ZV25BemDescricaoResumida",gxold:"OV25BemDescricaoResumida",gxvar:"AV25BemDescricaoResumida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25BemDescricaoResumida=Value},v2z:function(Value){gx.O.ZV25BemDescricaoResumida=Value},v2c:function(){gx.fn.setControlValue("vBEMDESCRICAORESUMIDA",gx.O.AV25BemDescricaoResumida,0)},c2v:function(){gx.O.AV25BemDescricaoResumida=this.val()},val:function(){return gx.fn.getControlValue("vBEMDESCRICAORESUMIDA")},nac:gx.falseFn};
   GXValidFnc[25]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[27]={fld:"TABLE10",grid:0};
   GXValidFnc[30]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Bemcodigonovo,isvalid:null,rgrid:[],fld:"vBEMCODIGONOVO",gxz:"ZV21BemCodigoNovo",gxold:"OV21BemCodigoNovo",gxvar:"AV21BemCodigoNovo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21BemCodigoNovo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21BemCodigoNovo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBEMCODIGONOVO",gx.O.AV21BemCodigoNovo,0)},c2v:function(){gx.O.AV21BemCodigoNovo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBEMCODIGONOVO",'.')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Bemsubgruponovo,isvalid:null,rgrid:[],fld:"vBEMSUBGRUPONOVO",gxz:"ZV23BemSubgrupoNovo",gxold:"OV23BemSubgrupoNovo",gxvar:"AV23BemSubgrupoNovo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23BemSubgrupoNovo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23BemSubgrupoNovo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBEMSUBGRUPONOVO",gx.O.AV23BemSubgrupoNovo,0)},c2v:function(){gx.O.AV23BemSubgrupoNovo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBEMSUBGRUPONOVO",'.')},nac:gx.falseFn};
   GXValidFnc[40]={fld:"TABLE5",grid:0};
   GXValidFnc[46]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapadrao,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAO",gxz:"ZV9EmpresaPadrao",gxold:"OV9EmpresaPadrao",gxvar:"AV9EmpresaPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9EmpresaPadrao=Value},v2z:function(Value){gx.O.ZV9EmpresaPadrao=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAO",gx.O.AV9EmpresaPadrao,0)},c2v:function(){gx.O.AV9EmpresaPadrao=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAO")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"JS", format:2,grid:0};
   GXValidFnc[49]={fld:"BTNHELP",grid:0};
   GXValidFnc[50]={fld:"PROMPT_BEMCODIGOATUAL_BEMSUBGRUPOATUAL",grid:0};
   GXValidFnc[51]={fld:"PROMPT_BEMCODIGONOVO_BEMSUBGRUPONOVO",grid:0};
   this.AV20BemCodigoAtual = 0 ;
   this.ZV20BemCodigoAtual = 0 ;
   this.OV20BemCodigoAtual = 0 ;
   this.AV22BemSubgrupoAtual = 0 ;
   this.ZV22BemSubgrupoAtual = 0 ;
   this.OV22BemSubgrupoAtual = 0 ;
   this.AV25BemDescricaoResumida = "" ;
   this.ZV25BemDescricaoResumida = "" ;
   this.OV25BemDescricaoResumida = "" ;
   this.AV21BemCodigoNovo = 0 ;
   this.ZV21BemCodigoNovo = 0 ;
   this.OV21BemCodigoNovo = 0 ;
   this.AV23BemSubgrupoNovo = 0 ;
   this.ZV23BemSubgrupoNovo = 0 ;
   this.OV23BemSubgrupoNovo = 0 ;
   this.AV9EmpresaPadrao = "" ;
   this.ZV9EmpresaPadrao = "" ;
   this.OV9EmpresaPadrao = "" ;
   this.AV20BemCodigoAtual = 0 ;
   this.AV22BemSubgrupoAtual = 0 ;
   this.AV25BemDescricaoResumida = "" ;
   this.AV21BemCodigoNovo = 0 ;
   this.AV23BemSubgrupoNovo = 0 ;
   this.AV9EmpresaPadrao = "" ;
   this.A2318BemSubgrupo = 0 ;
   this.A2262BemCodigo = 0 ;
   this.A2261BemEmpresaId = "" ;
   this.Events = {"e11sa2_client": ["'FECHAR'", true] ,"e13sa2_client": ["ENTER", true] ,"e15sa2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV20BemCodigoAtual',fld:'vBEMCODIGOATUAL'},{av:'A2261BemEmpresaId',fld:'BEMEMPRESAID'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A2262BemCodigo',fld:'BEMCODIGO'},{av:'A2318BemSubgrupo',fld:'BEMSUBGRUPO'},{av:'AV22BemSubgrupoAtual',fld:'vBEMSUBGRUPOATUAL'},{av:'AV21BemCodigoNovo',fld:'vBEMCODIGONOVO'},{av:'AV23BemSubgrupoNovo',fld:'vBEMSUBGRUPONOVO'}],[{av:'AV24tpErro',fld:'vTPERRO'},{av:'AV34GXLvl55',fld:'vGXLVL55'}]];
   this.setPrompt("PROMPT_BEMCODIGOATUAL_BEMSUBGRUPOATUAL", [16,20]);
   this.setPrompt("PROMPT_BEMCODIGONOVO_BEMSUBGRUPONOVO", [30,34]);
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new halterarcodigobem());
