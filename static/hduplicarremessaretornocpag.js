/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 14:0:58.16
*/
gx.evt.autoSkip = false;
gx.define('hduplicarremessaretornocpag', false, function () {
   this.ServerClass =  "hduplicarremessaretornocpag" ;
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
   this.Validv_Remessaretornocpagid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vREMESSARETORNOCPAGID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Remessaretornocpagidnovo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vREMESSARETORNOCPAGIDNOVO");
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
   this.e12w62_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13w62_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15w62_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,11,14,16,24,25,26,27];
   this.GXLastCtrlId =27;
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE3",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Remessaretornocpagid,isvalid:null,rgrid:[],fld:"vREMESSARETORNOCPAGID",gxz:"ZV16RemessaRetornoCPagId",gxold:"OV16RemessaRetornoCPagId",gxvar:"AV16RemessaRetornoCPagId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16RemessaRetornoCPagId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16RemessaRetornoCPagId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vREMESSARETORNOCPAGID",gx.O.AV16RemessaRetornoCPagId,0)},c2v:function(){gx.O.AV16RemessaRetornoCPagId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vREMESSARETORNOCPAGID",'.')},nac:gx.falseFn};
   GXValidFnc[11]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREMESSARETORNOCPAGDESCRICAO",gxz:"ZV17RemessaRetornoCPagDescricao",gxold:"OV17RemessaRetornoCPagDescricao",gxvar:"AV17RemessaRetornoCPagDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17RemessaRetornoCPagDescricao=Value},v2z:function(Value){gx.O.ZV17RemessaRetornoCPagDescricao=Value},v2c:function(){gx.fn.setControlValue("vREMESSARETORNOCPAGDESCRICAO",gx.O.AV17RemessaRetornoCPagDescricao,0)},c2v:function(){gx.O.AV17RemessaRetornoCPagDescricao=this.val()},val:function(){return gx.fn.getControlValue("vREMESSARETORNOCPAGDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[14]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Remessaretornocpagidnovo,isvalid:null,rgrid:[],fld:"vREMESSARETORNOCPAGIDNOVO",gxz:"ZV18RemessaRetornoCPagIdNovo",gxold:"OV18RemessaRetornoCPagIdNovo",gxvar:"AV18RemessaRetornoCPagIdNovo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18RemessaRetornoCPagIdNovo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18RemessaRetornoCPagIdNovo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vREMESSARETORNOCPAGIDNOVO",gx.O.AV18RemessaRetornoCPagIdNovo,0)},c2v:function(){gx.O.AV18RemessaRetornoCPagIdNovo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vREMESSARETORNOCPAGIDNOVO",'.')},nac:gx.falseFn};
   GXValidFnc[24]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapadrao,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAO",gxz:"ZV11EmpresaPadrao",gxold:"OV11EmpresaPadrao",gxvar:"AV11EmpresaPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11EmpresaPadrao=Value},v2z:function(Value){gx.O.ZV11EmpresaPadrao=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAO",gx.O.AV11EmpresaPadrao,0)},c2v:function(){gx.O.AV11EmpresaPadrao=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAO")},nac:gx.falseFn};
   GXValidFnc[25]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECARACTERES",gxz:"ZV12QtdeCaracteres",gxold:"OV12QtdeCaracteres",gxvar:"AV12QtdeCaracteres",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12QtdeCaracteres=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12QtdeCaracteres=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDECARACTERES",gx.O.AV12QtdeCaracteres,0)},c2v:function(){gx.O.AV12QtdeCaracteres=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECARACTERES",'.')},nac:gx.falseFn};
   GXValidFnc[26]={fld:"JS", format:2,grid:0};
   GXValidFnc[27]={fld:"PROMPT_REMESSARETORNOCPAGID",grid:0};
   this.AV16RemessaRetornoCPagId = 0 ;
   this.ZV16RemessaRetornoCPagId = 0 ;
   this.OV16RemessaRetornoCPagId = 0 ;
   this.AV17RemessaRetornoCPagDescricao = "" ;
   this.ZV17RemessaRetornoCPagDescricao = "" ;
   this.OV17RemessaRetornoCPagDescricao = "" ;
   this.AV18RemessaRetornoCPagIdNovo = 0 ;
   this.ZV18RemessaRetornoCPagIdNovo = 0 ;
   this.OV18RemessaRetornoCPagIdNovo = 0 ;
   this.AV11EmpresaPadrao = "" ;
   this.ZV11EmpresaPadrao = "" ;
   this.OV11EmpresaPadrao = "" ;
   this.AV12QtdeCaracteres = 0 ;
   this.ZV12QtdeCaracteres = 0 ;
   this.OV12QtdeCaracteres = 0 ;
   this.AV16RemessaRetornoCPagId = 0 ;
   this.AV17RemessaRetornoCPagDescricao = "" ;
   this.AV18RemessaRetornoCPagIdNovo = 0 ;
   this.AV11EmpresaPadrao = "" ;
   this.AV12QtdeCaracteres = 0 ;
   this.A5463RemessaRetornoCPagId = 0 ;
   this.A5462RemessaRetornoCPagEmpresaId = "" ;
   this.Events = {"e12w62_client": ["ENTER", true] ,"e13w62_client": ["'FECHAR'", true] ,"e15w62_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV16RemessaRetornoCPagId',fld:'vREMESSARETORNOCPAGID'},{av:'A5462RemessaRetornoCPagEmpresaId',fld:'REMESSARETORNOCPAGEMPRESAID'},{av:'AV11EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A5463RemessaRetornoCPagId',fld:'REMESSARETORNOCPAGID'},{av:'AV18RemessaRetornoCPagIdNovo',fld:'vREMESSARETORNOCPAGIDNOVO'}],[{av:'AV19SNErro',fld:'vSNERRO'},{av:'AV24GXLvl43',fld:'vGXLVL43'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setPrompt("PROMPT_REMESSARETORNOCPAGID", [10]);
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hduplicarremessaretornocpag());
