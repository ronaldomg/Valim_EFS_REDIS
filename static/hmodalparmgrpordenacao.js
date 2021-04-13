/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:15:48.85
*/
gx.evt.autoSkip = false;
gx.define('hmodalparmgrpordenacao', false, function () {
   this.ServerClass =  "hmodalparmgrpordenacao" ;
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
      this.AV6EmpresaLogadaId=gx.fn.getControlValue("vEMPRESALOGADAID") ;
      this.AV23SnContaPassivo=gx.fn.getControlValue("vSNCONTAPASSIVO") ;
      this.AV58Titulo=gx.fn.getControlValue("vTITULO") ;
   };
   this.Validv_Contapassivo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONTAPASSIVO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Grupoordenacao1=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vGRUPOORDENACAO1");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Grupoordenacao2=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vGRUPOORDENACAO2");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Grupoordenacao3=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vGRUPOORDENACAO3");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Grupoordenacao4=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vGRUPOORDENACAO4");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Grupoordenacao5=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vGRUPOORDENACAO5");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Grupoordenacao6=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vGRUPOORDENACAO6");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Grupoordenacao7=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vGRUPOORDENACAO7");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Grupoordenacao8=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vGRUPOORDENACAO8");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Grupoordenacao9=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vGRUPOORDENACAO9");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Grupoordenacao10=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vGRUPOORDENACAO10");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Grupoordenacao11=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vGRUPOORDENACAO11");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Grupoordenacao12=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vGRUPOORDENACAO12");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Contacontabilempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONTACONTABILEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e15su1_client=function()
   {
      this.clearMessages();
      if ( this.AV23SnContaPassivo == "S" )
      {
         gx.popup.openUrl(gx.http.formatLink("hmodalobsparms2",[this.AV6EmpresaLogadaId, "CBL", "CONTAPASSIVO", "GRPORDENACAO1"]), []);
      }
      else
      {
         gx.popup.openUrl(gx.http.formatLink("hmodalobsparms",[this.AV6EmpresaLogadaId, "CBL", "GRPORDENACAO1"]), []);
      }
      this.refreshOutputs([]);
   };
   this.e12su2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13su2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e16su2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,11,12,13,14,17,19,20,21,22,25,27,28,29,30,33,35,36,37,38,41,43,44,45,46,49,51,52,53,54,57,59,60,61,62,65,67,68,69,70,73,75,76,77,78,81,83,84,85,86,89,91,92,93,94,97,99,100,101,102,105,107,108,109,110,116,121,122,123,125,127];
   this.GXLastCtrlId =127;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABCONTA",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Contapassivo,isvalid:null,rgrid:[],fld:"vCONTAPASSIVO",gxz:"ZV24ContaPassivo",gxold:"OV24ContaPassivo",gxvar:"AV24ContaPassivo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24ContaPassivo=Value},v2z:function(Value){gx.O.ZV24ContaPassivo=Value},v2c:function(){gx.fn.setControlValue("vCONTAPASSIVO",gx.O.AV24ContaPassivo,0)},c2v:function(){gx.O.AV24ContaPassivo=this.val()},val:function(){return gx.fn.getControlValue("vCONTAPASSIVO")},nac:gx.falseFn};
   GXValidFnc[11]={fld:"IMGCCONTPAS",grid:0};
   GXValidFnc[12]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRADUTOR",gxz:"ZV30Tradutor",gxold:"OV30Tradutor",gxvar:"AV30Tradutor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30Tradutor=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30Tradutor=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRADUTOR",gx.O.AV30Tradutor,0)},c2v:function(){gx.O.AV30Tradutor=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRADUTOR",'.')},nac:gx.falseFn};
   GXValidFnc[13]={lvl:0,type:"svchar",len:45,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILNOME",gxz:"ZV31ContaContabilNome",gxold:"OV31ContaContabilNome",gxvar:"AV31ContaContabilNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31ContaContabilNome=Value},v2z:function(Value){gx.O.ZV31ContaContabilNome=Value},v2c:function(){gx.fn.setControlValue("vCONTACONTABILNOME",gx.O.AV31ContaContabilNome,0)},c2v:function(){gx.O.AV31ContaContabilNome=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILNOME")},nac:gx.falseFn};
   GXValidFnc[14]={fld:"TABLE6",grid:0};
   GXValidFnc[17]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Grupoordenacao1,isvalid:null,rgrid:[],fld:"vGRUPOORDENACAO1",gxz:"ZV11GrupoOrdenacao1",gxold:"OV11GrupoOrdenacao1",gxvar:"AV11GrupoOrdenacao1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11GrupoOrdenacao1=Value},v2z:function(Value){gx.O.ZV11GrupoOrdenacao1=Value},v2c:function(){gx.fn.setControlValue("vGRUPOORDENACAO1",gx.O.AV11GrupoOrdenacao1,0)},c2v:function(){gx.O.AV11GrupoOrdenacao1=this.val()},val:function(){return gx.fn.getControlValue("vGRUPOORDENACAO1")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"IMGCCONT1",grid:0};
   GXValidFnc[21]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRADUTOR1",gxz:"ZV34Tradutor1",gxold:"OV34Tradutor1",gxvar:"AV34Tradutor1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34Tradutor1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV34Tradutor1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRADUTOR1",gx.O.AV34Tradutor1,0)},c2v:function(){gx.O.AV34Tradutor1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRADUTOR1",'.')},nac:gx.falseFn};
   GXValidFnc[22]={lvl:0,type:"svchar",len:45,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILNOME1",gxz:"ZV46ContaContabilNome1",gxold:"OV46ContaContabilNome1",gxvar:"AV46ContaContabilNome1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV46ContaContabilNome1=Value},v2z:function(Value){gx.O.ZV46ContaContabilNome1=Value},v2c:function(){gx.fn.setControlValue("vCONTACONTABILNOME1",gx.O.AV46ContaContabilNome1,0)},c2v:function(){gx.O.AV46ContaContabilNome1=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILNOME1")},nac:gx.falseFn};
   GXValidFnc[25]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Grupoordenacao2,isvalid:null,rgrid:[],fld:"vGRUPOORDENACAO2",gxz:"ZV13GrupoOrdenacao2",gxold:"OV13GrupoOrdenacao2",gxvar:"AV13GrupoOrdenacao2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13GrupoOrdenacao2=Value},v2z:function(Value){gx.O.ZV13GrupoOrdenacao2=Value},v2c:function(){gx.fn.setControlValue("vGRUPOORDENACAO2",gx.O.AV13GrupoOrdenacao2,0)},c2v:function(){gx.O.AV13GrupoOrdenacao2=this.val()},val:function(){return gx.fn.getControlValue("vGRUPOORDENACAO2")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"IMGCCONT2",grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRADUTOR2",gxz:"ZV35Tradutor2",gxold:"OV35Tradutor2",gxvar:"AV35Tradutor2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35Tradutor2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV35Tradutor2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRADUTOR2",gx.O.AV35Tradutor2,0)},c2v:function(){gx.O.AV35Tradutor2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRADUTOR2",'.')},nac:gx.falseFn};
   GXValidFnc[30]={lvl:0,type:"svchar",len:45,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILNOME2",gxz:"ZV51ContaContabilNome2",gxold:"OV51ContaContabilNome2",gxvar:"AV51ContaContabilNome2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV51ContaContabilNome2=Value},v2z:function(Value){gx.O.ZV51ContaContabilNome2=Value},v2c:function(){gx.fn.setControlValue("vCONTACONTABILNOME2",gx.O.AV51ContaContabilNome2,0)},c2v:function(){gx.O.AV51ContaContabilNome2=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILNOME2")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Grupoordenacao3,isvalid:null,rgrid:[],fld:"vGRUPOORDENACAO3",gxz:"ZV14GrupoOrdenacao3",gxold:"OV14GrupoOrdenacao3",gxvar:"AV14GrupoOrdenacao3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14GrupoOrdenacao3=Value},v2z:function(Value){gx.O.ZV14GrupoOrdenacao3=Value},v2c:function(){gx.fn.setControlValue("vGRUPOORDENACAO3",gx.O.AV14GrupoOrdenacao3,0)},c2v:function(){gx.O.AV14GrupoOrdenacao3=this.val()},val:function(){return gx.fn.getControlValue("vGRUPOORDENACAO3")},nac:gx.falseFn};
   GXValidFnc[36]={fld:"IMGCCONT3",grid:0};
   GXValidFnc[37]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRADUTOR3",gxz:"ZV36Tradutor3",gxold:"OV36Tradutor3",gxvar:"AV36Tradutor3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36Tradutor3=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV36Tradutor3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRADUTOR3",gx.O.AV36Tradutor3,0)},c2v:function(){gx.O.AV36Tradutor3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRADUTOR3",'.')},nac:gx.falseFn};
   GXValidFnc[38]={lvl:0,type:"svchar",len:45,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILNOME3",gxz:"ZV52ContaContabilNome3",gxold:"OV52ContaContabilNome3",gxvar:"AV52ContaContabilNome3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV52ContaContabilNome3=Value},v2z:function(Value){gx.O.ZV52ContaContabilNome3=Value},v2c:function(){gx.fn.setControlValue("vCONTACONTABILNOME3",gx.O.AV52ContaContabilNome3,0)},c2v:function(){gx.O.AV52ContaContabilNome3=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILNOME3")},nac:gx.falseFn};
   GXValidFnc[41]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[43]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Grupoordenacao4,isvalid:null,rgrid:[],fld:"vGRUPOORDENACAO4",gxz:"ZV15GrupoOrdenacao4",gxold:"OV15GrupoOrdenacao4",gxvar:"AV15GrupoOrdenacao4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15GrupoOrdenacao4=Value},v2z:function(Value){gx.O.ZV15GrupoOrdenacao4=Value},v2c:function(){gx.fn.setControlValue("vGRUPOORDENACAO4",gx.O.AV15GrupoOrdenacao4,0)},c2v:function(){gx.O.AV15GrupoOrdenacao4=this.val()},val:function(){return gx.fn.getControlValue("vGRUPOORDENACAO4")},nac:gx.falseFn};
   GXValidFnc[44]={fld:"IMGCCONT4",grid:0};
   GXValidFnc[45]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRADUTOR4",gxz:"ZV37Tradutor4",gxold:"OV37Tradutor4",gxvar:"AV37Tradutor4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37Tradutor4=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV37Tradutor4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRADUTOR4",gx.O.AV37Tradutor4,0)},c2v:function(){gx.O.AV37Tradutor4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRADUTOR4",'.')},nac:gx.falseFn};
   GXValidFnc[46]={lvl:0,type:"svchar",len:45,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILNOME4",gxz:"ZV53ContaContabilNome4",gxold:"OV53ContaContabilNome4",gxvar:"AV53ContaContabilNome4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV53ContaContabilNome4=Value},v2z:function(Value){gx.O.ZV53ContaContabilNome4=Value},v2c:function(){gx.fn.setControlValue("vCONTACONTABILNOME4",gx.O.AV53ContaContabilNome4,0)},c2v:function(){gx.O.AV53ContaContabilNome4=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILNOME4")},nac:gx.falseFn};
   GXValidFnc[49]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[51]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Grupoordenacao5,isvalid:null,rgrid:[],fld:"vGRUPOORDENACAO5",gxz:"ZV16GrupoOrdenacao5",gxold:"OV16GrupoOrdenacao5",gxvar:"AV16GrupoOrdenacao5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16GrupoOrdenacao5=Value},v2z:function(Value){gx.O.ZV16GrupoOrdenacao5=Value},v2c:function(){gx.fn.setControlValue("vGRUPOORDENACAO5",gx.O.AV16GrupoOrdenacao5,0)},c2v:function(){gx.O.AV16GrupoOrdenacao5=this.val()},val:function(){return gx.fn.getControlValue("vGRUPOORDENACAO5")},nac:gx.falseFn};
   GXValidFnc[52]={fld:"IMGCCONT5",grid:0};
   GXValidFnc[53]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRADUTOR5",gxz:"ZV45Tradutor5",gxold:"OV45Tradutor5",gxvar:"AV45Tradutor5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV45Tradutor5=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV45Tradutor5=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRADUTOR5",gx.O.AV45Tradutor5,0)},c2v:function(){gx.O.AV45Tradutor5=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRADUTOR5",'.')},nac:gx.falseFn};
   GXValidFnc[54]={lvl:0,type:"svchar",len:45,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILNOME5",gxz:"ZV54ContaContabilNome5",gxold:"OV54ContaContabilNome5",gxvar:"AV54ContaContabilNome5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV54ContaContabilNome5=Value},v2z:function(Value){gx.O.ZV54ContaContabilNome5=Value},v2c:function(){gx.fn.setControlValue("vCONTACONTABILNOME5",gx.O.AV54ContaContabilNome5,0)},c2v:function(){gx.O.AV54ContaContabilNome5=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILNOME5")},nac:gx.falseFn};
   GXValidFnc[57]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Grupoordenacao6,isvalid:null,rgrid:[],fld:"vGRUPOORDENACAO6",gxz:"ZV17GrupoOrdenacao6",gxold:"OV17GrupoOrdenacao6",gxvar:"AV17GrupoOrdenacao6",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17GrupoOrdenacao6=Value},v2z:function(Value){gx.O.ZV17GrupoOrdenacao6=Value},v2c:function(){gx.fn.setControlValue("vGRUPOORDENACAO6",gx.O.AV17GrupoOrdenacao6,0)},c2v:function(){gx.O.AV17GrupoOrdenacao6=this.val()},val:function(){return gx.fn.getControlValue("vGRUPOORDENACAO6")},nac:gx.falseFn};
   GXValidFnc[60]={fld:"IMGCCONT6",grid:0};
   GXValidFnc[61]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRADUTOR6",gxz:"ZV44Tradutor6",gxold:"OV44Tradutor6",gxvar:"AV44Tradutor6",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV44Tradutor6=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV44Tradutor6=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRADUTOR6",gx.O.AV44Tradutor6,0)},c2v:function(){gx.O.AV44Tradutor6=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRADUTOR6",'.')},nac:gx.falseFn};
   GXValidFnc[62]={lvl:0,type:"svchar",len:45,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILNOME6",gxz:"ZV55ContaContabilNome6",gxold:"OV55ContaContabilNome6",gxvar:"AV55ContaContabilNome6",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV55ContaContabilNome6=Value},v2z:function(Value){gx.O.ZV55ContaContabilNome6=Value},v2c:function(){gx.fn.setControlValue("vCONTACONTABILNOME6",gx.O.AV55ContaContabilNome6,0)},c2v:function(){gx.O.AV55ContaContabilNome6=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILNOME6")},nac:gx.falseFn};
   GXValidFnc[65]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[67]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Grupoordenacao7,isvalid:null,rgrid:[],fld:"vGRUPOORDENACAO7",gxz:"ZV12GrupoOrdenacao7",gxold:"OV12GrupoOrdenacao7",gxvar:"AV12GrupoOrdenacao7",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12GrupoOrdenacao7=Value},v2z:function(Value){gx.O.ZV12GrupoOrdenacao7=Value},v2c:function(){gx.fn.setControlValue("vGRUPOORDENACAO7",gx.O.AV12GrupoOrdenacao7,0)},c2v:function(){gx.O.AV12GrupoOrdenacao7=this.val()},val:function(){return gx.fn.getControlValue("vGRUPOORDENACAO7")},nac:gx.falseFn};
   GXValidFnc[68]={fld:"IMGCCONT7",grid:0};
   GXValidFnc[69]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRADUTOR7",gxz:"ZV43Tradutor7",gxold:"OV43Tradutor7",gxvar:"AV43Tradutor7",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV43Tradutor7=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV43Tradutor7=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRADUTOR7",gx.O.AV43Tradutor7,0)},c2v:function(){gx.O.AV43Tradutor7=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRADUTOR7",'.')},nac:gx.falseFn};
   GXValidFnc[70]={lvl:0,type:"svchar",len:45,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILNOME7",gxz:"ZV56ContaContabilNome7",gxold:"OV56ContaContabilNome7",gxvar:"AV56ContaContabilNome7",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV56ContaContabilNome7=Value},v2z:function(Value){gx.O.ZV56ContaContabilNome7=Value},v2c:function(){gx.fn.setControlValue("vCONTACONTABILNOME7",gx.O.AV56ContaContabilNome7,0)},c2v:function(){gx.O.AV56ContaContabilNome7=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILNOME7")},nac:gx.falseFn};
   GXValidFnc[73]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[75]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Grupoordenacao8,isvalid:null,rgrid:[],fld:"vGRUPOORDENACAO8",gxz:"ZV18GrupoOrdenacao8",gxold:"OV18GrupoOrdenacao8",gxvar:"AV18GrupoOrdenacao8",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18GrupoOrdenacao8=Value},v2z:function(Value){gx.O.ZV18GrupoOrdenacao8=Value},v2c:function(){gx.fn.setControlValue("vGRUPOORDENACAO8",gx.O.AV18GrupoOrdenacao8,0)},c2v:function(){gx.O.AV18GrupoOrdenacao8=this.val()},val:function(){return gx.fn.getControlValue("vGRUPOORDENACAO8")},nac:gx.falseFn};
   GXValidFnc[76]={fld:"IMGCCONT8",grid:0};
   GXValidFnc[77]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRADUTOR8",gxz:"ZV42Tradutor8",gxold:"OV42Tradutor8",gxvar:"AV42Tradutor8",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42Tradutor8=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV42Tradutor8=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRADUTOR8",gx.O.AV42Tradutor8,0)},c2v:function(){gx.O.AV42Tradutor8=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRADUTOR8",'.')},nac:gx.falseFn};
   GXValidFnc[78]={lvl:0,type:"svchar",len:45,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILNOME8",gxz:"ZV57ContaContabilNome8",gxold:"OV57ContaContabilNome8",gxvar:"AV57ContaContabilNome8",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV57ContaContabilNome8=Value},v2z:function(Value){gx.O.ZV57ContaContabilNome8=Value},v2c:function(){gx.fn.setControlValue("vCONTACONTABILNOME8",gx.O.AV57ContaContabilNome8,0)},c2v:function(){gx.O.AV57ContaContabilNome8=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILNOME8")},nac:gx.falseFn};
   GXValidFnc[81]={fld:"TEXTBLOCK22", format:0,grid:0};
   GXValidFnc[83]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Grupoordenacao9,isvalid:null,rgrid:[],fld:"vGRUPOORDENACAO9",gxz:"ZV19GrupoOrdenacao9",gxold:"OV19GrupoOrdenacao9",gxvar:"AV19GrupoOrdenacao9",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19GrupoOrdenacao9=Value},v2z:function(Value){gx.O.ZV19GrupoOrdenacao9=Value},v2c:function(){gx.fn.setControlValue("vGRUPOORDENACAO9",gx.O.AV19GrupoOrdenacao9,0)},c2v:function(){gx.O.AV19GrupoOrdenacao9=this.val()},val:function(){return gx.fn.getControlValue("vGRUPOORDENACAO9")},nac:gx.falseFn};
   GXValidFnc[84]={fld:"IMGCCONT9",grid:0};
   GXValidFnc[85]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRADUTOR9",gxz:"ZV41Tradutor9",gxold:"OV41Tradutor9",gxvar:"AV41Tradutor9",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41Tradutor9=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV41Tradutor9=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRADUTOR9",gx.O.AV41Tradutor9,0)},c2v:function(){gx.O.AV41Tradutor9=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRADUTOR9",'.')},nac:gx.falseFn};
   GXValidFnc[86]={lvl:0,type:"svchar",len:45,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILNOME9",gxz:"ZV50ContaContabilNome9",gxold:"OV50ContaContabilNome9",gxvar:"AV50ContaContabilNome9",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV50ContaContabilNome9=Value},v2z:function(Value){gx.O.ZV50ContaContabilNome9=Value},v2c:function(){gx.fn.setControlValue("vCONTACONTABILNOME9",gx.O.AV50ContaContabilNome9,0)},c2v:function(){gx.O.AV50ContaContabilNome9=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILNOME9")},nac:gx.falseFn};
   GXValidFnc[89]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[91]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Grupoordenacao10,isvalid:null,rgrid:[],fld:"vGRUPOORDENACAO10",gxz:"ZV20GrupoOrdenacao10",gxold:"OV20GrupoOrdenacao10",gxvar:"AV20GrupoOrdenacao10",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20GrupoOrdenacao10=Value},v2z:function(Value){gx.O.ZV20GrupoOrdenacao10=Value},v2c:function(){gx.fn.setControlValue("vGRUPOORDENACAO10",gx.O.AV20GrupoOrdenacao10,0)},c2v:function(){gx.O.AV20GrupoOrdenacao10=this.val()},val:function(){return gx.fn.getControlValue("vGRUPOORDENACAO10")},nac:gx.falseFn};
   GXValidFnc[92]={fld:"IMGCCONT10",grid:0};
   GXValidFnc[93]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRADUTOR10",gxz:"ZV40Tradutor10",gxold:"OV40Tradutor10",gxvar:"AV40Tradutor10",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40Tradutor10=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV40Tradutor10=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRADUTOR10",gx.O.AV40Tradutor10,0)},c2v:function(){gx.O.AV40Tradutor10=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRADUTOR10",'.')},nac:gx.falseFn};
   GXValidFnc[94]={lvl:0,type:"svchar",len:45,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILNOME10",gxz:"ZV49ContaContabilNome10",gxold:"OV49ContaContabilNome10",gxvar:"AV49ContaContabilNome10",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV49ContaContabilNome10=Value},v2z:function(Value){gx.O.ZV49ContaContabilNome10=Value},v2c:function(){gx.fn.setControlValue("vCONTACONTABILNOME10",gx.O.AV49ContaContabilNome10,0)},c2v:function(){gx.O.AV49ContaContabilNome10=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILNOME10")},nac:gx.falseFn};
   GXValidFnc[97]={fld:"TEXTBLOCK24", format:0,grid:0};
   GXValidFnc[99]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Grupoordenacao11,isvalid:null,rgrid:[],fld:"vGRUPOORDENACAO11",gxz:"ZV21GrupoOrdenacao11",gxold:"OV21GrupoOrdenacao11",gxvar:"AV21GrupoOrdenacao11",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21GrupoOrdenacao11=Value},v2z:function(Value){gx.O.ZV21GrupoOrdenacao11=Value},v2c:function(){gx.fn.setControlValue("vGRUPOORDENACAO11",gx.O.AV21GrupoOrdenacao11,0)},c2v:function(){gx.O.AV21GrupoOrdenacao11=this.val()},val:function(){return gx.fn.getControlValue("vGRUPOORDENACAO11")},nac:gx.falseFn};
   GXValidFnc[100]={fld:"IMGCCONT11",grid:0};
   GXValidFnc[101]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRADUTOR11",gxz:"ZV39Tradutor11",gxold:"OV39Tradutor11",gxvar:"AV39Tradutor11",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39Tradutor11=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV39Tradutor11=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRADUTOR11",gx.O.AV39Tradutor11,0)},c2v:function(){gx.O.AV39Tradutor11=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRADUTOR11",'.')},nac:gx.falseFn};
   GXValidFnc[102]={lvl:0,type:"svchar",len:45,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILNOME11",gxz:"ZV48ContaContabilNome11",gxold:"OV48ContaContabilNome11",gxvar:"AV48ContaContabilNome11",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV48ContaContabilNome11=Value},v2z:function(Value){gx.O.ZV48ContaContabilNome11=Value},v2c:function(){gx.fn.setControlValue("vCONTACONTABILNOME11",gx.O.AV48ContaContabilNome11,0)},c2v:function(){gx.O.AV48ContaContabilNome11=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILNOME11")},nac:gx.falseFn};
   GXValidFnc[105]={fld:"TEXTBLOCK25", format:0,grid:0};
   GXValidFnc[107]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Grupoordenacao12,isvalid:null,rgrid:[],fld:"vGRUPOORDENACAO12",gxz:"ZV22GrupoOrdenacao12",gxold:"OV22GrupoOrdenacao12",gxvar:"AV22GrupoOrdenacao12",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22GrupoOrdenacao12=Value},v2z:function(Value){gx.O.ZV22GrupoOrdenacao12=Value},v2c:function(){gx.fn.setControlValue("vGRUPOORDENACAO12",gx.O.AV22GrupoOrdenacao12,0)},c2v:function(){gx.O.AV22GrupoOrdenacao12=this.val()},val:function(){return gx.fn.getControlValue("vGRUPOORDENACAO12")},nac:gx.falseFn};
   GXValidFnc[108]={fld:"IMGCCONT12",grid:0};
   GXValidFnc[109]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRADUTOR12",gxz:"ZV38Tradutor12",gxold:"OV38Tradutor12",gxvar:"AV38Tradutor12",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38Tradutor12=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV38Tradutor12=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRADUTOR12",gx.O.AV38Tradutor12,0)},c2v:function(){gx.O.AV38Tradutor12=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRADUTOR12",'.')},nac:gx.falseFn};
   GXValidFnc[110]={lvl:0,type:"svchar",len:45,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILNOME12",gxz:"ZV47ContaContabilNome12",gxold:"OV47ContaContabilNome12",gxvar:"AV47ContaContabilNome12",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV47ContaContabilNome12=Value},v2z:function(Value){gx.O.ZV47ContaContabilNome12=Value},v2c:function(){gx.fn.setControlValue("vCONTACONTABILNOME12",gx.O.AV47ContaContabilNome12,0)},c2v:function(){gx.O.AV47ContaContabilNome12=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILNOME12")},nac:gx.falseFn};
   GXValidFnc[116]={fld:"TABLE5",grid:0};
   GXValidFnc[121]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCHAMAONBLURMASCARA",gxz:"ZV26ChamaOnBlurMascara",gxold:"OV26ChamaOnBlurMascara",gxvar:"AV26ChamaOnBlurMascara",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26ChamaOnBlurMascara=Value},v2z:function(Value){gx.O.ZV26ChamaOnBlurMascara=Value},v2c:function(){gx.fn.setControlValue("vCHAMAONBLURMASCARA",gx.O.AV26ChamaOnBlurMascara,0)},c2v:function(){gx.O.AV26ChamaOnBlurMascara=this.val()},val:function(){return gx.fn.getControlValue("vCHAMAONBLURMASCARA")},nac:gx.falseFn};
   GXValidFnc[122]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Contacontabilempresaid,isvalid:null,rgrid:[],fld:"vCONTACONTABILEMPRESAID",gxz:"ZV28ContaContabilEmpresaId",gxold:"OV28ContaContabilEmpresaId",gxvar:"AV28ContaContabilEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28ContaContabilEmpresaId=Value},v2z:function(Value){gx.O.ZV28ContaContabilEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCONTACONTABILEMPRESAID",gx.O.AV28ContaContabilEmpresaId,0)},c2v:function(){gx.O.AV28ContaContabilEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[123]={fld:"JS", format:2,grid:0};
   GXValidFnc[125]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECAR",gxz:"ZV59QtdeCar",gxold:"OV59QtdeCar",gxvar:"AV59QtdeCar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV59QtdeCar=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV59QtdeCar=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDECAR",gx.O.AV59QtdeCar,0)},c2v:function(){gx.O.AV59QtdeCar=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECAR",'.')},nac:gx.falseFn};
   GXValidFnc[127]={fld:"BTNOBS",grid:0};
   this.AV24ContaPassivo = "" ;
   this.ZV24ContaPassivo = "" ;
   this.OV24ContaPassivo = "" ;
   this.AV30Tradutor = 0 ;
   this.ZV30Tradutor = 0 ;
   this.OV30Tradutor = 0 ;
   this.AV31ContaContabilNome = "" ;
   this.ZV31ContaContabilNome = "" ;
   this.OV31ContaContabilNome = "" ;
   this.AV11GrupoOrdenacao1 = "" ;
   this.ZV11GrupoOrdenacao1 = "" ;
   this.OV11GrupoOrdenacao1 = "" ;
   this.AV34Tradutor1 = 0 ;
   this.ZV34Tradutor1 = 0 ;
   this.OV34Tradutor1 = 0 ;
   this.AV46ContaContabilNome1 = "" ;
   this.ZV46ContaContabilNome1 = "" ;
   this.OV46ContaContabilNome1 = "" ;
   this.AV13GrupoOrdenacao2 = "" ;
   this.ZV13GrupoOrdenacao2 = "" ;
   this.OV13GrupoOrdenacao2 = "" ;
   this.AV35Tradutor2 = 0 ;
   this.ZV35Tradutor2 = 0 ;
   this.OV35Tradutor2 = 0 ;
   this.AV51ContaContabilNome2 = "" ;
   this.ZV51ContaContabilNome2 = "" ;
   this.OV51ContaContabilNome2 = "" ;
   this.AV14GrupoOrdenacao3 = "" ;
   this.ZV14GrupoOrdenacao3 = "" ;
   this.OV14GrupoOrdenacao3 = "" ;
   this.AV36Tradutor3 = 0 ;
   this.ZV36Tradutor3 = 0 ;
   this.OV36Tradutor3 = 0 ;
   this.AV52ContaContabilNome3 = "" ;
   this.ZV52ContaContabilNome3 = "" ;
   this.OV52ContaContabilNome3 = "" ;
   this.AV15GrupoOrdenacao4 = "" ;
   this.ZV15GrupoOrdenacao4 = "" ;
   this.OV15GrupoOrdenacao4 = "" ;
   this.AV37Tradutor4 = 0 ;
   this.ZV37Tradutor4 = 0 ;
   this.OV37Tradutor4 = 0 ;
   this.AV53ContaContabilNome4 = "" ;
   this.ZV53ContaContabilNome4 = "" ;
   this.OV53ContaContabilNome4 = "" ;
   this.AV16GrupoOrdenacao5 = "" ;
   this.ZV16GrupoOrdenacao5 = "" ;
   this.OV16GrupoOrdenacao5 = "" ;
   this.AV45Tradutor5 = 0 ;
   this.ZV45Tradutor5 = 0 ;
   this.OV45Tradutor5 = 0 ;
   this.AV54ContaContabilNome5 = "" ;
   this.ZV54ContaContabilNome5 = "" ;
   this.OV54ContaContabilNome5 = "" ;
   this.AV17GrupoOrdenacao6 = "" ;
   this.ZV17GrupoOrdenacao6 = "" ;
   this.OV17GrupoOrdenacao6 = "" ;
   this.AV44Tradutor6 = 0 ;
   this.ZV44Tradutor6 = 0 ;
   this.OV44Tradutor6 = 0 ;
   this.AV55ContaContabilNome6 = "" ;
   this.ZV55ContaContabilNome6 = "" ;
   this.OV55ContaContabilNome6 = "" ;
   this.AV12GrupoOrdenacao7 = "" ;
   this.ZV12GrupoOrdenacao7 = "" ;
   this.OV12GrupoOrdenacao7 = "" ;
   this.AV43Tradutor7 = 0 ;
   this.ZV43Tradutor7 = 0 ;
   this.OV43Tradutor7 = 0 ;
   this.AV56ContaContabilNome7 = "" ;
   this.ZV56ContaContabilNome7 = "" ;
   this.OV56ContaContabilNome7 = "" ;
   this.AV18GrupoOrdenacao8 = "" ;
   this.ZV18GrupoOrdenacao8 = "" ;
   this.OV18GrupoOrdenacao8 = "" ;
   this.AV42Tradutor8 = 0 ;
   this.ZV42Tradutor8 = 0 ;
   this.OV42Tradutor8 = 0 ;
   this.AV57ContaContabilNome8 = "" ;
   this.ZV57ContaContabilNome8 = "" ;
   this.OV57ContaContabilNome8 = "" ;
   this.AV19GrupoOrdenacao9 = "" ;
   this.ZV19GrupoOrdenacao9 = "" ;
   this.OV19GrupoOrdenacao9 = "" ;
   this.AV41Tradutor9 = 0 ;
   this.ZV41Tradutor9 = 0 ;
   this.OV41Tradutor9 = 0 ;
   this.AV50ContaContabilNome9 = "" ;
   this.ZV50ContaContabilNome9 = "" ;
   this.OV50ContaContabilNome9 = "" ;
   this.AV20GrupoOrdenacao10 = "" ;
   this.ZV20GrupoOrdenacao10 = "" ;
   this.OV20GrupoOrdenacao10 = "" ;
   this.AV40Tradutor10 = 0 ;
   this.ZV40Tradutor10 = 0 ;
   this.OV40Tradutor10 = 0 ;
   this.AV49ContaContabilNome10 = "" ;
   this.ZV49ContaContabilNome10 = "" ;
   this.OV49ContaContabilNome10 = "" ;
   this.AV21GrupoOrdenacao11 = "" ;
   this.ZV21GrupoOrdenacao11 = "" ;
   this.OV21GrupoOrdenacao11 = "" ;
   this.AV39Tradutor11 = 0 ;
   this.ZV39Tradutor11 = 0 ;
   this.OV39Tradutor11 = 0 ;
   this.AV48ContaContabilNome11 = "" ;
   this.ZV48ContaContabilNome11 = "" ;
   this.OV48ContaContabilNome11 = "" ;
   this.AV22GrupoOrdenacao12 = "" ;
   this.ZV22GrupoOrdenacao12 = "" ;
   this.OV22GrupoOrdenacao12 = "" ;
   this.AV38Tradutor12 = 0 ;
   this.ZV38Tradutor12 = 0 ;
   this.OV38Tradutor12 = 0 ;
   this.AV47ContaContabilNome12 = "" ;
   this.ZV47ContaContabilNome12 = "" ;
   this.OV47ContaContabilNome12 = "" ;
   this.AV26ChamaOnBlurMascara = "" ;
   this.ZV26ChamaOnBlurMascara = "" ;
   this.OV26ChamaOnBlurMascara = "" ;
   this.AV28ContaContabilEmpresaId = "" ;
   this.ZV28ContaContabilEmpresaId = "" ;
   this.OV28ContaContabilEmpresaId = "" ;
   this.AV59QtdeCar = 0 ;
   this.ZV59QtdeCar = 0 ;
   this.OV59QtdeCar = 0 ;
   this.AV24ContaPassivo = "" ;
   this.AV30Tradutor = 0 ;
   this.AV31ContaContabilNome = "" ;
   this.AV11GrupoOrdenacao1 = "" ;
   this.AV34Tradutor1 = 0 ;
   this.AV46ContaContabilNome1 = "" ;
   this.AV13GrupoOrdenacao2 = "" ;
   this.AV35Tradutor2 = 0 ;
   this.AV51ContaContabilNome2 = "" ;
   this.AV14GrupoOrdenacao3 = "" ;
   this.AV36Tradutor3 = 0 ;
   this.AV52ContaContabilNome3 = "" ;
   this.AV15GrupoOrdenacao4 = "" ;
   this.AV37Tradutor4 = 0 ;
   this.AV53ContaContabilNome4 = "" ;
   this.AV16GrupoOrdenacao5 = "" ;
   this.AV45Tradutor5 = 0 ;
   this.AV54ContaContabilNome5 = "" ;
   this.AV17GrupoOrdenacao6 = "" ;
   this.AV44Tradutor6 = 0 ;
   this.AV55ContaContabilNome6 = "" ;
   this.AV12GrupoOrdenacao7 = "" ;
   this.AV43Tradutor7 = 0 ;
   this.AV56ContaContabilNome7 = "" ;
   this.AV18GrupoOrdenacao8 = "" ;
   this.AV42Tradutor8 = 0 ;
   this.AV57ContaContabilNome8 = "" ;
   this.AV19GrupoOrdenacao9 = "" ;
   this.AV41Tradutor9 = 0 ;
   this.AV50ContaContabilNome9 = "" ;
   this.AV20GrupoOrdenacao10 = "" ;
   this.AV40Tradutor10 = 0 ;
   this.AV49ContaContabilNome10 = "" ;
   this.AV21GrupoOrdenacao11 = "" ;
   this.AV39Tradutor11 = 0 ;
   this.AV48ContaContabilNome11 = "" ;
   this.AV22GrupoOrdenacao12 = "" ;
   this.AV38Tradutor12 = 0 ;
   this.AV47ContaContabilNome12 = "" ;
   this.AV26ChamaOnBlurMascara = "" ;
   this.AV28ContaContabilEmpresaId = "" ;
   this.AV59QtdeCar = 0 ;
   this.AV23SnContaPassivo = "" ;
   this.AV58Titulo = "" ;
   this.A62ContaContabilId = "" ;
   this.A176EmpresaContaContabilEmpresaId = "" ;
   this.A63ContaContabilNome = "" ;
   this.AV6EmpresaLogadaId = "" ;
   this.Events = {"e12su2_client": ["ENTER", true] ,"e13su2_client": ["'FECHAR'", true] ,"e16su2_client": ["CANCEL", true] ,"e15su1_client": ["'OBSERVACAO'", false]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV23SnContaPassivo',fld:'vSNCONTAPASSIVO'},{av:'AV24ContaPassivo',fld:'vCONTAPASSIVO'},{av:'A176EmpresaContaContabilEmpresaId',fld:'EMPRESACONTACONTABILEMPRESAID'},{av:'AV28ContaContabilEmpresaId',fld:'vCONTACONTABILEMPRESAID'},{av:'A62ContaContabilId',fld:'CONTACONTABILID'},{av:'AV11GrupoOrdenacao1',fld:'vGRUPOORDENACAO1'},{av:'AV13GrupoOrdenacao2',fld:'vGRUPOORDENACAO2'},{av:'AV14GrupoOrdenacao3',fld:'vGRUPOORDENACAO3'},{av:'AV15GrupoOrdenacao4',fld:'vGRUPOORDENACAO4'},{av:'AV16GrupoOrdenacao5',fld:'vGRUPOORDENACAO5'},{av:'AV17GrupoOrdenacao6',fld:'vGRUPOORDENACAO6'},{av:'AV12GrupoOrdenacao7',fld:'vGRUPOORDENACAO7'},{av:'AV18GrupoOrdenacao8',fld:'vGRUPOORDENACAO8'},{av:'AV19GrupoOrdenacao9',fld:'vGRUPOORDENACAO9'},{av:'AV20GrupoOrdenacao10',fld:'vGRUPOORDENACAO10'},{av:'AV21GrupoOrdenacao11',fld:'vGRUPOORDENACAO11'},{av:'AV22GrupoOrdenacao12',fld:'vGRUPOORDENACAO12'},{av:'AV6EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV58Titulo',fld:'vTITULO'}],[{av:'AV29tpErro',fld:'vTPERRO'},{av:'AV64GXLvl93',fld:'vGXLVL93'},{av:'AV65GXLvl106',fld:'vGXLVL106'},{av:'AV66GXLvl118',fld:'vGXLVL118'},{av:'AV67GXLvl130',fld:'vGXLVL130'},{av:'AV68GXLvl142',fld:'vGXLVL142'},{av:'AV69GXLvl154',fld:'vGXLVL154'},{av:'AV70GXLvl166',fld:'vGXLVL166'},{av:'AV71GXLvl178',fld:'vGXLVL178'},{av:'AV72GXLvl190',fld:'vGXLVL190'},{av:'AV73GXLvl202',fld:'vGXLVL202'},{av:'AV74GXLvl214',fld:'vGXLVL214'},{av:'AV75GXLvl226',fld:'vGXLVL226'},{av:'AV76GXLvl238',fld:'vGXLVL238'},{av:'AV11GrupoOrdenacao1',fld:'vGRUPOORDENACAO1'},{av:'AV13GrupoOrdenacao2',fld:'vGRUPOORDENACAO2'},{av:'AV14GrupoOrdenacao3',fld:'vGRUPOORDENACAO3'},{av:'AV15GrupoOrdenacao4',fld:'vGRUPOORDENACAO4'},{av:'AV16GrupoOrdenacao5',fld:'vGRUPOORDENACAO5'},{av:'AV17GrupoOrdenacao6',fld:'vGRUPOORDENACAO6'},{av:'AV12GrupoOrdenacao7',fld:'vGRUPOORDENACAO7'},{av:'AV18GrupoOrdenacao8',fld:'vGRUPOORDENACAO8'},{av:'AV19GrupoOrdenacao9',fld:'vGRUPOORDENACAO9'},{av:'AV20GrupoOrdenacao10',fld:'vGRUPOORDENACAO10'},{av:'AV21GrupoOrdenacao11',fld:'vGRUPOORDENACAO11'},{av:'AV22GrupoOrdenacao12',fld:'vGRUPOORDENACAO12'},{av:'AV24ContaPassivo',fld:'vCONTAPASSIVO'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV58Titulo',fld:'vTITULO'},{av:'AV23SnContaPassivo',fld:'vSNCONTAPASSIVO'}],[]];
   this.EvtParms["'OBSERVACAO'"] = [[{av:'AV23SnContaPassivo',fld:'vSNCONTAPASSIVO'},{av:'AV6EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[]];
   this.setPrompt("IMGCCONTPAS", [10,12]);
   this.setPrompt("IMGCCONT1", [19,21]);
   this.setPrompt("IMGCCONT2", [27,29]);
   this.setPrompt("IMGCCONT3", [35,37]);
   this.setPrompt("IMGCCONT4", [43,45]);
   this.setPrompt("IMGCCONT5", [51,53]);
   this.setPrompt("IMGCCONT6", [59,61]);
   this.setPrompt("IMGCCONT7", [67,69]);
   this.setPrompt("IMGCCONT8", [75,77]);
   this.setPrompt("IMGCCONT9", [83,85]);
   this.setPrompt("IMGCCONT10", [91,93]);
   this.setPrompt("IMGCCONT11", [99,101]);
   this.setPrompt("IMGCCONT12", [107,109]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV6EmpresaLogadaId", "vEMPRESALOGADAID", 0, "char");
   this.setVCMap("AV23SnContaPassivo", "vSNCONTAPASSIVO", 0, "char");
   this.setVCMap("AV58Titulo", "vTITULO", 0, "svchar");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodalparmgrpordenacao());
