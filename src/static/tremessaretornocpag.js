/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 3:43:56.62
*/
gx.evt.autoSkip = false;
gx.define('tremessaretornocpag', false, function () {
   this.ServerClass =  "tremessaretornocpag" ;
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
      this.AV18RemessaRetornoCPagId=gx.fn.getIntegerValue("vREMESSARETORNOCPAGID",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A5462RemessaRetornoCPagEmpresaId=gx.fn.getControlValue("REMESSARETORNOCPAGEMPRESAID") ;
      this.AV20RemRetCPagarBancoEmpId=gx.fn.getControlValue("vREMRETCPAGARBANCOEMPID") ;
      this.A5449RemRetCPagarBancoEmpId=gx.fn.getControlValue("REMRETCPAGARBANCOEMPID") ;
      this.A5452RemessaRetornoCPagDirRem=gx.fn.getControlValue("REMESSARETORNOCPAGDIRREM") ;
      this.A5455RemessaRetornoCPagDirRet=gx.fn.getControlValue("REMESSARETORNOCPAGDIRRET") ;
      this.AV19SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV25Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV24Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Remessaretornocpagid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("REMESSARETORNOCPAGID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Remessaretornocpagdescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("REMESSARETORNOCPAGDESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A5447RemessaRetornoCPagDescricao) )
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
   this.Valid_Remessaretornocpagtamanho=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("REMESSARETORNOCPAGTAMANHO");
         this.AnyError  = 0;
         if ( (0==this.A5448RemessaRetornoCPagTamanho) )
         {
            try {
               gxballoon.setError("Informe o Tamanho");
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
   this.Valid_Remretcpagarbancoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("REMRETCPAGARBANCOID");
         this.AnyError  = 0;
         if ( (0==this.A5450RemRetCPagarBancoId) )
         {
            try {
               gxballoon.setError("Informe o Código do Banco");
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
   this.Valid_Remessaretornocpagtipo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("REMESSARETORNOCPAGTIPO");
         this.AnyError  = 0;
         if ( (""==this.A5458RemessaRetornoCPagTipo) )
         {
            try {
               gxballoon.setError("Informe o Tipo de Layout");
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
   this.Valid_Remessaretornocpagprerem=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("REMESSARETORNOCPAGPREREM");
         this.AnyError  = 0;
         if ( (""==this.A5454RemessaRetornoCPagPreRem) && ( this.A5458RemessaRetornoCPagTipo == "1" || this.A5458RemessaRetornoCPagTipo == "3" ) )
         {
            try {
               gxballoon.setError("Informe o Prefixo da Remessa");
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
   this.Valid_Remessaretornocpagextrem=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("REMESSARETORNOCPAGEXTREM");
         this.AnyError  = 0;
         if ( (""==this.A5453RemessaRetornoCPagExtRem) && ( this.A5458RemessaRetornoCPagTipo == "1" || this.A5458RemessaRetornoCPagTipo == "3" ) )
         {
            try {
               gxballoon.setError("Informe a Extensão da Remessa");
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
   this.Valid_Remessaretornocpagpreret=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("REMESSARETORNOCPAGPRERET");
         this.AnyError  = 0;
         if ( (""==this.A5457RemessaRetornoCPagPreRet) && ( this.A5458RemessaRetornoCPagTipo == "2" || this.A5458RemessaRetornoCPagTipo == "3" ) )
         {
            try {
               gxballoon.setError("Informe o Prefixo do Retorno");
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
   this.Valid_Remessaretornocpagextret=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("REMESSARETORNOCPAGEXTRET");
         this.AnyError  = 0;
         if ( (""==this.A5456RemessaRetornoCPagExtRet) && ( this.A5458RemessaRetornoCPagTipo == "2" || this.A5458RemessaRetornoCPagTipo == "3" ) )
         {
            try {
               gxballoon.setError("Informe a Extensão do Retorno");
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
   this.Valid_Remessaretornocpagformatodata=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("REMESSARETORNOCPAGFORMATODATA");
         this.AnyError  = 0;
         if ( (""==this.A5459RemessaRetornoCPagFormatoData) )
         {
            try {
               gxballoon.setError("Informe o Formato da Data");
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
   this.e128q2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e138q2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e148q470_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e158q470_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,23,25,28,30,31,34,36,39,41,44,46,49,51,54,56,59,61,64,67,69,71,80,82,84];
   this.GXLastCtrlId =84;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Remessaretornocpagid,isvalid:null,rgrid:[],fld:"REMESSARETORNOCPAGID",gxz:"Z5463RemessaRetornoCPagId",gxold:"O5463RemessaRetornoCPagId",gxvar:"A5463RemessaRetornoCPagId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5463RemessaRetornoCPagId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5463RemessaRetornoCPagId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("REMESSARETORNOCPAGID",gx.O.A5463RemessaRetornoCPagId,0)},c2v:function(){gx.O.A5463RemessaRetornoCPagId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("REMESSARETORNOCPAGID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Remessaretornocpagdescricao,isvalid:null,rgrid:[],fld:"REMESSARETORNOCPAGDESCRICAO",gxz:"Z5447RemessaRetornoCPagDescricao",gxold:"O5447RemessaRetornoCPagDescricao",gxvar:"A5447RemessaRetornoCPagDescricao",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5447RemessaRetornoCPagDescricao=Value},v2z:function(Value){gx.O.Z5447RemessaRetornoCPagDescricao=Value},v2c:function(){gx.fn.setControlValue("REMESSARETORNOCPAGDESCRICAO",gx.O.A5447RemessaRetornoCPagDescricao,0)},c2v:function(){gx.O.A5447RemessaRetornoCPagDescricao=this.val()},val:function(){return gx.fn.getControlValue("REMESSARETORNOCPAGDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Remessaretornocpagtamanho,isvalid:null,rgrid:[],fld:"REMESSARETORNOCPAGTAMANHO",gxz:"Z5448RemessaRetornoCPagTamanho",gxold:"O5448RemessaRetornoCPagTamanho",gxvar:"A5448RemessaRetornoCPagTamanho",ucs:[],op:[25],ip:[25],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5448RemessaRetornoCPagTamanho=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5448RemessaRetornoCPagTamanho=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("REMESSARETORNOCPAGTAMANHO",gx.O.A5448RemessaRetornoCPagTamanho,0)},c2v:function(){gx.O.A5448RemessaRetornoCPagTamanho=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("REMESSARETORNOCPAGTAMANHO",'.')},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Remretcpagarbancoid,isvalid:null,rgrid:[],fld:"REMRETCPAGARBANCOID",gxz:"Z5450RemRetCPagarBancoId",gxold:"O5450RemRetCPagarBancoId",gxvar:"A5450RemRetCPagarBancoId",ucs:[],op:[30],ip:[30],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5450RemRetCPagarBancoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5450RemRetCPagarBancoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("REMRETCPAGARBANCOID",gx.O.A5450RemRetCPagarBancoId,0)},c2v:function(){gx.O.A5450RemRetCPagarBancoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("REMRETCPAGARBANCOID",'.')},nac:gx.falseFn};
   GXValidFnc[31]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"REMRETCPAGARBANCODESC",gxz:"Z5451RemRetCPagarBancoDesc",gxold:"O5451RemRetCPagarBancoDesc",gxvar:"A5451RemRetCPagarBancoDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5451RemRetCPagarBancoDesc=Value},v2z:function(Value){gx.O.Z5451RemRetCPagarBancoDesc=Value},v2c:function(){gx.fn.setControlValue("REMRETCPAGARBANCODESC",gx.O.A5451RemRetCPagarBancoDesc,0)},c2v:function(){gx.O.A5451RemRetCPagarBancoDesc=this.val()},val:function(){return gx.fn.getControlValue("REMRETCPAGARBANCODESC")},nac:gx.falseFn};
   GXValidFnc[34]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Remessaretornocpagtipo,isvalid:null,rgrid:[],fld:"REMESSARETORNOCPAGTIPO",gxz:"Z5458RemessaRetornoCPagTipo",gxold:"O5458RemessaRetornoCPagTipo",gxvar:"A5458RemessaRetornoCPagTipo",ucs:[],op:[36],ip:[36],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A5458RemessaRetornoCPagTipo=Value},v2z:function(Value){gx.O.Z5458RemessaRetornoCPagTipo=Value},v2c:function(){gx.fn.setComboBoxValue("REMESSARETORNOCPAGTIPO",gx.O.A5458RemessaRetornoCPagTipo)},c2v:function(){gx.O.A5458RemessaRetornoCPagTipo=this.val()},val:function(){return gx.fn.getControlValue("REMESSARETORNOCPAGTIPO")},nac:gx.falseFn};
   GXValidFnc[39]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"svchar",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Remessaretornocpagprerem,isvalid:null,rgrid:[],fld:"REMESSARETORNOCPAGPREREM",gxz:"Z5454RemessaRetornoCPagPreRem",gxold:"O5454RemessaRetornoCPagPreRem",gxvar:"A5454RemessaRetornoCPagPreRem",ucs:[],op:[36,41],ip:[36,41],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5454RemessaRetornoCPagPreRem=Value},v2z:function(Value){gx.O.Z5454RemessaRetornoCPagPreRem=Value},v2c:function(){gx.fn.setControlValue("REMESSARETORNOCPAGPREREM",gx.O.A5454RemessaRetornoCPagPreRem,0)},c2v:function(){gx.O.A5454RemessaRetornoCPagPreRem=this.val()},val:function(){return gx.fn.getControlValue("REMESSARETORNOCPAGPREREM")},nac:gx.falseFn};
   GXValidFnc[44]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[46]={lvl:0,type:"char",len:5,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Remessaretornocpagextrem,isvalid:null,rgrid:[],fld:"REMESSARETORNOCPAGEXTREM",gxz:"Z5453RemessaRetornoCPagExtRem",gxold:"O5453RemessaRetornoCPagExtRem",gxvar:"A5453RemessaRetornoCPagExtRem",ucs:[],op:[36,46],ip:[36,46],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5453RemessaRetornoCPagExtRem=Value},v2z:function(Value){gx.O.Z5453RemessaRetornoCPagExtRem=Value},v2c:function(){gx.fn.setControlValue("REMESSARETORNOCPAGEXTREM",gx.O.A5453RemessaRetornoCPagExtRem,0)},c2v:function(){gx.O.A5453RemessaRetornoCPagExtRem=this.val()},val:function(){return gx.fn.getControlValue("REMESSARETORNOCPAGEXTREM")},nac:gx.falseFn};
   GXValidFnc[49]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[51]={lvl:0,type:"svchar",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Remessaretornocpagpreret,isvalid:null,rgrid:[],fld:"REMESSARETORNOCPAGPRERET",gxz:"Z5457RemessaRetornoCPagPreRet",gxold:"O5457RemessaRetornoCPagPreRet",gxvar:"A5457RemessaRetornoCPagPreRet",ucs:[],op:[36,51],ip:[36,51],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5457RemessaRetornoCPagPreRet=Value},v2z:function(Value){gx.O.Z5457RemessaRetornoCPagPreRet=Value},v2c:function(){gx.fn.setControlValue("REMESSARETORNOCPAGPRERET",gx.O.A5457RemessaRetornoCPagPreRet,0)},c2v:function(){gx.O.A5457RemessaRetornoCPagPreRet=this.val()},val:function(){return gx.fn.getControlValue("REMESSARETORNOCPAGPRERET")},nac:gx.falseFn};
   GXValidFnc[54]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[56]={lvl:0,type:"svchar",len:5,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Remessaretornocpagextret,isvalid:null,rgrid:[],fld:"REMESSARETORNOCPAGEXTRET",gxz:"Z5456RemessaRetornoCPagExtRet",gxold:"O5456RemessaRetornoCPagExtRet",gxvar:"A5456RemessaRetornoCPagExtRet",ucs:[],op:[36,56],ip:[36,56],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5456RemessaRetornoCPagExtRet=Value},v2z:function(Value){gx.O.Z5456RemessaRetornoCPagExtRet=Value},v2c:function(){gx.fn.setControlValue("REMESSARETORNOCPAGEXTRET",gx.O.A5456RemessaRetornoCPagExtRet,0)},c2v:function(){gx.O.A5456RemessaRetornoCPagExtRet=this.val()},val:function(){return gx.fn.getControlValue("REMESSARETORNOCPAGEXTRET")},nac:gx.falseFn};
   GXValidFnc[59]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[61]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Remessaretornocpagformatodata,isvalid:null,rgrid:[],fld:"REMESSARETORNOCPAGFORMATODATA",gxz:"Z5459RemessaRetornoCPagFormatoData",gxold:"O5459RemessaRetornoCPagFormatoData",gxvar:"A5459RemessaRetornoCPagFormatoData",ucs:[],op:[61],ip:[61],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A5459RemessaRetornoCPagFormatoData=Value},v2z:function(Value){gx.O.Z5459RemessaRetornoCPagFormatoData=Value},v2c:function(){gx.fn.setComboBoxValue("REMESSARETORNOCPAGFORMATODATA",gx.O.A5459RemessaRetornoCPagFormatoData)},c2v:function(){gx.O.A5459RemessaRetornoCPagFormatoData=this.val()},val:function(){return gx.fn.getControlValue("REMESSARETORNOCPAGFORMATODATA")},nac:gx.falseFn};
   GXValidFnc[64]={fld:"TABLE21",grid:0};
   GXValidFnc[67]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[69]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"REMESSARETORNOCPAGUSUARIOALT",gxz:"Z5460RemessaRetornoCPagUsuarioAlt",gxold:"O5460RemessaRetornoCPagUsuarioAlt",gxvar:"A5460RemessaRetornoCPagUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5460RemessaRetornoCPagUsuarioAlt=Value},v2z:function(Value){gx.O.Z5460RemessaRetornoCPagUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("REMESSARETORNOCPAGUSUARIOALT",gx.O.A5460RemessaRetornoCPagUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5460RemessaRetornoCPagUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("REMESSARETORNOCPAGUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 69 , function() {
   });
   GXValidFnc[71]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"REMESSARETORNOCPAGDATAHORAALT",gxz:"Z5461RemessaRetornoCPagDataHoraAlt",gxold:"O5461RemessaRetornoCPagDataHoraAlt",gxvar:"A5461RemessaRetornoCPagDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5461RemessaRetornoCPagDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z5461RemessaRetornoCPagDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("REMESSARETORNOCPAGDATAHORAALT",gx.O.A5461RemessaRetornoCPagDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5461RemessaRetornoCPagDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("REMESSARETORNOCPAGDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 71 , function() {
   });
   GXValidFnc[80]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[82]={fld:"BTNHELP",grid:0};
   GXValidFnc[84]={fld:"PROMPT_5450",grid:470};
   this.A5463RemessaRetornoCPagId = 0 ;
   this.Z5463RemessaRetornoCPagId = 0 ;
   this.O5463RemessaRetornoCPagId = 0 ;
   this.A5447RemessaRetornoCPagDescricao = "" ;
   this.Z5447RemessaRetornoCPagDescricao = "" ;
   this.O5447RemessaRetornoCPagDescricao = "" ;
   this.A5448RemessaRetornoCPagTamanho = 0 ;
   this.Z5448RemessaRetornoCPagTamanho = 0 ;
   this.O5448RemessaRetornoCPagTamanho = 0 ;
   this.A5450RemRetCPagarBancoId = 0 ;
   this.Z5450RemRetCPagarBancoId = 0 ;
   this.O5450RemRetCPagarBancoId = 0 ;
   this.A5451RemRetCPagarBancoDesc = "" ;
   this.Z5451RemRetCPagarBancoDesc = "" ;
   this.O5451RemRetCPagarBancoDesc = "" ;
   this.A5458RemessaRetornoCPagTipo = "" ;
   this.Z5458RemessaRetornoCPagTipo = "" ;
   this.O5458RemessaRetornoCPagTipo = "" ;
   this.A5454RemessaRetornoCPagPreRem = "" ;
   this.Z5454RemessaRetornoCPagPreRem = "" ;
   this.O5454RemessaRetornoCPagPreRem = "" ;
   this.A5453RemessaRetornoCPagExtRem = "" ;
   this.Z5453RemessaRetornoCPagExtRem = "" ;
   this.O5453RemessaRetornoCPagExtRem = "" ;
   this.A5457RemessaRetornoCPagPreRet = "" ;
   this.Z5457RemessaRetornoCPagPreRet = "" ;
   this.O5457RemessaRetornoCPagPreRet = "" ;
   this.A5456RemessaRetornoCPagExtRet = "" ;
   this.Z5456RemessaRetornoCPagExtRet = "" ;
   this.O5456RemessaRetornoCPagExtRet = "" ;
   this.A5459RemessaRetornoCPagFormatoData = "" ;
   this.Z5459RemessaRetornoCPagFormatoData = "" ;
   this.O5459RemessaRetornoCPagFormatoData = "" ;
   this.A5460RemessaRetornoCPagUsuarioAlt = "" ;
   this.Z5460RemessaRetornoCPagUsuarioAlt = "" ;
   this.O5460RemessaRetornoCPagUsuarioAlt = "" ;
   this.A5461RemessaRetornoCPagDataHoraAlt = gx.date.nullDate() ;
   this.Z5461RemessaRetornoCPagDataHoraAlt = gx.date.nullDate() ;
   this.O5461RemessaRetornoCPagDataHoraAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV24Pgmname = "" ;
   this.AV25Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV20RemRetCPagarBancoEmpId = "" ;
   this.AV19SnAlterou = "" ;
   this.AV18RemessaRetornoCPagId = 0 ;
   this.A5462RemessaRetornoCPagEmpresaId = "" ;
   this.A5463RemessaRetornoCPagId = 0 ;
   this.A5449RemRetCPagarBancoEmpId = "" ;
   this.A5460RemessaRetornoCPagUsuarioAlt = "" ;
   this.A5461RemessaRetornoCPagDataHoraAlt = gx.date.nullDate() ;
   this.A5447RemessaRetornoCPagDescricao = "" ;
   this.A5448RemessaRetornoCPagTamanho = 0 ;
   this.A5450RemRetCPagarBancoId = 0 ;
   this.A5451RemRetCPagarBancoDesc = "" ;
   this.A5452RemessaRetornoCPagDirRem = "" ;
   this.A5453RemessaRetornoCPagExtRem = "" ;
   this.A5454RemessaRetornoCPagPreRem = "" ;
   this.A5455RemessaRetornoCPagDirRet = "" ;
   this.A5456RemessaRetornoCPagExtRet = "" ;
   this.A5457RemessaRetornoCPagPreRet = "" ;
   this.A5458RemessaRetornoCPagTipo = "" ;
   this.A5459RemessaRetornoCPagFormatoData = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e128q2_client": ["'FECHAR'", true] ,"e138q2_client": ["AFTER TRN", true] ,"e148q470_client": ["ENTER", true] ,"e158q470_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV18RemessaRetornoCPagId',fld:'vREMESSARETORNOCPAGID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPT_5450", [30]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV18RemessaRetornoCPagId", "vREMESSARETORNOCPAGID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A5462RemessaRetornoCPagEmpresaId", "REMESSARETORNOCPAGEMPRESAID", 0, "char");
   this.setVCMap("AV20RemRetCPagarBancoEmpId", "vREMRETCPAGARBANCOEMPID", 0, "char");
   this.setVCMap("A5449RemRetCPagarBancoEmpId", "REMRETCPAGARBANCOEMPID", 0, "char");
   this.setVCMap("A5452RemessaRetornoCPagDirRem", "REMESSARETORNOCPAGDIRREM", 0, "svchar");
   this.setVCMap("A5455RemessaRetornoCPagDirRet", "REMESSARETORNOCPAGDIRRET", 0, "svchar");
   this.setVCMap("AV19SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV25Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV24Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 470 ]= ["O5459RemessaRetornoCPagFormatoData","O5456RemessaRetornoCPagExtRet","O5457RemessaRetornoCPagPreRet","O5455RemessaRetornoCPagDirRet","O5453RemessaRetornoCPagExtRem","O5454RemessaRetornoCPagPreRem","O5452RemessaRetornoCPagDirRem","O5458RemessaRetornoCPagTipo","O5450RemRetCPagarBancoId","O5448RemessaRetornoCPagTamanho","O5447RemessaRetornoCPagDescricao"] ;
});
gx.setParentObj(new tremessaretornocpag());
