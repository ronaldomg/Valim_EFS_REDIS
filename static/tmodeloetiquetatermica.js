/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:17:28.51
*/
gx.evt.autoSkip = false;
gx.define('tmodeloetiquetatermica', false, function () {
   this.ServerClass =  "tmodeloetiquetatermica" ;
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
      this.AV18EtiquetaTermicaModelo=gx.fn.getIntegerValue("vETIQUETATERMICAMODELO",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A5902EtiquetaTermicaEmpresaId=gx.fn.getControlValue("ETIQUETATERMICAEMPRESAID") ;
      this.AV20CodificacaoEstEmpresaId=gx.fn.getControlValue("vCODIFICACAOESTEMPRESAID") ;
      this.A2936CodificacaoEstEmpresaId=gx.fn.getControlValue("CODIFICACAOESTEMPRESAID") ;
      this.AV21ClassificacaoEstEmpresaId=gx.fn.getControlValue("vCLASSIFICACAOESTEMPRESAID") ;
      this.A2929ClassificacaoEstEmpresaId=gx.fn.getControlValue("CLASSIFICACAOESTEMPRESAID") ;
      this.AV19SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.Gx_BScreen=gx.fn.getIntegerValue("vGXBSCREEN",'.') ;
      this.AV25MsgErro1=gx.fn.getControlValue("vMSGERRO1") ;
      this.AV28Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV27Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Etiquetatermicamodelo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ETIQUETATERMICAMODELO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Etiquetatermicadescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ETIQUETATERMICADESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A5904EtiquetaTermicaDescricao) )
         {
            try {
               gxballoon.setError("Informe a Descrição");
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
   this.Valid_Etiquetatermicadensidade=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ETIQUETATERMICADENSIDADE");
         this.AnyError  = 0;
         if ( (0==this.A5919EtiquetaTermicaDensidade) )
         {
            try {
               gxballoon.setError("Informe a Densidade");
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
   this.Valid_Etiquetatermicalinguagem=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ETIQUETATERMICALINGUAGEM");
         this.AnyError  = 0;
         if ( (""==this.A5906EtiquetaTermicaLinguagem) )
         {
            try {
               gxballoon.setError("Informe a Linguagem");
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
   this.Valid_Codificacaoestid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Codificacaoestid",["gx.O.AV20CodificacaoEstEmpresaId", "gx.O.A2937CodificacaoEstId", "gx.O.A2936CodificacaoEstEmpresaId"],["A2936CodificacaoEstEmpresaId"]);
      return true;
   }
   this.Valid_Classificacaoestid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Classificacaoestid",["gx.O.AV21ClassificacaoEstEmpresaId", "gx.O.A2930ClassificacaoEstId", "gx.O.A2929ClassificacaoEstEmpresaId"],["A2929ClassificacaoEstEmpresaId"]);
      return true;
   }
   this.Valid_Etiquetatermicanocolunas=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ETIQUETATERMICANOCOLUNAS");
         this.AnyError  = 0;
         if ( (0==this.A6366EtiquetaTermicaNoColunas) )
         {
            try {
               gxballoon.setError("Informe a Quantidade de Colunas");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( this.A6366EtiquetaTermicaNoColunas > 6 )
         {
            try {
               gxballoon.setError("O número máximo de colunas do Modelo é de 6 colunas");
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
   this.Valid_Etiquetatermicaempresa=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ETIQUETATERMICAEMPRESA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Etiquetatermicapercentdesc=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ETIQUETATERMICAPERCENTDESC");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Etiquetatermicatxjuros=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ETIQUETATERMICATXJUROS");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Etiquetatermicaletra0=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ETIQUETATERMICALETRA0");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Etiquetatermicaletra5=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ETIQUETATERMICALETRA5");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Etiquetatermicaletra1=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ETIQUETATERMICALETRA1");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Etiquetatermicaletra6=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ETIQUETATERMICALETRA6");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Etiquetatermicaletra2=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ETIQUETATERMICALETRA2");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Etiquetatermicaletra7=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ETIQUETATERMICALETRA7");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Etiquetatermicaletra3=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ETIQUETATERMICALETRA3");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Etiquetatermicaletra8=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ETIQUETATERMICALETRA8");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Etiquetatermicaletra4=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ETIQUETATERMICALETRA4");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Etiquetatermicaletra9=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ETIQUETATERMICALETRA9");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12952_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13952_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e1495490_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1595490_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,17,21,23,26,28,31,33,36,38,41,43,46,48,51,53,56,58,61,63,65,68,71,74,76,78,80,83,85,87,89,92,94,96,98,101,103,105,107,110,112,114,116,119,122,124,126,135,136,138];
   this.GXLastCtrlId =138;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE4",grid:0};
   GXValidFnc[12]={fld:"TABLE5",grid:0};
   GXValidFnc[15]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Etiquetatermicamodelo,isvalid:null,rgrid:[],fld:"ETIQUETATERMICAMODELO",gxz:"Z5903EtiquetaTermicaModelo",gxold:"O5903EtiquetaTermicaModelo",gxvar:"A5903EtiquetaTermicaModelo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5903EtiquetaTermicaModelo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5903EtiquetaTermicaModelo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ETIQUETATERMICAMODELO",gx.O.A5903EtiquetaTermicaModelo,0)},c2v:function(){gx.O.A5903EtiquetaTermicaModelo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ETIQUETATERMICAMODELO",'.')},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Etiquetatermicadescricao,isvalid:null,rgrid:[],fld:"ETIQUETATERMICADESCRICAO",gxz:"Z5904EtiquetaTermicaDescricao",gxold:"O5904EtiquetaTermicaDescricao",gxvar:"A5904EtiquetaTermicaDescricao",ucs:[],op:[23],ip:[23],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5904EtiquetaTermicaDescricao=Value},v2z:function(Value){gx.O.Z5904EtiquetaTermicaDescricao=Value},v2c:function(){gx.fn.setControlValue("ETIQUETATERMICADESCRICAO",gx.O.A5904EtiquetaTermicaDescricao,0)},c2v:function(){gx.O.A5904EtiquetaTermicaDescricao=this.val()},val:function(){return gx.fn.getControlValue("ETIQUETATERMICADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Etiquetatermicadensidade,isvalid:null,rgrid:[],fld:"ETIQUETATERMICADENSIDADE",gxz:"Z5919EtiquetaTermicaDensidade",gxold:"O5919EtiquetaTermicaDensidade",gxvar:"A5919EtiquetaTermicaDensidade",ucs:[],op:[28],ip:[28],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5919EtiquetaTermicaDensidade=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5919EtiquetaTermicaDensidade=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ETIQUETATERMICADENSIDADE",gx.O.A5919EtiquetaTermicaDensidade,0)},c2v:function(){gx.O.A5919EtiquetaTermicaDensidade=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ETIQUETATERMICADENSIDADE",'.')},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Etiquetatermicalinguagem,isvalid:null,rgrid:[],fld:"ETIQUETATERMICALINGUAGEM",gxz:"Z5906EtiquetaTermicaLinguagem",gxold:"O5906EtiquetaTermicaLinguagem",gxvar:"A5906EtiquetaTermicaLinguagem",ucs:[],op:[33],ip:[33],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A5906EtiquetaTermicaLinguagem=Value},v2z:function(Value){gx.O.Z5906EtiquetaTermicaLinguagem=Value},v2c:function(){gx.fn.setComboBoxValue("ETIQUETATERMICALINGUAGEM",gx.O.A5906EtiquetaTermicaLinguagem)},c2v:function(){gx.O.A5906EtiquetaTermicaLinguagem=this.val()},val:function(){return gx.fn.getControlValue("ETIQUETATERMICALINGUAGEM")},nac:gx.falseFn};
   GXValidFnc[36]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[38]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Codificacaoestid,isvalid:null,rgrid:[],fld:"CODIFICACAOESTID",gxz:"Z2937CodificacaoEstId",gxold:"O2937CodificacaoEstId",gxvar:"A2937CodificacaoEstId",ucs:[],op:[],ip:[38],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.A2937CodificacaoEstId=Value},v2z:function(Value){gx.O.Z2937CodificacaoEstId=Value},v2c:function(){gx.fn.setComboBoxValue("CODIFICACAOESTID",gx.O.A2937CodificacaoEstId)},c2v:function(){gx.O.A2937CodificacaoEstId=this.val()},val:function(){return gx.fn.getControlValue("CODIFICACAOESTID")},nac:gx.falseFn};
   GXValidFnc[41]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[43]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classificacaoestid,isvalid:null,rgrid:[],fld:"CLASSIFICACAOESTID",gxz:"Z2930ClassificacaoEstId",gxold:"O2930ClassificacaoEstId",gxvar:"A2930ClassificacaoEstId",ucs:[],op:[],ip:[43],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.A2930ClassificacaoEstId=Value},v2z:function(Value){gx.O.Z2930ClassificacaoEstId=Value},v2c:function(){gx.fn.setComboBoxValue("CLASSIFICACAOESTID",gx.O.A2930ClassificacaoEstId)},c2v:function(){gx.O.A2930ClassificacaoEstId=this.val()},val:function(){return gx.fn.getControlValue("CLASSIFICACAOESTID")},nac:gx.falseFn};
   GXValidFnc[46]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[48]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Etiquetatermicanocolunas,isvalid:null,rgrid:[],fld:"ETIQUETATERMICANOCOLUNAS",gxz:"Z6366EtiquetaTermicaNoColunas",gxold:"O6366EtiquetaTermicaNoColunas",gxvar:"A6366EtiquetaTermicaNoColunas",ucs:[],op:[48],ip:[48],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6366EtiquetaTermicaNoColunas=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6366EtiquetaTermicaNoColunas=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ETIQUETATERMICANOCOLUNAS",gx.O.A6366EtiquetaTermicaNoColunas,0)},c2v:function(){gx.O.A6366EtiquetaTermicaNoColunas=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ETIQUETATERMICANOCOLUNAS",'.')},nac:gx.falseFn};
   GXValidFnc[51]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[53]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Etiquetatermicaempresa,isvalid:null,rgrid:[],fld:"ETIQUETATERMICAEMPRESA",gxz:"Z5920EtiquetaTermicaEmpresa",gxold:"O5920EtiquetaTermicaEmpresa",gxvar:"A5920EtiquetaTermicaEmpresa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5920EtiquetaTermicaEmpresa=Value},v2z:function(Value){gx.O.Z5920EtiquetaTermicaEmpresa=Value},v2c:function(){gx.fn.setControlValue("ETIQUETATERMICAEMPRESA",gx.O.A5920EtiquetaTermicaEmpresa,0)},c2v:function(){gx.O.A5920EtiquetaTermicaEmpresa=this.val()},val:function(){return gx.fn.getControlValue("ETIQUETATERMICAEMPRESA")},nac:gx.falseFn};
   GXValidFnc[56]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[58]={lvl:0,type:"decimal",len:5,dec:2,sign:false,pic:"Z9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Etiquetatermicapercentdesc,isvalid:null,rgrid:[],fld:"ETIQUETATERMICAPERCENTDESC",gxz:"Z5921EtiquetaTermicaPercentDesc",gxold:"O5921EtiquetaTermicaPercentDesc",gxvar:"A5921EtiquetaTermicaPercentDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5921EtiquetaTermicaPercentDesc=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5921EtiquetaTermicaPercentDesc=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ETIQUETATERMICAPERCENTDESC",gx.O.A5921EtiquetaTermicaPercentDesc,2,',')},c2v:function(){gx.O.A5921EtiquetaTermicaPercentDesc=this.val()},val:function(){return gx.fn.getDecimalValue("ETIQUETATERMICAPERCENTDESC",'.',',')},nac:gx.falseFn};
   GXValidFnc[61]={fld:"TXTTXJUROS", format:0,grid:0};
   GXValidFnc[63]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Etiquetatermicatxjuros,isvalid:null,rgrid:[],fld:"ETIQUETATERMICATXJUROS",gxz:"Z6418EtiquetaTermicaTxJuros",gxold:"O6418EtiquetaTermicaTxJuros",gxvar:"A6418EtiquetaTermicaTxJuros",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6418EtiquetaTermicaTxJuros=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z6418EtiquetaTermicaTxJuros=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ETIQUETATERMICATXJUROS",gx.O.A6418EtiquetaTermicaTxJuros,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6418EtiquetaTermicaTxJuros=this.val()},val:function(){return gx.fn.getDecimalValue("ETIQUETATERMICATXJUROS",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 63 , function() {
   });
   GXValidFnc[65]={fld:"TABLE3",grid:0};
   GXValidFnc[68]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ETIQUETATERMICASITUACAO",gxz:"Z9866EtiquetaTermicaSituacao",gxold:"O9866EtiquetaTermicaSituacao",gxvar:"A9866EtiquetaTermicaSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A9866EtiquetaTermicaSituacao=Value},v2z:function(Value){gx.O.Z9866EtiquetaTermicaSituacao=Value},v2c:function(){gx.fn.setCheckBoxValue("ETIQUETATERMICASITUACAO",gx.O.A9866EtiquetaTermicaSituacao,"A")},c2v:function(){gx.O.A9866EtiquetaTermicaSituacao=this.val()},val:function(){return gx.fn.getControlValue("ETIQUETATERMICASITUACAO")},nac:gx.falseFn,values:['A','I']};
   GXValidFnc[71]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[74]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[76]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Etiquetatermicaletra0,isvalid:null,rgrid:[],fld:"ETIQUETATERMICALETRA0",gxz:"Z6408EtiquetaTermicaLetra0",gxold:"O6408EtiquetaTermicaLetra0",gxvar:"A6408EtiquetaTermicaLetra0",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A6408EtiquetaTermicaLetra0=Value},v2z:function(Value){gx.O.Z6408EtiquetaTermicaLetra0=Value},v2c:function(){gx.fn.setComboBoxValue("ETIQUETATERMICALETRA0",gx.O.A6408EtiquetaTermicaLetra0)},c2v:function(){gx.O.A6408EtiquetaTermicaLetra0=this.val()},val:function(){return gx.fn.getControlValue("ETIQUETATERMICALETRA0")},nac:gx.falseFn};
   GXValidFnc[78]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[80]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Etiquetatermicaletra5,isvalid:null,rgrid:[],fld:"ETIQUETATERMICALETRA5",gxz:"Z6413EtiquetaTermicaLetra5",gxold:"O6413EtiquetaTermicaLetra5",gxvar:"A6413EtiquetaTermicaLetra5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A6413EtiquetaTermicaLetra5=Value},v2z:function(Value){gx.O.Z6413EtiquetaTermicaLetra5=Value},v2c:function(){gx.fn.setComboBoxValue("ETIQUETATERMICALETRA5",gx.O.A6413EtiquetaTermicaLetra5)},c2v:function(){gx.O.A6413EtiquetaTermicaLetra5=this.val()},val:function(){return gx.fn.getControlValue("ETIQUETATERMICALETRA5")},nac:gx.falseFn};
   GXValidFnc[83]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[85]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Etiquetatermicaletra1,isvalid:null,rgrid:[],fld:"ETIQUETATERMICALETRA1",gxz:"Z6409EtiquetaTermicaLetra1",gxold:"O6409EtiquetaTermicaLetra1",gxvar:"A6409EtiquetaTermicaLetra1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A6409EtiquetaTermicaLetra1=Value},v2z:function(Value){gx.O.Z6409EtiquetaTermicaLetra1=Value},v2c:function(){gx.fn.setComboBoxValue("ETIQUETATERMICALETRA1",gx.O.A6409EtiquetaTermicaLetra1)},c2v:function(){gx.O.A6409EtiquetaTermicaLetra1=this.val()},val:function(){return gx.fn.getControlValue("ETIQUETATERMICALETRA1")},nac:gx.falseFn};
   GXValidFnc[87]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[89]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Etiquetatermicaletra6,isvalid:null,rgrid:[],fld:"ETIQUETATERMICALETRA6",gxz:"Z6414EtiquetaTermicaLetra6",gxold:"O6414EtiquetaTermicaLetra6",gxvar:"A6414EtiquetaTermicaLetra6",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A6414EtiquetaTermicaLetra6=Value},v2z:function(Value){gx.O.Z6414EtiquetaTermicaLetra6=Value},v2c:function(){gx.fn.setComboBoxValue("ETIQUETATERMICALETRA6",gx.O.A6414EtiquetaTermicaLetra6)},c2v:function(){gx.O.A6414EtiquetaTermicaLetra6=this.val()},val:function(){return gx.fn.getControlValue("ETIQUETATERMICALETRA6")},nac:gx.falseFn};
   GXValidFnc[92]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[94]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Etiquetatermicaletra2,isvalid:null,rgrid:[],fld:"ETIQUETATERMICALETRA2",gxz:"Z6410EtiquetaTermicaLetra2",gxold:"O6410EtiquetaTermicaLetra2",gxvar:"A6410EtiquetaTermicaLetra2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A6410EtiquetaTermicaLetra2=Value},v2z:function(Value){gx.O.Z6410EtiquetaTermicaLetra2=Value},v2c:function(){gx.fn.setComboBoxValue("ETIQUETATERMICALETRA2",gx.O.A6410EtiquetaTermicaLetra2)},c2v:function(){gx.O.A6410EtiquetaTermicaLetra2=this.val()},val:function(){return gx.fn.getControlValue("ETIQUETATERMICALETRA2")},nac:gx.falseFn};
   GXValidFnc[96]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[98]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Etiquetatermicaletra7,isvalid:null,rgrid:[],fld:"ETIQUETATERMICALETRA7",gxz:"Z6415EtiquetaTermicaLetra7",gxold:"O6415EtiquetaTermicaLetra7",gxvar:"A6415EtiquetaTermicaLetra7",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A6415EtiquetaTermicaLetra7=Value},v2z:function(Value){gx.O.Z6415EtiquetaTermicaLetra7=Value},v2c:function(){gx.fn.setComboBoxValue("ETIQUETATERMICALETRA7",gx.O.A6415EtiquetaTermicaLetra7)},c2v:function(){gx.O.A6415EtiquetaTermicaLetra7=this.val()},val:function(){return gx.fn.getControlValue("ETIQUETATERMICALETRA7")},nac:gx.falseFn};
   GXValidFnc[101]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[103]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Etiquetatermicaletra3,isvalid:null,rgrid:[],fld:"ETIQUETATERMICALETRA3",gxz:"Z6411EtiquetaTermicaLetra3",gxold:"O6411EtiquetaTermicaLetra3",gxvar:"A6411EtiquetaTermicaLetra3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A6411EtiquetaTermicaLetra3=Value},v2z:function(Value){gx.O.Z6411EtiquetaTermicaLetra3=Value},v2c:function(){gx.fn.setComboBoxValue("ETIQUETATERMICALETRA3",gx.O.A6411EtiquetaTermicaLetra3)},c2v:function(){gx.O.A6411EtiquetaTermicaLetra3=this.val()},val:function(){return gx.fn.getControlValue("ETIQUETATERMICALETRA3")},nac:gx.falseFn};
   GXValidFnc[105]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[107]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Etiquetatermicaletra8,isvalid:null,rgrid:[],fld:"ETIQUETATERMICALETRA8",gxz:"Z6416EtiquetaTermicaLetra8",gxold:"O6416EtiquetaTermicaLetra8",gxvar:"A6416EtiquetaTermicaLetra8",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A6416EtiquetaTermicaLetra8=Value},v2z:function(Value){gx.O.Z6416EtiquetaTermicaLetra8=Value},v2c:function(){gx.fn.setComboBoxValue("ETIQUETATERMICALETRA8",gx.O.A6416EtiquetaTermicaLetra8)},c2v:function(){gx.O.A6416EtiquetaTermicaLetra8=this.val()},val:function(){return gx.fn.getControlValue("ETIQUETATERMICALETRA8")},nac:gx.falseFn};
   GXValidFnc[110]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[112]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Etiquetatermicaletra4,isvalid:null,rgrid:[],fld:"ETIQUETATERMICALETRA4",gxz:"Z6412EtiquetaTermicaLetra4",gxold:"O6412EtiquetaTermicaLetra4",gxvar:"A6412EtiquetaTermicaLetra4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A6412EtiquetaTermicaLetra4=Value},v2z:function(Value){gx.O.Z6412EtiquetaTermicaLetra4=Value},v2c:function(){gx.fn.setComboBoxValue("ETIQUETATERMICALETRA4",gx.O.A6412EtiquetaTermicaLetra4)},c2v:function(){gx.O.A6412EtiquetaTermicaLetra4=this.val()},val:function(){return gx.fn.getControlValue("ETIQUETATERMICALETRA4")},nac:gx.falseFn};
   GXValidFnc[114]={fld:"TEXTBLOCK22", format:0,grid:0};
   GXValidFnc[116]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Etiquetatermicaletra9,isvalid:null,rgrid:[],fld:"ETIQUETATERMICALETRA9",gxz:"Z6417EtiquetaTermicaLetra9",gxold:"O6417EtiquetaTermicaLetra9",gxvar:"A6417EtiquetaTermicaLetra9",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A6417EtiquetaTermicaLetra9=Value},v2z:function(Value){gx.O.Z6417EtiquetaTermicaLetra9=Value},v2c:function(){gx.fn.setComboBoxValue("ETIQUETATERMICALETRA9",gx.O.A6417EtiquetaTermicaLetra9)},c2v:function(){gx.O.A6417EtiquetaTermicaLetra9=this.val()},val:function(){return gx.fn.getControlValue("ETIQUETATERMICALETRA9")},nac:gx.falseFn};
   GXValidFnc[119]={fld:"TABLE6",grid:0};
   GXValidFnc[122]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[124]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ETIQUETATERMICAUSUARIOALT",gxz:"Z5923EtiquetaTermicaUsuarioAlt",gxold:"O5923EtiquetaTermicaUsuarioAlt",gxvar:"A5923EtiquetaTermicaUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5923EtiquetaTermicaUsuarioAlt=Value},v2z:function(Value){gx.O.Z5923EtiquetaTermicaUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("ETIQUETATERMICAUSUARIOALT",gx.O.A5923EtiquetaTermicaUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5923EtiquetaTermicaUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("ETIQUETATERMICAUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 124 , function() {
   });
   GXValidFnc[126]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ETIQUETATERMICADATAHORAALT",gxz:"Z5922EtiquetaTermicaDataHoraAlt",gxold:"O5922EtiquetaTermicaDataHoraAlt",gxvar:"A5922EtiquetaTermicaDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5922EtiquetaTermicaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z5922EtiquetaTermicaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("ETIQUETATERMICADATAHORAALT",gx.O.A5922EtiquetaTermicaDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5922EtiquetaTermicaDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("ETIQUETATERMICADATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 126 , function() {
   });
   GXValidFnc[135]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[136]={fld:"JS", format:2,grid:0};
   GXValidFnc[138]={fld:"BTNHELP",grid:0};
   this.A5903EtiquetaTermicaModelo = 0 ;
   this.Z5903EtiquetaTermicaModelo = 0 ;
   this.O5903EtiquetaTermicaModelo = 0 ;
   this.A5904EtiquetaTermicaDescricao = "" ;
   this.Z5904EtiquetaTermicaDescricao = "" ;
   this.O5904EtiquetaTermicaDescricao = "" ;
   this.A5919EtiquetaTermicaDensidade = 0 ;
   this.Z5919EtiquetaTermicaDensidade = 0 ;
   this.O5919EtiquetaTermicaDensidade = 0 ;
   this.A5906EtiquetaTermicaLinguagem = "" ;
   this.Z5906EtiquetaTermicaLinguagem = "" ;
   this.O5906EtiquetaTermicaLinguagem = "" ;
   this.A2937CodificacaoEstId = "" ;
   this.Z2937CodificacaoEstId = "" ;
   this.O2937CodificacaoEstId = "" ;
   this.A2930ClassificacaoEstId = "" ;
   this.Z2930ClassificacaoEstId = "" ;
   this.O2930ClassificacaoEstId = "" ;
   this.A6366EtiquetaTermicaNoColunas = 0 ;
   this.Z6366EtiquetaTermicaNoColunas = 0 ;
   this.O6366EtiquetaTermicaNoColunas = 0 ;
   this.A5920EtiquetaTermicaEmpresa = "" ;
   this.Z5920EtiquetaTermicaEmpresa = "" ;
   this.O5920EtiquetaTermicaEmpresa = "" ;
   this.A5921EtiquetaTermicaPercentDesc = 0 ;
   this.Z5921EtiquetaTermicaPercentDesc = 0 ;
   this.O5921EtiquetaTermicaPercentDesc = 0 ;
   this.A6418EtiquetaTermicaTxJuros = 0 ;
   this.Z6418EtiquetaTermicaTxJuros = 0 ;
   this.O6418EtiquetaTermicaTxJuros = 0 ;
   this.A9866EtiquetaTermicaSituacao = "" ;
   this.Z9866EtiquetaTermicaSituacao = "" ;
   this.O9866EtiquetaTermicaSituacao = "" ;
   this.A6408EtiquetaTermicaLetra0 = "" ;
   this.Z6408EtiquetaTermicaLetra0 = "" ;
   this.O6408EtiquetaTermicaLetra0 = "" ;
   this.A6413EtiquetaTermicaLetra5 = "" ;
   this.Z6413EtiquetaTermicaLetra5 = "" ;
   this.O6413EtiquetaTermicaLetra5 = "" ;
   this.A6409EtiquetaTermicaLetra1 = "" ;
   this.Z6409EtiquetaTermicaLetra1 = "" ;
   this.O6409EtiquetaTermicaLetra1 = "" ;
   this.A6414EtiquetaTermicaLetra6 = "" ;
   this.Z6414EtiquetaTermicaLetra6 = "" ;
   this.O6414EtiquetaTermicaLetra6 = "" ;
   this.A6410EtiquetaTermicaLetra2 = "" ;
   this.Z6410EtiquetaTermicaLetra2 = "" ;
   this.O6410EtiquetaTermicaLetra2 = "" ;
   this.A6415EtiquetaTermicaLetra7 = "" ;
   this.Z6415EtiquetaTermicaLetra7 = "" ;
   this.O6415EtiquetaTermicaLetra7 = "" ;
   this.A6411EtiquetaTermicaLetra3 = "" ;
   this.Z6411EtiquetaTermicaLetra3 = "" ;
   this.O6411EtiquetaTermicaLetra3 = "" ;
   this.A6416EtiquetaTermicaLetra8 = "" ;
   this.Z6416EtiquetaTermicaLetra8 = "" ;
   this.O6416EtiquetaTermicaLetra8 = "" ;
   this.A6412EtiquetaTermicaLetra4 = "" ;
   this.Z6412EtiquetaTermicaLetra4 = "" ;
   this.O6412EtiquetaTermicaLetra4 = "" ;
   this.A6417EtiquetaTermicaLetra9 = "" ;
   this.Z6417EtiquetaTermicaLetra9 = "" ;
   this.O6417EtiquetaTermicaLetra9 = "" ;
   this.A5923EtiquetaTermicaUsuarioAlt = "" ;
   this.Z5923EtiquetaTermicaUsuarioAlt = "" ;
   this.O5923EtiquetaTermicaUsuarioAlt = "" ;
   this.A5922EtiquetaTermicaDataHoraAlt = gx.date.nullDate() ;
   this.Z5922EtiquetaTermicaDataHoraAlt = gx.date.nullDate() ;
   this.O5922EtiquetaTermicaDataHoraAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV27Pgmname = "" ;
   this.AV28Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV20CodificacaoEstEmpresaId = "" ;
   this.AV21ClassificacaoEstEmpresaId = "" ;
   this.AV19SnAlterou = "" ;
   this.AV25MsgErro1 = "" ;
   this.AV18EtiquetaTermicaModelo = 0 ;
   this.A5902EtiquetaTermicaEmpresaId = "" ;
   this.A5903EtiquetaTermicaModelo = 0 ;
   this.A2936CodificacaoEstEmpresaId = "" ;
   this.A2929ClassificacaoEstEmpresaId = "" ;
   this.A5923EtiquetaTermicaUsuarioAlt = "" ;
   this.A5922EtiquetaTermicaDataHoraAlt = gx.date.nullDate() ;
   this.Gx_BScreen = 0 ;
   this.A5904EtiquetaTermicaDescricao = "" ;
   this.A5919EtiquetaTermicaDensidade = 0 ;
   this.A5906EtiquetaTermicaLinguagem = "" ;
   this.A2937CodificacaoEstId = "" ;
   this.A2930ClassificacaoEstId = "" ;
   this.A5920EtiquetaTermicaEmpresa = "" ;
   this.A5921EtiquetaTermicaPercentDesc = 0 ;
   this.A6418EtiquetaTermicaTxJuros = 0 ;
   this.A6408EtiquetaTermicaLetra0 = "" ;
   this.A6409EtiquetaTermicaLetra1 = "" ;
   this.A6410EtiquetaTermicaLetra2 = "" ;
   this.A6411EtiquetaTermicaLetra3 = "" ;
   this.A6412EtiquetaTermicaLetra4 = "" ;
   this.A6413EtiquetaTermicaLetra5 = "" ;
   this.A6414EtiquetaTermicaLetra6 = "" ;
   this.A6415EtiquetaTermicaLetra7 = "" ;
   this.A6416EtiquetaTermicaLetra8 = "" ;
   this.A6417EtiquetaTermicaLetra9 = "" ;
   this.A6366EtiquetaTermicaNoColunas = 0 ;
   this.A9866EtiquetaTermicaSituacao = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e12952_client": ["'FECHAR'", true] ,"e13952_client": ["AFTER TRN", true] ,"e1495490_client": ["ENTER", true] ,"e1595490_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV18EtiquetaTermicaModelo',fld:'vETIQUETATERMICAMODELO'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV18EtiquetaTermicaModelo", "vETIQUETATERMICAMODELO", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A5902EtiquetaTermicaEmpresaId", "ETIQUETATERMICAEMPRESAID", 0, "char");
   this.setVCMap("AV20CodificacaoEstEmpresaId", "vCODIFICACAOESTEMPRESAID", 0, "char");
   this.setVCMap("A2936CodificacaoEstEmpresaId", "CODIFICACAOESTEMPRESAID", 0, "char");
   this.setVCMap("AV21ClassificacaoEstEmpresaId", "vCLASSIFICACAOESTEMPRESAID", 0, "char");
   this.setVCMap("A2929ClassificacaoEstEmpresaId", "CLASSIFICACAOESTEMPRESAID", 0, "char");
   this.setVCMap("AV19SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("Gx_BScreen", "vGXBSCREEN", 0, "int");
   this.setVCMap("AV25MsgErro1", "vMSGERRO1", 0, "svchar");
   this.setVCMap("AV28Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV27Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 490 ]= ["O6417EtiquetaTermicaLetra9","O6416EtiquetaTermicaLetra8","O6415EtiquetaTermicaLetra7","O6414EtiquetaTermicaLetra6","O6413EtiquetaTermicaLetra5","O6412EtiquetaTermicaLetra4","O6411EtiquetaTermicaLetra3","O6410EtiquetaTermicaLetra2","O6409EtiquetaTermicaLetra1","O6408EtiquetaTermicaLetra0","O6418EtiquetaTermicaTxJuros","O5921EtiquetaTermicaPercentDesc","O5920EtiquetaTermicaEmpresa","O6366EtiquetaTermicaNoColunas","O2937CodificacaoEstId","O2930ClassificacaoEstId","O5906EtiquetaTermicaLinguagem","O5919EtiquetaTermicaDensidade","O5904EtiquetaTermicaDescricao"] ;
});
gx.setParentObj(new tmodeloetiquetatermica());
