/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 2:56:43.42
*/
gx.evt.autoSkip = false;
gx.define('thistoricocxabco', false, function () {
   this.ServerClass =  "thistoricocxabco" ;
   this.PackageName =  "" ;
   this.setObjectType("trn");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
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
      this.AV17HistoricoCxaBcoId=gx.fn.getIntegerValue("vHISTORICOCXABCOID",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A1003HistoricoCxaBcoEmpresaId=gx.fn.getControlValue("HISTORICOCXABCOEMPRESAID") ;
      this.AV35HistoricoCxaBcoIntegCblEmpId=gx.fn.getControlValue("vHISTORICOCXABCOINTEGCBLEMPID") ;
      this.AV21AlterDados=gx.fn.getControlValue("vALTERDADOS") ;
      this.Gx_BScreen=gx.fn.getIntegerValue("vGXBSCREEN",'.') ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.A9628HistoricoCxaBcoDebTipo=gx.fn.getControlValue("HISTORICOCXABCODEBTIPO") ;
      this.A9629HistoricoCxaBcoCreTipo=gx.fn.getControlValue("HISTORICOCXABCOCRETIPO") ;
      this.AV27ValorParametro=gx.fn.getControlValue("vVALORPARAMETRO") ;
      this.AV32ComplementoCampo=gx.fn.getControlValue("vCOMPLEMENTOCAMPO") ;
      this.A1989HistoricoCxaBcoIntegCblTpCredi=gx.fn.getControlValue("HISTORICOCXABCOINTEGCBLTPCREDI") ;
      this.A1988HistoricoCxaBcoIntegCblTpDebit=gx.fn.getControlValue("HISTORICOCXABCOINTEGCBLTPDEBIT") ;
      this.A9630HistoricoCxaBcoIntegCblDebId=gx.fn.getControlValue("HISTORICOCXABCOINTEGCBLDEBID") ;
      this.A9631HistoricoCxaBcoIntegCblCredId=gx.fn.getControlValue("HISTORICOCXABCOINTEGCBLCREDID") ;
      this.A9632HistoricoCxaBcoIntegCblDtConta=gx.fn.getControlValue("HISTORICOCXABCOINTEGCBLDTCONTA") ;
      this.AV42Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV41Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Historicocxabcoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("HISTORICOCXABCOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Historicocxabcodescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("HISTORICOCXABCODESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A1005HistoricoCxaBcoDescricao) )
         {
            try {
               gxballoon.setError("Informe a Descrição do Histórico");
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
   this.Valid_Historicocxabcotipo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("HISTORICOCXABCOTIPO");
         this.AnyError  = 0;
         if ( (""==this.A1002HistoricoCxaBcoTipo) )
         {
            try {
               gxballoon.setError("Informe o Tipo de Histórico");
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
   this.Valid_Historicocxabcoiddeb=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("HISTORICOCXABCOIDDEB");
         this.AnyError  = 0;
         try {
            if ( ! (0==this.A1574HistoricoCxaBcoIdDeb) )
            {
               this.A1573HistoricoCxaBcoEmpresaIdDeb =  this.AV12EmpresaPadrao  ;
            }
         }
         catch(e){}

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Historicocxabcoempresaiddeb=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Historicocxabcoempresaiddeb",["gx.O.A1573HistoricoCxaBcoEmpresaIdDeb", "gx.O.A1574HistoricoCxaBcoIdDeb", "gx.O.A9628HistoricoCxaBcoDebTipo", "gx.O.A1575HistoricoCxaBcoDescricaoDeb"],["A1575HistoricoCxaBcoDescricaoDeb", "A9628HistoricoCxaBcoDebTipo"]);
      return true;
   }
   this.Valid_Historicocxabcoidcre=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("HISTORICOCXABCOIDCRE");
         this.AnyError  = 0;
         try {
            if ( ! (0==this.A1577HistoricoCxaBcoIdCre) )
            {
               this.A1576HistoricoCxaBcoEmpresaIdCre =  this.AV12EmpresaPadrao  ;
            }
         }
         catch(e){}

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Historicocxabcoempresaidcre=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Historicocxabcoempresaidcre",["gx.O.A1576HistoricoCxaBcoEmpresaIdCre", "gx.O.A1577HistoricoCxaBcoIdCre", "gx.O.A9629HistoricoCxaBcoCreTipo", "gx.O.A1578HistoricoCxaBcoDescricaoCre"],["A1578HistoricoCxaBcoDescricaoCre", "A9629HistoricoCxaBcoCreTipo"]);
      return true;
   }
   this.Valid_Historicocxabcointegcblid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("HISTORICOCXABCOINTEGCBLID");
         this.AnyError  = 0;
         try {
            if ( ! (0==this.A1892HistoricoCxaBcoIntegCblId) )
            {
               this.A1891HistoricoCxaBcoIntegCblEmpId =  this.AV35HistoricoCxaBcoIntegCblEmpId  ;
            }
         }
         catch(e){}
         if ( ! (0==this.A1892HistoricoCxaBcoIntegCblId) && ( gx.text.trim( this.AV27ValorParametro) == "N" || gx.text.trim( this.AV27ValorParametro) == " " ) )
         {
            try {
               gxballoon.setError("Não informe código de integração.");
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
   this.Valid_Historicocxabcointegcblempid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Historicocxabcointegcblempid",["gx.O.A1891HistoricoCxaBcoIntegCblEmpId", "gx.O.A1892HistoricoCxaBcoIntegCblId", "gx.O.A1989HistoricoCxaBcoIntegCblTpCredi", "gx.O.A1988HistoricoCxaBcoIntegCblTpDebit", "gx.O.A1894HistoricoCxaBcoIntegCblDesc", "gx.O.A9632HistoricoCxaBcoIntegCblDtConta", "gx.O.A9630HistoricoCxaBcoIntegCblDebId", "gx.O.A9631HistoricoCxaBcoIntegCblCredId"],["A1894HistoricoCxaBcoIntegCblDesc", "A1988HistoricoCxaBcoIntegCblTpDebit", "A1989HistoricoCxaBcoIntegCblTpCredi", "A9632HistoricoCxaBcoIntegCblDtConta", "A9630HistoricoCxaBcoIntegCblDebId", "A9631HistoricoCxaBcoIntegCblCredId"]);
      return true;
   }
   this.Valid_Historicocxabcosnemicheque=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("HISTORICOCXABCOSNEMICHEQUE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Historicocxabcosnduplicdesc=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("HISTORICOCXABCOSNDUPLICDESC");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Historicocxabcosnconciliado=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("HISTORICOCXABCOSNCONCILIADO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e122f2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e132f2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e142f135_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e152f135_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,19,21,25,27,31,33,34,36,39,41,42,44,47,49,50,52,56,61,66,71,76,80,83,85,87,96,97,99,101,102,103];
   this.GXLastCtrlId =103;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Historicocxabcoid,isvalid:null,rgrid:[],fld:"HISTORICOCXABCOID",gxz:"Z1004HistoricoCxaBcoId",gxold:"O1004HistoricoCxaBcoId",gxvar:"A1004HistoricoCxaBcoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1004HistoricoCxaBcoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1004HistoricoCxaBcoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("HISTORICOCXABCOID",gx.O.A1004HistoricoCxaBcoId,0)},c2v:function(){gx.O.A1004HistoricoCxaBcoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("HISTORICOCXABCOID",'.')},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Historicocxabcodescricao,isvalid:null,rgrid:[],fld:"HISTORICOCXABCODESCRICAO",gxz:"Z1005HistoricoCxaBcoDescricao",gxold:"O1005HistoricoCxaBcoDescricao",gxvar:"A1005HistoricoCxaBcoDescricao",ucs:[],op:[21],ip:[21],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1005HistoricoCxaBcoDescricao=Value},v2z:function(Value){gx.O.Z1005HistoricoCxaBcoDescricao=Value},v2c:function(){gx.fn.setControlValue("HISTORICOCXABCODESCRICAO",gx.O.A1005HistoricoCxaBcoDescricao,0)},c2v:function(){gx.O.A1005HistoricoCxaBcoDescricao=this.val()},val:function(){return gx.fn.getControlValue("HISTORICOCXABCODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[25]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Historicocxabcotipo,isvalid:null,rgrid:[],fld:"HISTORICOCXABCOTIPO",gxz:"Z1002HistoricoCxaBcoTipo",gxold:"O1002HistoricoCxaBcoTipo",gxvar:"A1002HistoricoCxaBcoTipo",ucs:[],op:[27],ip:[27],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A1002HistoricoCxaBcoTipo=Value},v2z:function(Value){gx.O.Z1002HistoricoCxaBcoTipo=Value},v2c:function(){gx.fn.setComboBoxValue("HISTORICOCXABCOTIPO",gx.O.A1002HistoricoCxaBcoTipo)},c2v:function(){gx.O.A1002HistoricoCxaBcoTipo=this.val()},val:function(){return gx.fn.getControlValue("HISTORICOCXABCOTIPO")},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Historicocxabcoiddeb,isvalid:null,rgrid:[],fld:"HISTORICOCXABCOIDDEB",gxz:"Z1574HistoricoCxaBcoIdDeb",gxold:"O1574HistoricoCxaBcoIdDeb",gxvar:"A1574HistoricoCxaBcoIdDeb",ucs:[],op:[36],ip:[36,33],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1574HistoricoCxaBcoIdDeb=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1574HistoricoCxaBcoIdDeb=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("HISTORICOCXABCOIDDEB",gx.O.A1574HistoricoCxaBcoIdDeb,0)},c2v:function(){gx.O.A1574HistoricoCxaBcoIdDeb=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("HISTORICOCXABCOIDDEB",'.')},nac:gx.falseFn};
   GXValidFnc[34]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"HISTORICOCXABCODESCRICAODEB",gxz:"Z1575HistoricoCxaBcoDescricaoDeb",gxold:"O1575HistoricoCxaBcoDescricaoDeb",gxvar:"A1575HistoricoCxaBcoDescricaoDeb",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1575HistoricoCxaBcoDescricaoDeb=Value},v2z:function(Value){gx.O.Z1575HistoricoCxaBcoDescricaoDeb=Value},v2c:function(){gx.fn.setControlValue("HISTORICOCXABCODESCRICAODEB",gx.O.A1575HistoricoCxaBcoDescricaoDeb,0)},c2v:function(){gx.O.A1575HistoricoCxaBcoDescricaoDeb=this.val()},val:function(){return gx.fn.getControlValue("HISTORICOCXABCODESCRICAODEB")},nac:gx.falseFn};
   GXValidFnc[36]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Historicocxabcoempresaiddeb,isvalid:null,rgrid:[],fld:"HISTORICOCXABCOEMPRESAIDDEB",gxz:"Z1573HistoricoCxaBcoEmpresaIdDeb",gxold:"O1573HistoricoCxaBcoEmpresaIdDeb",gxvar:"A1573HistoricoCxaBcoEmpresaIdDeb",ucs:[],op:[33,34],ip:[34,33,36],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1573HistoricoCxaBcoEmpresaIdDeb=Value},v2z:function(Value){gx.O.Z1573HistoricoCxaBcoEmpresaIdDeb=Value},v2c:function(){gx.fn.setControlValue("HISTORICOCXABCOEMPRESAIDDEB",gx.O.A1573HistoricoCxaBcoEmpresaIdDeb,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1573HistoricoCxaBcoEmpresaIdDeb=this.val()},val:function(){return gx.fn.getControlValue("HISTORICOCXABCOEMPRESAIDDEB")},nac:gx.falseFn};
   this.declareDomainHdlr( 36 , function() {
   });
   GXValidFnc[39]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Historicocxabcoidcre,isvalid:null,rgrid:[],fld:"HISTORICOCXABCOIDCRE",gxz:"Z1577HistoricoCxaBcoIdCre",gxold:"O1577HistoricoCxaBcoIdCre",gxvar:"A1577HistoricoCxaBcoIdCre",ucs:[],op:[44],ip:[44,41],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1577HistoricoCxaBcoIdCre=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1577HistoricoCxaBcoIdCre=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("HISTORICOCXABCOIDCRE",gx.O.A1577HistoricoCxaBcoIdCre,0)},c2v:function(){gx.O.A1577HistoricoCxaBcoIdCre=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("HISTORICOCXABCOIDCRE",'.')},nac:gx.falseFn};
   GXValidFnc[42]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"HISTORICOCXABCODESCRICAOCRE",gxz:"Z1578HistoricoCxaBcoDescricaoCre",gxold:"O1578HistoricoCxaBcoDescricaoCre",gxvar:"A1578HistoricoCxaBcoDescricaoCre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1578HistoricoCxaBcoDescricaoCre=Value},v2z:function(Value){gx.O.Z1578HistoricoCxaBcoDescricaoCre=Value},v2c:function(){gx.fn.setControlValue("HISTORICOCXABCODESCRICAOCRE",gx.O.A1578HistoricoCxaBcoDescricaoCre,0)},c2v:function(){gx.O.A1578HistoricoCxaBcoDescricaoCre=this.val()},val:function(){return gx.fn.getControlValue("HISTORICOCXABCODESCRICAOCRE")},nac:gx.falseFn};
   GXValidFnc[44]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Historicocxabcoempresaidcre,isvalid:null,rgrid:[],fld:"HISTORICOCXABCOEMPRESAIDCRE",gxz:"Z1576HistoricoCxaBcoEmpresaIdCre",gxold:"O1576HistoricoCxaBcoEmpresaIdCre",gxvar:"A1576HistoricoCxaBcoEmpresaIdCre",ucs:[],op:[41,42],ip:[42,41,44],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1576HistoricoCxaBcoEmpresaIdCre=Value},v2z:function(Value){gx.O.Z1576HistoricoCxaBcoEmpresaIdCre=Value},v2c:function(){gx.fn.setControlValue("HISTORICOCXABCOEMPRESAIDCRE",gx.O.A1576HistoricoCxaBcoEmpresaIdCre,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1576HistoricoCxaBcoEmpresaIdCre=this.val()},val:function(){return gx.fn.getControlValue("HISTORICOCXABCOEMPRESAIDCRE")},nac:gx.falseFn};
   this.declareDomainHdlr( 44 , function() {
   });
   GXValidFnc[47]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Historicocxabcointegcblid,isvalid:null,rgrid:[],fld:"HISTORICOCXABCOINTEGCBLID",gxz:"Z1892HistoricoCxaBcoIntegCblId",gxold:"O1892HistoricoCxaBcoIntegCblId",gxvar:"A1892HistoricoCxaBcoIntegCblId",ucs:[],op:[49,52],ip:[52,49],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1892HistoricoCxaBcoIntegCblId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1892HistoricoCxaBcoIntegCblId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("HISTORICOCXABCOINTEGCBLID",gx.O.A1892HistoricoCxaBcoIntegCblId,0)},c2v:function(){gx.O.A1892HistoricoCxaBcoIntegCblId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("HISTORICOCXABCOINTEGCBLID",'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"HISTORICOCXABCOINTEGCBLDESC",gxz:"Z1894HistoricoCxaBcoIntegCblDesc",gxold:"O1894HistoricoCxaBcoIntegCblDesc",gxvar:"A1894HistoricoCxaBcoIntegCblDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1894HistoricoCxaBcoIntegCblDesc=Value},v2z:function(Value){gx.O.Z1894HistoricoCxaBcoIntegCblDesc=Value},v2c:function(){gx.fn.setControlValue("HISTORICOCXABCOINTEGCBLDESC",gx.O.A1894HistoricoCxaBcoIntegCblDesc,0)},c2v:function(){gx.O.A1894HistoricoCxaBcoIntegCblDesc=this.val()},val:function(){return gx.fn.getControlValue("HISTORICOCXABCOINTEGCBLDESC")},nac:gx.falseFn};
   GXValidFnc[52]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Historicocxabcointegcblempid,isvalid:null,rgrid:[],fld:"HISTORICOCXABCOINTEGCBLEMPID",gxz:"Z1891HistoricoCxaBcoIntegCblEmpId",gxold:"O1891HistoricoCxaBcoIntegCblEmpId",gxvar:"A1891HistoricoCxaBcoIntegCblEmpId",ucs:[],op:[49,50],ip:[50,49,52],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1891HistoricoCxaBcoIntegCblEmpId=Value},v2z:function(Value){gx.O.Z1891HistoricoCxaBcoIntegCblEmpId=Value},v2c:function(){gx.fn.setControlValue("HISTORICOCXABCOINTEGCBLEMPID",gx.O.A1891HistoricoCxaBcoIntegCblEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1891HistoricoCxaBcoIntegCblEmpId=this.val()},val:function(){return gx.fn.getControlValue("HISTORICOCXABCOINTEGCBLEMPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 52 , function() {
   });
   GXValidFnc[56]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Historicocxabcosnemicheque,isvalid:null,rgrid:[],fld:"HISTORICOCXABCOSNEMICHEQUE",gxz:"Z1006HistoricoCxaBcoSnEmiCheque",gxold:"O1006HistoricoCxaBcoSnEmiCheque",gxvar:"A1006HistoricoCxaBcoSnEmiCheque",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A1006HistoricoCxaBcoSnEmiCheque=Value},v2z:function(Value){gx.O.Z1006HistoricoCxaBcoSnEmiCheque=Value},v2c:function(){gx.fn.setCheckBoxValue("HISTORICOCXABCOSNEMICHEQUE",gx.O.A1006HistoricoCxaBcoSnEmiCheque,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1006HistoricoCxaBcoSnEmiCheque=this.val()},val:function(){return gx.fn.getControlValue("HISTORICOCXABCOSNEMICHEQUE")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 56 , function() {
   });
   GXValidFnc[61]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"HISTORICOCXABCOSNEMIRECIBO",gxz:"Z2022HistoricoCxaBcoSnEmiRecibo",gxold:"O2022HistoricoCxaBcoSnEmiRecibo",gxvar:"A2022HistoricoCxaBcoSnEmiRecibo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A2022HistoricoCxaBcoSnEmiRecibo=Value},v2z:function(Value){gx.O.Z2022HistoricoCxaBcoSnEmiRecibo=Value},v2c:function(){gx.fn.setCheckBoxValue("HISTORICOCXABCOSNEMIRECIBO",gx.O.A2022HistoricoCxaBcoSnEmiRecibo,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2022HistoricoCxaBcoSnEmiRecibo=this.val()},val:function(){return gx.fn.getControlValue("HISTORICOCXABCOSNEMIRECIBO")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 61 , function() {
   });
   GXValidFnc[66]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Historicocxabcosnduplicdesc,isvalid:null,rgrid:[],fld:"HISTORICOCXABCOSNDUPLICDESC",gxz:"Z1007HistoricoCxaBcoSnDuplicDesc",gxold:"O1007HistoricoCxaBcoSnDuplicDesc",gxvar:"A1007HistoricoCxaBcoSnDuplicDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A1007HistoricoCxaBcoSnDuplicDesc=Value},v2z:function(Value){gx.O.Z1007HistoricoCxaBcoSnDuplicDesc=Value},v2c:function(){gx.fn.setCheckBoxValue("HISTORICOCXABCOSNDUPLICDESC",gx.O.A1007HistoricoCxaBcoSnDuplicDesc,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1007HistoricoCxaBcoSnDuplicDesc=this.val()},val:function(){return gx.fn.getControlValue("HISTORICOCXABCOSNDUPLICDESC")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 66 , function() {
   });
   GXValidFnc[71]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Historicocxabcosnconciliado,isvalid:null,rgrid:[],fld:"HISTORICOCXABCOSNCONCILIADO",gxz:"Z1011HistoricoCxaBcoSnConciliado",gxold:"O1011HistoricoCxaBcoSnConciliado",gxvar:"A1011HistoricoCxaBcoSnConciliado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A1011HistoricoCxaBcoSnConciliado=Value},v2z:function(Value){gx.O.Z1011HistoricoCxaBcoSnConciliado=Value},v2c:function(){gx.fn.setCheckBoxValue("HISTORICOCXABCOSNCONCILIADO",gx.O.A1011HistoricoCxaBcoSnConciliado,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1011HistoricoCxaBcoSnConciliado=this.val()},val:function(){return gx.fn.getControlValue("HISTORICOCXABCOSNCONCILIADO")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 71 , function() {
   });
   GXValidFnc[76]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"HISTORICOCXABCODESPESABANCARIA",gxz:"Z2029HistoricoCxaBcoDespesaBancaria",gxold:"O2029HistoricoCxaBcoDespesaBancaria",gxvar:"A2029HistoricoCxaBcoDespesaBancaria",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A2029HistoricoCxaBcoDespesaBancaria=Value},v2z:function(Value){gx.O.Z2029HistoricoCxaBcoDespesaBancaria=Value},v2c:function(){gx.fn.setCheckBoxValue("HISTORICOCXABCODESPESABANCARIA",gx.O.A2029HistoricoCxaBcoDespesaBancaria,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2029HistoricoCxaBcoDespesaBancaria=this.val()},val:function(){return gx.fn.getControlValue("HISTORICOCXABCODESPESABANCARIA")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 76 , function() {
   });
   GXValidFnc[80]={fld:"TABLE4",grid:0};
   GXValidFnc[83]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[85]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"HISTORICOCXABCOUSUARIOALT",gxz:"Z1012HistoricoCxaBcoUsuarioAlt",gxold:"O1012HistoricoCxaBcoUsuarioAlt",gxvar:"A1012HistoricoCxaBcoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1012HistoricoCxaBcoUsuarioAlt=Value},v2z:function(Value){gx.O.Z1012HistoricoCxaBcoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("HISTORICOCXABCOUSUARIOALT",gx.O.A1012HistoricoCxaBcoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1012HistoricoCxaBcoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("HISTORICOCXABCOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 85 , function() {
   });
   GXValidFnc[87]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"HISTORICOCXABCODATAHORAALT",gxz:"Z1013HistoricoCxaBcoDataHoraAlt",gxold:"O1013HistoricoCxaBcoDataHoraAlt",gxvar:"A1013HistoricoCxaBcoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1013HistoricoCxaBcoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1013HistoricoCxaBcoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("HISTORICOCXABCODATAHORAALT",gx.O.A1013HistoricoCxaBcoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1013HistoricoCxaBcoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("HISTORICOCXABCODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 87 , function() {
   });
   GXValidFnc[96]={fld:"JS", format:2,grid:0};
   GXValidFnc[97]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV36AcessoSistemaSequencia",gxold:"OV36AcessoSistemaSequencia",gxvar:"AV36AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV36AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV36AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV36AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[99]={fld:"BTNHELP",grid:0};
   GXValidFnc[101]={fld:"PROMPT_1574",grid:135};
   GXValidFnc[102]={fld:"PROMPT_1577",grid:135};
   GXValidFnc[103]={fld:"PROMPT_1892",grid:135};
   this.A1004HistoricoCxaBcoId = 0 ;
   this.Z1004HistoricoCxaBcoId = 0 ;
   this.O1004HistoricoCxaBcoId = 0 ;
   this.A1005HistoricoCxaBcoDescricao = "" ;
   this.Z1005HistoricoCxaBcoDescricao = "" ;
   this.O1005HistoricoCxaBcoDescricao = "" ;
   this.A1002HistoricoCxaBcoTipo = "" ;
   this.Z1002HistoricoCxaBcoTipo = "" ;
   this.O1002HistoricoCxaBcoTipo = "" ;
   this.A1574HistoricoCxaBcoIdDeb = 0 ;
   this.Z1574HistoricoCxaBcoIdDeb = 0 ;
   this.O1574HistoricoCxaBcoIdDeb = 0 ;
   this.A1575HistoricoCxaBcoDescricaoDeb = "" ;
   this.Z1575HistoricoCxaBcoDescricaoDeb = "" ;
   this.O1575HistoricoCxaBcoDescricaoDeb = "" ;
   this.A1573HistoricoCxaBcoEmpresaIdDeb = "" ;
   this.Z1573HistoricoCxaBcoEmpresaIdDeb = "" ;
   this.O1573HistoricoCxaBcoEmpresaIdDeb = "" ;
   this.A1577HistoricoCxaBcoIdCre = 0 ;
   this.Z1577HistoricoCxaBcoIdCre = 0 ;
   this.O1577HistoricoCxaBcoIdCre = 0 ;
   this.A1578HistoricoCxaBcoDescricaoCre = "" ;
   this.Z1578HistoricoCxaBcoDescricaoCre = "" ;
   this.O1578HistoricoCxaBcoDescricaoCre = "" ;
   this.A1576HistoricoCxaBcoEmpresaIdCre = "" ;
   this.Z1576HistoricoCxaBcoEmpresaIdCre = "" ;
   this.O1576HistoricoCxaBcoEmpresaIdCre = "" ;
   this.A1892HistoricoCxaBcoIntegCblId = 0 ;
   this.Z1892HistoricoCxaBcoIntegCblId = 0 ;
   this.O1892HistoricoCxaBcoIntegCblId = 0 ;
   this.A1894HistoricoCxaBcoIntegCblDesc = "" ;
   this.Z1894HistoricoCxaBcoIntegCblDesc = "" ;
   this.O1894HistoricoCxaBcoIntegCblDesc = "" ;
   this.A1891HistoricoCxaBcoIntegCblEmpId = "" ;
   this.Z1891HistoricoCxaBcoIntegCblEmpId = "" ;
   this.O1891HistoricoCxaBcoIntegCblEmpId = "" ;
   this.A1006HistoricoCxaBcoSnEmiCheque = "" ;
   this.Z1006HistoricoCxaBcoSnEmiCheque = "" ;
   this.O1006HistoricoCxaBcoSnEmiCheque = "" ;
   this.A2022HistoricoCxaBcoSnEmiRecibo = "" ;
   this.Z2022HistoricoCxaBcoSnEmiRecibo = "" ;
   this.O2022HistoricoCxaBcoSnEmiRecibo = "" ;
   this.A1007HistoricoCxaBcoSnDuplicDesc = "" ;
   this.Z1007HistoricoCxaBcoSnDuplicDesc = "" ;
   this.O1007HistoricoCxaBcoSnDuplicDesc = "" ;
   this.A1011HistoricoCxaBcoSnConciliado = "" ;
   this.Z1011HistoricoCxaBcoSnConciliado = "" ;
   this.O1011HistoricoCxaBcoSnConciliado = "" ;
   this.A2029HistoricoCxaBcoDespesaBancaria = "" ;
   this.Z2029HistoricoCxaBcoDespesaBancaria = "" ;
   this.O2029HistoricoCxaBcoDespesaBancaria = "" ;
   this.A1012HistoricoCxaBcoUsuarioAlt = "" ;
   this.Z1012HistoricoCxaBcoUsuarioAlt = "" ;
   this.O1012HistoricoCxaBcoUsuarioAlt = "" ;
   this.A1013HistoricoCxaBcoDataHoraAlt = gx.date.nullDate() ;
   this.Z1013HistoricoCxaBcoDataHoraAlt = gx.date.nullDate() ;
   this.O1013HistoricoCxaBcoDataHoraAlt = gx.date.nullDate() ;
   this.AV36AcessoSistemaSequencia = 0 ;
   this.ZV36AcessoSistemaSequencia = 0 ;
   this.OV36AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV41Pgmname = "" ;
   this.AV42Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV36AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV35HistoricoCxaBcoIntegCblEmpId = "" ;
   this.AV27ValorParametro = "" ;
   this.AV18Entrada = [ ] ;
   this.AV22Saida = [ ] ;
   this.AV20Entrada2 = [ ] ;
   this.AV19Saida2 = [ ] ;
   this.AV25EntradaInt = [ ] ;
   this.AV26SaidaInt = [ ] ;
   this.AV32ComplementoCampo = "" ;
   this.AV17HistoricoCxaBcoId = 0 ;
   this.A1003HistoricoCxaBcoEmpresaId = "" ;
   this.A1004HistoricoCxaBcoId = 0 ;
   this.A1576HistoricoCxaBcoEmpresaIdCre = "" ;
   this.A1573HistoricoCxaBcoEmpresaIdDeb = "" ;
   this.A1891HistoricoCxaBcoIntegCblEmpId = "" ;
   this.AV21AlterDados = "" ;
   this.Gx_BScreen = 0 ;
   this.A1005HistoricoCxaBcoDescricao = "" ;
   this.A1002HistoricoCxaBcoTipo = "" ;
   this.A1006HistoricoCxaBcoSnEmiCheque = "" ;
   this.A1007HistoricoCxaBcoSnDuplicDesc = "" ;
   this.A2022HistoricoCxaBcoSnEmiRecibo = "" ;
   this.A2029HistoricoCxaBcoDespesaBancaria = "" ;
   this.A1892HistoricoCxaBcoIntegCblId = 0 ;
   this.A1894HistoricoCxaBcoIntegCblDesc = "" ;
   this.A1988HistoricoCxaBcoIntegCblTpDebit = "" ;
   this.A1989HistoricoCxaBcoIntegCblTpCredi = "" ;
   this.A9630HistoricoCxaBcoIntegCblDebId = "" ;
   this.A9631HistoricoCxaBcoIntegCblCredId = "" ;
   this.A9632HistoricoCxaBcoIntegCblDtConta = "" ;
   this.A1011HistoricoCxaBcoSnConciliado = "" ;
   this.A1574HistoricoCxaBcoIdDeb = 0 ;
   this.A1575HistoricoCxaBcoDescricaoDeb = "" ;
   this.A9628HistoricoCxaBcoDebTipo = "" ;
   this.A1577HistoricoCxaBcoIdCre = 0 ;
   this.A1578HistoricoCxaBcoDescricaoCre = "" ;
   this.A9629HistoricoCxaBcoCreTipo = "" ;
   this.A1012HistoricoCxaBcoUsuarioAlt = "" ;
   this.A1013HistoricoCxaBcoDataHoraAlt = gx.date.nullDate() ;
   this.Gx_mode = "" ;
   this.Events = {"e122f2_client": ["'FECHAR'", true] ,"e132f2_client": ["AFTER TRN", true] ,"e142f135_client": ["ENTER", true] ,"e152f135_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV17HistoricoCxaBcoId',fld:'vHISTORICOCXABCOID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV36AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV36AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPT_1574", [33]);
   this.setPrompt("PROMPT_1577", [41]);
   this.setPrompt("PROMPT_1892", [49]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV17HistoricoCxaBcoId", "vHISTORICOCXABCOID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A1003HistoricoCxaBcoEmpresaId", "HISTORICOCXABCOEMPRESAID", 0, "char");
   this.setVCMap("AV35HistoricoCxaBcoIntegCblEmpId", "vHISTORICOCXABCOINTEGCBLEMPID", 0, "char");
   this.setVCMap("AV21AlterDados", "vALTERDADOS", 0, "char");
   this.setVCMap("Gx_BScreen", "vGXBSCREEN", 0, "int");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("A9628HistoricoCxaBcoDebTipo", "HISTORICOCXABCODEBTIPO", 0, "char");
   this.setVCMap("A9629HistoricoCxaBcoCreTipo", "HISTORICOCXABCOCRETIPO", 0, "char");
   this.setVCMap("AV27ValorParametro", "vVALORPARAMETRO", 0, "svchar");
   this.setVCMap("AV32ComplementoCampo", "vCOMPLEMENTOCAMPO", 0, "char");
   this.setVCMap("A1989HistoricoCxaBcoIntegCblTpCredi", "HISTORICOCXABCOINTEGCBLTPCREDI", 0, "char");
   this.setVCMap("A1988HistoricoCxaBcoIntegCblTpDebit", "HISTORICOCXABCOINTEGCBLTPDEBIT", 0, "char");
   this.setVCMap("A9630HistoricoCxaBcoIntegCblDebId", "HISTORICOCXABCOINTEGCBLDEBID", 0, "svchar");
   this.setVCMap("A9631HistoricoCxaBcoIntegCblCredId", "HISTORICOCXABCOINTEGCBLCREDID", 0, "svchar");
   this.setVCMap("A9632HistoricoCxaBcoIntegCblDtConta", "HISTORICOCXABCOINTEGCBLDTCONTA", 0, "char");
   this.setVCMap("AV42Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV41Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 135 ]= ["O1011HistoricoCxaBcoSnConciliado","O1007HistoricoCxaBcoSnDuplicDesc","O1006HistoricoCxaBcoSnEmiCheque","O1574HistoricoCxaBcoIdDeb","O1577HistoricoCxaBcoIdCre","O1892HistoricoCxaBcoIntegCblId","O1002HistoricoCxaBcoTipo","O1005HistoricoCxaBcoDescricao"] ;
});
gx.setParentObj(new thistoricocxabco());
