/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:47:13.74
*/
gx.evt.autoSkip = false;
gx.define('hduplicaretiquetatermica', false, function () {
   this.ServerClass =  "hduplicaretiquetatermica" ;
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
      this.AV15EtiquetaTermicaEmpresaId=gx.fn.getControlValue("vETIQUETATERMICAEMPRESAID") ;
   };
   this.Validv_Novocodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vNOVOCODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e121gm2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e131gm2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e151gm2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15,17,20,22];
   this.GXLastCtrlId =22;
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE3",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={fld:"TABLE1",grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vETIQUETATERMICAMODELO",gxz:"ZV16EtiquetaTermicaModelo",gxold:"OV16EtiquetaTermicaModelo",gxvar:"AV16EtiquetaTermicaModelo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16EtiquetaTermicaModelo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16EtiquetaTermicaModelo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vETIQUETATERMICAMODELO",gx.O.AV16EtiquetaTermicaModelo,0)},c2v:function(){gx.O.AV16EtiquetaTermicaModelo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vETIQUETATERMICAMODELO",'.')},nac:gx.falseFn};
   GXValidFnc[15]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vETIQUETATERMICADESCRICAO",gxz:"ZV17EtiquetaTermicaDescricao",gxold:"OV17EtiquetaTermicaDescricao",gxvar:"AV17EtiquetaTermicaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17EtiquetaTermicaDescricao=Value},v2z:function(Value){gx.O.ZV17EtiquetaTermicaDescricao=Value},v2c:function(){gx.fn.setControlValue("vETIQUETATERMICADESCRICAO",gx.O.AV17EtiquetaTermicaDescricao,0)},c2v:function(){gx.O.AV17EtiquetaTermicaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vETIQUETATERMICADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Novocodigo,isvalid:null,rgrid:[],fld:"vNOVOCODIGO",gxz:"ZV18NovoCodigo",gxold:"OV18NovoCodigo",gxvar:"AV18NovoCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18NovoCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18NovoCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNOVOCODIGO",gx.O.AV18NovoCodigo,0)},c2v:function(){gx.O.AV18NovoCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNOVOCODIGO",'.')},nac:gx.falseFn};
   this.AV16EtiquetaTermicaModelo = 0 ;
   this.ZV16EtiquetaTermicaModelo = 0 ;
   this.OV16EtiquetaTermicaModelo = 0 ;
   this.AV17EtiquetaTermicaDescricao = "" ;
   this.ZV17EtiquetaTermicaDescricao = "" ;
   this.OV17EtiquetaTermicaDescricao = "" ;
   this.AV18NovoCodigo = 0 ;
   this.ZV18NovoCodigo = 0 ;
   this.OV18NovoCodigo = 0 ;
   this.AV16EtiquetaTermicaModelo = 0 ;
   this.AV17EtiquetaTermicaDescricao = "" ;
   this.AV18NovoCodigo = 0 ;
   this.AV15EtiquetaTermicaEmpresaId = "" ;
   this.A5903EtiquetaTermicaModelo = 0 ;
   this.A5902EtiquetaTermicaEmpresaId = "" ;
   this.Events = {"e121gm2_client": ["ENTER", true] ,"e131gm2_client": ["'FECHAR'", true] ,"e151gm2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV18NovoCodigo',fld:'vNOVOCODIGO'},{av:'A5902EtiquetaTermicaEmpresaId',fld:'ETIQUETATERMICAEMPRESAID'},{av:'AV15EtiquetaTermicaEmpresaId',fld:'vETIQUETATERMICAEMPRESAID',hsh:true},{av:'A5903EtiquetaTermicaModelo',fld:'ETIQUETATERMICAMODELO'},{av:'AV16EtiquetaTermicaModelo',fld:'vETIQUETATERMICAMODELO',hsh:true}],[{av:'AV19TpErro',fld:'vTPERRO'},{av:'AV18NovoCodigo',fld:'vNOVOCODIGO'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV15EtiquetaTermicaEmpresaId", "vETIQUETATERMICAEMPRESAID", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hduplicaretiquetatermica());
