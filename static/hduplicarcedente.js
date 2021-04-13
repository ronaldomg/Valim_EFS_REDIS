/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:58:47.17
*/
gx.evt.autoSkip = false;
gx.define('hduplicarcedente', false, function () {
   this.ServerClass =  "hduplicarcedente" ;
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
      this.AV19CedenteSequencia=gx.fn.getIntegerValue("vCEDENTESEQUENCIA",'.') ;
   };
   this.Validv_Bancoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vBANCOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Bancoagenciaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vBANCOAGENCIAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e128n2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e138n2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e158n2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15,17,20,22,25,27,29,32,34,37,39,41,44,46];
   this.GXLastCtrlId =46;
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE3",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={fld:"TABLE6",grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Bancoid,isvalid:null,rgrid:[],fld:"vBANCOID",gxz:"ZV11BancoId",gxold:"OV11BancoId",gxvar:"AV11BancoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11BancoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11BancoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBANCOID",gx.O.AV11BancoId,0)},c2v:function(){gx.O.AV11BancoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBANCOID",'.')},nac:gx.falseFn};
   GXValidFnc[15]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBANCONOME",gxz:"ZV13BancoNome",gxold:"OV13BancoNome",gxvar:"AV13BancoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13BancoNome=Value},v2z:function(Value){gx.O.ZV13BancoNome=Value},v2c:function(){gx.fn.setControlValue("vBANCONOME",gx.O.AV13BancoNome,0)},c2v:function(){gx.O.AV13BancoNome=this.val()},val:function(){return gx.fn.getControlValue("vBANCONOME")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[22]={fld:"TABLE5",grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Bancoagenciaid,isvalid:null,rgrid:[],fld:"vBANCOAGENCIAID",gxz:"ZV12BancoAgenciaId",gxold:"OV12BancoAgenciaId",gxvar:"AV12BancoAgenciaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12BancoAgenciaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12BancoAgenciaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBANCOAGENCIAID",gx.O.AV12BancoAgenciaId,0)},c2v:function(){gx.O.AV12BancoAgenciaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBANCOAGENCIAID",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBANCOAGENCIANOME",gxz:"ZV14BancoAgenciaNome",gxold:"OV14BancoAgenciaNome",gxvar:"AV14BancoAgenciaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14BancoAgenciaNome=Value},v2z:function(Value){gx.O.ZV14BancoAgenciaNome=Value},v2c:function(){gx.fn.setControlValue("vBANCOAGENCIANOME",gx.O.AV14BancoAgenciaNome,0)},c2v:function(){gx.O.AV14BancoAgenciaNome=this.val()},val:function(){return gx.fn.getControlValue("vBANCOAGENCIANOME")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[34]={fld:"TABLE4",grid:0};
   GXValidFnc[37]={lvl:0,type:"int",len:12,dec:0,sign:false,pic:"ZZZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCEDENTENOCONTA",gxz:"ZV20CedenteNoConta",gxold:"OV20CedenteNoConta",gxvar:"AV20CedenteNoConta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20CedenteNoConta=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20CedenteNoConta=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCEDENTENOCONTA",gx.O.AV20CedenteNoConta,0)},c2v:function(){gx.O.AV20CedenteNoConta=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCEDENTENOCONTA",'.')},nac:gx.falseFn};
   GXValidFnc[39]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"svchar",len:70,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCEDENTEDESCRICAO",gxz:"ZV15CedenteDescricao",gxold:"OV15CedenteDescricao",gxvar:"AV15CedenteDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15CedenteDescricao=Value},v2z:function(Value){gx.O.ZV15CedenteDescricao=Value},v2c:function(){gx.fn.setControlValue("vCEDENTEDESCRICAO",gx.O.AV15CedenteDescricao,0)},c2v:function(){gx.O.AV15CedenteDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCEDENTEDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[44]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[46]={lvl:0,type:"int",len:12,dec:0,sign:false,pic:"ZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCEDENTEIDNOVO",gxz:"ZV16CedenteIdNovo",gxold:"OV16CedenteIdNovo",gxvar:"AV16CedenteIdNovo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16CedenteIdNovo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16CedenteIdNovo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCEDENTEIDNOVO",gx.O.AV16CedenteIdNovo,0)},c2v:function(){gx.O.AV16CedenteIdNovo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCEDENTEIDNOVO",'.')},nac:gx.falseFn};
   this.AV11BancoId = 0 ;
   this.ZV11BancoId = 0 ;
   this.OV11BancoId = 0 ;
   this.AV13BancoNome = "" ;
   this.ZV13BancoNome = "" ;
   this.OV13BancoNome = "" ;
   this.AV12BancoAgenciaId = 0 ;
   this.ZV12BancoAgenciaId = 0 ;
   this.OV12BancoAgenciaId = 0 ;
   this.AV14BancoAgenciaNome = "" ;
   this.ZV14BancoAgenciaNome = "" ;
   this.OV14BancoAgenciaNome = "" ;
   this.AV20CedenteNoConta = 0 ;
   this.ZV20CedenteNoConta = 0 ;
   this.OV20CedenteNoConta = 0 ;
   this.AV15CedenteDescricao = "" ;
   this.ZV15CedenteDescricao = "" ;
   this.OV15CedenteDescricao = "" ;
   this.AV16CedenteIdNovo = 0 ;
   this.ZV16CedenteIdNovo = 0 ;
   this.OV16CedenteIdNovo = 0 ;
   this.AV11BancoId = 0 ;
   this.AV13BancoNome = "" ;
   this.AV12BancoAgenciaId = 0 ;
   this.AV14BancoAgenciaNome = "" ;
   this.AV20CedenteNoConta = 0 ;
   this.AV15CedenteDescricao = "" ;
   this.AV16CedenteIdNovo = 0 ;
   this.AV19CedenteSequencia = 0 ;
   this.A2772CedenteNoConta = 0 ;
   this.A953BancoAgenciaId = 0 ;
   this.A947BancoId = 0 ;
   this.A950BancoEmpresaId = "" ;
   this.Events = {"e128n2_client": ["ENTER", true] ,"e138n2_client": ["'FECHAR'", true] ,"e158n2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV16CedenteIdNovo',fld:'vCEDENTEIDNOVO'},{av:'A950BancoEmpresaId',fld:'BANCOEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A947BancoId',fld:'BANCOID'},{av:'AV11BancoId',fld:'vBANCOID',hsh:true},{av:'A953BancoAgenciaId',fld:'BANCOAGENCIAID'},{av:'AV12BancoAgenciaId',fld:'vBANCOAGENCIAID',hsh:true},{av:'A2772CedenteNoConta',fld:'CEDENTENOCONTA'},{av:'AV19CedenteSequencia',fld:'vCEDENTESEQUENCIA',hsh:true}],[{av:'AV25GXLvl25',fld:'vGXLVL25'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV19CedenteSequencia", "vCEDENTESEQUENCIA", 0, "int");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hduplicarcedente());
