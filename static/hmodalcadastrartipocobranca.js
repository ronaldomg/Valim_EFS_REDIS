/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:53:44.76
*/
gx.evt.autoSkip = false;
gx.define('hmodalcadastrartipocobranca', false, function () {
   this.ServerClass =  "hmodalcadastrartipocobranca" ;
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
   this.Validv_Formapgtoclientepessoaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFORMAPGTOCLIENTEPESSOAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Formapgtoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFORMAPGTOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Formapgtoclientetpcobrempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFORMAPGTOCLIENTETPCOBREMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12os2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13os2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15os2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15,17,20,22,23,24,32,33];
   this.GXLastCtrlId =33;
   GXValidFnc[2]={fld:"TABLE3",grid:0};
   GXValidFnc[5]={fld:"TABLE4",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={fld:"TABLE5",grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Formapgtoclientepessoaid,isvalid:null,rgrid:[],fld:"vFORMAPGTOCLIENTEPESSOAID",gxz:"ZV16FormaPgtoClientePessoaId",gxold:"OV16FormaPgtoClientePessoaId",gxvar:"AV16FormaPgtoClientePessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16FormaPgtoClientePessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16FormaPgtoClientePessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFORMAPGTOCLIENTEPESSOAID",gx.O.AV16FormaPgtoClientePessoaId,0)},c2v:function(){gx.O.AV16FormaPgtoClientePessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFORMAPGTOCLIENTEPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[15]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFORMAPGTOCLIENTEPESSOAFANTASIA",gxz:"ZV17FormaPgtoClientePessoaFantasia",gxold:"OV17FormaPgtoClientePessoaFantasia",gxvar:"AV17FormaPgtoClientePessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17FormaPgtoClientePessoaFantasia=Value},v2z:function(Value){gx.O.ZV17FormaPgtoClientePessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("vFORMAPGTOCLIENTEPESSOAFANTASIA",gx.O.AV17FormaPgtoClientePessoaFantasia,0)},c2v:function(){gx.O.AV17FormaPgtoClientePessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("vFORMAPGTOCLIENTEPESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Formapgtoid,isvalid:null,rgrid:[],fld:"vFORMAPGTOID",gxz:"ZV19FormaPgtoId",gxold:"OV19FormaPgtoId",gxvar:"AV19FormaPgtoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19FormaPgtoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19FormaPgtoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFORMAPGTOID",gx.O.AV19FormaPgtoId,0)},c2v:function(){gx.O.AV19FormaPgtoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFORMAPGTOID",'.')},nac:gx.falseFn};
   GXValidFnc[23]={fld:"IMGPROMPT",grid:0};
   GXValidFnc[24]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFORMAPGTODESCRICAO",gxz:"ZV20FormaPgtoDescricao",gxold:"OV20FormaPgtoDescricao",gxvar:"AV20FormaPgtoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20FormaPgtoDescricao=Value},v2z:function(Value){gx.O.ZV20FormaPgtoDescricao=Value},v2c:function(){gx.fn.setControlValue("vFORMAPGTODESCRICAO",gx.O.AV20FormaPgtoDescricao,0)},c2v:function(){gx.O.AV20FormaPgtoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vFORMAPGTODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[32]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Formapgtoclientetpcobrempid,isvalid:null,rgrid:[],fld:"vFORMAPGTOCLIENTETPCOBREMPID",gxz:"ZV18FormaPgtoClienteTpCobrEmpId",gxold:"OV18FormaPgtoClienteTpCobrEmpId",gxvar:"AV18FormaPgtoClienteTpCobrEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18FormaPgtoClienteTpCobrEmpId=Value},v2z:function(Value){gx.O.ZV18FormaPgtoClienteTpCobrEmpId=Value},v2c:function(){gx.fn.setControlValue("vFORMAPGTOCLIENTETPCOBREMPID",gx.O.AV18FormaPgtoClienteTpCobrEmpId,0)},c2v:function(){gx.O.AV18FormaPgtoClienteTpCobrEmpId=this.val()},val:function(){return gx.fn.getControlValue("vFORMAPGTOCLIENTETPCOBREMPID")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"JS", format:1,grid:0};
   this.AV16FormaPgtoClientePessoaId = 0 ;
   this.ZV16FormaPgtoClientePessoaId = 0 ;
   this.OV16FormaPgtoClientePessoaId = 0 ;
   this.AV17FormaPgtoClientePessoaFantasia = "" ;
   this.ZV17FormaPgtoClientePessoaFantasia = "" ;
   this.OV17FormaPgtoClientePessoaFantasia = "" ;
   this.AV19FormaPgtoId = 0 ;
   this.ZV19FormaPgtoId = 0 ;
   this.OV19FormaPgtoId = 0 ;
   this.AV20FormaPgtoDescricao = "" ;
   this.ZV20FormaPgtoDescricao = "" ;
   this.OV20FormaPgtoDescricao = "" ;
   this.AV18FormaPgtoClienteTpCobrEmpId = "" ;
   this.ZV18FormaPgtoClienteTpCobrEmpId = "" ;
   this.OV18FormaPgtoClienteTpCobrEmpId = "" ;
   this.AV16FormaPgtoClientePessoaId = 0 ;
   this.AV17FormaPgtoClientePessoaFantasia = "" ;
   this.AV19FormaPgtoId = 0 ;
   this.AV20FormaPgtoDescricao = "" ;
   this.AV18FormaPgtoClienteTpCobrEmpId = "" ;
   this.A3376FormaPgtoId = 0 ;
   this.A3375FormaPgtoEmpresaId = "" ;
   this.A3521FormaPgtoClienteTpCobrEmpId = "" ;
   this.A3522FormaPgtoClienteTpCobrForma = 0 ;
   this.A3515FormaPgtoClienteTpCobrFormaDes = "" ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A71PessoaFantasia = "" ;
   this.Events = {"e12os2_client": ["ENTER", true] ,"e13os2_client": ["'FECHAR'", true] ,"e15os2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV19FormaPgtoId',fld:'vFORMAPGTOID'},{av:'A3375FormaPgtoEmpresaId',fld:'FORMAPGTOEMPRESAID'},{av:'AV18FormaPgtoClienteTpCobrEmpId',fld:'vFORMAPGTOCLIENTETPCOBREMPID'},{av:'A3376FormaPgtoId',fld:'FORMAPGTOID'},{av:'AV16FormaPgtoClientePessoaId',fld:'vFORMAPGTOCLIENTEPESSOAID'}],[{av:'AV21Erro',fld:'vERRO'},{av:'AV31GXLvl59',fld:'vGXLVL59'},{av:'AV19FormaPgtoId',fld:'vFORMAPGTOID'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV19FormaPgtoId',fld:'vFORMAPGTOID'},{av:'AV16FormaPgtoClientePessoaId',fld:'vFORMAPGTOCLIENTEPESSOAID'}],[]];
   this.setPrompt("IMGPROMPT", [22]);
   this.EnterCtrl = ["BTNCONFIRMAR"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodalcadastrartipocobranca());
