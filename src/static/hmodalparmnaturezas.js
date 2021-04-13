/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:16:5.48
*/
gx.evt.autoSkip = false;
gx.define('hmodalparmnaturezas', false, function () {
   this.ServerClass =  "hmodalparmnaturezas" ;
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
   };
   this.Validv_Naturezapagacr=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vNATUREZAPAGACR");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Naturezapagdes=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vNATUREZAPAGDES");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Naturezarecacr=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vNATUREZARECACR");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Naturezarecdes=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vNATUREZARECDES");
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
   this.e15t01_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hmodalobsparms4",[this.AV6EmpresaLogadaId, "CPR", "NATUREZAPAGACR", "NATUREZAPAGDES", "NATUREZARECACR", "NATUREZARECDES"]), []);
      this.refreshOutputs([]);
   };
   this.e12t02_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13t02_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e16t02_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,11,14,16,17,20,22,23,26,28,29,35,39,41,43,45,46,47,48,49];
   this.GXLastCtrlId =49;
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE6",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Naturezapagacr,isvalid:null,rgrid:[],fld:"vNATUREZAPAGACR",gxz:"ZV11NaturezaPagAcr",gxold:"OV11NaturezaPagAcr",gxvar:"AV11NaturezaPagAcr",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11NaturezaPagAcr=Value},v2z:function(Value){gx.O.ZV11NaturezaPagAcr=Value},v2c:function(){gx.fn.setControlValue("vNATUREZAPAGACR",gx.O.AV11NaturezaPagAcr,0)},c2v:function(){gx.O.AV11NaturezaPagAcr=this.val()},val:function(){return gx.fn.getControlValue("vNATUREZAPAGACR")},nac:gx.falseFn};
   GXValidFnc[11]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNATUREZAPAGACRDESC",gxz:"ZV18NaturezaPagAcrDesc",gxold:"OV18NaturezaPagAcrDesc",gxvar:"AV18NaturezaPagAcrDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18NaturezaPagAcrDesc=Value},v2z:function(Value){gx.O.ZV18NaturezaPagAcrDesc=Value},v2c:function(){gx.fn.setControlValue("vNATUREZAPAGACRDESC",gx.O.AV18NaturezaPagAcrDesc,0)},c2v:function(){gx.O.AV18NaturezaPagAcrDesc=this.val()},val:function(){return gx.fn.getControlValue("vNATUREZAPAGACRDESC")},nac:gx.falseFn};
   GXValidFnc[14]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Naturezapagdes,isvalid:null,rgrid:[],fld:"vNATUREZAPAGDES",gxz:"ZV12NaturezaPagDes",gxold:"OV12NaturezaPagDes",gxvar:"AV12NaturezaPagDes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12NaturezaPagDes=Value},v2z:function(Value){gx.O.ZV12NaturezaPagDes=Value},v2c:function(){gx.fn.setControlValue("vNATUREZAPAGDES",gx.O.AV12NaturezaPagDes,0)},c2v:function(){gx.O.AV12NaturezaPagDes=this.val()},val:function(){return gx.fn.getControlValue("vNATUREZAPAGDES")},nac:gx.falseFn};
   GXValidFnc[17]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNATUREZAPAGDESDESC",gxz:"ZV19NaturezaPagDesDesc",gxold:"OV19NaturezaPagDesDesc",gxvar:"AV19NaturezaPagDesDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19NaturezaPagDesDesc=Value},v2z:function(Value){gx.O.ZV19NaturezaPagDesDesc=Value},v2c:function(){gx.fn.setControlValue("vNATUREZAPAGDESDESC",gx.O.AV19NaturezaPagDesDesc,0)},c2v:function(){gx.O.AV19NaturezaPagDesDesc=this.val()},val:function(){return gx.fn.getControlValue("vNATUREZAPAGDESDESC")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Naturezarecacr,isvalid:null,rgrid:[],fld:"vNATUREZARECACR",gxz:"ZV13NaturezaRecAcr",gxold:"OV13NaturezaRecAcr",gxvar:"AV13NaturezaRecAcr",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13NaturezaRecAcr=Value},v2z:function(Value){gx.O.ZV13NaturezaRecAcr=Value},v2c:function(){gx.fn.setControlValue("vNATUREZARECACR",gx.O.AV13NaturezaRecAcr,0)},c2v:function(){gx.O.AV13NaturezaRecAcr=this.val()},val:function(){return gx.fn.getControlValue("vNATUREZARECACR")},nac:gx.falseFn};
   GXValidFnc[23]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNATUREZARECACRDESC",gxz:"ZV20NaturezaRecAcrDesc",gxold:"OV20NaturezaRecAcrDesc",gxvar:"AV20NaturezaRecAcrDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20NaturezaRecAcrDesc=Value},v2z:function(Value){gx.O.ZV20NaturezaRecAcrDesc=Value},v2c:function(){gx.fn.setControlValue("vNATUREZARECACRDESC",gx.O.AV20NaturezaRecAcrDesc,0)},c2v:function(){gx.O.AV20NaturezaRecAcrDesc=this.val()},val:function(){return gx.fn.getControlValue("vNATUREZARECACRDESC")},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Naturezarecdes,isvalid:null,rgrid:[],fld:"vNATUREZARECDES",gxz:"ZV14NaturezaRecDes",gxold:"OV14NaturezaRecDes",gxvar:"AV14NaturezaRecDes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14NaturezaRecDes=Value},v2z:function(Value){gx.O.ZV14NaturezaRecDes=Value},v2c:function(){gx.fn.setControlValue("vNATUREZARECDES",gx.O.AV14NaturezaRecDes,0)},c2v:function(){gx.O.AV14NaturezaRecDes=this.val()},val:function(){return gx.fn.getControlValue("vNATUREZARECDES")},nac:gx.falseFn};
   GXValidFnc[29]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNATUREZARECDESDESC",gxz:"ZV21NaturezaRecDesDesc",gxold:"OV21NaturezaRecDesDesc",gxvar:"AV21NaturezaRecDesDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21NaturezaRecDesDesc=Value},v2z:function(Value){gx.O.ZV21NaturezaRecDesDesc=Value},v2c:function(){gx.fn.setControlValue("vNATUREZARECDESDESC",gx.O.AV21NaturezaRecDesDesc,0)},c2v:function(){gx.O.AV21NaturezaRecDesDesc=this.val()},val:function(){return gx.fn.getControlValue("vNATUREZARECDESDESC")},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TABLE5",grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapadrao,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAO",gxz:"ZV10EmpresaPadrao",gxold:"OV10EmpresaPadrao",gxvar:"AV10EmpresaPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10EmpresaPadrao=Value},v2z:function(Value){gx.O.ZV10EmpresaPadrao=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAO",gx.O.AV10EmpresaPadrao,0)},c2v:function(){gx.O.AV10EmpresaPadrao=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAO")},nac:gx.falseFn};
   GXValidFnc[41]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECARACTER",gxz:"ZV17QtdeCaracter",gxold:"OV17QtdeCaracter",gxvar:"AV17QtdeCaracter",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17QtdeCaracter=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17QtdeCaracter=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDECARACTER",gx.O.AV17QtdeCaracter,0)},c2v:function(){gx.O.AV17QtdeCaracter=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECARACTER",'.')},nac:gx.falseFn};
   GXValidFnc[43]={fld:"JS", format:2,grid:0};
   GXValidFnc[45]={fld:"BTNOBS",grid:0};
   GXValidFnc[46]={fld:"PROMPT_NATUREZAPAGACR",grid:0};
   GXValidFnc[47]={fld:"PROMPT_NATUREZAPAGDES",grid:0};
   GXValidFnc[48]={fld:"PROMPT_NATUREZARECACR",grid:0};
   GXValidFnc[49]={fld:"PROMPT_NATUREZARECDES",grid:0};
   this.AV11NaturezaPagAcr = "" ;
   this.ZV11NaturezaPagAcr = "" ;
   this.OV11NaturezaPagAcr = "" ;
   this.AV18NaturezaPagAcrDesc = "" ;
   this.ZV18NaturezaPagAcrDesc = "" ;
   this.OV18NaturezaPagAcrDesc = "" ;
   this.AV12NaturezaPagDes = "" ;
   this.ZV12NaturezaPagDes = "" ;
   this.OV12NaturezaPagDes = "" ;
   this.AV19NaturezaPagDesDesc = "" ;
   this.ZV19NaturezaPagDesDesc = "" ;
   this.OV19NaturezaPagDesDesc = "" ;
   this.AV13NaturezaRecAcr = "" ;
   this.ZV13NaturezaRecAcr = "" ;
   this.OV13NaturezaRecAcr = "" ;
   this.AV20NaturezaRecAcrDesc = "" ;
   this.ZV20NaturezaRecAcrDesc = "" ;
   this.OV20NaturezaRecAcrDesc = "" ;
   this.AV14NaturezaRecDes = "" ;
   this.ZV14NaturezaRecDes = "" ;
   this.OV14NaturezaRecDes = "" ;
   this.AV21NaturezaRecDesDesc = "" ;
   this.ZV21NaturezaRecDesDesc = "" ;
   this.OV21NaturezaRecDesDesc = "" ;
   this.AV10EmpresaPadrao = "" ;
   this.ZV10EmpresaPadrao = "" ;
   this.OV10EmpresaPadrao = "" ;
   this.AV17QtdeCaracter = 0 ;
   this.ZV17QtdeCaracter = 0 ;
   this.OV17QtdeCaracter = 0 ;
   this.AV11NaturezaPagAcr = "" ;
   this.AV18NaturezaPagAcrDesc = "" ;
   this.AV12NaturezaPagDes = "" ;
   this.AV19NaturezaPagDesDesc = "" ;
   this.AV13NaturezaRecAcr = "" ;
   this.AV20NaturezaRecAcrDesc = "" ;
   this.AV14NaturezaRecDes = "" ;
   this.AV21NaturezaRecDesDesc = "" ;
   this.AV10EmpresaPadrao = "" ;
   this.AV17QtdeCaracter = 0 ;
   this.A172NaturezaId = "" ;
   this.A171EmpresaNaturezaEmpresaId = "" ;
   this.A154NaturezaDescricao = "" ;
   this.AV6EmpresaLogadaId = "" ;
   this.Events = {"e12t02_client": ["ENTER", true] ,"e13t02_client": ["'FECHAR'", true] ,"e16t02_client": ["CANCEL", true] ,"e15t01_client": ["'OBSERVACAO'", false]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV11NaturezaPagAcr',fld:'vNATUREZAPAGACR'},{av:'A171EmpresaNaturezaEmpresaId',fld:'EMPRESANATUREZAEMPRESAID'},{av:'AV10EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A172NaturezaId',fld:'NATUREZAID'},{av:'AV12NaturezaPagDes',fld:'vNATUREZAPAGDES'},{av:'AV13NaturezaRecAcr',fld:'vNATUREZARECACR'},{av:'AV14NaturezaRecDes',fld:'vNATUREZARECDES'},{av:'AV6EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[{av:'AV15tpErro',fld:'vTPERRO'},{av:'AV28GXLvl42',fld:'vGXLVL42'},{av:'AV29GXLvl54',fld:'vGXLVL54'},{av:'AV30GXLvl66',fld:'vGXLVL66'},{av:'AV31GXLvl78',fld:'vGXLVL78'},{av:'AV11NaturezaPagAcr',fld:'vNATUREZAPAGACR'},{av:'AV12NaturezaPagDes',fld:'vNATUREZAPAGDES'},{av:'AV13NaturezaRecAcr',fld:'vNATUREZARECACR'},{av:'AV14NaturezaRecDes',fld:'vNATUREZARECDES'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'OBSERVACAO'"] = [[{av:'AV6EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[]];
   this.setPrompt("PROMPT_NATUREZAPAGACR", [10]);
   this.setPrompt("PROMPT_NATUREZAPAGDES", [16]);
   this.setPrompt("PROMPT_NATUREZARECACR", [22]);
   this.setPrompt("PROMPT_NATUREZARECDES", [28]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV6EmpresaLogadaId", "vEMPRESALOGADAID", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodalparmnaturezas());
