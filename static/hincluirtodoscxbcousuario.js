/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:41:32.24
*/
gx.evt.autoSkip = false;
gx.define('hincluirtodoscxbcousuario', false, function () {
   this.ServerClass =  "hincluirtodoscxbcousuario" ;
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
      this.AV18PermissaoUsuCxaContaEmpresaId=gx.fn.getControlValue("vPERMISSAOUSUCXACONTAEMPRESAID") ;
      this.AV19PermissaoUsuCxaContaUsuarioId=gx.fn.getControlValue("vPERMISSAOUSUCXACONTAUSUARIOID") ;
   };
   this.Validv_Caixabancoususninclan=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCAIXABANCOUSUSNINCLAN");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Caixabancoususnconlan=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCAIXABANCOUSUSNCONLAN");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Caixabancoususnaltlan=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCAIXABANCOUSUSNALTLAN");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Caixabancoususnexclan=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCAIXABANCOUSUSNEXCLAN");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Caixabancoususntransfere=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCAIXABANCOUSUSNTRANSFERE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Caixabancoususnfechamento=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCAIXABANCOUSUSNFECHAMENTO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Caixabancoususnconcilia=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCAIXABANCOUSUSNCONCILIA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12hw2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13hw2_client=function()
   {
      this.executeServerEvent("'CANCELAR'", false, null, false, false);
   };
   this.e15hw2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,6,9,12,15,18,21,24,27];
   this.GXLastCtrlId =27;
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE3",grid:0};
   GXValidFnc[6]={fld:"TABLE1",grid:0};
   GXValidFnc[9]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Caixabancoususninclan,isvalid:null,rgrid:[],fld:"vCAIXABANCOUSUSNINCLAN",gxz:"ZV11CaixaBancoUsuSnIncLan",gxold:"OV11CaixaBancoUsuSnIncLan",gxvar:"AV11CaixaBancoUsuSnIncLan",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV11CaixaBancoUsuSnIncLan=Value},v2z:function(Value){gx.O.ZV11CaixaBancoUsuSnIncLan=Value},v2c:function(){gx.fn.setCheckBoxValue("vCAIXABANCOUSUSNINCLAN",gx.O.AV11CaixaBancoUsuSnIncLan,"S")},c2v:function(){gx.O.AV11CaixaBancoUsuSnIncLan=this.val()},val:function(){return gx.fn.getControlValue("vCAIXABANCOUSUSNINCLAN")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[12]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Caixabancoususnconlan,isvalid:null,rgrid:[],fld:"vCAIXABANCOUSUSNCONLAN",gxz:"ZV12CaixaBancoUsuSnConLan",gxold:"OV12CaixaBancoUsuSnConLan",gxvar:"AV12CaixaBancoUsuSnConLan",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV12CaixaBancoUsuSnConLan=Value},v2z:function(Value){gx.O.ZV12CaixaBancoUsuSnConLan=Value},v2c:function(){gx.fn.setCheckBoxValue("vCAIXABANCOUSUSNCONLAN",gx.O.AV12CaixaBancoUsuSnConLan,"S")},c2v:function(){gx.O.AV12CaixaBancoUsuSnConLan=this.val()},val:function(){return gx.fn.getControlValue("vCAIXABANCOUSUSNCONLAN")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[15]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Caixabancoususnaltlan,isvalid:null,rgrid:[],fld:"vCAIXABANCOUSUSNALTLAN",gxz:"ZV13CaixaBancoUsuSnAltLan",gxold:"OV13CaixaBancoUsuSnAltLan",gxvar:"AV13CaixaBancoUsuSnAltLan",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV13CaixaBancoUsuSnAltLan=Value},v2z:function(Value){gx.O.ZV13CaixaBancoUsuSnAltLan=Value},v2c:function(){gx.fn.setCheckBoxValue("vCAIXABANCOUSUSNALTLAN",gx.O.AV13CaixaBancoUsuSnAltLan,"S")},c2v:function(){gx.O.AV13CaixaBancoUsuSnAltLan=this.val()},val:function(){return gx.fn.getControlValue("vCAIXABANCOUSUSNALTLAN")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[18]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Caixabancoususnexclan,isvalid:null,rgrid:[],fld:"vCAIXABANCOUSUSNEXCLAN",gxz:"ZV14CaixaBancoUsuSnExcLan",gxold:"OV14CaixaBancoUsuSnExcLan",gxvar:"AV14CaixaBancoUsuSnExcLan",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV14CaixaBancoUsuSnExcLan=Value},v2z:function(Value){gx.O.ZV14CaixaBancoUsuSnExcLan=Value},v2c:function(){gx.fn.setCheckBoxValue("vCAIXABANCOUSUSNEXCLAN",gx.O.AV14CaixaBancoUsuSnExcLan,"S")},c2v:function(){gx.O.AV14CaixaBancoUsuSnExcLan=this.val()},val:function(){return gx.fn.getControlValue("vCAIXABANCOUSUSNEXCLAN")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[21]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Caixabancoususntransfere,isvalid:null,rgrid:[],fld:"vCAIXABANCOUSUSNTRANSFERE",gxz:"ZV15CaixaBancoUsuSnTransfere",gxold:"OV15CaixaBancoUsuSnTransfere",gxvar:"AV15CaixaBancoUsuSnTransfere",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV15CaixaBancoUsuSnTransfere=Value},v2z:function(Value){gx.O.ZV15CaixaBancoUsuSnTransfere=Value},v2c:function(){gx.fn.setCheckBoxValue("vCAIXABANCOUSUSNTRANSFERE",gx.O.AV15CaixaBancoUsuSnTransfere,"S")},c2v:function(){gx.O.AV15CaixaBancoUsuSnTransfere=this.val()},val:function(){return gx.fn.getControlValue("vCAIXABANCOUSUSNTRANSFERE")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[24]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Caixabancoususnfechamento,isvalid:null,rgrid:[],fld:"vCAIXABANCOUSUSNFECHAMENTO",gxz:"ZV16CaixaBancoUsuSnFechamento",gxold:"OV16CaixaBancoUsuSnFechamento",gxvar:"AV16CaixaBancoUsuSnFechamento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV16CaixaBancoUsuSnFechamento=Value},v2z:function(Value){gx.O.ZV16CaixaBancoUsuSnFechamento=Value},v2c:function(){gx.fn.setCheckBoxValue("vCAIXABANCOUSUSNFECHAMENTO",gx.O.AV16CaixaBancoUsuSnFechamento,"S")},c2v:function(){gx.O.AV16CaixaBancoUsuSnFechamento=this.val()},val:function(){return gx.fn.getControlValue("vCAIXABANCOUSUSNFECHAMENTO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[27]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Caixabancoususnconcilia,isvalid:null,rgrid:[],fld:"vCAIXABANCOUSUSNCONCILIA",gxz:"ZV17CaixaBancoUsuSnConcilia",gxold:"OV17CaixaBancoUsuSnConcilia",gxvar:"AV17CaixaBancoUsuSnConcilia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV17CaixaBancoUsuSnConcilia=Value},v2z:function(Value){gx.O.ZV17CaixaBancoUsuSnConcilia=Value},v2c:function(){gx.fn.setCheckBoxValue("vCAIXABANCOUSUSNCONCILIA",gx.O.AV17CaixaBancoUsuSnConcilia,"S")},c2v:function(){gx.O.AV17CaixaBancoUsuSnConcilia=this.val()},val:function(){return gx.fn.getControlValue("vCAIXABANCOUSUSNCONCILIA")},nac:gx.falseFn,values:['S','N']};
   this.AV11CaixaBancoUsuSnIncLan = "" ;
   this.ZV11CaixaBancoUsuSnIncLan = "" ;
   this.OV11CaixaBancoUsuSnIncLan = "" ;
   this.AV12CaixaBancoUsuSnConLan = "" ;
   this.ZV12CaixaBancoUsuSnConLan = "" ;
   this.OV12CaixaBancoUsuSnConLan = "" ;
   this.AV13CaixaBancoUsuSnAltLan = "" ;
   this.ZV13CaixaBancoUsuSnAltLan = "" ;
   this.OV13CaixaBancoUsuSnAltLan = "" ;
   this.AV14CaixaBancoUsuSnExcLan = "" ;
   this.ZV14CaixaBancoUsuSnExcLan = "" ;
   this.OV14CaixaBancoUsuSnExcLan = "" ;
   this.AV15CaixaBancoUsuSnTransfere = "" ;
   this.ZV15CaixaBancoUsuSnTransfere = "" ;
   this.OV15CaixaBancoUsuSnTransfere = "" ;
   this.AV16CaixaBancoUsuSnFechamento = "" ;
   this.ZV16CaixaBancoUsuSnFechamento = "" ;
   this.OV16CaixaBancoUsuSnFechamento = "" ;
   this.AV17CaixaBancoUsuSnConcilia = "" ;
   this.ZV17CaixaBancoUsuSnConcilia = "" ;
   this.OV17CaixaBancoUsuSnConcilia = "" ;
   this.AV11CaixaBancoUsuSnIncLan = "" ;
   this.AV12CaixaBancoUsuSnConLan = "" ;
   this.AV13CaixaBancoUsuSnAltLan = "" ;
   this.AV14CaixaBancoUsuSnExcLan = "" ;
   this.AV15CaixaBancoUsuSnTransfere = "" ;
   this.AV16CaixaBancoUsuSnFechamento = "" ;
   this.AV17CaixaBancoUsuSnConcilia = "" ;
   this.AV18PermissaoUsuCxaContaEmpresaId = "" ;
   this.AV19PermissaoUsuCxaContaUsuarioId = "" ;
   this.Events = {"e12hw2_client": ["ENTER", true] ,"e13hw2_client": ["'CANCELAR'", true] ,"e15hw2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV18PermissaoUsuCxaContaEmpresaId',fld:'vPERMISSAOUSUCXACONTAEMPRESAID',hsh:true},{av:'AV19PermissaoUsuCxaContaUsuarioId',fld:'vPERMISSAOUSUCXACONTAUSUARIOID',hsh:true},{av:'AV11CaixaBancoUsuSnIncLan',fld:'vCAIXABANCOUSUSNINCLAN'},{av:'AV12CaixaBancoUsuSnConLan',fld:'vCAIXABANCOUSUSNCONLAN'},{av:'AV13CaixaBancoUsuSnAltLan',fld:'vCAIXABANCOUSUSNALTLAN'},{av:'AV14CaixaBancoUsuSnExcLan',fld:'vCAIXABANCOUSUSNEXCLAN'},{av:'AV15CaixaBancoUsuSnTransfere',fld:'vCAIXABANCOUSUSNTRANSFERE'},{av:'AV16CaixaBancoUsuSnFechamento',fld:'vCAIXABANCOUSUSNFECHAMENTO'},{av:'AV17CaixaBancoUsuSnConcilia',fld:'vCAIXABANCOUSUSNCONCILIA'}],[{av:'AV17CaixaBancoUsuSnConcilia',fld:'vCAIXABANCOUSUSNCONCILIA'},{av:'AV16CaixaBancoUsuSnFechamento',fld:'vCAIXABANCOUSUSNFECHAMENTO'},{av:'AV15CaixaBancoUsuSnTransfere',fld:'vCAIXABANCOUSUSNTRANSFERE'},{av:'AV14CaixaBancoUsuSnExcLan',fld:'vCAIXABANCOUSUSNEXCLAN'},{av:'AV13CaixaBancoUsuSnAltLan',fld:'vCAIXABANCOUSUSNALTLAN'},{av:'AV12CaixaBancoUsuSnConLan',fld:'vCAIXABANCOUSUSNCONLAN'},{av:'AV11CaixaBancoUsuSnIncLan',fld:'vCAIXABANCOUSUSNINCLAN'},{av:'AV19PermissaoUsuCxaContaUsuarioId',fld:'vPERMISSAOUSUCXACONTAUSUARIOID',hsh:true},{av:'AV18PermissaoUsuCxaContaEmpresaId',fld:'vPERMISSAOUSUCXACONTAEMPRESAID',hsh:true}]];
   this.EvtParms["'CANCELAR'"] = [[],[]];
   this.EnterCtrl = ["BUTTON3"];
   this.setVCMap("AV18PermissaoUsuCxaContaEmpresaId", "vPERMISSAOUSUCXACONTAEMPRESAID", 0, "char");
   this.setVCMap("AV19PermissaoUsuCxaContaUsuarioId", "vPERMISSAOUSUCXACONTAUSUARIOID", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hincluirtodoscxbcousuario());
