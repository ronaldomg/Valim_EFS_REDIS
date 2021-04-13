/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 15:15:24.87
*/
gx.evt.autoSkip = false;
gx.define('hmodalmodeloprevenda', false, function () {
   this.ServerClass =  "hmodalmodeloprevenda" ;
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
   this.Validv_Modeloprevendacodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vMODELOPREVENDACODIGO");
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
      this.AV12SnErro =  "N"  ;
      if ( this.AV9ModeloPreVendaTipo == "N" || this.AV9ModeloPreVendaTipo == "L" || this.AV9ModeloPreVendaTipo == "O" || this.AV9ModeloPreVendaTipo == "E" || this.AV9ModeloPreVendaTipo == "S" )
      {
         if ( (""==this.AV10ModeloPreVendaTipoNovo) )
         {
            this.addMessage("Informe o Novo Tipo");
            gx.fn.usrSetFocus("vMODELOPREVENDATIPONOVO") ;
            this.AV12SnErro =  "S"  ;
         }
      }
   };
   this.e1210q2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1310q2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1510q2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15,17,20,22,25,27,30,32];
   this.GXLastCtrlId =32;
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE5",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={fld:"TABLE6",grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Modeloprevendacodigo,isvalid:null,rgrid:[],fld:"vMODELOPREVENDACODIGO",gxz:"ZV14ModeloPrevendaCodigo",gxold:"OV14ModeloPrevendaCodigo",gxvar:"AV14ModeloPrevendaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14ModeloPrevendaCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV14ModeloPrevendaCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMODELOPREVENDACODIGO",gx.O.AV14ModeloPrevendaCodigo,0)},c2v:function(){gx.O.AV14ModeloPrevendaCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMODELOPREVENDACODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[15]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMODELOPREVENDADESCRICAO",gxz:"ZV16ModeloPrevendaDescricao",gxold:"OV16ModeloPrevendaDescricao",gxvar:"AV16ModeloPrevendaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16ModeloPrevendaDescricao=Value},v2z:function(Value){gx.O.ZV16ModeloPrevendaDescricao=Value},v2c:function(){gx.fn.setControlValue("vMODELOPREVENDADESCRICAO",gx.O.AV16ModeloPrevendaDescricao,0)},c2v:function(){gx.O.AV16ModeloPrevendaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vMODELOPREVENDADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMODELOPREVENDATIPO",gxz:"ZV9ModeloPreVendaTipo",gxold:"OV9ModeloPreVendaTipo",gxvar:"AV9ModeloPreVendaTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV9ModeloPreVendaTipo=Value},v2z:function(Value){gx.O.ZV9ModeloPreVendaTipo=Value},v2c:function(){gx.fn.setComboBoxValue("vMODELOPREVENDATIPO",gx.O.AV9ModeloPreVendaTipo)},c2v:function(){gx.O.AV9ModeloPreVendaTipo=this.val()},val:function(){return gx.fn.getControlValue("vMODELOPREVENDATIPO")},nac:gx.falseFn};
   GXValidFnc[25]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMODELOPREVENDACODIGONOVO",gxz:"ZV15ModeloPrevendaCodigoNovo",gxold:"OV15ModeloPrevendaCodigoNovo",gxvar:"AV15ModeloPrevendaCodigoNovo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15ModeloPrevendaCodigoNovo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV15ModeloPrevendaCodigoNovo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMODELOPREVENDACODIGONOVO",gx.O.AV15ModeloPrevendaCodigoNovo,0)},c2v:function(){gx.O.AV15ModeloPrevendaCodigoNovo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMODELOPREVENDACODIGONOVO",'.')},nac:gx.falseFn};
   GXValidFnc[30]={fld:"NOVOTIPO", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMODELOPREVENDATIPONOVO",gxz:"ZV10ModeloPreVendaTipoNovo",gxold:"OV10ModeloPreVendaTipoNovo",gxvar:"AV10ModeloPreVendaTipoNovo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV10ModeloPreVendaTipoNovo=Value},v2z:function(Value){gx.O.ZV10ModeloPreVendaTipoNovo=Value},v2c:function(){gx.fn.setComboBoxValue("vMODELOPREVENDATIPONOVO",gx.O.AV10ModeloPreVendaTipoNovo)},c2v:function(){gx.O.AV10ModeloPreVendaTipoNovo=this.val()},val:function(){return gx.fn.getControlValue("vMODELOPREVENDATIPONOVO")},nac:gx.falseFn};
   this.AV14ModeloPrevendaCodigo = 0 ;
   this.ZV14ModeloPrevendaCodigo = 0 ;
   this.OV14ModeloPrevendaCodigo = 0 ;
   this.AV16ModeloPrevendaDescricao = "" ;
   this.ZV16ModeloPrevendaDescricao = "" ;
   this.OV16ModeloPrevendaDescricao = "" ;
   this.AV9ModeloPreVendaTipo = "" ;
   this.ZV9ModeloPreVendaTipo = "" ;
   this.OV9ModeloPreVendaTipo = "" ;
   this.AV15ModeloPrevendaCodigoNovo = 0 ;
   this.ZV15ModeloPrevendaCodigoNovo = 0 ;
   this.OV15ModeloPrevendaCodigoNovo = 0 ;
   this.AV10ModeloPreVendaTipoNovo = "" ;
   this.ZV10ModeloPreVendaTipoNovo = "" ;
   this.OV10ModeloPreVendaTipoNovo = "" ;
   this.AV14ModeloPrevendaCodigo = 0 ;
   this.AV16ModeloPrevendaDescricao = "" ;
   this.AV9ModeloPreVendaTipo = "" ;
   this.AV15ModeloPrevendaCodigoNovo = 0 ;
   this.AV10ModeloPreVendaTipoNovo = "" ;
   this.A8946ModeloPreVendaCodigo = 0 ;
   this.A8945ModeloPrevendaEmpresaId = "" ;
   this.A7234ModeloPreVendaDescricao = "" ;
   this.AV12SnErro = "" ;
   this.Events = {"e1210q2_client": ["ENTER", true] ,"e1310q2_client": ["'FECHAR'", true] ,"e1510q2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV12SnErro',fld:'vSNERRO'},{av:'AV17ModeloPrevendaEmpresaId',fld:'vMODELOPREVENDAEMPRESAID'},{av:'AV14ModeloPrevendaCodigo',fld:'vMODELOPREVENDACODIGO'},{av:'AV9ModeloPreVendaTipo',fld:'vMODELOPREVENDATIPO'},{av:'AV15ModeloPrevendaCodigoNovo',fld:'vMODELOPREVENDACODIGONOVO'},{av:'AV10ModeloPreVendaTipoNovo',fld:'vMODELOPREVENDATIPONOVO'}],[{av:'AV10ModeloPreVendaTipoNovo',fld:'vMODELOPREVENDATIPONOVO'},{av:'AV15ModeloPrevendaCodigoNovo',fld:'vMODELOPREVENDACODIGONOVO'},{av:'AV9ModeloPreVendaTipo',fld:'vMODELOPREVENDATIPO'},{av:'AV14ModeloPrevendaCodigo',fld:'vMODELOPREVENDACODIGO'},{av:'AV17ModeloPrevendaEmpresaId',fld:'vMODELOPREVENDAEMPRESAID'},{av:'AV12SnErro',fld:'vSNERRO'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV9ModeloPreVendaTipo',fld:'vMODELOPREVENDATIPO'},{av:'AV14ModeloPrevendaCodigo',fld:'vMODELOPREVENDACODIGO'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodalmodeloprevenda());
