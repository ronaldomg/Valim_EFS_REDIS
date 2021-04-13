/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:38:7.13
*/
gx.evt.autoSkip = false;
gx.define('texecucaofisica', false, function () {
   this.ServerClass =  "texecucaofisica" ;
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
      this.AV19ExecucaoFisicaData=gx.fn.getDateValue("vEXECUCAOFISICADATA") ;
      this.AV20ExecucaoFisicaMeta=gx.fn.getIntegerValue("vEXECUCAOFISICAMETA",'.') ;
      this.AV21ExecucaoFisicaEtapa=gx.fn.getIntegerValue("vEXECUCAOFISICAETAPA",'.') ;
      this.AV17ConvenioId=gx.fn.getIntegerValue("vCONVENIOID",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A1680ConvenioEmpresaId=gx.fn.getControlValue("CONVENIOEMPRESAID") ;
      this.AV18SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV30Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV29Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Convenioid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Convenioid",["gx.O.A1680ConvenioEmpresaId", "gx.O.A1681ConvenioId", "gx.O.A2082ConvenioDescricao"],["A2082ConvenioDescricao"]);
      return true;
   }
   this.Valid_Execucaofisicadata=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("EXECUCAOFISICADATA");
         this.AnyError  = 0;
         if ( (new gx.date.gxdate("").compare(this.A2152ExecucaoFisicaData)==0) )
         {
            try {
               gxballoon.setError("Informe a Data de Referência");
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
   this.Valid_Execucaofisicameta=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("EXECUCAOFISICAMETA");
         this.AnyError  = 0;
         if ( (0==this.A2153ExecucaoFisicaMeta) )
         {
            try {
               gxballoon.setError("Informe a Meta");
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
   this.Valid_Execucaofisicaetapa=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("EXECUCAOFISICAETAPA");
         this.AnyError  = 0;
         if ( (0==this.A2154ExecucaoFisicaEtapa) )
         {
            try {
               gxballoon.setError("Informe a Etapa");
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
   this.Valid_Execucaofisicadescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("EXECUCAOFISICADESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A2155ExecucaoFisicaDescricao) )
         {
            try {
               gxballoon.setError("Informe a Descrição da Execução");
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
   this.Valid_Execucaofisicaunidademedida=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("EXECUCAOFISICAUNIDADEMEDIDA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Execucaofisicaqtdeprogperiodo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("EXECUCAOFISICAQTDEPROGPERIODO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Execucaofisicaqtdeexeperiodo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("EXECUCAOFISICAQTDEEXEPERIODO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Execucaofisicaqtdeprogateper=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("EXECUCAOFISICAQTDEPROGATEPER");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Execucaofisicaqtdeexeateper=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("EXECUCAOFISICAQTDEEXEATEPER");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12412_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13412_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e1441225_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1541225_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,15,18,20,23,25,28,30,34,36,39,41,44,46,49,51,54,56,59,61,64,67,69,71,80,81,83];
   this.GXLastCtrlId =83;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Convenioid,isvalid:null,rgrid:[],fld:"CONVENIOID",gxz:"Z1681ConvenioId",gxold:"O1681ConvenioId",gxvar:"A1681ConvenioId",ucs:[],op:[15],ip:[15,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1681ConvenioId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1681ConvenioId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONVENIOID",gx.O.A1681ConvenioId,0)},c2v:function(){gx.O.A1681ConvenioId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONVENIOID",'.')},nac:gx.falseFn};
   GXValidFnc[15]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONVENIODESCRICAO",gxz:"Z2082ConvenioDescricao",gxold:"O2082ConvenioDescricao",gxvar:"A2082ConvenioDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2082ConvenioDescricao=Value},v2z:function(Value){gx.O.Z2082ConvenioDescricao=Value},v2c:function(){gx.fn.setControlValue("CONVENIODESCRICAO",gx.O.A2082ConvenioDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2082ConvenioDescricao=this.val()},val:function(){return gx.fn.getControlValue("CONVENIODESCRICAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 15 , function() {
   });
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Execucaofisicadata,isvalid:null,rgrid:[],fld:"EXECUCAOFISICADATA",gxz:"Z2152ExecucaoFisicaData",gxold:"O2152ExecucaoFisicaData",gxvar:"A2152ExecucaoFisicaData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2152ExecucaoFisicaData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2152ExecucaoFisicaData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("EXECUCAOFISICADATA",gx.O.A2152ExecucaoFisicaData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2152ExecucaoFisicaData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("EXECUCAOFISICADATA")},nac:function(){return !(new gx.date.gxdate("").compare(this.AV19ExecucaoFisicaData)==0)}};
   this.declareDomainHdlr( 20 , function() {
   });
   GXValidFnc[23]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Execucaofisicameta,isvalid:null,rgrid:[],fld:"EXECUCAOFISICAMETA",gxz:"Z2153ExecucaoFisicaMeta",gxold:"O2153ExecucaoFisicaMeta",gxvar:"A2153ExecucaoFisicaMeta",ucs:[],op:[25],ip:[25],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2153ExecucaoFisicaMeta=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2153ExecucaoFisicaMeta=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("EXECUCAOFISICAMETA",gx.O.A2153ExecucaoFisicaMeta,0)},c2v:function(){gx.O.A2153ExecucaoFisicaMeta=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("EXECUCAOFISICAMETA",'.')},nac:function(){return !(0==this.AV20ExecucaoFisicaMeta)}};
   GXValidFnc[28]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Execucaofisicaetapa,isvalid:null,rgrid:[],fld:"EXECUCAOFISICAETAPA",gxz:"Z2154ExecucaoFisicaEtapa",gxold:"O2154ExecucaoFisicaEtapa",gxvar:"A2154ExecucaoFisicaEtapa",ucs:[],op:[30],ip:[30],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2154ExecucaoFisicaEtapa=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2154ExecucaoFisicaEtapa=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("EXECUCAOFISICAETAPA",gx.O.A2154ExecucaoFisicaEtapa,0)},c2v:function(){gx.O.A2154ExecucaoFisicaEtapa=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("EXECUCAOFISICAETAPA",'.')},nac:function(){return !(0==this.AV21ExecucaoFisicaEtapa)}};
   GXValidFnc[34]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"svchar",len:200,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:this.Valid_Execucaofisicadescricao,isvalid:null,rgrid:[],fld:"EXECUCAOFISICADESCRICAO",gxz:"Z2155ExecucaoFisicaDescricao",gxold:"O2155ExecucaoFisicaDescricao",gxvar:"A2155ExecucaoFisicaDescricao",ucs:[],op:[36],ip:[36],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2155ExecucaoFisicaDescricao=Value},v2z:function(Value){gx.O.Z2155ExecucaoFisicaDescricao=Value},v2c:function(){gx.fn.setControlValue("EXECUCAOFISICADESCRICAO",gx.O.A2155ExecucaoFisicaDescricao,0)},c2v:function(){gx.O.A2155ExecucaoFisicaDescricao=this.val()},val:function(){return gx.fn.getControlValue("EXECUCAOFISICADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[39]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Execucaofisicaunidademedida,isvalid:null,rgrid:[],fld:"EXECUCAOFISICAUNIDADEMEDIDA",gxz:"Z2156ExecucaoFisicaUnidadeMedida",gxold:"O2156ExecucaoFisicaUnidadeMedida",gxvar:"A2156ExecucaoFisicaUnidadeMedida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2156ExecucaoFisicaUnidadeMedida=Value},v2z:function(Value){gx.O.Z2156ExecucaoFisicaUnidadeMedida=Value},v2c:function(){gx.fn.setControlValue("EXECUCAOFISICAUNIDADEMEDIDA",gx.O.A2156ExecucaoFisicaUnidadeMedida,0)},c2v:function(){gx.O.A2156ExecucaoFisicaUnidadeMedida=this.val()},val:function(){return gx.fn.getControlValue("EXECUCAOFISICAUNIDADEMEDIDA")},nac:gx.falseFn};
   GXValidFnc[44]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[46]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Execucaofisicaqtdeprogperiodo,isvalid:null,rgrid:[],fld:"EXECUCAOFISICAQTDEPROGPERIODO",gxz:"Z2157ExecucaoFisicaQtdeProgPeriodo",gxold:"O2157ExecucaoFisicaQtdeProgPeriodo",gxvar:"A2157ExecucaoFisicaQtdeProgPeriodo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2157ExecucaoFisicaQtdeProgPeriodo=Value},v2z:function(Value){gx.O.Z2157ExecucaoFisicaQtdeProgPeriodo=Value},v2c:function(){gx.fn.setControlValue("EXECUCAOFISICAQTDEPROGPERIODO",gx.O.A2157ExecucaoFisicaQtdeProgPeriodo,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2157ExecucaoFisicaQtdeProgPeriodo=this.val()},val:function(){return gx.fn.getControlValue("EXECUCAOFISICAQTDEPROGPERIODO")},nac:gx.falseFn};
   this.declareDomainHdlr( 46 , function() {
   });
   GXValidFnc[49]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[51]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Execucaofisicaqtdeexeperiodo,isvalid:null,rgrid:[],fld:"EXECUCAOFISICAQTDEEXEPERIODO",gxz:"Z2158ExecucaoFisicaQtdeExePeriodo",gxold:"O2158ExecucaoFisicaQtdeExePeriodo",gxvar:"A2158ExecucaoFisicaQtdeExePeriodo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2158ExecucaoFisicaQtdeExePeriodo=Value},v2z:function(Value){gx.O.Z2158ExecucaoFisicaQtdeExePeriodo=Value},v2c:function(){gx.fn.setControlValue("EXECUCAOFISICAQTDEEXEPERIODO",gx.O.A2158ExecucaoFisicaQtdeExePeriodo,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2158ExecucaoFisicaQtdeExePeriodo=this.val()},val:function(){return gx.fn.getControlValue("EXECUCAOFISICAQTDEEXEPERIODO")},nac:gx.falseFn};
   this.declareDomainHdlr( 51 , function() {
   });
   GXValidFnc[54]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[56]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Execucaofisicaqtdeprogateper,isvalid:null,rgrid:[],fld:"EXECUCAOFISICAQTDEPROGATEPER",gxz:"Z2159ExecucaoFisicaQtdeProgAtePer",gxold:"O2159ExecucaoFisicaQtdeProgAtePer",gxvar:"A2159ExecucaoFisicaQtdeProgAtePer",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2159ExecucaoFisicaQtdeProgAtePer=Value},v2z:function(Value){gx.O.Z2159ExecucaoFisicaQtdeProgAtePer=Value},v2c:function(){gx.fn.setControlValue("EXECUCAOFISICAQTDEPROGATEPER",gx.O.A2159ExecucaoFisicaQtdeProgAtePer,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2159ExecucaoFisicaQtdeProgAtePer=this.val()},val:function(){return gx.fn.getControlValue("EXECUCAOFISICAQTDEPROGATEPER")},nac:gx.falseFn};
   this.declareDomainHdlr( 56 , function() {
   });
   GXValidFnc[59]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[61]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Execucaofisicaqtdeexeateper,isvalid:null,rgrid:[],fld:"EXECUCAOFISICAQTDEEXEATEPER",gxz:"Z2160ExecucaoFisicaQtdeExeAtePer",gxold:"O2160ExecucaoFisicaQtdeExeAtePer",gxvar:"A2160ExecucaoFisicaQtdeExeAtePer",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2160ExecucaoFisicaQtdeExeAtePer=Value},v2z:function(Value){gx.O.Z2160ExecucaoFisicaQtdeExeAtePer=Value},v2c:function(){gx.fn.setControlValue("EXECUCAOFISICAQTDEEXEATEPER",gx.O.A2160ExecucaoFisicaQtdeExeAtePer,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2160ExecucaoFisicaQtdeExeAtePer=this.val()},val:function(){return gx.fn.getControlValue("EXECUCAOFISICAQTDEEXEATEPER")},nac:gx.falseFn};
   this.declareDomainHdlr( 61 , function() {
   });
   GXValidFnc[64]={fld:"TABLE4",grid:0};
   GXValidFnc[67]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[69]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"EXECUCAOFISICAUSUARIOALT",gxz:"Z2161ExecucaoFisicaUsuarioAlt",gxold:"O2161ExecucaoFisicaUsuarioAlt",gxvar:"A2161ExecucaoFisicaUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2161ExecucaoFisicaUsuarioAlt=Value},v2z:function(Value){gx.O.Z2161ExecucaoFisicaUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("EXECUCAOFISICAUSUARIOALT",gx.O.A2161ExecucaoFisicaUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2161ExecucaoFisicaUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("EXECUCAOFISICAUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 69 , function() {
   });
   GXValidFnc[71]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"EXECUCAOFISICADATAHORAALT",gxz:"Z2162ExecucaoFisicaDataHoraAlt",gxold:"O2162ExecucaoFisicaDataHoraAlt",gxvar:"A2162ExecucaoFisicaDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2162ExecucaoFisicaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2162ExecucaoFisicaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("EXECUCAOFISICADATAHORAALT",gx.O.A2162ExecucaoFisicaDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2162ExecucaoFisicaDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("EXECUCAOFISICADATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 71 , function() {
   });
   GXValidFnc[80]={fld:"JSDATA", format:2,grid:0};
   GXValidFnc[81]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV22AcessoSistemaSequencia",gxold:"OV22AcessoSistemaSequencia",gxvar:"AV22AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV22AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV22AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[83]={fld:"BTNHELP",grid:0};
   this.A1681ConvenioId = 0 ;
   this.Z1681ConvenioId = 0 ;
   this.O1681ConvenioId = 0 ;
   this.A2082ConvenioDescricao = "" ;
   this.Z2082ConvenioDescricao = "" ;
   this.O2082ConvenioDescricao = "" ;
   this.A2152ExecucaoFisicaData = gx.date.nullDate() ;
   this.Z2152ExecucaoFisicaData = gx.date.nullDate() ;
   this.O2152ExecucaoFisicaData = gx.date.nullDate() ;
   this.A2153ExecucaoFisicaMeta = 0 ;
   this.Z2153ExecucaoFisicaMeta = 0 ;
   this.O2153ExecucaoFisicaMeta = 0 ;
   this.A2154ExecucaoFisicaEtapa = 0 ;
   this.Z2154ExecucaoFisicaEtapa = 0 ;
   this.O2154ExecucaoFisicaEtapa = 0 ;
   this.A2155ExecucaoFisicaDescricao = "" ;
   this.Z2155ExecucaoFisicaDescricao = "" ;
   this.O2155ExecucaoFisicaDescricao = "" ;
   this.A2156ExecucaoFisicaUnidadeMedida = "" ;
   this.Z2156ExecucaoFisicaUnidadeMedida = "" ;
   this.O2156ExecucaoFisicaUnidadeMedida = "" ;
   this.A2157ExecucaoFisicaQtdeProgPeriodo = "" ;
   this.Z2157ExecucaoFisicaQtdeProgPeriodo = "" ;
   this.O2157ExecucaoFisicaQtdeProgPeriodo = "" ;
   this.A2158ExecucaoFisicaQtdeExePeriodo = "" ;
   this.Z2158ExecucaoFisicaQtdeExePeriodo = "" ;
   this.O2158ExecucaoFisicaQtdeExePeriodo = "" ;
   this.A2159ExecucaoFisicaQtdeProgAtePer = "" ;
   this.Z2159ExecucaoFisicaQtdeProgAtePer = "" ;
   this.O2159ExecucaoFisicaQtdeProgAtePer = "" ;
   this.A2160ExecucaoFisicaQtdeExeAtePer = "" ;
   this.Z2160ExecucaoFisicaQtdeExeAtePer = "" ;
   this.O2160ExecucaoFisicaQtdeExeAtePer = "" ;
   this.A2161ExecucaoFisicaUsuarioAlt = "" ;
   this.Z2161ExecucaoFisicaUsuarioAlt = "" ;
   this.O2161ExecucaoFisicaUsuarioAlt = "" ;
   this.A2162ExecucaoFisicaDataHoraAlt = gx.date.nullDate() ;
   this.Z2162ExecucaoFisicaDataHoraAlt = gx.date.nullDate() ;
   this.O2162ExecucaoFisicaDataHoraAlt = gx.date.nullDate() ;
   this.AV22AcessoSistemaSequencia = 0 ;
   this.ZV22AcessoSistemaSequencia = 0 ;
   this.OV22AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV29Pgmname = "" ;
   this.AV30Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV22AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV18SnAlterou = "" ;
   this.AV17ConvenioId = 0 ;
   this.AV19ExecucaoFisicaData = gx.date.nullDate() ;
   this.AV20ExecucaoFisicaMeta = 0 ;
   this.AV21ExecucaoFisicaEtapa = 0 ;
   this.A1680ConvenioEmpresaId = "" ;
   this.A1681ConvenioId = 0 ;
   this.A2152ExecucaoFisicaData = gx.date.nullDate() ;
   this.A2153ExecucaoFisicaMeta = 0 ;
   this.A2154ExecucaoFisicaEtapa = 0 ;
   this.A2161ExecucaoFisicaUsuarioAlt = "" ;
   this.A2162ExecucaoFisicaDataHoraAlt = gx.date.nullDate() ;
   this.A2082ConvenioDescricao = "" ;
   this.A2155ExecucaoFisicaDescricao = "" ;
   this.A2156ExecucaoFisicaUnidadeMedida = "" ;
   this.A2157ExecucaoFisicaQtdeProgPeriodo = "" ;
   this.A2158ExecucaoFisicaQtdeExePeriodo = "" ;
   this.A2159ExecucaoFisicaQtdeProgAtePer = "" ;
   this.A2160ExecucaoFisicaQtdeExeAtePer = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e12412_client": ["'FECHAR'", true] ,"e13412_client": ["AFTER TRN", true] ,"e1441225_client": ["ENTER", true] ,"e1541225_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV17ConvenioId',fld:'vCONVENIOID'},{av:'AV19ExecucaoFisicaData',fld:'vEXECUCAOFISICADATA'},{av:'AV20ExecucaoFisicaMeta',fld:'vEXECUCAOFISICAMETA'},{av:'AV21ExecucaoFisicaEtapa',fld:'vEXECUCAOFISICAETAPA'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV22AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV22AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV19ExecucaoFisicaData", "vEXECUCAOFISICADATA", 0, "date");
   this.setVCMap("AV20ExecucaoFisicaMeta", "vEXECUCAOFISICAMETA", 0, "int");
   this.setVCMap("AV21ExecucaoFisicaEtapa", "vEXECUCAOFISICAETAPA", 0, "int");
   this.setVCMap("AV17ConvenioId", "vCONVENIOID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A1680ConvenioEmpresaId", "CONVENIOEMPRESAID", 0, "char");
   this.setVCMap("AV18SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV30Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV29Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 225 ]= ["O2160ExecucaoFisicaQtdeExeAtePer","O2159ExecucaoFisicaQtdeProgAtePer","O2158ExecucaoFisicaQtdeExePeriodo","O2157ExecucaoFisicaQtdeProgPeriodo","O2156ExecucaoFisicaUnidadeMedida","O2155ExecucaoFisicaDescricao","O2154ExecucaoFisicaEtapa","O2153ExecucaoFisicaMeta"] ;
});
gx.setParentObj(new texecucaofisica());
