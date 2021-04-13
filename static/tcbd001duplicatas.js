/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:19:15.23
*/
gx.evt.autoSkip = false;
gx.define('tcbd001duplicatas', false, function () {
   this.ServerClass =  "tcbd001duplicatas" ;
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
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Cbd001duplicatascbdempcodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CBD001DUPLICATASCBDEMPCODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cbd001duplicatascbdntfserie=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CBD001DUPLICATASCBDNTFSERIE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cbd001duplicatascbdntfnumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CBD001DUPLICATASCBDNTFNUMERO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cbd001duplicatascbddupseq=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Cbd001duplicatascbddupseq",["gx.O.A7125CBD001DUPLICATASCbdEmpCodigo", "gx.O.A7128CBD001DUPLICATASCbdNtfSerie", "gx.O.A7127CBD001DUPLICATASCbdNtfNumero", "gx.O.A9236CBD001DUPLICATASCbdDupSeq", "gx.O.A7126CBD001DUPLICATASCbdnDup", 'gx.date.urlDate(gx.O.A7124CBD001DUPLICATASCbddVenc,"DMY4")', "gx.num.urlDecimal(gx.O.A7129CBD001DUPLICATASCbdvDup,\'.\',\',\')"],["A7126CBD001DUPLICATASCbdnDup", "A7124CBD001DUPLICATASCbddVenc", "A7129CBD001DUPLICATASCbdvDup", "Gx_mode", "Z7125CBD001DUPLICATASCbdEmpCodigo", "Z7128CBD001DUPLICATASCbdNtfSerie", "Z7127CBD001DUPLICATASCbdNtfNumero", "Z9236CBD001DUPLICATASCbdDupSeq", "Z7126CBD001DUPLICATASCbdnDup", "Z7124CBD001DUPLICATASCbddVenc", "Z7129CBD001DUPLICATASCbdvDup", ["BTN_GET","Enabled"], ["BTN_DELETE","Enabled"], ["BTN_ENTER","Enabled"], ["BTN_CHECK","Enabled"]]);
      return true;
   }
   this.e11a5693_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12a5693_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,15,18,20,23,25,28,30,33,35,39,41,44,46,49,51];
   this.GXLastCtrlId =51;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[15]={fld:"TABLE2",grid:0};
   GXValidFnc[18]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001duplicatascbdempcodigo,isvalid:null,rgrid:[],fld:"CBD001DUPLICATASCBDEMPCODIGO",gxz:"Z7125CBD001DUPLICATASCbdEmpCodigo",gxold:"O7125CBD001DUPLICATASCbdEmpCodigo",gxvar:"A7125CBD001DUPLICATASCbdEmpCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7125CBD001DUPLICATASCbdEmpCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7125CBD001DUPLICATASCbdEmpCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBD001DUPLICATASCBDEMPCODIGO",gx.O.A7125CBD001DUPLICATASCbdEmpCodigo,0)},c2v:function(){gx.O.A7125CBD001DUPLICATASCbdEmpCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBD001DUPLICATASCBDEMPCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"char",len:3,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001duplicatascbdntfserie,isvalid:null,rgrid:[],fld:"CBD001DUPLICATASCBDNTFSERIE",gxz:"Z7128CBD001DUPLICATASCbdNtfSerie",gxold:"O7128CBD001DUPLICATASCbdNtfSerie",gxvar:"A7128CBD001DUPLICATASCbdNtfSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7128CBD001DUPLICATASCbdNtfSerie=Value},v2z:function(Value){gx.O.Z7128CBD001DUPLICATASCbdNtfSerie=Value},v2c:function(){gx.fn.setControlValue("CBD001DUPLICATASCBDNTFSERIE",gx.O.A7128CBD001DUPLICATASCbdNtfSerie,0)},c2v:function(){gx.O.A7128CBD001DUPLICATASCbdNtfSerie=this.val()},val:function(){return gx.fn.getControlValue("CBD001DUPLICATASCBDNTFSERIE")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001duplicatascbdntfnumero,isvalid:null,rgrid:[],fld:"CBD001DUPLICATASCBDNTFNUMERO",gxz:"Z7127CBD001DUPLICATASCbdNtfNumero",gxold:"O7127CBD001DUPLICATASCbdNtfNumero",gxvar:"A7127CBD001DUPLICATASCbdNtfNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7127CBD001DUPLICATASCbdNtfNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7127CBD001DUPLICATASCbdNtfNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBD001DUPLICATASCBDNTFNUMERO",gx.O.A7127CBD001DUPLICATASCbdNtfNumero,0)},c2v:function(){gx.O.A7127CBD001DUPLICATASCbdNtfNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBD001DUPLICATASCBDNTFNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001duplicatascbddupseq,isvalid:null,rgrid:[],fld:"CBD001DUPLICATASCBDDUPSEQ",gxz:"Z9236CBD001DUPLICATASCbdDupSeq",gxold:"O9236CBD001DUPLICATASCbdDupSeq",gxvar:"A9236CBD001DUPLICATASCbdDupSeq",ucs:[],op:[51,46,41],ip:[51,46,41,35,30,25,20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9236CBD001DUPLICATASCbdDupSeq=Value},v2z:function(Value){gx.O.Z9236CBD001DUPLICATASCbdDupSeq=Value},v2c:function(){gx.fn.setControlValue("CBD001DUPLICATASCBDDUPSEQ",gx.O.A9236CBD001DUPLICATASCbdDupSeq,0)},c2v:function(){gx.O.A9236CBD001DUPLICATASCbdDupSeq=this.val()},val:function(){return gx.fn.getControlValue("CBD001DUPLICATASCBDDUPSEQ")},nac:gx.falseFn};
   GXValidFnc[39]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBD001DUPLICATASCBDNDUP",gxz:"Z7126CBD001DUPLICATASCbdnDup",gxold:"O7126CBD001DUPLICATASCbdnDup",gxvar:"A7126CBD001DUPLICATASCbdnDup",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7126CBD001DUPLICATASCbdnDup=Value},v2z:function(Value){gx.O.Z7126CBD001DUPLICATASCbdnDup=Value},v2c:function(){gx.fn.setControlValue("CBD001DUPLICATASCBDNDUP",gx.O.A7126CBD001DUPLICATASCbdnDup,0)},c2v:function(){gx.O.A7126CBD001DUPLICATASCbdnDup=this.val()},val:function(){return gx.fn.getControlValue("CBD001DUPLICATASCBDNDUP")},nac:gx.falseFn};
   GXValidFnc[44]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[46]={lvl:0,type:"date",len:8,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBD001DUPLICATASCBDDVENC",gxz:"Z7124CBD001DUPLICATASCbddVenc",gxold:"O7124CBD001DUPLICATASCbddVenc",gxvar:"A7124CBD001DUPLICATASCbddVenc",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7124CBD001DUPLICATASCbddVenc=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z7124CBD001DUPLICATASCbddVenc=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("CBD001DUPLICATASCBDDVENC",gx.O.A7124CBD001DUPLICATASCbddVenc,0)},c2v:function(){gx.O.A7124CBD001DUPLICATASCbddVenc=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("CBD001DUPLICATASCBDDVENC")},nac:gx.falseFn};
   GXValidFnc[49]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[51]={lvl:0,type:"decimal",len:15,dec:2,sign:false,pic:"ZZZZZZZZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBD001DUPLICATASCBDVDUP",gxz:"Z7129CBD001DUPLICATASCbdvDup",gxold:"O7129CBD001DUPLICATASCbdvDup",gxvar:"A7129CBD001DUPLICATASCbdvDup",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7129CBD001DUPLICATASCbdvDup=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7129CBD001DUPLICATASCbdvDup=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CBD001DUPLICATASCBDVDUP",gx.O.A7129CBD001DUPLICATASCbdvDup,2,',')},c2v:function(){gx.O.A7129CBD001DUPLICATASCbdvDup=this.val()},val:function(){return gx.fn.getDecimalValue("CBD001DUPLICATASCBDVDUP",'.',',')},nac:gx.falseFn};
   this.A7125CBD001DUPLICATASCbdEmpCodigo = 0 ;
   this.Z7125CBD001DUPLICATASCbdEmpCodigo = 0 ;
   this.O7125CBD001DUPLICATASCbdEmpCodigo = 0 ;
   this.A7128CBD001DUPLICATASCbdNtfSerie = "" ;
   this.Z7128CBD001DUPLICATASCbdNtfSerie = "" ;
   this.O7128CBD001DUPLICATASCbdNtfSerie = "" ;
   this.A7127CBD001DUPLICATASCbdNtfNumero = 0 ;
   this.Z7127CBD001DUPLICATASCbdNtfNumero = 0 ;
   this.O7127CBD001DUPLICATASCbdNtfNumero = 0 ;
   this.A9236CBD001DUPLICATASCbdDupSeq = "" ;
   this.Z9236CBD001DUPLICATASCbdDupSeq = "" ;
   this.O9236CBD001DUPLICATASCbdDupSeq = "" ;
   this.A7126CBD001DUPLICATASCbdnDup = "" ;
   this.Z7126CBD001DUPLICATASCbdnDup = "" ;
   this.O7126CBD001DUPLICATASCbdnDup = "" ;
   this.A7124CBD001DUPLICATASCbddVenc = gx.date.nullDate() ;
   this.Z7124CBD001DUPLICATASCbddVenc = gx.date.nullDate() ;
   this.O7124CBD001DUPLICATASCbddVenc = gx.date.nullDate() ;
   this.A7129CBD001DUPLICATASCbdvDup = 0 ;
   this.Z7129CBD001DUPLICATASCbdvDup = 0 ;
   this.O7129CBD001DUPLICATASCbdvDup = 0 ;
   this.A7125CBD001DUPLICATASCbdEmpCodigo = 0 ;
   this.A7128CBD001DUPLICATASCbdNtfSerie = "" ;
   this.A7127CBD001DUPLICATASCbdNtfNumero = 0 ;
   this.A9236CBD001DUPLICATASCbdDupSeq = "" ;
   this.A7126CBD001DUPLICATASCbdnDup = "" ;
   this.A7124CBD001DUPLICATASCbddVenc = gx.date.nullDate() ;
   this.A7129CBD001DUPLICATASCbdvDup = 0 ;
   this.Events = {"e11a5693_client": ["ENTER", true] ,"e12a5693_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EnterCtrl = ["BTN_ENTER"];
   this.CheckCtrl = ["BTN_CHECK"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tcbd001duplicatas());
