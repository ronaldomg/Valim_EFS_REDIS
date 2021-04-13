/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:38:39.74
*/
gx.evt.autoSkip = false;
gx.define('hregistraconvitesocio', false, function () {
   this.ServerClass =  "hregistraconvitesocio" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.refreshAndEnter = true;
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV106SdtConviteSocio=gx.fn.getControlValue("vSDTCONVITESOCIO") ;
      this.A2632ConvidadoId=gx.fn.getIntegerValue("CONVIDADOID",'.') ;
      this.A2626ConvidadoCPF=gx.fn.getControlValue("CONVIDADOCPF") ;
      this.A2625ConvidadoNome=gx.fn.getControlValue("CONVIDADONOME") ;
      this.A2627ConvidadoRG=gx.fn.getControlValue("CONVIDADORG") ;
      this.AV103SdtRecibo=gx.fn.getControlValue("vSDTRECIBO") ;
      this.AV82SnCobrarConvSocio=gx.fn.getControlValue("vSNCOBRARCONVSOCIO") ;
      this.AV83SnPagarConvMensal=gx.fn.getControlValue("vSNPAGARCONVMENSAL") ;
      this.AV67TitularPessoaIdParm=gx.fn.getIntegerValue("vTITULARPESSOAIDPARM",'.') ;
      this.AV68TipoTela=gx.fn.getControlValue("vTIPOTELA") ;
   };
   this.Validv_Titularpessoaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTITULARPESSOAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Empresapessoasempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAPESSOASEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Convidadoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONVIDADOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Tipobaixasigla=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOBAIXASIGLA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Tpcobcartao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTPCOBCARTAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Categoriaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCATEGORIAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Vendedorcaixabancoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vVENDEDORCAIXABANCOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Pagrec=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPAGREC");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12h52_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e11h52_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13h52_client=function()
   {
      this.executeServerEvent("'CANCELAR'", false, null, false, false);
   };
   this.e19h52_client=function()
   {
      this.executeServerEvent("'ADDCONVIDADO'", true, arguments[0], false, false);
   };
   this.e20h52_client=function()
   {
      this.executeServerEvent("CTLCONVIDADOID.ISVALID", true, arguments[0], false, false);
   };
   this.e14h52_client=function()
   {
      this.executeServerEvent("VTIPOBAIXASIGLA.ISVALID", true, null, false, true);
   };
   this.e15h52_client=function()
   {
      this.executeServerEvent("VTPCOBCARTAO.ISVALID", true, null, false, true);
   };
   this.e16h52_client=function()
   {
      this.executeServerEvent("VTPPAGAMENTO.CLICK", true, null, false, true);
   };
   this.e22h52_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,18,20,21,22,23,26,28,29,30,31,32,33,36,38,41,43,46,48,51,54,57,58,59,60,62,65,67,69,71,74,76,77,86,87,88,89,90,91,92,98,104,105,106,107,108,109,110,112,114,115];
   this.GXLastCtrlId =115;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",85,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hregistraconvitesocio",[],false,1,false,true,0,true,false,false,"CollSdtConviteSocio.SdtConviteSocioItem",0,"px","Novo registro",true,false,true,null,null,false,"AV106SdtConviteSocio",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("Convidadoaux",86,"vCONVIDADOAUX","convidado Aux","","convidadoAux","int",0,"px",6,6,"right",null,[],"Convidadoaux","convidadoAux",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV12F",87,"CTLCONVIDADOID","Código","","ConvidadoId","int",0,"px",6,6,"right",null,[],"GXV12F","GXV12F",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Promptconvidado","vPROMPTCONVIDADO",88,0,"px",17,"px",null,"","","Image","");
   GridContainer.addSingleLineEdit("GXV12H",89,"CTLCONVIDADONOME","Nome do Convidado","","ConvidadoNome","svchar",0,"px",50,50,"left",null,[],"GXV12H","GXV12H",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV12I",90,"CTLCONVIDADOCPF","CPF do Convidado","","ConvidadoCPF","char",0,"px",14,14,"left",null,[],"GXV12I","GXV12I",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV12J",91,"CTLCONVIDADORG","RG do Convidado","","ConvidadoRG","svchar",0,"px",20,20,"left",null,[],"GXV12J","GXV12J",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpconv","vBMPCONV",92,0,"px",17,"px","e19h52_client","","Convidado","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE6",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TABLE9",grid:0};
   GXValidFnc[15]={fld:"TABLE5",grid:0};
   GXValidFnc[18]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Titularpessoaid,isvalid:null,rgrid:[],fld:"vTITULARPESSOAID",gxz:"ZV20TitularPessoaId",gxold:"OV20TitularPessoaId",gxvar:"AV20TitularPessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20TitularPessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20TitularPessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTITULARPESSOAID",gx.O.AV20TitularPessoaId,0)},c2v:function(){gx.O.AV20TitularPessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTITULARPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[21]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTITULARPESSOANOME",gxz:"ZV25TitularPessoaNome",gxold:"OV25TitularPessoaNome",gxvar:"AV25TitularPessoaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25TitularPessoaNome=Value},v2z:function(Value){gx.O.ZV25TitularPessoaNome=Value},v2c:function(){gx.fn.setControlValue("vTITULARPESSOANOME",gx.O.AV25TitularPessoaNome,0)},c2v:function(){gx.O.AV25TitularPessoaNome=this.val()},val:function(){return gx.fn.getControlValue("vTITULARPESSOANOME")},nac:gx.falseFn};
   GXValidFnc[22]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapessoasempresaid,isvalid:null,rgrid:[],fld:"vEMPRESAPESSOASEMPRESAID",gxz:"ZV117EmpresaPessoasEmpresaId",gxold:"OV117EmpresaPessoasEmpresaId",gxvar:"AV117EmpresaPessoasEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV117EmpresaPessoasEmpresaId=Value},v2z:function(Value){gx.O.ZV117EmpresaPessoasEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPESSOASEMPRESAID",gx.O.AV117EmpresaPessoasEmpresaId,0)},c2v:function(){gx.O.AV117EmpresaPessoasEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPESSOASEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[23]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Convidadoempresaid,isvalid:null,rgrid:[],fld:"vCONVIDADOEMPRESAID",gxz:"ZV33ConvidadoEmpresaId",gxold:"OV33ConvidadoEmpresaId",gxvar:"AV33ConvidadoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33ConvidadoEmpresaId=Value},v2z:function(Value){gx.O.ZV33ConvidadoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCONVIDADOEMPRESAID",gx.O.AV33ConvidadoEmpresaId,0)},c2v:function(){gx.O.AV33ConvidadoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCONVIDADOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAINICIAL",gxz:"ZV21DataInicial",gxold:"OV21DataInicial",gxvar:"AV21DataInicial",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21DataInicial=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV21DataInicial=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAINICIAL",gx.O.AV21DataInicial,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV21DataInicial=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAINICIAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 28 , function() {
   });
   GXValidFnc[29]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCATEGORIAQTDEPESSOASCONVITE",gxz:"ZV31CategoriaQtdePessoasConvite",gxold:"OV31CategoriaQtdePessoasConvite",gxvar:"AV31CategoriaQtdePessoasConvite",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31CategoriaQtdePessoasConvite=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV31CategoriaQtdePessoasConvite=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCATEGORIAQTDEPESSOASCONVITE",gx.O.AV31CategoriaQtdePessoasConvite,0)},c2v:function(){gx.O.AV31CategoriaQtdePessoasConvite=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCATEGORIAQTDEPESSOASCONVITE",'.')},nac:gx.falseFn};
   GXValidFnc[30]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONT",gxz:"ZV48Cont",gxold:"OV48Cont",gxvar:"AV48Cont",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV48Cont=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV48Cont=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONT",gx.O.AV48Cont,0)},c2v:function(){gx.O.AV48Cont=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONT",'.')},nac:gx.falseFn};
   GXValidFnc[31]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOGINTITULAR",gxz:"ZV57LoginTitular",gxold:"OV57LoginTitular",gxvar:"AV57LoginTitular",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV57LoginTitular=Value},v2z:function(Value){gx.O.ZV57LoginTitular=Value},v2c:function(){gx.fn.setControlValue("vLOGINTITULAR",gx.O.AV57LoginTitular,0)},c2v:function(){gx.O.AV57LoginTitular=this.val()},val:function(){return gx.fn.getControlValue("vLOGINTITULAR")},nac:gx.falseFn};
   GXValidFnc[32]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAUX",gxz:"ZV63ContAux",gxold:"OV63ContAux",gxvar:"AV63ContAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV63ContAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV63ContAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAUX",gx.O.AV63ContAux,0)},c2v:function(){gx.O.AV63ContAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAUX",'.')},nac:gx.falseFn};
   GXValidFnc[33]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNFOCAR",gxz:"ZV64SnFocar",gxold:"OV64SnFocar",gxvar:"AV64SnFocar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV64SnFocar=Value},v2z:function(Value){gx.O.ZV64SnFocar=Value},v2c:function(){gx.fn.setControlValue("vSNFOCAR",gx.O.AV64SnFocar,0)},c2v:function(){gx.O.AV64SnFocar=this.val()},val:function(){return gx.fn.getControlValue("vSNFOCAR")},nac:gx.falseFn};
   GXValidFnc[36]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[38]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAFINAL",gxz:"ZV22DataFinal",gxold:"OV22DataFinal",gxvar:"AV22DataFinal",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22DataFinal=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV22DataFinal=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAFINAL",gx.O.AV22DataFinal,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV22DataFinal=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAFINAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 38 , function() {
   });
   GXValidFnc[41]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[43]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPPAGAMENTO",gxz:"ZV70tpPagamento",gxold:"OV70tpPagamento",gxvar:"AV70tpPagamento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV70tpPagamento=Value},v2z:function(Value){gx.O.ZV70tpPagamento=Value},v2c:function(){gx.fn.setComboBoxValue("vTPPAGAMENTO",gx.O.AV70tpPagamento)},c2v:function(){gx.O.AV70tpPagamento=this.val()},val:function(){return gx.fn.getControlValue("vTPPAGAMENTO")},nac:gx.falseFn};
   GXValidFnc[46]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[48]={fld:"TABLE2",grid:0};
   GXValidFnc[51]={fld:"TABLE8",grid:0};
   GXValidFnc[54]={fld:"TABTPBAIXA",grid:0};
   GXValidFnc[57]={lvl:0,type:"char",len:5,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tipobaixasigla,isvalid:'e14h52_client',rgrid:[],fld:"vTIPOBAIXASIGLA",gxz:"ZV121TipoBaixaSigla",gxold:"OV121TipoBaixaSigla",gxvar:"AV121TipoBaixaSigla",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV121TipoBaixaSigla=Value},v2z:function(Value){gx.O.ZV121TipoBaixaSigla=Value},v2c:function(){gx.fn.setControlValue("vTIPOBAIXASIGLA",gx.O.AV121TipoBaixaSigla,0)},c2v:function(){gx.O.AV121TipoBaixaSigla=this.val()},val:function(){return gx.fn.getControlValue("vTIPOBAIXASIGLA")},nac:gx.falseFn};
   GXValidFnc[58]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOBAIXAPAGREC",gxz:"ZV120TipoBaixaPagRec",gxold:"OV120TipoBaixaPagRec",gxvar:"AV120TipoBaixaPagRec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV120TipoBaixaPagRec=Value},v2z:function(Value){gx.O.ZV120TipoBaixaPagRec=Value},v2c:function(){gx.fn.setControlValue("vTIPOBAIXAPAGREC",gx.O.AV120TipoBaixaPagRec,0)},c2v:function(){gx.O.AV120TipoBaixaPagRec=this.val()},val:function(){return gx.fn.getControlValue("vTIPOBAIXAPAGREC")},nac:gx.falseFn};
   GXValidFnc[59]={fld:"IMGTPBAIXA",grid:0};
   GXValidFnc[60]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOBAIXADESCRICAO",gxz:"ZV119TipoBaixaDescricao",gxold:"OV119TipoBaixaDescricao",gxvar:"AV119TipoBaixaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV119TipoBaixaDescricao=Value},v2z:function(Value){gx.O.ZV119TipoBaixaDescricao=Value},v2c:function(){gx.fn.setControlValue("vTIPOBAIXADESCRICAO",gx.O.AV119TipoBaixaDescricao,0)},c2v:function(){gx.O.AV119TipoBaixaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTIPOBAIXADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[62]={fld:"TABLE4",grid:0};
   GXValidFnc[65]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMES",gxz:"ZV73Mes",gxold:"OV73Mes",gxvar:"AV73Mes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV73Mes=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV73Mes=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMES",gx.O.AV73Mes,0)},c2v:function(){gx.O.AV73Mes=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMES",'.')},nac:gx.falseFn};
   GXValidFnc[67]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[69]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vANO",gxz:"ZV74Ano",gxold:"OV74Ano",gxvar:"AV74Ano",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV74Ano=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV74Ano=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vANO",gx.O.AV74Ano,0)},c2v:function(){gx.O.AV74Ano=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vANO",'.')},nac:gx.falseFn};
   GXValidFnc[71]={fld:"TABLE10",grid:0};
   GXValidFnc[74]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[76]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tpcobcartao,isvalid:'e15h52_client',rgrid:[],fld:"vTPCOBCARTAO",gxz:"ZV127TpCobCartao",gxold:"OV127TpCobCartao",gxvar:"AV127TpCobCartao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV127TpCobCartao=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV127TpCobCartao=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTPCOBCARTAO",gx.O.AV127TpCobCartao,0)},c2v:function(){gx.O.AV127TpCobCartao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTPCOBCARTAO",'.')},nac:gx.falseFn};
   GXValidFnc[77]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPCOBCARTAODESC",gxz:"ZV126TpCobCartaoDesc",gxold:"OV126TpCobCartaoDesc",gxvar:"AV126TpCobCartaoDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV126TpCobCartaoDesc=Value},v2z:function(Value){gx.O.ZV126TpCobCartaoDesc=Value},v2c:function(){gx.fn.setControlValue("vTPCOBCARTAODESC",gx.O.AV126TpCobCartaoDesc,0)},c2v:function(){gx.O.AV126TpCobCartaoDesc=this.val()},val:function(){return gx.fn.getControlValue("vTPCOBCARTAODESC")},nac:gx.falseFn};
   GXValidFnc[86]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,isacc:0,grid:85,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vCONVIDADOAUX",gxz:"ZV108convidadoAux",gxold:"OV108convidadoAux",gxvar:"AV108convidadoAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV108convidadoAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV108convidadoAux=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vCONVIDADOAUX",row || gx.fn.currentGridRowImpl(85),gx.O.AV108convidadoAux,0)},c2v:function(){gx.O.AV108convidadoAux=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vCONVIDADOAUX",row || gx.fn.currentGridRowImpl(85),'.')},nac:gx.falseFn};
   GXValidFnc[87]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,isacc:0,grid:85,gxgrid:this.GridContainer,fnc:null,isvalid:'e20h52_client',rgrid:[],fld:"CTLCONVIDADOID",gxz:"ZV134GXV12F",gxold:"OV134GXV12F",gxvar:"GXV12F",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV12F=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV134GXV12F=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLCONVIDADOID",row || gx.fn.currentGridRowImpl(85),gx.O.GXV12F,0)},c2v:function(){gx.O.GXV12F=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLCONVIDADOID",row || gx.fn.currentGridRowImpl(85),'.')},nac:gx.falseFn};
   GXValidFnc[88]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:85,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vPROMPTCONVIDADO",gxz:"ZV37PromptConvidado",gxold:"OV37PromptConvidado",gxvar:"AV37PromptConvidado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV37PromptConvidado=Value},v2z:function(Value){gx.O.ZV37PromptConvidado=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vPROMPTCONVIDADO",row || gx.fn.currentGridRowImpl(85),gx.O.AV37PromptConvidado,gx.O.AV142Promptconvidado_GXI)},c2v:function(){gx.O.AV142Promptconvidado_GXI=this.val_GXI();gx.O.AV37PromptConvidado=this.val()},val:function(row){return gx.fn.getGridControlValue("vPROMPTCONVIDADO",row || gx.fn.currentGridRowImpl(85))},val_GXI:function(row){return gx.fn.getGridControlValue("vPROMPTCONVIDADO_GXI",row || gx.fn.currentGridRowImpl(85))}, gxvar_GXI:'AV142Promptconvidado_GXI',nac:gx.falseFn};
   GXValidFnc[89]={lvl:2,type:"svchar",len:50,dec:0,sign:false,ro:0,isacc:0,grid:85,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLCONVIDADONOME",gxz:"ZV135GXV12H",gxold:"OV135GXV12H",gxvar:"GXV12H",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV12H=Value},v2z:function(Value){gx.O.ZV135GXV12H=Value},v2c:function(row){gx.fn.setGridControlValue("CTLCONVIDADONOME",row || gx.fn.currentGridRowImpl(85),gx.O.GXV12H,0)},c2v:function(){gx.O.GXV12H=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCONVIDADONOME",row || gx.fn.currentGridRowImpl(85))},nac:gx.falseFn};
   GXValidFnc[90]={lvl:2,type:"char",len:14,dec:0,sign:false,ro:0,isacc:0,grid:85,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLCONVIDADOCPF",gxz:"ZV136GXV12I",gxold:"OV136GXV12I",gxvar:"GXV12I",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV12I=Value},v2z:function(Value){gx.O.ZV136GXV12I=Value},v2c:function(row){gx.fn.setGridControlValue("CTLCONVIDADOCPF",row || gx.fn.currentGridRowImpl(85),gx.O.GXV12I,0)},c2v:function(){gx.O.GXV12I=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCONVIDADOCPF",row || gx.fn.currentGridRowImpl(85))},nac:gx.falseFn};
   GXValidFnc[91]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:0,isacc:0,grid:85,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLCONVIDADORG",gxz:"ZV137GXV12J",gxold:"OV137GXV12J",gxvar:"GXV12J",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV12J=Value},v2z:function(Value){gx.O.ZV137GXV12J=Value},v2c:function(row){gx.fn.setGridControlValue("CTLCONVIDADORG",row || gx.fn.currentGridRowImpl(85),gx.O.GXV12J,0)},c2v:function(){gx.O.GXV12J=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCONVIDADORG",row || gx.fn.currentGridRowImpl(85))},nac:gx.falseFn};
   GXValidFnc[92]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:85,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCONV",gxz:"ZV62bmpConv",gxold:"OV62bmpConv",gxvar:"AV62bmpConv",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV62bmpConv=Value},v2z:function(Value){gx.O.ZV62bmpConv=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCONV",row || gx.fn.currentGridRowImpl(85),gx.O.AV62bmpConv,gx.O.AV140Bmpconv_GXI)},c2v:function(){gx.O.AV140Bmpconv_GXI=this.val_GXI();gx.O.AV62bmpConv=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCONV",row || gx.fn.currentGridRowImpl(85))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCONV_GXI",row || gx.fn.currentGridRowImpl(85))}, gxvar_GXI:'AV140Bmpconv_GXI',nac:gx.falseFn};
   GXValidFnc[98]={fld:"TABLE7",grid:0};
   GXValidFnc[104]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDEBITOREFERENCIA",gxz:"ZV71DebitoReferencia",gxold:"OV71DebitoReferencia",gxvar:"AV71DebitoReferencia",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV71DebitoReferencia=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV71DebitoReferencia=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDEBITOREFERENCIA",gx.O.AV71DebitoReferencia,0)},c2v:function(){gx.O.AV71DebitoReferencia=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDEBITOREFERENCIA")},nac:gx.falseFn};
   GXValidFnc[105]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Categoriaid,isvalid:null,rgrid:[],fld:"vCATEGORIAID",gxz:"ZV96CategoriaId",gxold:"OV96CategoriaId",gxvar:"AV96CategoriaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV96CategoriaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV96CategoriaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCATEGORIAID",gx.O.AV96CategoriaId,0)},c2v:function(){gx.O.AV96CategoriaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCATEGORIAID",'.')},nac:gx.falseFn};
   GXValidFnc[106]={fld:"JS", format:2,grid:0};
   GXValidFnc[107]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV66AcessoSistemaSequencia",gxold:"OV66AcessoSistemaSequencia",gxvar:"AV66AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV66AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV66AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV66AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV66AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[108]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Vendedorcaixabancoid,isvalid:null,rgrid:[],fld:"vVENDEDORCAIXABANCOID",gxz:"ZV87VendedorCaixaBancoId",gxold:"OV87VendedorCaixaBancoId",gxvar:"AV87VendedorCaixaBancoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV87VendedorCaixaBancoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV87VendedorCaixaBancoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vVENDEDORCAIXABANCOID",gx.O.AV87VendedorCaixaBancoId,0)},c2v:function(){gx.O.AV87VendedorCaixaBancoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVENDEDORCAIXABANCOID",'.')},nac:gx.falseFn};
   GXValidFnc[109]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTELA",gxz:"ZV49Tela",gxold:"OV49Tela",gxvar:"AV49Tela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV49Tela=Value},v2z:function(Value){gx.O.ZV49Tela=Value},v2c:function(){gx.fn.setControlValue("vTELA",gx.O.AV49Tela,0)},c2v:function(){gx.O.AV49Tela=this.val()},val:function(){return gx.fn.getControlValue("vTELA")},nac:gx.falseFn};
   GXValidFnc[110]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pagrec,isvalid:null,rgrid:[],fld:"vPAGREC",gxz:"ZV118PagRec",gxold:"OV118PagRec",gxvar:"AV118PagRec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV118PagRec=Value},v2z:function(Value){gx.O.ZV118PagRec=Value},v2c:function(){gx.fn.setControlValue("vPAGREC",gx.O.AV118PagRec,0)},c2v:function(){gx.O.AV118PagRec=this.val()},val:function(){return gx.fn.getControlValue("vPAGREC")},nac:gx.falseFn};
   GXValidFnc[112]={fld:"BTNHELP",grid:0};
   GXValidFnc[114]={fld:"PROMPT_TITULARPESSOAID",grid:0};
   GXValidFnc[115]={fld:"PROMPT_TPCOBCARTAO",grid:0};
   this.AV20TitularPessoaId = 0 ;
   this.ZV20TitularPessoaId = 0 ;
   this.OV20TitularPessoaId = 0 ;
   this.AV25TitularPessoaNome = "" ;
   this.ZV25TitularPessoaNome = "" ;
   this.OV25TitularPessoaNome = "" ;
   this.AV117EmpresaPessoasEmpresaId = "" ;
   this.ZV117EmpresaPessoasEmpresaId = "" ;
   this.OV117EmpresaPessoasEmpresaId = "" ;
   this.AV33ConvidadoEmpresaId = "" ;
   this.ZV33ConvidadoEmpresaId = "" ;
   this.OV33ConvidadoEmpresaId = "" ;
   this.AV21DataInicial = gx.date.nullDate() ;
   this.ZV21DataInicial = gx.date.nullDate() ;
   this.OV21DataInicial = gx.date.nullDate() ;
   this.AV31CategoriaQtdePessoasConvite = 0 ;
   this.ZV31CategoriaQtdePessoasConvite = 0 ;
   this.OV31CategoriaQtdePessoasConvite = 0 ;
   this.AV48Cont = 0 ;
   this.ZV48Cont = 0 ;
   this.OV48Cont = 0 ;
   this.AV57LoginTitular = "" ;
   this.ZV57LoginTitular = "" ;
   this.OV57LoginTitular = "" ;
   this.AV63ContAux = 0 ;
   this.ZV63ContAux = 0 ;
   this.OV63ContAux = 0 ;
   this.AV64SnFocar = "" ;
   this.ZV64SnFocar = "" ;
   this.OV64SnFocar = "" ;
   this.AV22DataFinal = gx.date.nullDate() ;
   this.ZV22DataFinal = gx.date.nullDate() ;
   this.OV22DataFinal = gx.date.nullDate() ;
   this.AV70tpPagamento = "" ;
   this.ZV70tpPagamento = "" ;
   this.OV70tpPagamento = "" ;
   this.AV121TipoBaixaSigla = "" ;
   this.ZV121TipoBaixaSigla = "" ;
   this.OV121TipoBaixaSigla = "" ;
   this.AV120TipoBaixaPagRec = "" ;
   this.ZV120TipoBaixaPagRec = "" ;
   this.OV120TipoBaixaPagRec = "" ;
   this.AV119TipoBaixaDescricao = "" ;
   this.ZV119TipoBaixaDescricao = "" ;
   this.OV119TipoBaixaDescricao = "" ;
   this.AV73Mes = 0 ;
   this.ZV73Mes = 0 ;
   this.OV73Mes = 0 ;
   this.AV74Ano = 0 ;
   this.ZV74Ano = 0 ;
   this.OV74Ano = 0 ;
   this.AV127TpCobCartao = 0 ;
   this.ZV127TpCobCartao = 0 ;
   this.OV127TpCobCartao = 0 ;
   this.AV126TpCobCartaoDesc = "" ;
   this.ZV126TpCobCartaoDesc = "" ;
   this.OV126TpCobCartaoDesc = "" ;
   this.ZV108convidadoAux = 0 ;
   this.OV108convidadoAux = 0 ;
   this.ZV134GXV12F = 0 ;
   this.OV134GXV12F = 0 ;
   this.ZV37PromptConvidado = "" ;
   this.OV37PromptConvidado = "" ;
   this.ZV135GXV12H = "" ;
   this.OV135GXV12H = "" ;
   this.ZV136GXV12I = "" ;
   this.OV136GXV12I = "" ;
   this.ZV137GXV12J = "" ;
   this.OV137GXV12J = "" ;
   this.ZV62bmpConv = "" ;
   this.OV62bmpConv = "" ;
   this.AV71DebitoReferencia = gx.date.nullDate() ;
   this.ZV71DebitoReferencia = gx.date.nullDate() ;
   this.OV71DebitoReferencia = gx.date.nullDate() ;
   this.AV96CategoriaId = 0 ;
   this.ZV96CategoriaId = 0 ;
   this.OV96CategoriaId = 0 ;
   this.AV66AcessoSistemaSequencia = 0 ;
   this.ZV66AcessoSistemaSequencia = 0 ;
   this.OV66AcessoSistemaSequencia = 0 ;
   this.AV87VendedorCaixaBancoId = 0 ;
   this.ZV87VendedorCaixaBancoId = 0 ;
   this.OV87VendedorCaixaBancoId = 0 ;
   this.AV49Tela = "" ;
   this.ZV49Tela = "" ;
   this.OV49Tela = "" ;
   this.AV118PagRec = "" ;
   this.ZV118PagRec = "" ;
   this.OV118PagRec = "" ;
   this.AV20TitularPessoaId = 0 ;
   this.AV25TitularPessoaNome = "" ;
   this.AV117EmpresaPessoasEmpresaId = "" ;
   this.AV33ConvidadoEmpresaId = "" ;
   this.AV21DataInicial = gx.date.nullDate() ;
   this.AV31CategoriaQtdePessoasConvite = 0 ;
   this.AV48Cont = 0 ;
   this.AV57LoginTitular = "" ;
   this.AV63ContAux = 0 ;
   this.AV64SnFocar = "" ;
   this.AV22DataFinal = gx.date.nullDate() ;
   this.AV70tpPagamento = "" ;
   this.AV121TipoBaixaSigla = "" ;
   this.AV120TipoBaixaPagRec = "" ;
   this.AV119TipoBaixaDescricao = "" ;
   this.AV73Mes = 0 ;
   this.AV74Ano = 0 ;
   this.AV127TpCobCartao = 0 ;
   this.AV126TpCobCartaoDesc = "" ;
   this.AV71DebitoReferencia = gx.date.nullDate() ;
   this.AV96CategoriaId = 0 ;
   this.AV66AcessoSistemaSequencia = 0 ;
   this.AV87VendedorCaixaBancoId = 0 ;
   this.AV49Tela = "" ;
   this.AV118PagRec = "" ;
   this.AV67TitularPessoaIdParm = 0 ;
   this.AV68TipoTela = "" ;
   this.AV108convidadoAux = 0 ;
   this.GXV12F = 0 ;
   this.AV37PromptConvidado = "" ;
   this.GXV12H = "" ;
   this.GXV12I = "" ;
   this.GXV12J = "" ;
   this.AV62bmpConv = "" ;
   this.A1015CaixaBancoId = 0 ;
   this.A1014CaixaBancoEmpresaId = "" ;
   this.A1019CaixaBancoSnAtivo = "" ;
   this.A75UsuarioId = "" ;
   this.A1229VendedorEmpresaId = "" ;
   this.A1589VendedorCaixaBancoId = 0 ;
   this.A2632ConvidadoId = 0 ;
   this.A2626ConvidadoCPF = "" ;
   this.A2625ConvidadoNome = "" ;
   this.A2627ConvidadoRG = "" ;
   this.A2631ConvidadoEmpresaid = "" ;
   this.A992TipoCobrancaId = 0 ;
   this.A991TipoCobrancaEmpresaId = "" ;
   this.A993TipoCobrancaDescricao = "" ;
   this.A1053TipoBaixaSigla = "" ;
   this.A1049TipoBaixaPagRec = "" ;
   this.A1052TipoBaixaEmpresaId = "" ;
   this.A1054TipoBaixaDescricao = "" ;
   this.A1266TransacaoPagRecId = "" ;
   this.A1212TransacaoPagRecEmpresaId = "" ;
   this.A1175TransacaoPagRecTipo = "" ;
   this.A2621CategoriaEmpresaId = "" ;
   this.A2622CategoriaId = 0 ;
   this.A2598CategoriaLimiteConvite = 0 ;
   this.A54ClassificacaoId = "" ;
   this.A162EmpresaClassificacaoEmpresaId = "" ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A834ClassificacaoNivelUsuarioId = "" ;
   this.A56OpcaoClassificacaoId = "" ;
   this.A70PessoaRazaoSocial = "" ;
   this.A443PessoaSituacao = "" ;
   this.AV106SdtConviteSocio = [ ] ;
   this.AV103SdtRecibo = [ ] ;
   this.AV82SnCobrarConvSocio = "" ;
   this.AV83SnPagarConvMensal = "" ;
   this.Events = {"e12h52_client": ["ENTER", true] ,"e11h52_client": ["'FECHAR'", true] ,"e13h52_client": ["'CANCELAR'", true] ,"e19h52_client": ["'ADDCONVIDADO'", true] ,"e20h52_client": ["CTLCONVIDADOID.ISVALID", true] ,"e14h52_client": ["VTIPOBAIXASIGLA.ISVALID", true] ,"e15h52_client": ["VTPCOBCARTAO.ISVALID", true] ,"e16h52_client": ["VTPPAGAMENTO.CLICK", true] ,"e22h52_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV62bmpConv',fld:'vBMPCONV',grid:85},{av:'gx.fn.getCtrlProperty("vBMPCONV","Tooltiptext")',ctrl:'vBMPCONV',prop:'Tooltiptext'},{av:'AV37PromptConvidado',fld:'vPROMPTCONVIDADO',grid:85},{av:'AV57LoginTitular',fld:'vLOGINTITULAR'},{av:'AV49Tela',fld:'vTELA'},{av:'AV108convidadoAux',fld:'vCONVIDADOAUX',grid:85},{av:'AV106SdtConviteSocio',fld:'vSDTCONVITESOCIO',grid:85},{av:'A2632ConvidadoId',fld:'CONVIDADOID'},{av:'A2626ConvidadoCPF',fld:'CONVIDADOCPF'},{av:'A2625ConvidadoNome',fld:'CONVIDADONOME'},{av:'A2627ConvidadoRG',fld:'CONVIDADORG'},{av:'AV103SdtRecibo',fld:'vSDTRECIBO'},{av:'AV82SnCobrarConvSocio',fld:'vSNCOBRARCONVSOCIO'},{av:'AV83SnPagarConvMensal',fld:'vSNPAGARCONVMENSAL'},{av:'AV70tpPagamento',fld:'vTPPAGAMENTO'},{av:'AV31CategoriaQtdePessoasConvite',fld:'vCATEGORIAQTDEPESSOASCONVITE'}],[{av:'AV70tpPagamento',fld:'vTPPAGAMENTO'},{ctrl:'vTPPAGAMENTO'},{av:'gx.fn.getCtrlProperty("vTITULARPESSOAID","Enabled")',ctrl:'vTITULARPESSOAID',prop:'Enabled'},{av:'AV106SdtConviteSocio',fld:'vSDTCONVITESOCIO',grid:85},{av:'AV154GXV5',fld:'vGXV5'},{av:'AV107SdtConviteSocioItem',fld:'vSDTCONVITESOCIOITEM'},{av:'AV155GXLvl565',fld:'vGXLVL565'},{av:'AV103SdtRecibo',fld:'vSDTRECIBO'},{av:'AV102Qtde',fld:'vQTDE'},{av:'AV156GXV6',fld:'vGXV6'},{av:'AV104SdtReciboItem',fld:'vSDTRECIBOITEM'},{av:'gx.fn.getCtrlProperty("vDATAINICIAL","Enabled")',ctrl:'vDATAINICIAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDATAFINAL","Enabled")',ctrl:'vDATAFINAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vMES","Visible")',ctrl:'vMES',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vANO","Visible")',ctrl:'vANO',prop:'Visible'},{ctrl:'BUTTON1',prop:'Visible'},{ctrl:'BUTTON2',prop:'Visible'},{ctrl:'BTNAVANCAR',prop:'Visible'},{ctrl:'BTNCANCELAR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TEXTBLOCK10","Visible")',ctrl:'TEXTBLOCK10',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TEXTBLOCK11","Visible")',ctrl:'TEXTBLOCK11',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TEXTBLOCK1","Visible")',ctrl:'TEXTBLOCK1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTIPOBAIXASIGLA","Visible")',ctrl:'vTIPOBAIXASIGLA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABTPBAIXA","Visible")',ctrl:'TABTPBAIXA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTIPOBAIXADESCRICAO","Visible")',ctrl:'vTIPOBAIXADESCRICAO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TEXTBLOCK2","Visible")',ctrl:'TEXTBLOCK2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTPCOBCARTAO","Visible")',ctrl:'vTPCOBCARTAO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTPCOBCARTAODESC","Visible")',ctrl:'vTPCOBCARTAODESC',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TEXTBLOCK11","Caption")',ctrl:'TEXTBLOCK11',prop:'Caption'},{av:'gx.fn.getCtrlProperty("vTIPOBAIXASIGLA","Enabled")',ctrl:'vTIPOBAIXASIGLA',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vTPCOBCARTAO","Enabled")',ctrl:'vTPCOBCARTAO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vMES","Enabled")',ctrl:'vMES',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vANO","Enabled")',ctrl:'vANO',prop:'Enabled'},{ctrl:'GRID',prop:'Rows'}]];
   this.EvtParms["ENTER"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV62bmpConv',fld:'vBMPCONV'},{av:'gx.fn.getCtrlProperty("vBMPCONV","Tooltiptext")',ctrl:'vBMPCONV',prop:'Tooltiptext'},{av:'AV37PromptConvidado',fld:'vPROMPTCONVIDADO'},{av:'AV57LoginTitular',fld:'vLOGINTITULAR'},{av:'AV49Tela',fld:'vTELA'},{av:'AV108convidadoAux',fld:'vCONVIDADOAUX'},{av:'AV106SdtConviteSocio',fld:'vSDTCONVITESOCIO',grid:85},{av:'A2632ConvidadoId',fld:'CONVIDADOID'},{av:'A2626ConvidadoCPF',fld:'CONVIDADOCPF'},{av:'A2625ConvidadoNome',fld:'CONVIDADONOME'},{av:'A2627ConvidadoRG',fld:'CONVIDADORG'},{av:'AV103SdtRecibo',fld:'vSDTRECIBO'},{av:'AV82SnCobrarConvSocio',fld:'vSNCOBRARCONVSOCIO'},{av:'AV83SnPagarConvMensal',fld:'vSNPAGARCONVMENSAL'},{av:'AV70tpPagamento',fld:'vTPPAGAMENTO'},{av:'AV31CategoriaQtdePessoasConvite',fld:'vCATEGORIAQTDEPESSOASCONVITE'},{av:'AV20TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV117EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'A443PessoaSituacao',fld:'PESSOASITUACAO'},{av:'A162EmpresaClassificacaoEmpresaId',fld:'EMPRESACLASSIFICACAOEMPRESAID'},{av:'AV97EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'AV95ClassificacaoIdParm',fld:'vCLASSIFICACAOIDPARM'},{av:'A834ClassificacaoNivelUsuarioId',fld:'CLASSIFICACAONIVELUSUARIOID'},{av:'A56OpcaoClassificacaoId',fld:'OPCAOCLASSIFICACAOID'},{av:'AV21DataInicial',fld:'vDATAINICIAL'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV61DataSistema',fld:'vDATASISTEMA'},{av:'AV22DataFinal',fld:'vDATAFINAL'},{av:'AV130DtBloqConvite',fld:'vDTBLOQCONVITE'},{av:'A2622CategoriaId',fld:'CATEGORIAID'},{av:'AV96CategoriaId',fld:'vCATEGORIAID'},{av:'A2621CategoriaEmpresaId',fld:'CATEGORIAEMPRESAID'},{av:'AV99CategoriaEmpresaId',fld:'vCATEGORIAEMPRESAID'},{av:'A2598CategoriaLimiteConvite',fld:'CATEGORIALIMITECONVITE'},{av:'A1212TransacaoPagRecEmpresaId',fld:'TRANSACAOPAGRECEMPRESAID'},{av:'AV124TransacaoPagRecEmpresaId',fld:'vTRANSACAOPAGRECEMPRESAID'},{av:'A1266TransacaoPagRecId',fld:'TRANSACAOPAGRECID'},{av:'A1175TransacaoPagRecTipo',fld:'TRANSACAOPAGRECTIPO'},{av:'AV121TipoBaixaSigla',fld:'vTIPOBAIXASIGLA'},{av:'A1052TipoBaixaEmpresaId',fld:'TIPOBAIXAEMPRESAID'},{av:'AV122TipoBaixaEmpresaId',fld:'vTIPOBAIXAEMPRESAID'},{av:'A1049TipoBaixaPagRec',fld:'TIPOBAIXAPAGREC'},{av:'AV118PagRec',fld:'vPAGREC'},{av:'A1053TipoBaixaSigla',fld:'TIPOBAIXASIGLA'},{av:'A1054TipoBaixaDescricao',fld:'TIPOBAIXADESCRICAO'},{av:'AV125DataBaixa',fld:'vDATABAIXA'},{av:'AV127TpCobCartao',fld:'vTPCOBCARTAO'},{av:'A991TipoCobrancaEmpresaId',fld:'TIPOCOBRANCAEMPRESAID'},{av:'AV128TipoCobrancaEmpresaId',fld:'vTIPOCOBRANCAEMPRESAID'},{av:'A992TipoCobrancaId',fld:'TIPOCOBRANCAID'},{av:'A993TipoCobrancaDescricao',fld:'TIPOCOBRANCADESCRICAO'},{av:'AV73Mes',fld:'vMES'},{av:'AV74Ano',fld:'vANO'},{av:'AV71DebitoReferencia',fld:'vDEBITOREFERENCIA'},{av:'AV80Mensalidade',fld:'vMENSALIDADE'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'A2631ConvidadoEmpresaid',fld:'CONVIDADOEMPRESAID'},{av:'AV33ConvidadoEmpresaId',fld:'vCONVIDADOEMPRESAID'},{av:'AV39MsgErroConvidado',fld:'vMSGERROCONVIDADO'},{av:'AV47ConviteEmpresaId',fld:'vCONVITEEMPRESAID'},{av:'AV25TitularPessoaNome',fld:'vTITULARPESSOANOME'},{av:'AV44ConviteNumero',fld:'vCONVITENUMERO'},{av:'AV138Pgmname',fld:'vPGMNAME'},{av:'AV69ModeloConvite',fld:'vMODELOCONVITE'},{av:'AV14Ordenacao',fld:'vORDENACAO'},{av:'AV13OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV77PrecoConvite',fld:'vPRECOCONVITE'},{av:'AV86TransacaoCxBcoSigla',fld:'vTRANSACAOCXBCOSIGLA'},{av:'AV87VendedorCaixaBancoId',fld:'vVENDEDORCAIXABANCOID'},{av:'AV24Nao',fld:'vNAO'},{av:'A1229VendedorEmpresaId',fld:'VENDEDOREMPRESAID'},{av:'AV91VendedorEmpresaId',fld:'vVENDEDOREMPRESAID'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'A1589VendedorCaixaBancoId',fld:'VENDEDORCAIXABANCOID'},{av:'AV27tpErro',fld:'vTPERRO'},{av:'A1014CaixaBancoEmpresaId',fld:'CAIXABANCOEMPRESAID'},{av:'AV88CaixaBancoEmpresaId',fld:'vCAIXABANCOEMPRESAID'},{av:'A1015CaixaBancoId',fld:'CAIXABANCOID'},{av:'A1019CaixaBancoSnAtivo',fld:'CAIXABANCOSNATIVO'}],[{av:'AV27tpErro',fld:'vTPERRO'},{av:'AV143GXLvl139',fld:'vGXLVL139'},{av:'AV25TitularPessoaNome',fld:'vTITULARPESSOANOME'},{av:'AV96CategoriaId',fld:'vCATEGORIAID'},{av:'AV98CategoriaLimiteConvite',fld:'vCATEGORIALIMITECONVITE'},{av:'AV123TrnConvCartao',fld:'vTRNCONVCARTAO'},{av:'AV146GXLvl236',fld:'vGXLVL236'},{av:'AV147GXLvl258',fld:'vGXLVL258'},{av:'AV119TipoBaixaDescricao',fld:'vTIPOBAIXADESCRICAO'},{av:'AV7MsgErro',fld:'vMSGERRO'},{av:'AV148GXLvl286',fld:'vGXLVL286'},{av:'AV126TpCobCartaoDesc',fld:'vTPCOBCARTAODESC'},{av:'AV81Mensal',fld:'vMENSAL'},{av:'AV71DebitoReferencia',fld:'vDEBITOREFERENCIA'},{av:'AV92UltMensMes',fld:'vULTMENSMES'},{av:'AV93UltMensAno',fld:'vULTMENSANO'},{av:'AV28MsgErroConvite',fld:'vMSGERROCONVITE'},{av:'AV31CategoriaQtdePessoasConvite',fld:'vCATEGORIAQTDEPESSOASCONVITE'},{av:'AV49Tela',fld:'vTELA'},{av:'AV42x',fld:'vX'},{av:'AV107SdtConviteSocioItem',fld:'vSDTCONVITESOCIOITEM'},{av:'AV106SdtConviteSocio',fld:'vSDTCONVITESOCIO',grid:85},{av:'AV48Cont',fld:'vCONT'},{av:'gx.fn.getCtrlProperty("TEXTBLOCK1","Visible")',ctrl:'TEXTBLOCK1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TEXTBLOCK11","Visible")',ctrl:'TEXTBLOCK11',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vMES","Visible")',ctrl:'vMES',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vANO","Visible")',ctrl:'vANO',prop:'Visible'},{av:'AV149GXV2',fld:'vGXV2'},{av:'AV54Imprimiu',fld:'vIMPRIMIU'},{av:'AV100TpConvite',fld:'vTPCONVITE'},{av:'AV150GXV3',fld:'vGXV3'},{av:'AV151GXLvl389',fld:'vGXLVL389'},{av:'AV39MsgErroConvidado',fld:'vMSGERROCONVIDADO'},{av:'AV116SNCPFRepetido',fld:'vSNCPFREPETIDO'},{av:'AV105QtdeConvidados',fld:'vQTDECONVIDADOS'},{av:'AV152GXV4',fld:'vGXV4'},{av:'AV44ConviteNumero',fld:'vCONVITENUMERO'},{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV13OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV115Orientacao',fld:'vORIENTACAO'},{av:'AV85ObservacaoConvite',fld:'vOBSERVACAOCONVITE'},{av:'AV94ValorTotal',fld:'vVALORTOTAL'},{av:'AV90LancamentoCxaBcoNumero',fld:'vLANCAMENTOCXABCONUMERO'},{av:'AV78DebitoSequencia',fld:'vDEBITOSEQUENCIA'},{av:'AV79Retorno',fld:'vRETORNO'},{av:'AV20TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV117EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'AV70tpPagamento',fld:'vTPPAGAMENTO'},{av:'AV114NomeTela',fld:'vNOMETELA'},{av:'AV157GXLvl746',fld:'vGXLVL746'},{av:'AV87VendedorCaixaBancoId',fld:'vVENDEDORCAIXABANCOID'},{av:'AV158GXLvl762',fld:'vGXLVL762'}]];
   this.EvtParms["VTPPAGAMENTO.CLICK"] = [[{av:'AV70tpPagamento',fld:'vTPPAGAMENTO'},{av:'AV80Mensalidade',fld:'vMENSALIDADE'}],[{av:'gx.fn.getCtrlProperty("TEXTBLOCK11","Visible")',ctrl:'TEXTBLOCK11',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vMES","Visible")',ctrl:'vMES',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TEXTBLOCK1","Visible")',ctrl:'TEXTBLOCK1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vANO","Visible")',ctrl:'vANO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTIPOBAIXASIGLA","Visible")',ctrl:'vTIPOBAIXASIGLA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABTPBAIXA","Visible")',ctrl:'TABTPBAIXA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTIPOBAIXADESCRICAO","Visible")',ctrl:'vTIPOBAIXADESCRICAO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TEXTBLOCK2","Visible")',ctrl:'TEXTBLOCK2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTPCOBCARTAO","Visible")',ctrl:'vTPCOBCARTAO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTPCOBCARTAODESC","Visible")',ctrl:'vTPCOBCARTAODESC',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TEXTBLOCK11","Caption")',ctrl:'TEXTBLOCK11',prop:'Caption'},{av:'AV73Mes',fld:'vMES'},{av:'AV74Ano',fld:'vANO'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV66AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV57LoginTitular',fld:'vLOGINTITULAR'},{av:'AV68TipoTela',fld:'vTIPOTELA'}],[]];
   this.EvtParms["'CANCELAR'"] = [[{av:'AV106SdtConviteSocio',fld:'vSDTCONVITESOCIO',grid:85},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV62bmpConv',fld:'vBMPCONV'},{av:'gx.fn.getCtrlProperty("vBMPCONV","Tooltiptext")',ctrl:'vBMPCONV',prop:'Tooltiptext'},{av:'AV37PromptConvidado',fld:'vPROMPTCONVIDADO'},{av:'AV57LoginTitular',fld:'vLOGINTITULAR'},{av:'AV49Tela',fld:'vTELA'},{av:'AV108convidadoAux',fld:'vCONVIDADOAUX'},{av:'A2632ConvidadoId',fld:'CONVIDADOID'},{av:'A2626ConvidadoCPF',fld:'CONVIDADOCPF'},{av:'A2625ConvidadoNome',fld:'CONVIDADONOME'},{av:'A2627ConvidadoRG',fld:'CONVIDADORG'},{av:'AV103SdtRecibo',fld:'vSDTRECIBO'},{av:'AV82SnCobrarConvSocio',fld:'vSNCOBRARCONVSOCIO'},{av:'AV83SnPagarConvMensal',fld:'vSNPAGARCONVMENSAL'},{av:'AV70tpPagamento',fld:'vTPPAGAMENTO'},{av:'AV31CategoriaQtdePessoasConvite',fld:'vCATEGORIAQTDEPESSOASCONVITE'}],[{av:'AV49Tela',fld:'vTELA'},{av:'AV106SdtConviteSocio',fld:'vSDTCONVITESOCIO',grid:85}]];
   this.EvtParms["'ADDCONVIDADO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV62bmpConv',fld:'vBMPCONV'},{av:'gx.fn.getCtrlProperty("vBMPCONV","Tooltiptext")',ctrl:'vBMPCONV',prop:'Tooltiptext'},{av:'AV37PromptConvidado',fld:'vPROMPTCONVIDADO'},{av:'AV57LoginTitular',fld:'vLOGINTITULAR'},{av:'AV49Tela',fld:'vTELA'},{av:'AV108convidadoAux',fld:'vCONVIDADOAUX'},{av:'AV106SdtConviteSocio',fld:'vSDTCONVITESOCIO',grid:85},{av:'A2632ConvidadoId',fld:'CONVIDADOID'},{av:'A2626ConvidadoCPF',fld:'CONVIDADOCPF'},{av:'A2625ConvidadoNome',fld:'CONVIDADONOME'},{av:'A2627ConvidadoRG',fld:'CONVIDADORG'},{av:'AV103SdtRecibo',fld:'vSDTRECIBO'},{av:'AV82SnCobrarConvSocio',fld:'vSNCOBRARCONVSOCIO'},{av:'AV83SnPagarConvMensal',fld:'vSNPAGARCONVMENSAL'},{av:'AV70tpPagamento',fld:'vTPPAGAMENTO'},{av:'AV31CategoriaQtdePessoasConvite',fld:'vCATEGORIAQTDEPESSOASCONVITE'}],[{av:'AV27tpErro',fld:'vTPERRO'},{av:'AV108convidadoAux',fld:'vCONVIDADOAUX'}]];
   this.EvtParms["CTLCONVIDADOID.ISVALID"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV62bmpConv',fld:'vBMPCONV'},{av:'gx.fn.getCtrlProperty("vBMPCONV","Tooltiptext")',ctrl:'vBMPCONV',prop:'Tooltiptext'},{av:'AV37PromptConvidado',fld:'vPROMPTCONVIDADO'},{av:'AV57LoginTitular',fld:'vLOGINTITULAR'},{av:'AV49Tela',fld:'vTELA'},{av:'AV108convidadoAux',fld:'vCONVIDADOAUX'},{av:'AV106SdtConviteSocio',fld:'vSDTCONVITESOCIO',grid:85},{av:'A2632ConvidadoId',fld:'CONVIDADOID'},{av:'A2626ConvidadoCPF',fld:'CONVIDADOCPF'},{av:'A2625ConvidadoNome',fld:'CONVIDADONOME'},{av:'A2627ConvidadoRG',fld:'CONVIDADORG'},{av:'AV103SdtRecibo',fld:'vSDTRECIBO'},{av:'AV82SnCobrarConvSocio',fld:'vSNCOBRARCONVSOCIO'},{av:'AV83SnPagarConvMensal',fld:'vSNPAGARCONVMENSAL'},{av:'AV70tpPagamento',fld:'vTPPAGAMENTO'},{av:'AV31CategoriaQtdePessoasConvite',fld:'vCATEGORIAQTDEPESSOASCONVITE'}],[]];
   this.EvtParms["VTIPOBAIXASIGLA.ISVALID"] = [[{av:'AV122TipoBaixaEmpresaId',fld:'vTIPOBAIXAEMPRESAID'},{av:'AV118PagRec',fld:'vPAGREC'},{av:'AV121TipoBaixaSigla',fld:'vTIPOBAIXASIGLA'}],[{av:'AV119TipoBaixaDescricao',fld:'vTIPOBAIXADESCRICAO'}]];
   this.EvtParms["VTPCOBCARTAO.ISVALID"] = [[{av:'AV128TipoCobrancaEmpresaId',fld:'vTIPOCOBRANCAEMPRESAID'},{av:'AV127TpCobCartao',fld:'vTPCOBCARTAO'}],[{av:'AV126TpCobCartaoDesc',fld:'vTPCOBCARTAODESC'}]];
   this.EvtParms["GRID_FIRSTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV62bmpConv',fld:'vBMPCONV',grid:85},{av:'gx.fn.getCtrlProperty("vBMPCONV","Tooltiptext")',ctrl:'vBMPCONV',prop:'Tooltiptext'},{av:'AV37PromptConvidado',fld:'vPROMPTCONVIDADO',grid:85},{av:'AV57LoginTitular',fld:'vLOGINTITULAR'},{av:'AV49Tela',fld:'vTELA'},{av:'AV108convidadoAux',fld:'vCONVIDADOAUX',grid:85},{av:'AV106SdtConviteSocio',fld:'vSDTCONVITESOCIO',grid:85},{av:'A2632ConvidadoId',fld:'CONVIDADOID'},{av:'A2626ConvidadoCPF',fld:'CONVIDADOCPF'},{av:'A2625ConvidadoNome',fld:'CONVIDADONOME'},{av:'A2627ConvidadoRG',fld:'CONVIDADORG'},{av:'AV103SdtRecibo',fld:'vSDTRECIBO'},{av:'AV82SnCobrarConvSocio',fld:'vSNCOBRARCONVSOCIO'},{av:'AV83SnPagarConvMensal',fld:'vSNPAGARCONVMENSAL'},{av:'AV70tpPagamento',fld:'vTPPAGAMENTO'},{av:'AV31CategoriaQtdePessoasConvite',fld:'vCATEGORIAQTDEPESSOASCONVITE'}],[{av:'AV70tpPagamento',fld:'vTPPAGAMENTO'},{ctrl:'vTPPAGAMENTO'},{av:'gx.fn.getCtrlProperty("vTITULARPESSOAID","Enabled")',ctrl:'vTITULARPESSOAID',prop:'Enabled'},{av:'AV106SdtConviteSocio',fld:'vSDTCONVITESOCIO',grid:85},{av:'AV154GXV5',fld:'vGXV5'},{av:'AV107SdtConviteSocioItem',fld:'vSDTCONVITESOCIOITEM'},{av:'AV155GXLvl565',fld:'vGXLVL565'},{av:'AV103SdtRecibo',fld:'vSDTRECIBO'},{av:'AV102Qtde',fld:'vQTDE'},{av:'AV156GXV6',fld:'vGXV6'},{av:'AV104SdtReciboItem',fld:'vSDTRECIBOITEM'},{av:'gx.fn.getCtrlProperty("vDATAINICIAL","Enabled")',ctrl:'vDATAINICIAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDATAFINAL","Enabled")',ctrl:'vDATAFINAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vMES","Visible")',ctrl:'vMES',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vANO","Visible")',ctrl:'vANO',prop:'Visible'},{ctrl:'BUTTON1',prop:'Visible'},{ctrl:'BUTTON2',prop:'Visible'},{ctrl:'BTNAVANCAR',prop:'Visible'},{ctrl:'BTNCANCELAR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TEXTBLOCK10","Visible")',ctrl:'TEXTBLOCK10',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TEXTBLOCK11","Visible")',ctrl:'TEXTBLOCK11',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TEXTBLOCK1","Visible")',ctrl:'TEXTBLOCK1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTIPOBAIXASIGLA","Visible")',ctrl:'vTIPOBAIXASIGLA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABTPBAIXA","Visible")',ctrl:'TABTPBAIXA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTIPOBAIXADESCRICAO","Visible")',ctrl:'vTIPOBAIXADESCRICAO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TEXTBLOCK2","Visible")',ctrl:'TEXTBLOCK2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTPCOBCARTAO","Visible")',ctrl:'vTPCOBCARTAO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTPCOBCARTAODESC","Visible")',ctrl:'vTPCOBCARTAODESC',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TEXTBLOCK11","Caption")',ctrl:'TEXTBLOCK11',prop:'Caption'},{av:'gx.fn.getCtrlProperty("vTIPOBAIXASIGLA","Enabled")',ctrl:'vTIPOBAIXASIGLA',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vTPCOBCARTAO","Enabled")',ctrl:'vTPCOBCARTAO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vMES","Enabled")',ctrl:'vMES',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vANO","Enabled")',ctrl:'vANO',prop:'Enabled'},{ctrl:'GRID',prop:'Rows'}]];
   this.EvtParms["GRID_PREVPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV62bmpConv',fld:'vBMPCONV',grid:85},{av:'gx.fn.getCtrlProperty("vBMPCONV","Tooltiptext")',ctrl:'vBMPCONV',prop:'Tooltiptext'},{av:'AV37PromptConvidado',fld:'vPROMPTCONVIDADO',grid:85},{av:'AV57LoginTitular',fld:'vLOGINTITULAR'},{av:'AV49Tela',fld:'vTELA'},{av:'AV108convidadoAux',fld:'vCONVIDADOAUX',grid:85},{av:'AV106SdtConviteSocio',fld:'vSDTCONVITESOCIO',grid:85},{av:'A2632ConvidadoId',fld:'CONVIDADOID'},{av:'A2626ConvidadoCPF',fld:'CONVIDADOCPF'},{av:'A2625ConvidadoNome',fld:'CONVIDADONOME'},{av:'A2627ConvidadoRG',fld:'CONVIDADORG'},{av:'AV103SdtRecibo',fld:'vSDTRECIBO'},{av:'AV82SnCobrarConvSocio',fld:'vSNCOBRARCONVSOCIO'},{av:'AV83SnPagarConvMensal',fld:'vSNPAGARCONVMENSAL'},{av:'AV70tpPagamento',fld:'vTPPAGAMENTO'},{av:'AV31CategoriaQtdePessoasConvite',fld:'vCATEGORIAQTDEPESSOASCONVITE'}],[{av:'AV70tpPagamento',fld:'vTPPAGAMENTO'},{ctrl:'vTPPAGAMENTO'},{av:'gx.fn.getCtrlProperty("vTITULARPESSOAID","Enabled")',ctrl:'vTITULARPESSOAID',prop:'Enabled'},{av:'AV106SdtConviteSocio',fld:'vSDTCONVITESOCIO',grid:85},{av:'AV154GXV5',fld:'vGXV5'},{av:'AV107SdtConviteSocioItem',fld:'vSDTCONVITESOCIOITEM'},{av:'AV155GXLvl565',fld:'vGXLVL565'},{av:'AV103SdtRecibo',fld:'vSDTRECIBO'},{av:'AV102Qtde',fld:'vQTDE'},{av:'AV156GXV6',fld:'vGXV6'},{av:'AV104SdtReciboItem',fld:'vSDTRECIBOITEM'},{av:'gx.fn.getCtrlProperty("vDATAINICIAL","Enabled")',ctrl:'vDATAINICIAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDATAFINAL","Enabled")',ctrl:'vDATAFINAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vMES","Visible")',ctrl:'vMES',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vANO","Visible")',ctrl:'vANO',prop:'Visible'},{ctrl:'BUTTON1',prop:'Visible'},{ctrl:'BUTTON2',prop:'Visible'},{ctrl:'BTNAVANCAR',prop:'Visible'},{ctrl:'BTNCANCELAR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TEXTBLOCK10","Visible")',ctrl:'TEXTBLOCK10',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TEXTBLOCK11","Visible")',ctrl:'TEXTBLOCK11',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TEXTBLOCK1","Visible")',ctrl:'TEXTBLOCK1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTIPOBAIXASIGLA","Visible")',ctrl:'vTIPOBAIXASIGLA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABTPBAIXA","Visible")',ctrl:'TABTPBAIXA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTIPOBAIXADESCRICAO","Visible")',ctrl:'vTIPOBAIXADESCRICAO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TEXTBLOCK2","Visible")',ctrl:'TEXTBLOCK2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTPCOBCARTAO","Visible")',ctrl:'vTPCOBCARTAO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTPCOBCARTAODESC","Visible")',ctrl:'vTPCOBCARTAODESC',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TEXTBLOCK11","Caption")',ctrl:'TEXTBLOCK11',prop:'Caption'},{av:'gx.fn.getCtrlProperty("vTIPOBAIXASIGLA","Enabled")',ctrl:'vTIPOBAIXASIGLA',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vTPCOBCARTAO","Enabled")',ctrl:'vTPCOBCARTAO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vMES","Enabled")',ctrl:'vMES',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vANO","Enabled")',ctrl:'vANO',prop:'Enabled'},{ctrl:'GRID',prop:'Rows'}]];
   this.EvtParms["GRID_NEXTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV62bmpConv',fld:'vBMPCONV',grid:85},{av:'gx.fn.getCtrlProperty("vBMPCONV","Tooltiptext")',ctrl:'vBMPCONV',prop:'Tooltiptext'},{av:'AV37PromptConvidado',fld:'vPROMPTCONVIDADO',grid:85},{av:'AV57LoginTitular',fld:'vLOGINTITULAR'},{av:'AV49Tela',fld:'vTELA'},{av:'AV108convidadoAux',fld:'vCONVIDADOAUX',grid:85},{av:'AV106SdtConviteSocio',fld:'vSDTCONVITESOCIO',grid:85},{av:'A2632ConvidadoId',fld:'CONVIDADOID'},{av:'A2626ConvidadoCPF',fld:'CONVIDADOCPF'},{av:'A2625ConvidadoNome',fld:'CONVIDADONOME'},{av:'A2627ConvidadoRG',fld:'CONVIDADORG'},{av:'AV103SdtRecibo',fld:'vSDTRECIBO'},{av:'AV82SnCobrarConvSocio',fld:'vSNCOBRARCONVSOCIO'},{av:'AV83SnPagarConvMensal',fld:'vSNPAGARCONVMENSAL'},{av:'AV70tpPagamento',fld:'vTPPAGAMENTO'},{av:'AV31CategoriaQtdePessoasConvite',fld:'vCATEGORIAQTDEPESSOASCONVITE'}],[{av:'AV70tpPagamento',fld:'vTPPAGAMENTO'},{ctrl:'vTPPAGAMENTO'},{av:'gx.fn.getCtrlProperty("vTITULARPESSOAID","Enabled")',ctrl:'vTITULARPESSOAID',prop:'Enabled'},{av:'AV106SdtConviteSocio',fld:'vSDTCONVITESOCIO',grid:85},{av:'AV154GXV5',fld:'vGXV5'},{av:'AV107SdtConviteSocioItem',fld:'vSDTCONVITESOCIOITEM'},{av:'AV155GXLvl565',fld:'vGXLVL565'},{av:'AV103SdtRecibo',fld:'vSDTRECIBO'},{av:'AV102Qtde',fld:'vQTDE'},{av:'AV156GXV6',fld:'vGXV6'},{av:'AV104SdtReciboItem',fld:'vSDTRECIBOITEM'},{av:'gx.fn.getCtrlProperty("vDATAINICIAL","Enabled")',ctrl:'vDATAINICIAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDATAFINAL","Enabled")',ctrl:'vDATAFINAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vMES","Visible")',ctrl:'vMES',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vANO","Visible")',ctrl:'vANO',prop:'Visible'},{ctrl:'BUTTON1',prop:'Visible'},{ctrl:'BUTTON2',prop:'Visible'},{ctrl:'BTNAVANCAR',prop:'Visible'},{ctrl:'BTNCANCELAR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TEXTBLOCK10","Visible")',ctrl:'TEXTBLOCK10',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TEXTBLOCK11","Visible")',ctrl:'TEXTBLOCK11',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TEXTBLOCK1","Visible")',ctrl:'TEXTBLOCK1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTIPOBAIXASIGLA","Visible")',ctrl:'vTIPOBAIXASIGLA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABTPBAIXA","Visible")',ctrl:'TABTPBAIXA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTIPOBAIXADESCRICAO","Visible")',ctrl:'vTIPOBAIXADESCRICAO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TEXTBLOCK2","Visible")',ctrl:'TEXTBLOCK2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTPCOBCARTAO","Visible")',ctrl:'vTPCOBCARTAO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTPCOBCARTAODESC","Visible")',ctrl:'vTPCOBCARTAODESC',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TEXTBLOCK11","Caption")',ctrl:'TEXTBLOCK11',prop:'Caption'},{av:'gx.fn.getCtrlProperty("vTIPOBAIXASIGLA","Enabled")',ctrl:'vTIPOBAIXASIGLA',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vTPCOBCARTAO","Enabled")',ctrl:'vTPCOBCARTAO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vMES","Enabled")',ctrl:'vMES',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vANO","Enabled")',ctrl:'vANO',prop:'Enabled'},{ctrl:'GRID',prop:'Rows'}]];
   this.EvtParms["GRID_LASTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV62bmpConv',fld:'vBMPCONV',grid:85},{av:'gx.fn.getCtrlProperty("vBMPCONV","Tooltiptext")',ctrl:'vBMPCONV',prop:'Tooltiptext'},{av:'AV37PromptConvidado',fld:'vPROMPTCONVIDADO',grid:85},{av:'AV57LoginTitular',fld:'vLOGINTITULAR'},{av:'AV49Tela',fld:'vTELA'},{av:'AV108convidadoAux',fld:'vCONVIDADOAUX',grid:85},{av:'AV106SdtConviteSocio',fld:'vSDTCONVITESOCIO',grid:85},{av:'A2632ConvidadoId',fld:'CONVIDADOID'},{av:'A2626ConvidadoCPF',fld:'CONVIDADOCPF'},{av:'A2625ConvidadoNome',fld:'CONVIDADONOME'},{av:'A2627ConvidadoRG',fld:'CONVIDADORG'},{av:'AV103SdtRecibo',fld:'vSDTRECIBO'},{av:'AV82SnCobrarConvSocio',fld:'vSNCOBRARCONVSOCIO'},{av:'AV83SnPagarConvMensal',fld:'vSNPAGARCONVMENSAL'},{av:'AV70tpPagamento',fld:'vTPPAGAMENTO'},{av:'AV31CategoriaQtdePessoasConvite',fld:'vCATEGORIAQTDEPESSOASCONVITE'}],[{av:'AV70tpPagamento',fld:'vTPPAGAMENTO'},{ctrl:'vTPPAGAMENTO'},{av:'gx.fn.getCtrlProperty("vTITULARPESSOAID","Enabled")',ctrl:'vTITULARPESSOAID',prop:'Enabled'},{av:'AV106SdtConviteSocio',fld:'vSDTCONVITESOCIO',grid:85},{av:'AV154GXV5',fld:'vGXV5'},{av:'AV107SdtConviteSocioItem',fld:'vSDTCONVITESOCIOITEM'},{av:'AV155GXLvl565',fld:'vGXLVL565'},{av:'AV103SdtRecibo',fld:'vSDTRECIBO'},{av:'AV102Qtde',fld:'vQTDE'},{av:'AV156GXV6',fld:'vGXV6'},{av:'AV104SdtReciboItem',fld:'vSDTRECIBOITEM'},{av:'gx.fn.getCtrlProperty("vDATAINICIAL","Enabled")',ctrl:'vDATAINICIAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDATAFINAL","Enabled")',ctrl:'vDATAFINAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vMES","Visible")',ctrl:'vMES',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vANO","Visible")',ctrl:'vANO',prop:'Visible'},{ctrl:'BUTTON1',prop:'Visible'},{ctrl:'BUTTON2',prop:'Visible'},{ctrl:'BTNAVANCAR',prop:'Visible'},{ctrl:'BTNCANCELAR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TEXTBLOCK10","Visible")',ctrl:'TEXTBLOCK10',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TEXTBLOCK11","Visible")',ctrl:'TEXTBLOCK11',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TEXTBLOCK1","Visible")',ctrl:'TEXTBLOCK1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTIPOBAIXASIGLA","Visible")',ctrl:'vTIPOBAIXASIGLA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABTPBAIXA","Visible")',ctrl:'TABTPBAIXA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTIPOBAIXADESCRICAO","Visible")',ctrl:'vTIPOBAIXADESCRICAO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TEXTBLOCK2","Visible")',ctrl:'TEXTBLOCK2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTPCOBCARTAO","Visible")',ctrl:'vTPCOBCARTAO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTPCOBCARTAODESC","Visible")',ctrl:'vTPCOBCARTAODESC',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TEXTBLOCK11","Caption")',ctrl:'TEXTBLOCK11',prop:'Caption'},{av:'gx.fn.getCtrlProperty("vTIPOBAIXASIGLA","Enabled")',ctrl:'vTIPOBAIXASIGLA',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vTPCOBCARTAO","Enabled")',ctrl:'vTPCOBCARTAO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vMES","Enabled")',ctrl:'vMES',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vANO","Enabled")',ctrl:'vANO',prop:'Enabled'},{ctrl:'GRID',prop:'Rows'}]];
   this.setPrompt("PROMPT_TITULARPESSOAID", [20]);
   this.setPrompt("IMGTPBAIXA", [57,58]);
   this.setPrompt("PROMPT_TPCOBCARTAO", [76]);
   this.EnterCtrl = ["BTNAVANCAR" ,"BUTTON1"];
   this.setVCMap("AV106SdtConviteSocio", "vSDTCONVITESOCIO", 0, "CollSdtConviteSocio.SdtConviteSocioItem");
   this.setVCMap("A2632ConvidadoId", "CONVIDADOID", 0, "int");
   this.setVCMap("A2626ConvidadoCPF", "CONVIDADOCPF", 0, "char");
   this.setVCMap("A2625ConvidadoNome", "CONVIDADONOME", 0, "svchar");
   this.setVCMap("A2627ConvidadoRG", "CONVIDADORG", 0, "svchar");
   this.setVCMap("AV103SdtRecibo", "vSDTRECIBO", 0, "CollLancamentoChqRec.LancamentoChqRecItem");
   this.setVCMap("AV82SnCobrarConvSocio", "vSNCOBRARCONVSOCIO", 0, "char");
   this.setVCMap("AV83SnPagarConvMensal", "vSNPAGARCONVMENSAL", 0, "char");
   this.setVCMap("AV67TitularPessoaIdParm", "vTITULARPESSOAIDPARM", 0, "int");
   this.setVCMap("AV68TipoTela", "vTIPOTELA", 0, "char");
   this.setVCMap("AV106SdtConviteSocio", "vSDTCONVITESOCIO", 0, "CollSdtConviteSocio.SdtConviteSocioItem");
   this.setVCMap("A2632ConvidadoId", "CONVIDADOID", 0, "int");
   this.setVCMap("A2626ConvidadoCPF", "CONVIDADOCPF", 0, "char");
   this.setVCMap("A2625ConvidadoNome", "CONVIDADONOME", 0, "svchar");
   this.setVCMap("A2627ConvidadoRG", "CONVIDADORG", 0, "svchar");
   this.setVCMap("AV103SdtRecibo", "vSDTRECIBO", 0, "CollLancamentoChqRec.LancamentoChqRecItem");
   this.setVCMap("AV82SnCobrarConvSocio", "vSNCOBRARCONVSOCIO", 0, "char");
   this.setVCMap("AV83SnPagarConvMensal", "vSNPAGARCONVMENSAL", 0, "char");
   GridContainer.addRefreshingVar({rfrVar:"AV62bmpConv", rfrProp:"Value", gxAttId:"Bmpconv"});
   GridContainer.addRefreshingVar({rfrVar:"AV62bmpConv", rfrProp:"Tooltiptext", gxAttId:"Bmpconv"});
   GridContainer.addRefreshingVar({rfrVar:"AV37PromptConvidado", rfrProp:"Value", gxAttId:"Promptconvidado"});
   GridContainer.addRefreshingVar(this.GXValidFnc[31]);
   GridContainer.addRefreshingVar(this.GXValidFnc[109]);
   GridContainer.addRefreshingVar({rfrVar:"AV108convidadoAux", rfrProp:"Value", gxAttId:"Convidadoaux"});
   GridContainer.addRefreshingVar({rfrVar:"AV106SdtConviteSocio"});
   GridContainer.addRefreshingVar({rfrVar:"A2632ConvidadoId"});
   GridContainer.addRefreshingVar({rfrVar:"A2626ConvidadoCPF"});
   GridContainer.addRefreshingVar({rfrVar:"A2625ConvidadoNome"});
   GridContainer.addRefreshingVar({rfrVar:"A2627ConvidadoRG"});
   GridContainer.addRefreshingVar({rfrVar:"AV103SdtRecibo"});
   GridContainer.addRefreshingVar({rfrVar:"AV82SnCobrarConvSocio"});
   GridContainer.addRefreshingVar({rfrVar:"AV83SnPagarConvMensal"});
   GridContainer.addRefreshingVar(this.GXValidFnc[43]);
   GridContainer.addRefreshingVar(this.GXValidFnc[29]);
   this.addGridBCProperty("Sdtconvitesocio", ["ConvidadoId"], this.GXValidFnc[87], "AV106SdtConviteSocio");
   this.addGridBCProperty("Sdtconvitesocio", ["ConvidadoNome"], this.GXValidFnc[89], "AV106SdtConviteSocio");
   this.addGridBCProperty("Sdtconvitesocio", ["ConvidadoCPF"], this.GXValidFnc[90], "AV106SdtConviteSocio");
   this.addGridBCProperty("Sdtconvitesocio", ["ConvidadoRG"], this.GXValidFnc[91], "AV106SdtConviteSocio");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hregistraconvitesocio());
