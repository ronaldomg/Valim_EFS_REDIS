/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:31:26.67
*/
gx.evt.autoSkip = false;
gx.define('tvisitacliente', false, function () {
   this.ServerClass =  "tvisitacliente" ;
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
      this.AV52OLDVisitaClienteDataAgenda=gx.fn.getDateValue("vOLDVISITACLIENTEDATAAGENDA") ;
      this.AV23AparelhoClienteSeqId=gx.fn.getIntegerValue("vAPARELHOCLIENTESEQID",'.') ;
      this.AV7PessoaId=gx.fn.getIntegerValue("vPESSOAID",'.') ;
      this.AV25EmpresaPessoasEmpresaId=gx.fn.getControlValue("vEMPRESAPESSOASEMPRESAID") ;
      this.AV27AparelhoId=gx.fn.getIntegerValue("vAPARELHOID",'.') ;
      this.AV24AparelhoEmpresaId=gx.fn.getControlValue("vAPARELHOEMPRESAID") ;
      this.AV43OrdemServicoEmpresaId=gx.fn.getControlValue("vORDEMSERVICOEMPRESAID") ;
      this.AV44VisitaClienteDataAgenda=gx.fn.getDateValue("vVISITACLIENTEDATAAGENDA") ;
      this.AV54Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV53Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV42SNInicioSistema=gx.fn.getControlValue("vSNINICIOSISTEMA") ;
   };
   this.Valid_Visitaclientedataagenda=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Visitaclientedataagenda",['gx.date.urlDate(gx.O.O9686VisitaClienteDataAgenda,"DMY4")', 'gx.date.urlDate(gx.O.A9686VisitaClienteDataAgenda,"DMY4")', 'gx.date.urlDate(gx.O.AV52OLDVisitaClienteDataAgenda,"DMY4")'],["AV52OLDVisitaClienteDataAgenda"]);
      return true;
   }
   this.Valid_Visitaclientepessoaempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("VISITACLIENTEPESSOAEMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Visitaclientepessoaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("VISITACLIENTEPESSOAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Visitaclienteaparelhoempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("VISITACLIENTEAPARELHOEMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Visitaclienteaparelhoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("VISITACLIENTEAPARELHOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Visitaclienteaparelhocliseqid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Visitaclienteaparelhocliseqid",["gx.O.A9681VisitaClienteAparelhoCliSeqId", "gx.O.A9683VisitaClientePessoaId", "gx.O.A9682VisitaClientePessoaEmpId", "gx.O.A9684VisitaClienteAparelhoEmpId", "gx.O.A9685VisitaClienteAparelhoId"],[]);
      return true;
   }
   this.Valid_Visitaclienteprofissionalid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("VISITACLIENTEPROFISSIONALID");
         this.AnyError  = 0;
         if ( (0==this.A9690VisitaClienteProfissionalId) )
         {
            try {
               gxballoon.setError("Informe o Profissional");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Profissionalempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPROFISSIONALEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Visitaclienteordemservicoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("VISITACLIENTEORDEMSERVICOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Visitaclienteaparelhoitemid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("VISITACLIENTEAPARELHOITEMID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Aparelhoitemempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vAPARELHOITEMEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Visitaclienteordemservicoempid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Visitaclienteordemservicoempid",["gx.O.A9687VisitaClienteOrdemServicoEmpId", "gx.O.A9688VisitaClienteOrdemServicoId"],[]);
      return true;
   }
   this.Valid_Visitaclienteprofissionalempid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Visitaclienteprofissionalempid",["gx.O.A9689VisitaClienteProfissionalEmpId", "gx.O.A9690VisitaClienteProfissionalId"],[]);
      return true;
   }
   this.Valid_Visitaclienteaparelhoitemempid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Visitaclienteaparelhoitemempid",['gx.date.urlDate(gx.O.A9686VisitaClienteDataAgenda,"DMY4")', "gx.O.A9712VisitaClienteAparelhoItemEmpId", "gx.O.A9713VisitaClienteAparelhoItemid"],[]);
      return true;
   }
   this.e12ds2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13ds2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e14ds2_client=function()
   {
      this.executeServerEvent("'CRIAROS'", true, null, false, false);
   };
   this.e15ds2_client=function()
   {
      this.executeServerEvent("'VEROS'", true, null, false, false);
   };
   this.e16ds716_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e17ds716_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,9,12,14,16,18,20,22,25,27,29,31,33,35,38,40,42,44,46,48,51,53,55,57,64,66,69,71,74,76,77,78,81,83,84,87,89,90,91,94,96,97,98,99,100,101,102,103,104,113,115,116,117,118];
   this.GXLastCtrlId =118;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TABLE3",grid:0};
   GXValidFnc[9]={fld:"TABLEFORM",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAFANTASIA",gxz:"ZV8PessoaFantasia",gxold:"OV8PessoaFantasia",gxvar:"AV8PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8PessoaFantasia=Value},v2z:function(Value){gx.O.ZV8PessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("vPESSOAFANTASIA",gx.O.AV8PessoaFantasia,0)},c2v:function(){gx.O.AV8PessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"CARAC3", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAPARELHOCARACTERISTICAVLR3",gxz:"ZV12AparelhoCaracteristicaVlr3",gxold:"OV12AparelhoCaracteristicaVlr3",gxvar:"AV12AparelhoCaracteristicaVlr3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12AparelhoCaracteristicaVlr3=Value},v2z:function(Value){gx.O.ZV12AparelhoCaracteristicaVlr3=Value},v2c:function(){gx.fn.setControlValue("vAPARELHOCARACTERISTICAVLR3",gx.O.AV12AparelhoCaracteristicaVlr3,0)},c2v:function(){gx.O.AV12AparelhoCaracteristicaVlr3=this.val()},val:function(){return gx.fn.getControlValue("vAPARELHOCARACTERISTICAVLR3")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"CARAC7", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAPARELHOCARACTERISTICAVLR7",gxz:"ZV16AparelhoCaracteristicaVlr7",gxold:"OV16AparelhoCaracteristicaVlr7",gxvar:"AV16AparelhoCaracteristicaVlr7",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16AparelhoCaracteristicaVlr7=Value},v2z:function(Value){gx.O.ZV16AparelhoCaracteristicaVlr7=Value},v2c:function(){gx.fn.setControlValue("vAPARELHOCARACTERISTICAVLR7",gx.O.AV16AparelhoCaracteristicaVlr7,0)},c2v:function(){gx.O.AV16AparelhoCaracteristicaVlr7=this.val()},val:function(){return gx.fn.getControlValue("vAPARELHOCARACTERISTICAVLR7")},nac:gx.falseFn};
   GXValidFnc[25]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAPARELHODESCRICAO",gxz:"ZV9AparelhoDescricao",gxold:"OV9AparelhoDescricao",gxvar:"AV9AparelhoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9AparelhoDescricao=Value},v2z:function(Value){gx.O.ZV9AparelhoDescricao=Value},v2c:function(){gx.fn.setControlValue("vAPARELHODESCRICAO",gx.O.AV9AparelhoDescricao,0)},c2v:function(){gx.O.AV9AparelhoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vAPARELHODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[29]={fld:"CARAC4", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAPARELHOCARACTERISTICAVLR4",gxz:"ZV13AparelhoCaracteristicaVlr4",gxold:"OV13AparelhoCaracteristicaVlr4",gxvar:"AV13AparelhoCaracteristicaVlr4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13AparelhoCaracteristicaVlr4=Value},v2z:function(Value){gx.O.ZV13AparelhoCaracteristicaVlr4=Value},v2c:function(){gx.fn.setControlValue("vAPARELHOCARACTERISTICAVLR4",gx.O.AV13AparelhoCaracteristicaVlr4,0)},c2v:function(){gx.O.AV13AparelhoCaracteristicaVlr4=this.val()},val:function(){return gx.fn.getControlValue("vAPARELHOCARACTERISTICAVLR4")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"CARAC8", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAPARELHOCARACTERISTICAVLR8",gxz:"ZV17AparelhoCaracteristicaVlr8",gxold:"OV17AparelhoCaracteristicaVlr8",gxvar:"AV17AparelhoCaracteristicaVlr8",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AparelhoCaracteristicaVlr8=Value},v2z:function(Value){gx.O.ZV17AparelhoCaracteristicaVlr8=Value},v2c:function(){gx.fn.setControlValue("vAPARELHOCARACTERISTICAVLR8",gx.O.AV17AparelhoCaracteristicaVlr8,0)},c2v:function(){gx.O.AV17AparelhoCaracteristicaVlr8=this.val()},val:function(){return gx.fn.getControlValue("vAPARELHOCARACTERISTICAVLR8")},nac:gx.falseFn};
   GXValidFnc[38]={fld:"CARAC1", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAPARELHOCARACTERISTICAVLR1",gxz:"ZV10AparelhoCaracteristicaVlr1",gxold:"OV10AparelhoCaracteristicaVlr1",gxvar:"AV10AparelhoCaracteristicaVlr1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10AparelhoCaracteristicaVlr1=Value},v2z:function(Value){gx.O.ZV10AparelhoCaracteristicaVlr1=Value},v2c:function(){gx.fn.setControlValue("vAPARELHOCARACTERISTICAVLR1",gx.O.AV10AparelhoCaracteristicaVlr1,0)},c2v:function(){gx.O.AV10AparelhoCaracteristicaVlr1=this.val()},val:function(){return gx.fn.getControlValue("vAPARELHOCARACTERISTICAVLR1")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"CARAC5", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAPARELHOCARACTERISTICAVLR5",gxz:"ZV14AparelhoCaracteristicaVlr5",gxold:"OV14AparelhoCaracteristicaVlr5",gxvar:"AV14AparelhoCaracteristicaVlr5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14AparelhoCaracteristicaVlr5=Value},v2z:function(Value){gx.O.ZV14AparelhoCaracteristicaVlr5=Value},v2c:function(){gx.fn.setControlValue("vAPARELHOCARACTERISTICAVLR5",gx.O.AV14AparelhoCaracteristicaVlr5,0)},c2v:function(){gx.O.AV14AparelhoCaracteristicaVlr5=this.val()},val:function(){return gx.fn.getControlValue("vAPARELHOCARACTERISTICAVLR5")},nac:gx.falseFn};
   GXValidFnc[46]={fld:"CARAC9", format:0,grid:0};
   GXValidFnc[48]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAPARELHOCARACTERISTICAVLR9",gxz:"ZV18AparelhoCaracteristicaVlr9",gxold:"OV18AparelhoCaracteristicaVlr9",gxvar:"AV18AparelhoCaracteristicaVlr9",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18AparelhoCaracteristicaVlr9=Value},v2z:function(Value){gx.O.ZV18AparelhoCaracteristicaVlr9=Value},v2c:function(){gx.fn.setControlValue("vAPARELHOCARACTERISTICAVLR9",gx.O.AV18AparelhoCaracteristicaVlr9,0)},c2v:function(){gx.O.AV18AparelhoCaracteristicaVlr9=this.val()},val:function(){return gx.fn.getControlValue("vAPARELHOCARACTERISTICAVLR9")},nac:gx.falseFn};
   GXValidFnc[51]={fld:"CARAC2", format:0,grid:0};
   GXValidFnc[53]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAPARELHOCARACTERISTICAVLR2",gxz:"ZV11AparelhoCaracteristicaVlr2",gxold:"OV11AparelhoCaracteristicaVlr2",gxvar:"AV11AparelhoCaracteristicaVlr2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11AparelhoCaracteristicaVlr2=Value},v2z:function(Value){gx.O.ZV11AparelhoCaracteristicaVlr2=Value},v2c:function(){gx.fn.setControlValue("vAPARELHOCARACTERISTICAVLR2",gx.O.AV11AparelhoCaracteristicaVlr2,0)},c2v:function(){gx.O.AV11AparelhoCaracteristicaVlr2=this.val()},val:function(){return gx.fn.getControlValue("vAPARELHOCARACTERISTICAVLR2")},nac:gx.falseFn};
   GXValidFnc[55]={fld:"CARAC6", format:0,grid:0};
   GXValidFnc[57]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAPARELHOCARACTERISTICAVLR6",gxz:"ZV15AparelhoCaracteristicaVlr6",gxold:"OV15AparelhoCaracteristicaVlr6",gxvar:"AV15AparelhoCaracteristicaVlr6",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15AparelhoCaracteristicaVlr6=Value},v2z:function(Value){gx.O.ZV15AparelhoCaracteristicaVlr6=Value},v2c:function(){gx.fn.setControlValue("vAPARELHOCARACTERISTICAVLR6",gx.O.AV15AparelhoCaracteristicaVlr6,0)},c2v:function(){gx.O.AV15AparelhoCaracteristicaVlr6=this.val()},val:function(){return gx.fn.getControlValue("vAPARELHOCARACTERISTICAVLR6")},nac:gx.falseFn};
   GXValidFnc[64]={fld:"TEXTBLOCKVISITACLIENTEDATAAGENDA", format:0,grid:0};
   GXValidFnc[66]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Visitaclientedataagenda,isvalid:null,rgrid:[],fld:"VISITACLIENTEDATAAGENDA",gxz:"Z9686VisitaClienteDataAgenda",gxold:"O9686VisitaClienteDataAgenda",gxvar:"A9686VisitaClienteDataAgenda",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[66],ip:[66],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9686VisitaClienteDataAgenda=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z9686VisitaClienteDataAgenda=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("VISITACLIENTEDATAAGENDA",gx.O.A9686VisitaClienteDataAgenda,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9686VisitaClienteDataAgenda=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("VISITACLIENTEDATAAGENDA")},nac:gx.falseFn};
   this.declareDomainHdlr( 66 , function() {
   });
   GXValidFnc[69]={fld:"TEXTBLOCKVISITACLIENTEDATAVISITA", format:0,grid:0};
   GXValidFnc[71]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"VISITACLIENTEDATAVISITA",gxz:"Z9701VisitaClienteDataVisita",gxold:"O9701VisitaClienteDataVisita",gxvar:"A9701VisitaClienteDataVisita",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9701VisitaClienteDataVisita=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z9701VisitaClienteDataVisita=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("VISITACLIENTEDATAVISITA",gx.O.A9701VisitaClienteDataVisita,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9701VisitaClienteDataVisita=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("VISITACLIENTEDATAVISITA")},nac:gx.falseFn};
   this.declareDomainHdlr( 71 , function() {
   });
   GXValidFnc[74]={fld:"TEXTBLOCKVISITACLIENTEPROFISSIONALID", format:0,grid:0};
   GXValidFnc[76]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Visitaclienteprofissionalid,isvalid:null,rgrid:[],fld:"VISITACLIENTEPROFISSIONALID",gxz:"Z9690VisitaClienteProfissionalId",gxold:"O9690VisitaClienteProfissionalId",gxvar:"A9690VisitaClienteProfissionalId",ucs:[],op:[76],ip:[76],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9690VisitaClienteProfissionalId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9690VisitaClienteProfissionalId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("VISITACLIENTEPROFISSIONALID",gx.O.A9690VisitaClienteProfissionalId,0)},c2v:function(){gx.O.A9690VisitaClienteProfissionalId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("VISITACLIENTEPROFISSIONALID",'.')},nac:gx.falseFn};
   GXValidFnc[77]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPROFISSIONALNOME",gxz:"ZV22ProfissionalNome",gxold:"OV22ProfissionalNome",gxvar:"AV22ProfissionalNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22ProfissionalNome=Value},v2z:function(Value){gx.O.ZV22ProfissionalNome=Value},v2c:function(){gx.fn.setControlValue("vPROFISSIONALNOME",gx.O.AV22ProfissionalNome,0)},c2v:function(){gx.O.AV22ProfissionalNome=this.val()},val:function(){return gx.fn.getControlValue("vPROFISSIONALNOME")},nac:gx.falseFn};
   GXValidFnc[78]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Profissionalempresaid,isvalid:null,rgrid:[],fld:"vPROFISSIONALEMPRESAID",gxz:"ZV26ProfissionalEmpresaId",gxold:"OV26ProfissionalEmpresaId",gxvar:"AV26ProfissionalEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26ProfissionalEmpresaId=Value},v2z:function(Value){gx.O.ZV26ProfissionalEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vPROFISSIONALEMPRESAID",gx.O.AV26ProfissionalEmpresaId,0)},c2v:function(){gx.O.AV26ProfissionalEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vPROFISSIONALEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[81]={fld:"TEXTBLOCKVISITACLIENTEORDEMSERVICOID", format:0,grid:0};
   GXValidFnc[83]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Visitaclienteordemservicoid,isvalid:null,rgrid:[],fld:"VISITACLIENTEORDEMSERVICOID",gxz:"Z9688VisitaClienteOrdemServicoId",gxold:"O9688VisitaClienteOrdemServicoId",gxvar:"A9688VisitaClienteOrdemServicoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9688VisitaClienteOrdemServicoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9688VisitaClienteOrdemServicoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("VISITACLIENTEORDEMSERVICOID",gx.O.A9688VisitaClienteOrdemServicoId,0)},c2v:function(){gx.O.A9688VisitaClienteOrdemServicoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("VISITACLIENTEORDEMSERVICOID",'.')},nac:gx.falseFn};
   GXValidFnc[84]={fld:"ABRIR",grid:0};
   GXValidFnc[87]={fld:"TEXTBLOCKVISITACLIENTEAPARELHOITEMID", format:0,grid:0};
   GXValidFnc[89]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Visitaclienteaparelhoitemid,isvalid:null,rgrid:[],fld:"VISITACLIENTEAPARELHOITEMID",gxz:"Z9713VisitaClienteAparelhoItemid",gxold:"O9713VisitaClienteAparelhoItemid",gxvar:"A9713VisitaClienteAparelhoItemid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9713VisitaClienteAparelhoItemid=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9713VisitaClienteAparelhoItemid=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("VISITACLIENTEAPARELHOITEMID",gx.O.A9713VisitaClienteAparelhoItemid,0)},c2v:function(){gx.O.A9713VisitaClienteAparelhoItemid=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("VISITACLIENTEAPARELHOITEMID",'.')},nac:gx.falseFn};
   GXValidFnc[90]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAPARELHOITEMDESCRICAO",gxz:"ZV47AparelhoItemDescricao",gxold:"OV47AparelhoItemDescricao",gxvar:"AV47AparelhoItemDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV47AparelhoItemDescricao=Value},v2z:function(Value){gx.O.ZV47AparelhoItemDescricao=Value},v2c:function(){gx.fn.setControlValue("vAPARELHOITEMDESCRICAO",gx.O.AV47AparelhoItemDescricao,0)},c2v:function(){gx.O.AV47AparelhoItemDescricao=this.val()},val:function(){return gx.fn.getControlValue("vAPARELHOITEMDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[91]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Aparelhoitemempresaid,isvalid:null,rgrid:[],fld:"vAPARELHOITEMEMPRESAID",gxz:"ZV46AparelhoItemEmpresaId",gxold:"OV46AparelhoItemEmpresaId",gxvar:"AV46AparelhoItemEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV46AparelhoItemEmpresaId=Value},v2z:function(Value){gx.O.ZV46AparelhoItemEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vAPARELHOITEMEMPRESAID",gx.O.AV46AparelhoItemEmpresaId,0)},c2v:function(){gx.O.AV46AparelhoItemEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vAPARELHOITEMEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[94]={fld:"TEXTBLOCKVISITACLIENTEOBSERVACAO", format:0,grid:0};
   GXValidFnc[96]={lvl:0,type:"vchar",len:3000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"VISITACLIENTEOBSERVACAO",gxz:"Z9702VisitaClienteObservacao",gxold:"O9702VisitaClienteObservacao",gxvar:"A9702VisitaClienteObservacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9702VisitaClienteObservacao=Value},v2z:function(Value){gx.O.Z9702VisitaClienteObservacao=Value},v2c:function(){gx.fn.setControlValue("VISITACLIENTEOBSERVACAO",gx.O.A9702VisitaClienteObservacao,0)},c2v:function(){gx.O.A9702VisitaClienteObservacao=this.val()},val:function(){return gx.fn.getControlValue("VISITACLIENTEOBSERVACAO")},nac:gx.falseFn};
   GXValidFnc[97]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Visitaclienteordemservicoempid,isvalid:null,rgrid:[],fld:"VISITACLIENTEORDEMSERVICOEMPID",gxz:"Z9687VisitaClienteOrdemServicoEmpId",gxold:"O9687VisitaClienteOrdemServicoEmpId",gxvar:"A9687VisitaClienteOrdemServicoEmpId",ucs:[],op:[],ip:[83,97],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9687VisitaClienteOrdemServicoEmpId=Value},v2z:function(Value){gx.O.Z9687VisitaClienteOrdemServicoEmpId=Value},v2c:function(){gx.fn.setControlValue("VISITACLIENTEORDEMSERVICOEMPID",gx.O.A9687VisitaClienteOrdemServicoEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9687VisitaClienteOrdemServicoEmpId=this.val()},val:function(){return gx.fn.getControlValue("VISITACLIENTEORDEMSERVICOEMPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 97 , function() {
   });
   GXValidFnc[98]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Visitaclientepessoaempid,isvalid:null,rgrid:[],fld:"VISITACLIENTEPESSOAEMPID",gxz:"Z9682VisitaClientePessoaEmpId",gxold:"O9682VisitaClientePessoaEmpId",gxvar:"A9682VisitaClientePessoaEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9682VisitaClientePessoaEmpId=Value},v2z:function(Value){gx.O.Z9682VisitaClientePessoaEmpId=Value},v2c:function(){gx.fn.setControlValue("VISITACLIENTEPESSOAEMPID",gx.O.A9682VisitaClientePessoaEmpId,0)},c2v:function(){gx.O.A9682VisitaClientePessoaEmpId=this.val()},val:function(){return gx.fn.getControlValue("VISITACLIENTEPESSOAEMPID")},nac:gx.falseFn};
   GXValidFnc[99]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Visitaclientepessoaid,isvalid:null,rgrid:[],fld:"VISITACLIENTEPESSOAID",gxz:"Z9683VisitaClientePessoaId",gxold:"O9683VisitaClientePessoaId",gxvar:"A9683VisitaClientePessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9683VisitaClientePessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9683VisitaClientePessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("VISITACLIENTEPESSOAID",gx.O.A9683VisitaClientePessoaId,0)},c2v:function(){gx.O.A9683VisitaClientePessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("VISITACLIENTEPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[100]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Visitaclienteaparelhoempid,isvalid:null,rgrid:[],fld:"VISITACLIENTEAPARELHOEMPID",gxz:"Z9684VisitaClienteAparelhoEmpId",gxold:"O9684VisitaClienteAparelhoEmpId",gxvar:"A9684VisitaClienteAparelhoEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9684VisitaClienteAparelhoEmpId=Value},v2z:function(Value){gx.O.Z9684VisitaClienteAparelhoEmpId=Value},v2c:function(){gx.fn.setControlValue("VISITACLIENTEAPARELHOEMPID",gx.O.A9684VisitaClienteAparelhoEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9684VisitaClienteAparelhoEmpId=this.val()},val:function(){return gx.fn.getControlValue("VISITACLIENTEAPARELHOEMPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 100 , function() {
   });
   GXValidFnc[101]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Visitaclienteaparelhoid,isvalid:null,rgrid:[],fld:"VISITACLIENTEAPARELHOID",gxz:"Z9685VisitaClienteAparelhoId",gxold:"O9685VisitaClienteAparelhoId",gxvar:"A9685VisitaClienteAparelhoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9685VisitaClienteAparelhoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9685VisitaClienteAparelhoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("VISITACLIENTEAPARELHOID",gx.O.A9685VisitaClienteAparelhoId,0)},c2v:function(){gx.O.A9685VisitaClienteAparelhoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("VISITACLIENTEAPARELHOID",'.')},nac:gx.falseFn};
   GXValidFnc[102]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Visitaclienteaparelhocliseqid,isvalid:null,rgrid:[],fld:"VISITACLIENTEAPARELHOCLISEQID",gxz:"Z9681VisitaClienteAparelhoCliSeqId",gxold:"O9681VisitaClienteAparelhoCliSeqId",gxvar:"A9681VisitaClienteAparelhoCliSeqId",ucs:[],op:[],ip:[101,100,98,99,102],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9681VisitaClienteAparelhoCliSeqId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9681VisitaClienteAparelhoCliSeqId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("VISITACLIENTEAPARELHOCLISEQID",gx.O.A9681VisitaClienteAparelhoCliSeqId,0)},c2v:function(){gx.O.A9681VisitaClienteAparelhoCliSeqId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("VISITACLIENTEAPARELHOCLISEQID",'.')},nac:gx.falseFn};
   GXValidFnc[103]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Visitaclienteprofissionalempid,isvalid:null,rgrid:[],fld:"VISITACLIENTEPROFISSIONALEMPID",gxz:"Z9689VisitaClienteProfissionalEmpId",gxold:"O9689VisitaClienteProfissionalEmpId",gxvar:"A9689VisitaClienteProfissionalEmpId",ucs:[],op:[],ip:[76,103],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9689VisitaClienteProfissionalEmpId=Value},v2z:function(Value){gx.O.Z9689VisitaClienteProfissionalEmpId=Value},v2c:function(){gx.fn.setControlValue("VISITACLIENTEPROFISSIONALEMPID",gx.O.A9689VisitaClienteProfissionalEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9689VisitaClienteProfissionalEmpId=this.val()},val:function(){return gx.fn.getControlValue("VISITACLIENTEPROFISSIONALEMPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 103 , function() {
   });
   GXValidFnc[104]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Visitaclienteaparelhoitemempid,isvalid:null,rgrid:[],fld:"VISITACLIENTEAPARELHOITEMEMPID",gxz:"Z9712VisitaClienteAparelhoItemEmpId",gxold:"O9712VisitaClienteAparelhoItemEmpId",gxvar:"A9712VisitaClienteAparelhoItemEmpId",ucs:[],op:[],ip:[89,104],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9712VisitaClienteAparelhoItemEmpId=Value},v2z:function(Value){gx.O.Z9712VisitaClienteAparelhoItemEmpId=Value},v2c:function(){gx.fn.setControlValue("VISITACLIENTEAPARELHOITEMEMPID",gx.O.A9712VisitaClienteAparelhoItemEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9712VisitaClienteAparelhoItemEmpId=this.val()},val:function(){return gx.fn.getControlValue("VISITACLIENTEAPARELHOITEMEMPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 104 , function() {
   });
   GXValidFnc[113]={fld:"JS", format:2,grid:0};
   GXValidFnc[115]={fld:"BTNHELP",grid:0};
   GXValidFnc[116]={fld:"PROMPT_9690",grid:716};
   GXValidFnc[117]={fld:"PROMPT_9688",grid:716};
   GXValidFnc[118]={fld:"PROMPT_9713",grid:716};
   this.AV8PessoaFantasia = "" ;
   this.ZV8PessoaFantasia = "" ;
   this.OV8PessoaFantasia = "" ;
   this.AV12AparelhoCaracteristicaVlr3 = "" ;
   this.ZV12AparelhoCaracteristicaVlr3 = "" ;
   this.OV12AparelhoCaracteristicaVlr3 = "" ;
   this.AV16AparelhoCaracteristicaVlr7 = "" ;
   this.ZV16AparelhoCaracteristicaVlr7 = "" ;
   this.OV16AparelhoCaracteristicaVlr7 = "" ;
   this.AV9AparelhoDescricao = "" ;
   this.ZV9AparelhoDescricao = "" ;
   this.OV9AparelhoDescricao = "" ;
   this.AV13AparelhoCaracteristicaVlr4 = "" ;
   this.ZV13AparelhoCaracteristicaVlr4 = "" ;
   this.OV13AparelhoCaracteristicaVlr4 = "" ;
   this.AV17AparelhoCaracteristicaVlr8 = "" ;
   this.ZV17AparelhoCaracteristicaVlr8 = "" ;
   this.OV17AparelhoCaracteristicaVlr8 = "" ;
   this.AV10AparelhoCaracteristicaVlr1 = "" ;
   this.ZV10AparelhoCaracteristicaVlr1 = "" ;
   this.OV10AparelhoCaracteristicaVlr1 = "" ;
   this.AV14AparelhoCaracteristicaVlr5 = "" ;
   this.ZV14AparelhoCaracteristicaVlr5 = "" ;
   this.OV14AparelhoCaracteristicaVlr5 = "" ;
   this.AV18AparelhoCaracteristicaVlr9 = "" ;
   this.ZV18AparelhoCaracteristicaVlr9 = "" ;
   this.OV18AparelhoCaracteristicaVlr9 = "" ;
   this.AV11AparelhoCaracteristicaVlr2 = "" ;
   this.ZV11AparelhoCaracteristicaVlr2 = "" ;
   this.OV11AparelhoCaracteristicaVlr2 = "" ;
   this.AV15AparelhoCaracteristicaVlr6 = "" ;
   this.ZV15AparelhoCaracteristicaVlr6 = "" ;
   this.OV15AparelhoCaracteristicaVlr6 = "" ;
   this.A9686VisitaClienteDataAgenda = gx.date.nullDate() ;
   this.Z9686VisitaClienteDataAgenda = gx.date.nullDate() ;
   this.O9686VisitaClienteDataAgenda = gx.date.nullDate() ;
   this.A9701VisitaClienteDataVisita = gx.date.nullDate() ;
   this.Z9701VisitaClienteDataVisita = gx.date.nullDate() ;
   this.O9701VisitaClienteDataVisita = gx.date.nullDate() ;
   this.A9690VisitaClienteProfissionalId = 0 ;
   this.Z9690VisitaClienteProfissionalId = 0 ;
   this.O9690VisitaClienteProfissionalId = 0 ;
   this.AV22ProfissionalNome = "" ;
   this.ZV22ProfissionalNome = "" ;
   this.OV22ProfissionalNome = "" ;
   this.AV26ProfissionalEmpresaId = "" ;
   this.ZV26ProfissionalEmpresaId = "" ;
   this.OV26ProfissionalEmpresaId = "" ;
   this.A9688VisitaClienteOrdemServicoId = 0 ;
   this.Z9688VisitaClienteOrdemServicoId = 0 ;
   this.O9688VisitaClienteOrdemServicoId = 0 ;
   this.A9713VisitaClienteAparelhoItemid = 0 ;
   this.Z9713VisitaClienteAparelhoItemid = 0 ;
   this.O9713VisitaClienteAparelhoItemid = 0 ;
   this.AV47AparelhoItemDescricao = "" ;
   this.ZV47AparelhoItemDescricao = "" ;
   this.OV47AparelhoItemDescricao = "" ;
   this.AV46AparelhoItemEmpresaId = "" ;
   this.ZV46AparelhoItemEmpresaId = "" ;
   this.OV46AparelhoItemEmpresaId = "" ;
   this.A9702VisitaClienteObservacao = "" ;
   this.Z9702VisitaClienteObservacao = "" ;
   this.O9702VisitaClienteObservacao = "" ;
   this.A9687VisitaClienteOrdemServicoEmpId = "" ;
   this.Z9687VisitaClienteOrdemServicoEmpId = "" ;
   this.O9687VisitaClienteOrdemServicoEmpId = "" ;
   this.A9682VisitaClientePessoaEmpId = "" ;
   this.Z9682VisitaClientePessoaEmpId = "" ;
   this.O9682VisitaClientePessoaEmpId = "" ;
   this.A9683VisitaClientePessoaId = 0 ;
   this.Z9683VisitaClientePessoaId = 0 ;
   this.O9683VisitaClientePessoaId = 0 ;
   this.A9684VisitaClienteAparelhoEmpId = "" ;
   this.Z9684VisitaClienteAparelhoEmpId = "" ;
   this.O9684VisitaClienteAparelhoEmpId = "" ;
   this.A9685VisitaClienteAparelhoId = 0 ;
   this.Z9685VisitaClienteAparelhoId = 0 ;
   this.O9685VisitaClienteAparelhoId = 0 ;
   this.A9681VisitaClienteAparelhoCliSeqId = 0 ;
   this.Z9681VisitaClienteAparelhoCliSeqId = 0 ;
   this.O9681VisitaClienteAparelhoCliSeqId = 0 ;
   this.A9689VisitaClienteProfissionalEmpId = "" ;
   this.Z9689VisitaClienteProfissionalEmpId = "" ;
   this.O9689VisitaClienteProfissionalEmpId = "" ;
   this.A9712VisitaClienteAparelhoItemEmpId = "" ;
   this.Z9712VisitaClienteAparelhoItemEmpId = "" ;
   this.O9712VisitaClienteAparelhoItemEmpId = "" ;
   this.AV19UsrCod = "" ;
   this.AV21EmpresaLogadaId = "" ;
   this.AV31Sistema = "" ;
   this.AV53Pgmname = "" ;
   this.AV54Pgmdesc = "" ;
   this.AV34MsgErro = "" ;
   this.AV32Modulo = "" ;
   this.AV20Logon = {} ;
   this.AV33Tabela = "" ;
   this.AV35EmpresaPadrao = "" ;
   this.AV49PessoaEmpresaId = "" ;
   this.AV26ProfissionalEmpresaId = "" ;
   this.AV29AparelhoCaracEmpresaId = "" ;
   this.AV43OrdemServicoEmpresaId = "" ;
   this.AV46AparelhoItemEmpresaId = "" ;
   this.AV23AparelhoClienteSeqId = 0 ;
   this.AV27AparelhoId = 0 ;
   this.AV24AparelhoEmpresaId = "" ;
   this.AV7PessoaId = 0 ;
   this.AV25EmpresaPessoasEmpresaId = "" ;
   this.AV44VisitaClienteDataAgenda = gx.date.nullDate() ;
   this.AV42SNInicioSistema = "" ;
   this.A9681VisitaClienteAparelhoCliSeqId = 0 ;
   this.A9682VisitaClientePessoaEmpId = "" ;
   this.A9683VisitaClientePessoaId = 0 ;
   this.A9684VisitaClienteAparelhoEmpId = "" ;
   this.A9685VisitaClienteAparelhoId = 0 ;
   this.A9686VisitaClienteDataAgenda = gx.date.nullDate() ;
   this.A9701VisitaClienteDataVisita = gx.date.nullDate() ;
   this.AV52OLDVisitaClienteDataAgenda = gx.date.nullDate() ;
   this.A9687VisitaClienteOrdemServicoEmpId = "" ;
   this.A9689VisitaClienteProfissionalEmpId = "" ;
   this.A9712VisitaClienteAparelhoItemEmpId = "" ;
   this.A9690VisitaClienteProfissionalId = 0 ;
   this.A9702VisitaClienteObservacao = "" ;
   this.A9688VisitaClienteOrdemServicoId = 0 ;
   this.A9713VisitaClienteAparelhoItemid = 0 ;
   this.Gx_mode = "" ;
   this.Events = {"e12ds2_client": ["'FECHAR'", true] ,"e13ds2_client": ["AFTER TRN", true] ,"e14ds2_client": ["'CRIAROS'", true] ,"e15ds2_client": ["'VEROS'", true] ,"e16ds716_client": ["ENTER", true] ,"e17ds716_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV23AparelhoClienteSeqId',fld:'vAPARELHOCLIENTESEQID',hsh:true},{av:'AV27AparelhoId',fld:'vAPARELHOID',hsh:true},{av:'AV24AparelhoEmpresaId',fld:'vAPARELHOEMPRESAID',hsh:true},{av:'AV7PessoaId',fld:'vPESSOAID',hsh:true},{av:'AV25EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID',hsh:true},{av:'AV44VisitaClienteDataAgenda',fld:'vVISITACLIENTEDATAAGENDA',hsh:true},{av:'AV42SNInicioSistema',fld:'vSNINICIOSISTEMA',hsh:true},{av:'Gx_mode',fld:'vMODE',hsh:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV23AparelhoClienteSeqId',fld:'vAPARELHOCLIENTESEQID',hsh:true},{av:'AV27AparelhoId',fld:'vAPARELHOID',hsh:true},{av:'AV7PessoaId',fld:'vPESSOAID',hsh:true}],[]];
   this.EvtParms["AFTER TRN"] = [[],[]];
   this.EvtParms["'CRIAROS'"] = [[{av:'A9685VisitaClienteAparelhoId',fld:'VISITACLIENTEAPARELHOID'},{av:'AV30SdtAparelhoClienteItem',fld:'vSDTAPARELHOCLIENTEITEM'},{av:'A9684VisitaClienteAparelhoEmpId',fld:'VISITACLIENTEAPARELHOEMPID'},{av:'A9683VisitaClientePessoaId',fld:'VISITACLIENTEPESSOAID'},{av:'A9682VisitaClientePessoaEmpId',fld:'VISITACLIENTEPESSOAEMPID'},{av:'AV23AparelhoClienteSeqId',fld:'vAPARELHOCLIENTESEQID',hsh:true},{av:'A9713VisitaClienteAparelhoItemid',fld:'VISITACLIENTEAPARELHOITEMID'},{av:'A9688VisitaClienteOrdemServicoId',fld:'VISITACLIENTEORDEMSERVICOID'},{av:'A9686VisitaClienteDataAgenda',fld:'VISITACLIENTEDATAAGENDA'}],[{av:'AV30SdtAparelhoClienteItem',fld:'vSDTAPARELHOCLIENTEITEM'},{av:'AV51SNLockAparelhoCliente',fld:'vSNLOCKAPARELHOCLIENTE'}]];
   this.EvtParms["'VEROS'"] = [[{av:'A9688VisitaClienteOrdemServicoId',fld:'VISITACLIENTEORDEMSERVICOID'}],[{av:'A9688VisitaClienteOrdemServicoId',fld:'VISITACLIENTEORDEMSERVICOID'}]];
   this.setPrompt("PROMPT_9690", [76]);
   this.setPrompt("PROMPT_9688", [83]);
   this.setPrompt("PROMPT_9713", [89]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV52OLDVisitaClienteDataAgenda", "vOLDVISITACLIENTEDATAAGENDA", 0, "date");
   this.setVCMap("AV23AparelhoClienteSeqId", "vAPARELHOCLIENTESEQID", 0, "int");
   this.setVCMap("AV7PessoaId", "vPESSOAID", 0, "int");
   this.setVCMap("AV25EmpresaPessoasEmpresaId", "vEMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("AV27AparelhoId", "vAPARELHOID", 0, "int");
   this.setVCMap("AV24AparelhoEmpresaId", "vAPARELHOEMPRESAID", 0, "char");
   this.setVCMap("AV43OrdemServicoEmpresaId", "vORDEMSERVICOEMPRESAID", 0, "char");
   this.setVCMap("AV44VisitaClienteDataAgenda", "vVISITACLIENTEDATAAGENDA", 0, "date");
   this.setVCMap("AV54Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV53Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("AV42SNInicioSistema", "vSNINICIOSISTEMA", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 716 ]= ["O9686VisitaClienteDataAgenda"] ;
});
gx.setParentObj(new tvisitacliente());
