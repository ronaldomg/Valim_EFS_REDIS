/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:19:11.38
*/
gx.evt.autoSkip = false;
gx.define('tcbd001nref', false, function () {
   this.ServerClass =  "tcbd001nref" ;
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
   this.Valid_Cbd001nrefcbdempcodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CBD001NREFCBDEMPCODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cbd001nrefcbdntfserie=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CBD001NREFCBDNTFSERIE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cbd001nrefcbdntfnumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CBD001NREFCBDNTFNUMERO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cbd001nrefcbdrefseq=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Cbd001nrefcbdrefseq",["gx.O.A7139CBD001NREFCbdEmpCodigo", "gx.O.A7147CBD001NREFCbdNtfSerie", "gx.O.A7146CBD001NREFCbdNtfNumero", "gx.O.A7150CBD001NREFCbdrefseq", "gx.O.A7149CBD001NREFCbdrefNFe", "gx.O.A7138CBD001NREFCbdcUF_refNFE", "gx.O.A7135CBD001NREFCbdAAMM", "gx.O.A7136CBD001NREFCbdCNPJ", "gx.O.A7142CBD001NREFCbdmod_refNFE", "gx.O.A7151CBD001NREFCbdserie_refNFE", "gx.O.A7145CBD001NREFCbdnNF_refNFE", "gx.O.A7137CBD001NREFCbdCPF", "gx.O.A7140CBD001NREFCbdIE_refnfp", "gx.O.A7141CBD001NREFCbdmod_refecf", "gx.O.A7148CBD001NREFCbdrefcte", "gx.O.A7144CBD001NREFCbdnecf_refecf", "gx.O.A7143CBD001NREFCbdncoo_refecf"],["A7149CBD001NREFCbdrefNFe", "A7138CBD001NREFCbdcUF_refNFE", "A7135CBD001NREFCbdAAMM", "A7136CBD001NREFCbdCNPJ", "A7142CBD001NREFCbdmod_refNFE", "A7151CBD001NREFCbdserie_refNFE", "A7145CBD001NREFCbdnNF_refNFE", "A7137CBD001NREFCbdCPF", "A7140CBD001NREFCbdIE_refnfp", "A7141CBD001NREFCbdmod_refecf", "A7148CBD001NREFCbdrefcte", "A7144CBD001NREFCbdnecf_refecf", "A7143CBD001NREFCbdncoo_refecf", "Gx_mode", "Z7139CBD001NREFCbdEmpCodigo", "Z7147CBD001NREFCbdNtfSerie", "Z7146CBD001NREFCbdNtfNumero", "Z7150CBD001NREFCbdrefseq", "Z7149CBD001NREFCbdrefNFe", "Z7138CBD001NREFCbdcUF_refNFE", "Z7135CBD001NREFCbdAAMM", "Z7136CBD001NREFCbdCNPJ", "Z7142CBD001NREFCbdmod_refNFE", "Z7151CBD001NREFCbdserie_refNFE", "Z7145CBD001NREFCbdnNF_refNFE", "Z7137CBD001NREFCbdCPF", "Z7140CBD001NREFCbdIE_refnfp", "Z7141CBD001NREFCbdmod_refecf", "Z7148CBD001NREFCbdrefcte", "Z7144CBD001NREFCbdnecf_refecf", "Z7143CBD001NREFCbdncoo_refecf", ["BTN_GET","Enabled"], ["BTN_DELETE","Enabled"], ["BTN_ENTER","Enabled"], ["BTN_CHECK","Enabled"]]);
      return true;
   }
   this.e11a3543_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12a3543_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,15,18,20,23,25,28,30,33,35,39,41,44,46,49,51,54,56,59,61,64,66,69,71,74,76,79,81,84,86,89,91,94,96,99,101];
   this.GXLastCtrlId =101;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[15]={fld:"TABLE2",grid:0};
   GXValidFnc[18]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001nrefcbdempcodigo,isvalid:null,rgrid:[],fld:"CBD001NREFCBDEMPCODIGO",gxz:"Z7139CBD001NREFCbdEmpCodigo",gxold:"O7139CBD001NREFCbdEmpCodigo",gxvar:"A7139CBD001NREFCbdEmpCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7139CBD001NREFCbdEmpCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7139CBD001NREFCbdEmpCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBD001NREFCBDEMPCODIGO",gx.O.A7139CBD001NREFCbdEmpCodigo,0)},c2v:function(){gx.O.A7139CBD001NREFCbdEmpCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBD001NREFCBDEMPCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"char",len:3,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001nrefcbdntfserie,isvalid:null,rgrid:[],fld:"CBD001NREFCBDNTFSERIE",gxz:"Z7147CBD001NREFCbdNtfSerie",gxold:"O7147CBD001NREFCbdNtfSerie",gxvar:"A7147CBD001NREFCbdNtfSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7147CBD001NREFCbdNtfSerie=Value},v2z:function(Value){gx.O.Z7147CBD001NREFCbdNtfSerie=Value},v2c:function(){gx.fn.setControlValue("CBD001NREFCBDNTFSERIE",gx.O.A7147CBD001NREFCbdNtfSerie,0)},c2v:function(){gx.O.A7147CBD001NREFCbdNtfSerie=this.val()},val:function(){return gx.fn.getControlValue("CBD001NREFCBDNTFSERIE")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001nrefcbdntfnumero,isvalid:null,rgrid:[],fld:"CBD001NREFCBDNTFNUMERO",gxz:"Z7146CBD001NREFCbdNtfNumero",gxold:"O7146CBD001NREFCbdNtfNumero",gxvar:"A7146CBD001NREFCbdNtfNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7146CBD001NREFCbdNtfNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7146CBD001NREFCbdNtfNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBD001NREFCBDNTFNUMERO",gx.O.A7146CBD001NREFCbdNtfNumero,0)},c2v:function(){gx.O.A7146CBD001NREFCbdNtfNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBD001NREFCBDNTFNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001nrefcbdrefseq,isvalid:null,rgrid:[],fld:"CBD001NREFCBDREFSEQ",gxz:"Z7150CBD001NREFCbdrefseq",gxold:"O7150CBD001NREFCbdrefseq",gxvar:"A7150CBD001NREFCbdrefseq",ucs:[],op:[101,96,91,86,81,76,71,66,61,56,51,46,41],ip:[101,96,91,86,81,76,71,66,61,56,51,46,41,35,30,25,20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7150CBD001NREFCbdrefseq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7150CBD001NREFCbdrefseq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBD001NREFCBDREFSEQ",gx.O.A7150CBD001NREFCbdrefseq,0)},c2v:function(){gx.O.A7150CBD001NREFCbdrefseq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBD001NREFCBDREFSEQ",'.')},nac:gx.falseFn};
   GXValidFnc[39]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"svchar",len:44,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBD001NREFCBDREFNFE",gxz:"Z7149CBD001NREFCbdrefNFe",gxold:"O7149CBD001NREFCbdrefNFe",gxvar:"A7149CBD001NREFCbdrefNFe",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7149CBD001NREFCbdrefNFe=Value},v2z:function(Value){gx.O.Z7149CBD001NREFCbdrefNFe=Value},v2c:function(){gx.fn.setControlValue("CBD001NREFCBDREFNFE",gx.O.A7149CBD001NREFCbdrefNFe,0)},c2v:function(){gx.O.A7149CBD001NREFCbdrefNFe=this.val()},val:function(){return gx.fn.getControlValue("CBD001NREFCBDREFNFE")},nac:gx.falseFn};
   GXValidFnc[44]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[46]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBD001NREFCBDCUF_REFNFE",gxz:"Z7138CBD001NREFCbdcUF_refNFE",gxold:"O7138CBD001NREFCbdcUF_refNFE",gxvar:"A7138CBD001NREFCbdcUF_refNFE",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7138CBD001NREFCbdcUF_refNFE=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7138CBD001NREFCbdcUF_refNFE=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBD001NREFCBDCUF_REFNFE",gx.O.A7138CBD001NREFCbdcUF_refNFE,0)},c2v:function(){gx.O.A7138CBD001NREFCbdcUF_refNFE=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBD001NREFCBDCUF_REFNFE",'.')},nac:gx.falseFn};
   GXValidFnc[49]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[51]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBD001NREFCBDAAMM",gxz:"Z7135CBD001NREFCbdAAMM",gxold:"O7135CBD001NREFCbdAAMM",gxvar:"A7135CBD001NREFCbdAAMM",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7135CBD001NREFCbdAAMM=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7135CBD001NREFCbdAAMM=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBD001NREFCBDAAMM",gx.O.A7135CBD001NREFCbdAAMM,0)},c2v:function(){gx.O.A7135CBD001NREFCbdAAMM=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBD001NREFCBDAAMM",'.')},nac:gx.falseFn};
   GXValidFnc[54]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[56]={lvl:0,type:"char",len:14,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBD001NREFCBDCNPJ",gxz:"Z7136CBD001NREFCbdCNPJ",gxold:"O7136CBD001NREFCbdCNPJ",gxvar:"A7136CBD001NREFCbdCNPJ",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7136CBD001NREFCbdCNPJ=Value},v2z:function(Value){gx.O.Z7136CBD001NREFCbdCNPJ=Value},v2c:function(){gx.fn.setControlValue("CBD001NREFCBDCNPJ",gx.O.A7136CBD001NREFCbdCNPJ,0)},c2v:function(){gx.O.A7136CBD001NREFCbdCNPJ=this.val()},val:function(){return gx.fn.getControlValue("CBD001NREFCBDCNPJ")},nac:gx.falseFn};
   GXValidFnc[59]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[61]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBD001NREFCBDMOD_REFNFE",gxz:"Z7142CBD001NREFCbdmod_refNFE",gxold:"O7142CBD001NREFCbdmod_refNFE",gxvar:"A7142CBD001NREFCbdmod_refNFE",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7142CBD001NREFCbdmod_refNFE=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7142CBD001NREFCbdmod_refNFE=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBD001NREFCBDMOD_REFNFE",gx.O.A7142CBD001NREFCbdmod_refNFE,0)},c2v:function(){gx.O.A7142CBD001NREFCbdmod_refNFE=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBD001NREFCBDMOD_REFNFE",'.')},nac:gx.falseFn};
   GXValidFnc[64]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[66]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBD001NREFCBDSERIE_REFNFE",gxz:"Z7151CBD001NREFCbdserie_refNFE",gxold:"O7151CBD001NREFCbdserie_refNFE",gxvar:"A7151CBD001NREFCbdserie_refNFE",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7151CBD001NREFCbdserie_refNFE=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7151CBD001NREFCbdserie_refNFE=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBD001NREFCBDSERIE_REFNFE",gx.O.A7151CBD001NREFCbdserie_refNFE,0)},c2v:function(){gx.O.A7151CBD001NREFCbdserie_refNFE=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBD001NREFCBDSERIE_REFNFE",'.')},nac:gx.falseFn};
   GXValidFnc[69]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[71]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBD001NREFCBDNNF_REFNFE",gxz:"Z7145CBD001NREFCbdnNF_refNFE",gxold:"O7145CBD001NREFCbdnNF_refNFE",gxvar:"A7145CBD001NREFCbdnNF_refNFE",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7145CBD001NREFCbdnNF_refNFE=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7145CBD001NREFCbdnNF_refNFE=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBD001NREFCBDNNF_REFNFE",gx.O.A7145CBD001NREFCbdnNF_refNFE,0)},c2v:function(){gx.O.A7145CBD001NREFCbdnNF_refNFE=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBD001NREFCBDNNF_REFNFE",'.')},nac:gx.falseFn};
   GXValidFnc[74]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[76]={lvl:0,type:"char",len:11,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBD001NREFCBDCPF",gxz:"Z7137CBD001NREFCbdCPF",gxold:"O7137CBD001NREFCbdCPF",gxvar:"A7137CBD001NREFCbdCPF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7137CBD001NREFCbdCPF=Value},v2z:function(Value){gx.O.Z7137CBD001NREFCbdCPF=Value},v2c:function(){gx.fn.setControlValue("CBD001NREFCBDCPF",gx.O.A7137CBD001NREFCbdCPF,0)},c2v:function(){gx.O.A7137CBD001NREFCbdCPF=this.val()},val:function(){return gx.fn.getControlValue("CBD001NREFCBDCPF")},nac:gx.falseFn};
   GXValidFnc[79]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[81]={lvl:0,type:"char",len:14,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBD001NREFCBDIE_REFNFP",gxz:"Z7140CBD001NREFCbdIE_refnfp",gxold:"O7140CBD001NREFCbdIE_refnfp",gxvar:"A7140CBD001NREFCbdIE_refnfp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7140CBD001NREFCbdIE_refnfp=Value},v2z:function(Value){gx.O.Z7140CBD001NREFCbdIE_refnfp=Value},v2c:function(){gx.fn.setControlValue("CBD001NREFCBDIE_REFNFP",gx.O.A7140CBD001NREFCbdIE_refnfp,0)},c2v:function(){gx.O.A7140CBD001NREFCbdIE_refnfp=this.val()},val:function(){return gx.fn.getControlValue("CBD001NREFCBDIE_REFNFP")},nac:gx.falseFn};
   GXValidFnc[84]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[86]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBD001NREFCBDMOD_REFECF",gxz:"Z7141CBD001NREFCbdmod_refecf",gxold:"O7141CBD001NREFCbdmod_refecf",gxvar:"A7141CBD001NREFCbdmod_refecf",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7141CBD001NREFCbdmod_refecf=Value},v2z:function(Value){gx.O.Z7141CBD001NREFCbdmod_refecf=Value},v2c:function(){gx.fn.setControlValue("CBD001NREFCBDMOD_REFECF",gx.O.A7141CBD001NREFCbdmod_refecf,0)},c2v:function(){gx.O.A7141CBD001NREFCbdmod_refecf=this.val()},val:function(){return gx.fn.getControlValue("CBD001NREFCBDMOD_REFECF")},nac:gx.falseFn};
   GXValidFnc[89]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[91]={lvl:0,type:"char",len:44,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBD001NREFCBDREFCTE",gxz:"Z7148CBD001NREFCbdrefcte",gxold:"O7148CBD001NREFCbdrefcte",gxvar:"A7148CBD001NREFCbdrefcte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7148CBD001NREFCbdrefcte=Value},v2z:function(Value){gx.O.Z7148CBD001NREFCbdrefcte=Value},v2c:function(){gx.fn.setControlValue("CBD001NREFCBDREFCTE",gx.O.A7148CBD001NREFCbdrefcte,0)},c2v:function(){gx.O.A7148CBD001NREFCbdrefcte=this.val()},val:function(){return gx.fn.getControlValue("CBD001NREFCBDREFCTE")},nac:gx.falseFn};
   GXValidFnc[94]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[96]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBD001NREFCBDNECF_REFECF",gxz:"Z7144CBD001NREFCbdnecf_refecf",gxold:"O7144CBD001NREFCbdnecf_refecf",gxvar:"A7144CBD001NREFCbdnecf_refecf",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7144CBD001NREFCbdnecf_refecf=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7144CBD001NREFCbdnecf_refecf=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBD001NREFCBDNECF_REFECF",gx.O.A7144CBD001NREFCbdnecf_refecf,0)},c2v:function(){gx.O.A7144CBD001NREFCbdnecf_refecf=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBD001NREFCBDNECF_REFECF",'.')},nac:gx.falseFn};
   GXValidFnc[99]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[101]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBD001NREFCBDNCOO_REFECF",gxz:"Z7143CBD001NREFCbdncoo_refecf",gxold:"O7143CBD001NREFCbdncoo_refecf",gxvar:"A7143CBD001NREFCbdncoo_refecf",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7143CBD001NREFCbdncoo_refecf=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7143CBD001NREFCbdncoo_refecf=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBD001NREFCBDNCOO_REFECF",gx.O.A7143CBD001NREFCbdncoo_refecf,0)},c2v:function(){gx.O.A7143CBD001NREFCbdncoo_refecf=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBD001NREFCBDNCOO_REFECF",'.')},nac:gx.falseFn};
   this.A7139CBD001NREFCbdEmpCodigo = 0 ;
   this.Z7139CBD001NREFCbdEmpCodigo = 0 ;
   this.O7139CBD001NREFCbdEmpCodigo = 0 ;
   this.A7147CBD001NREFCbdNtfSerie = "" ;
   this.Z7147CBD001NREFCbdNtfSerie = "" ;
   this.O7147CBD001NREFCbdNtfSerie = "" ;
   this.A7146CBD001NREFCbdNtfNumero = 0 ;
   this.Z7146CBD001NREFCbdNtfNumero = 0 ;
   this.O7146CBD001NREFCbdNtfNumero = 0 ;
   this.A7150CBD001NREFCbdrefseq = 0 ;
   this.Z7150CBD001NREFCbdrefseq = 0 ;
   this.O7150CBD001NREFCbdrefseq = 0 ;
   this.A7149CBD001NREFCbdrefNFe = "" ;
   this.Z7149CBD001NREFCbdrefNFe = "" ;
   this.O7149CBD001NREFCbdrefNFe = "" ;
   this.A7138CBD001NREFCbdcUF_refNFE = 0 ;
   this.Z7138CBD001NREFCbdcUF_refNFE = 0 ;
   this.O7138CBD001NREFCbdcUF_refNFE = 0 ;
   this.A7135CBD001NREFCbdAAMM = 0 ;
   this.Z7135CBD001NREFCbdAAMM = 0 ;
   this.O7135CBD001NREFCbdAAMM = 0 ;
   this.A7136CBD001NREFCbdCNPJ = "" ;
   this.Z7136CBD001NREFCbdCNPJ = "" ;
   this.O7136CBD001NREFCbdCNPJ = "" ;
   this.A7142CBD001NREFCbdmod_refNFE = 0 ;
   this.Z7142CBD001NREFCbdmod_refNFE = 0 ;
   this.O7142CBD001NREFCbdmod_refNFE = 0 ;
   this.A7151CBD001NREFCbdserie_refNFE = 0 ;
   this.Z7151CBD001NREFCbdserie_refNFE = 0 ;
   this.O7151CBD001NREFCbdserie_refNFE = 0 ;
   this.A7145CBD001NREFCbdnNF_refNFE = 0 ;
   this.Z7145CBD001NREFCbdnNF_refNFE = 0 ;
   this.O7145CBD001NREFCbdnNF_refNFE = 0 ;
   this.A7137CBD001NREFCbdCPF = "" ;
   this.Z7137CBD001NREFCbdCPF = "" ;
   this.O7137CBD001NREFCbdCPF = "" ;
   this.A7140CBD001NREFCbdIE_refnfp = "" ;
   this.Z7140CBD001NREFCbdIE_refnfp = "" ;
   this.O7140CBD001NREFCbdIE_refnfp = "" ;
   this.A7141CBD001NREFCbdmod_refecf = "" ;
   this.Z7141CBD001NREFCbdmod_refecf = "" ;
   this.O7141CBD001NREFCbdmod_refecf = "" ;
   this.A7148CBD001NREFCbdrefcte = "" ;
   this.Z7148CBD001NREFCbdrefcte = "" ;
   this.O7148CBD001NREFCbdrefcte = "" ;
   this.A7144CBD001NREFCbdnecf_refecf = 0 ;
   this.Z7144CBD001NREFCbdnecf_refecf = 0 ;
   this.O7144CBD001NREFCbdnecf_refecf = 0 ;
   this.A7143CBD001NREFCbdncoo_refecf = 0 ;
   this.Z7143CBD001NREFCbdncoo_refecf = 0 ;
   this.O7143CBD001NREFCbdncoo_refecf = 0 ;
   this.A7139CBD001NREFCbdEmpCodigo = 0 ;
   this.A7147CBD001NREFCbdNtfSerie = "" ;
   this.A7146CBD001NREFCbdNtfNumero = 0 ;
   this.A7150CBD001NREFCbdrefseq = 0 ;
   this.A7149CBD001NREFCbdrefNFe = "" ;
   this.A7138CBD001NREFCbdcUF_refNFE = 0 ;
   this.A7135CBD001NREFCbdAAMM = 0 ;
   this.A7136CBD001NREFCbdCNPJ = "" ;
   this.A7142CBD001NREFCbdmod_refNFE = 0 ;
   this.A7151CBD001NREFCbdserie_refNFE = 0 ;
   this.A7145CBD001NREFCbdnNF_refNFE = 0 ;
   this.A7137CBD001NREFCbdCPF = "" ;
   this.A7140CBD001NREFCbdIE_refnfp = "" ;
   this.A7141CBD001NREFCbdmod_refecf = "" ;
   this.A7148CBD001NREFCbdrefcte = "" ;
   this.A7144CBD001NREFCbdnecf_refecf = 0 ;
   this.A7143CBD001NREFCbdncoo_refecf = 0 ;
   this.Events = {"e11a3543_client": ["ENTER", true] ,"e12a3543_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EnterCtrl = ["BTN_ENTER"];
   this.CheckCtrl = ["BTN_CHECK"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tcbd001nref());
