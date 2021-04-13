/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:24:19.91
*/
gx.evt.autoSkip = false;
gx.define('tpiscofinsaux', false, function () {
   this.ServerClass =  "tpiscofinsaux" ;
   this.PackageName =  "" ;
   this.setObjectType("trn");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("20", "LAST");
   this.addKeyListener("19", "FIRST");
   this.addKeyListener("16", "SELECT");
   this.addKeyListener("13", "DELETE");
   this.addKeyListener("9", "GET");
   this.addKeyListener("2", "PROMPT");
   this.addKeyListener("8", "NEXT");
   this.addKeyListener("7", "PREVIOUS");
   this.addKeyListener("4", "CHECK");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.A10361PisCofinsAuxContab=gx.fn.getControlValue("PISCOFINSAUXCONTAB") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Piscofinsauxtipo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PISCOFINSAUXTIPO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Piscofinsauxcst=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PISCOFINSAUXCST");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Piscofinsauxnatureza=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Piscofinsauxnatureza",["gx.O.A8443PisCofinsAuxTipo", "gx.O.A8444PisCofinsAuxCST", "gx.O.A8445PisCofinsAuxNatureza", "gx.num.urlDecimal(gx.O.A8442PisCofinsAuxValorReceita,\'.\',\',\')", "gx.O.A10361PisCofinsAuxContab"],["A8442PisCofinsAuxValorReceita", "A10361PisCofinsAuxContab", "Gx_mode", "Z8443PisCofinsAuxTipo", "Z8444PisCofinsAuxCST", "Z8445PisCofinsAuxNatureza", "Z8442PisCofinsAuxValorReceita", "Z10361PisCofinsAuxContab", ["BTN_GET","Enabled"], ["BUTTON1","Enabled"]]);
      return true;
   }
   this.e11bw622_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e12bw622_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13bw622_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,22,24,28,30,31,40,42];
   this.GXLastCtrlId =42;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Piscofinsauxtipo,isvalid:null,rgrid:[],fld:"PISCOFINSAUXTIPO",gxz:"Z8443PisCofinsAuxTipo",gxold:"O8443PisCofinsAuxTipo",gxvar:"A8443PisCofinsAuxTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8443PisCofinsAuxTipo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8443PisCofinsAuxTipo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PISCOFINSAUXTIPO",gx.O.A8443PisCofinsAuxTipo,0)},c2v:function(){gx.O.A8443PisCofinsAuxTipo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PISCOFINSAUXTIPO",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:3,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Piscofinsauxcst,isvalid:null,rgrid:[],fld:"PISCOFINSAUXCST",gxz:"Z8444PisCofinsAuxCST",gxold:"O8444PisCofinsAuxCST",gxvar:"A8444PisCofinsAuxCST",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8444PisCofinsAuxCST=Value},v2z:function(Value){gx.O.Z8444PisCofinsAuxCST=Value},v2c:function(){gx.fn.setControlValue("PISCOFINSAUXCST",gx.O.A8444PisCofinsAuxCST,0)},c2v:function(){gx.O.A8444PisCofinsAuxCST=this.val()},val:function(){return gx.fn.getControlValue("PISCOFINSAUXCST")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Piscofinsauxnatureza,isvalid:null,rgrid:[],fld:"PISCOFINSAUXNATUREZA",gxz:"Z8445PisCofinsAuxNatureza",gxold:"O8445PisCofinsAuxNatureza",gxvar:"A8445PisCofinsAuxNatureza",ucs:[],op:[30],ip:[30,24,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8445PisCofinsAuxNatureza=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8445PisCofinsAuxNatureza=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PISCOFINSAUXNATUREZA",gx.O.A8445PisCofinsAuxNatureza,0)},c2v:function(){gx.O.A8445PisCofinsAuxNatureza=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PISCOFINSAUXNATUREZA",'.')},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PISCOFINSAUXVALORRECEITA",gxz:"Z8442PisCofinsAuxValorReceita",gxold:"O8442PisCofinsAuxValorReceita",gxvar:"A8442PisCofinsAuxValorReceita",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8442PisCofinsAuxValorReceita=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8442PisCofinsAuxValorReceita=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("PISCOFINSAUXVALORRECEITA",gx.O.A8442PisCofinsAuxValorReceita,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8442PisCofinsAuxValorReceita=this.val()},val:function(){return gx.fn.getDecimalValue("PISCOFINSAUXVALORRECEITA",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[31]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"BTNHELP",grid:0};
   this.A8443PisCofinsAuxTipo = 0 ;
   this.Z8443PisCofinsAuxTipo = 0 ;
   this.O8443PisCofinsAuxTipo = 0 ;
   this.A8444PisCofinsAuxCST = "" ;
   this.Z8444PisCofinsAuxCST = "" ;
   this.O8444PisCofinsAuxCST = "" ;
   this.A8445PisCofinsAuxNatureza = 0 ;
   this.Z8445PisCofinsAuxNatureza = 0 ;
   this.O8445PisCofinsAuxNatureza = 0 ;
   this.A8442PisCofinsAuxValorReceita = 0 ;
   this.Z8442PisCofinsAuxValorReceita = 0 ;
   this.O8442PisCofinsAuxValorReceita = 0 ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV8Logon = {} ;
   this.A8443PisCofinsAuxTipo = 0 ;
   this.A8444PisCofinsAuxCST = "" ;
   this.A8445PisCofinsAuxNatureza = 0 ;
   this.A8442PisCofinsAuxValorReceita = 0 ;
   this.A10361PisCofinsAuxContab = "" ;
   this.Events = {"e12bw622_client": ["ENTER", true] ,"e13bw622_client": ["CANCEL", true] ,"e11bw622_client": ["'FECHAR'", false]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("A10361PisCofinsAuxContab", "PISCOFINSAUXCONTAB", 0, "svchar");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tpiscofinsaux());
