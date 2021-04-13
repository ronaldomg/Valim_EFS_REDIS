/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 3:14:49.51
*/
gx.evt.autoSkip = false;
gx.define('tremessaretorno', false, function () {
   this.ServerClass =  "tremessaretorno" ;
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
      this.AV19RemessaRetornoId=gx.fn.getIntegerValue("vREMESSARETORNOID",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A2784RemessaRetornoEmpresaId=gx.fn.getControlValue("REMESSARETORNOEMPRESAID") ;
      this.AV18BancoEmpresaId=gx.fn.getControlValue("vBANCOEMPRESAID") ;
      this.A2783RemessaRetornoBancoEmpId=gx.fn.getControlValue("REMESSARETORNOBANCOEMPID") ;
      this.A2788RemessaRetornoDiretorioRem=gx.fn.getControlValue("REMESSARETORNODIRETORIOREM") ;
      this.A2790RemessaRetornoDiretorioRet=gx.fn.getControlValue("REMESSARETORNODIRETORIORET") ;
      this.AV20SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.Gx_BScreen=gx.fn.getIntegerValue("vGXBSCREEN",'.') ;
      this.AV27Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV26Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Remessaretornoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("REMESSARETORNOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Remessaretornodescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("REMESSARETORNODESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A2786RemessaRetornoDescricao) )
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
   this.Valid_Remessaretornotamanho=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("REMESSARETORNOTAMANHO");
         this.AnyError  = 0;
         if ( (0==this.A2787RemessaRetornoTamanho) )
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
   this.Valid_Remessaretornobancoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("REMESSARETORNOBANCOID");
         this.AnyError  = 0;
         if ( (0==this.A2781RemessaRetornoBancoId) )
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
   this.Valid_Remessaretornotipo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("REMESSARETORNOTIPO");
         this.AnyError  = 0;
         if ( (""==this.A2792RemessaRetornoTipo) )
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
   this.Valid_Remessaretornoprefixorem=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("REMESSARETORNOPREFIXOREM");
         this.AnyError  = 0;
         if ( (""==this.A2796RemessaRetornoPrefixoRem) && this.A2792RemessaRetornoTipo == "1" )
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
   this.Valid_Remessaretornoextensaorem=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("REMESSARETORNOEXTENSAOREM");
         this.AnyError  = 0;
         if ( (""==this.A2789RemessaRetornoExtensaoRem) && this.A2792RemessaRetornoTipo == "1" )
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
   this.Valid_Remessaretornoprefixoret=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("REMESSARETORNOPREFIXORET");
         this.AnyError  = 0;
         if ( (""==this.A2791RemessaRetornoPrefixoRet) && this.A2792RemessaRetornoTipo == "2" )
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
   this.Valid_Remessaretornoextensaoret=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("REMESSARETORNOEXTENSAORET");
         this.AnyError  = 0;
         if ( (""==this.A2797RemessaRetornoExtensaoRet) && this.A2792RemessaRetornoTipo == "2" )
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
   this.Valid_Remessaretornoformatodata=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("REMESSARETORNOFORMATODATA");
         this.AnyError  = 0;
         if ( (""==this.A2793RemessaRetornoFormatoData) )
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
   this.Valid_Remessaretornoocorrenciaremess=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("REMESSARETORNOOCORRENCIAREMESS");
         this.AnyError  = 0;
         if ( this.A2792RemessaRetornoTipo == "1" && (0==this.A10384RemessaRetornoOcorrenciaRemess) )
         {
            try {
               gxballoon.setError("Informe a ocorrência de remessa");
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
   this.Valid_Remessaretornoocorrenciavenc=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("REMESSARETORNOOCORRENCIAVENC");
         this.AnyError  = 0;
         if ( (0==this.A10382RemessaRetornoOcorrenciaVenc) && this.A2792RemessaRetornoTipo == "1" )
         {
            try {
               gxballoon.setError("Informe a ocorrência de alteração de vencimento");
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
   this.Valid_Remessaretornoocorrenciavalor=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("REMESSARETORNOOCORRENCIAVALOR");
         this.AnyError  = 0;
         if ( (0==this.A10383RemessaRetornoOcorrenciaValor) && this.A2792RemessaRetornoTipo == "1" )
         {
            try {
               gxballoon.setError("Informe a ocorrência de alteração de valor");
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
   this.e12522_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13522_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e1452291_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1552291_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,23,25,28,30,31,34,36,42,44,47,49,55,57,60,62,65,67,71,75,81,84,86,89,91,94,96,99,102,104,106,115,117,119];
   this.GXLastCtrlId =119;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Remessaretornoid,isvalid:null,rgrid:[],fld:"REMESSARETORNOID",gxz:"Z2785RemessaRetornoId",gxold:"O2785RemessaRetornoId",gxvar:"A2785RemessaRetornoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2785RemessaRetornoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2785RemessaRetornoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("REMESSARETORNOID",gx.O.A2785RemessaRetornoId,0)},c2v:function(){gx.O.A2785RemessaRetornoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("REMESSARETORNOID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Remessaretornodescricao,isvalid:null,rgrid:[],fld:"REMESSARETORNODESCRICAO",gxz:"Z2786RemessaRetornoDescricao",gxold:"O2786RemessaRetornoDescricao",gxvar:"A2786RemessaRetornoDescricao",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2786RemessaRetornoDescricao=Value},v2z:function(Value){gx.O.Z2786RemessaRetornoDescricao=Value},v2c:function(){gx.fn.setControlValue("REMESSARETORNODESCRICAO",gx.O.A2786RemessaRetornoDescricao,0)},c2v:function(){gx.O.A2786RemessaRetornoDescricao=this.val()},val:function(){return gx.fn.getControlValue("REMESSARETORNODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Remessaretornotamanho,isvalid:null,rgrid:[],fld:"REMESSARETORNOTAMANHO",gxz:"Z2787RemessaRetornoTamanho",gxold:"O2787RemessaRetornoTamanho",gxvar:"A2787RemessaRetornoTamanho",ucs:[],op:[25],ip:[25],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2787RemessaRetornoTamanho=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2787RemessaRetornoTamanho=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("REMESSARETORNOTAMANHO",gx.O.A2787RemessaRetornoTamanho,0)},c2v:function(){gx.O.A2787RemessaRetornoTamanho=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("REMESSARETORNOTAMANHO",'.')},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Remessaretornobancoid,isvalid:null,rgrid:[],fld:"REMESSARETORNOBANCOID",gxz:"Z2781RemessaRetornoBancoId",gxold:"O2781RemessaRetornoBancoId",gxvar:"A2781RemessaRetornoBancoId",ucs:[],op:[30],ip:[30],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2781RemessaRetornoBancoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2781RemessaRetornoBancoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("REMESSARETORNOBANCOID",gx.O.A2781RemessaRetornoBancoId,0)},c2v:function(){gx.O.A2781RemessaRetornoBancoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("REMESSARETORNOBANCOID",'.')},nac:gx.falseFn};
   GXValidFnc[31]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"REMESSARETORNOBANCODESC",gxz:"Z2782RemessaRetornoBancoDesc",gxold:"O2782RemessaRetornoBancoDesc",gxvar:"A2782RemessaRetornoBancoDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2782RemessaRetornoBancoDesc=Value},v2z:function(Value){gx.O.Z2782RemessaRetornoBancoDesc=Value},v2c:function(){gx.fn.setControlValue("REMESSARETORNOBANCODESC",gx.O.A2782RemessaRetornoBancoDesc,0)},c2v:function(){gx.O.A2782RemessaRetornoBancoDesc=this.val()},val:function(){return gx.fn.getControlValue("REMESSARETORNOBANCODESC")},nac:gx.falseFn};
   GXValidFnc[34]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Remessaretornotipo,isvalid:null,rgrid:[],fld:"REMESSARETORNOTIPO",gxz:"Z2792RemessaRetornoTipo",gxold:"O2792RemessaRetornoTipo",gxvar:"A2792RemessaRetornoTipo",ucs:[],op:[36],ip:[36],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A2792RemessaRetornoTipo=Value},v2z:function(Value){gx.O.Z2792RemessaRetornoTipo=Value},v2c:function(){gx.fn.setComboBoxValue("REMESSARETORNOTIPO",gx.O.A2792RemessaRetornoTipo)},c2v:function(){gx.O.A2792RemessaRetornoTipo=this.val()},val:function(){return gx.fn.getControlValue("REMESSARETORNOTIPO")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"svchar",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Remessaretornoprefixorem,isvalid:null,rgrid:[],fld:"REMESSARETORNOPREFIXOREM",gxz:"Z2796RemessaRetornoPrefixoRem",gxold:"O2796RemessaRetornoPrefixoRem",gxvar:"A2796RemessaRetornoPrefixoRem",ucs:[],op:[36,44],ip:[36,44],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2796RemessaRetornoPrefixoRem=Value},v2z:function(Value){gx.O.Z2796RemessaRetornoPrefixoRem=Value},v2c:function(){gx.fn.setControlValue("REMESSARETORNOPREFIXOREM",gx.O.A2796RemessaRetornoPrefixoRem,0)},c2v:function(){gx.O.A2796RemessaRetornoPrefixoRem=this.val()},val:function(){return gx.fn.getControlValue("REMESSARETORNOPREFIXOREM")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"svchar",len:5,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Remessaretornoextensaorem,isvalid:null,rgrid:[],fld:"REMESSARETORNOEXTENSAOREM",gxz:"Z2789RemessaRetornoExtensaoRem",gxold:"O2789RemessaRetornoExtensaoRem",gxvar:"A2789RemessaRetornoExtensaoRem",ucs:[],op:[36,49],ip:[36,49],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2789RemessaRetornoExtensaoRem=Value},v2z:function(Value){gx.O.Z2789RemessaRetornoExtensaoRem=Value},v2c:function(){gx.fn.setControlValue("REMESSARETORNOEXTENSAOREM",gx.O.A2789RemessaRetornoExtensaoRem,0)},c2v:function(){gx.O.A2789RemessaRetornoExtensaoRem=this.val()},val:function(){return gx.fn.getControlValue("REMESSARETORNOEXTENSAOREM")},nac:gx.falseFn};
   GXValidFnc[55]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[57]={lvl:0,type:"svchar",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Remessaretornoprefixoret,isvalid:null,rgrid:[],fld:"REMESSARETORNOPREFIXORET",gxz:"Z2791RemessaRetornoPrefixoRet",gxold:"O2791RemessaRetornoPrefixoRet",gxvar:"A2791RemessaRetornoPrefixoRet",ucs:[],op:[36,57],ip:[36,57],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2791RemessaRetornoPrefixoRet=Value},v2z:function(Value){gx.O.Z2791RemessaRetornoPrefixoRet=Value},v2c:function(){gx.fn.setControlValue("REMESSARETORNOPREFIXORET",gx.O.A2791RemessaRetornoPrefixoRet,0)},c2v:function(){gx.O.A2791RemessaRetornoPrefixoRet=this.val()},val:function(){return gx.fn.getControlValue("REMESSARETORNOPREFIXORET")},nac:gx.falseFn};
   GXValidFnc[60]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[62]={lvl:0,type:"svchar",len:5,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Remessaretornoextensaoret,isvalid:null,rgrid:[],fld:"REMESSARETORNOEXTENSAORET",gxz:"Z2797RemessaRetornoExtensaoRet",gxold:"O2797RemessaRetornoExtensaoRet",gxvar:"A2797RemessaRetornoExtensaoRet",ucs:[],op:[36,62],ip:[36,62],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2797RemessaRetornoExtensaoRet=Value},v2z:function(Value){gx.O.Z2797RemessaRetornoExtensaoRet=Value},v2c:function(){gx.fn.setControlValue("REMESSARETORNOEXTENSAORET",gx.O.A2797RemessaRetornoExtensaoRet,0)},c2v:function(){gx.O.A2797RemessaRetornoExtensaoRet=this.val()},val:function(){return gx.fn.getControlValue("REMESSARETORNOEXTENSAORET")},nac:gx.falseFn};
   GXValidFnc[65]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[67]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Remessaretornoformatodata,isvalid:null,rgrid:[],fld:"REMESSARETORNOFORMATODATA",gxz:"Z2793RemessaRetornoFormatoData",gxold:"O2793RemessaRetornoFormatoData",gxvar:"A2793RemessaRetornoFormatoData",ucs:[],op:[67],ip:[67],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A2793RemessaRetornoFormatoData=Value},v2z:function(Value){gx.O.Z2793RemessaRetornoFormatoData=Value},v2c:function(){gx.fn.setComboBoxValue("REMESSARETORNOFORMATODATA",gx.O.A2793RemessaRetornoFormatoData)},c2v:function(){gx.O.A2793RemessaRetornoFormatoData=this.val()},val:function(){return gx.fn.getControlValue("REMESSARETORNOFORMATODATA")},nac:gx.falseFn};
   GXValidFnc[71]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"REMESSARETORNOSOMARTARIFA",gxz:"Z3130RemessaRetornoSomarTarifa",gxold:"O3130RemessaRetornoSomarTarifa",gxvar:"A3130RemessaRetornoSomarTarifa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A3130RemessaRetornoSomarTarifa=Value},v2z:function(Value){gx.O.Z3130RemessaRetornoSomarTarifa=Value},v2c:function(){gx.fn.setCheckBoxValue("REMESSARETORNOSOMARTARIFA",gx.O.A3130RemessaRetornoSomarTarifa,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3130RemessaRetornoSomarTarifa=this.val()},val:function(){return gx.fn.getControlValue("REMESSARETORNOSOMARTARIFA")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 71 , function() {
   });
   GXValidFnc[75]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"REMESSARETORNOCARACTERFIMLINHA",gxz:"Z10867RemessaRetornoCaracterFimLinha",gxold:"O10867RemessaRetornoCaracterFimLinha",gxvar:"A10867RemessaRetornoCaracterFimLinha",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A10867RemessaRetornoCaracterFimLinha=Value},v2z:function(Value){gx.O.Z10867RemessaRetornoCaracterFimLinha=Value},v2c:function(){gx.fn.setCheckBoxValue("REMESSARETORNOCARACTERFIMLINHA",gx.O.A10867RemessaRetornoCaracterFimLinha,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10867RemessaRetornoCaracterFimLinha=this.val()},val:function(){return gx.fn.getControlValue("REMESSARETORNOCARACTERFIMLINHA")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 75 , function() {
   });
   GXValidFnc[81]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[84]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[86]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Remessaretornoocorrenciaremess,isvalid:null,rgrid:[],fld:"REMESSARETORNOOCORRENCIAREMESS",gxz:"Z10384RemessaRetornoOcorrenciaRemess",gxold:"O10384RemessaRetornoOcorrenciaRemess",gxvar:"A10384RemessaRetornoOcorrenciaRemess",ucs:[],op:[86,36],ip:[86,36],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10384RemessaRetornoOcorrenciaRemess=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10384RemessaRetornoOcorrenciaRemess=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("REMESSARETORNOOCORRENCIAREMESS",gx.O.A10384RemessaRetornoOcorrenciaRemess,0)},c2v:function(){gx.O.A10384RemessaRetornoOcorrenciaRemess=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("REMESSARETORNOOCORRENCIAREMESS",'.')},nac:gx.falseFn};
   GXValidFnc[89]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[91]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Remessaretornoocorrenciavenc,isvalid:null,rgrid:[],fld:"REMESSARETORNOOCORRENCIAVENC",gxz:"Z10382RemessaRetornoOcorrenciaVenc",gxold:"O10382RemessaRetornoOcorrenciaVenc",gxvar:"A10382RemessaRetornoOcorrenciaVenc",ucs:[],op:[36,91],ip:[36,91],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10382RemessaRetornoOcorrenciaVenc=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10382RemessaRetornoOcorrenciaVenc=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("REMESSARETORNOOCORRENCIAVENC",gx.O.A10382RemessaRetornoOcorrenciaVenc,0)},c2v:function(){gx.O.A10382RemessaRetornoOcorrenciaVenc=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("REMESSARETORNOOCORRENCIAVENC",'.')},nac:gx.falseFn};
   GXValidFnc[94]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[96]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Remessaretornoocorrenciavalor,isvalid:null,rgrid:[],fld:"REMESSARETORNOOCORRENCIAVALOR",gxz:"Z10383RemessaRetornoOcorrenciaValor",gxold:"O10383RemessaRetornoOcorrenciaValor",gxvar:"A10383RemessaRetornoOcorrenciaValor",ucs:[],op:[36,96],ip:[36,96],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10383RemessaRetornoOcorrenciaValor=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10383RemessaRetornoOcorrenciaValor=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("REMESSARETORNOOCORRENCIAVALOR",gx.O.A10383RemessaRetornoOcorrenciaValor,0)},c2v:function(){gx.O.A10383RemessaRetornoOcorrenciaValor=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("REMESSARETORNOOCORRENCIAVALOR",'.')},nac:gx.falseFn};
   GXValidFnc[99]={fld:"TABLE4",grid:0};
   GXValidFnc[102]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[104]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"REMESSARETORNOUSUARIOALT",gxz:"Z2794RemessaRetornoUsuarioAlt",gxold:"O2794RemessaRetornoUsuarioAlt",gxvar:"A2794RemessaRetornoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2794RemessaRetornoUsuarioAlt=Value},v2z:function(Value){gx.O.Z2794RemessaRetornoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("REMESSARETORNOUSUARIOALT",gx.O.A2794RemessaRetornoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2794RemessaRetornoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("REMESSARETORNOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 104 , function() {
   });
   GXValidFnc[106]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"REMESSARETORNODATAHORAALT",gxz:"Z2795RemessaRetornoDataHoraAlt",gxold:"O2795RemessaRetornoDataHoraAlt",gxvar:"A2795RemessaRetornoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2795RemessaRetornoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2795RemessaRetornoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("REMESSARETORNODATAHORAALT",gx.O.A2795RemessaRetornoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2795RemessaRetornoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("REMESSARETORNODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 106 , function() {
   });
   GXValidFnc[115]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[117]={fld:"BTNHELP",grid:0};
   GXValidFnc[119]={fld:"PROMPT_2781",grid:291};
   this.A2785RemessaRetornoId = 0 ;
   this.Z2785RemessaRetornoId = 0 ;
   this.O2785RemessaRetornoId = 0 ;
   this.A2786RemessaRetornoDescricao = "" ;
   this.Z2786RemessaRetornoDescricao = "" ;
   this.O2786RemessaRetornoDescricao = "" ;
   this.A2787RemessaRetornoTamanho = 0 ;
   this.Z2787RemessaRetornoTamanho = 0 ;
   this.O2787RemessaRetornoTamanho = 0 ;
   this.A2781RemessaRetornoBancoId = 0 ;
   this.Z2781RemessaRetornoBancoId = 0 ;
   this.O2781RemessaRetornoBancoId = 0 ;
   this.A2782RemessaRetornoBancoDesc = "" ;
   this.Z2782RemessaRetornoBancoDesc = "" ;
   this.O2782RemessaRetornoBancoDesc = "" ;
   this.A2792RemessaRetornoTipo = "" ;
   this.Z2792RemessaRetornoTipo = "" ;
   this.O2792RemessaRetornoTipo = "" ;
   this.A2796RemessaRetornoPrefixoRem = "" ;
   this.Z2796RemessaRetornoPrefixoRem = "" ;
   this.O2796RemessaRetornoPrefixoRem = "" ;
   this.A2789RemessaRetornoExtensaoRem = "" ;
   this.Z2789RemessaRetornoExtensaoRem = "" ;
   this.O2789RemessaRetornoExtensaoRem = "" ;
   this.A2791RemessaRetornoPrefixoRet = "" ;
   this.Z2791RemessaRetornoPrefixoRet = "" ;
   this.O2791RemessaRetornoPrefixoRet = "" ;
   this.A2797RemessaRetornoExtensaoRet = "" ;
   this.Z2797RemessaRetornoExtensaoRet = "" ;
   this.O2797RemessaRetornoExtensaoRet = "" ;
   this.A2793RemessaRetornoFormatoData = "" ;
   this.Z2793RemessaRetornoFormatoData = "" ;
   this.O2793RemessaRetornoFormatoData = "" ;
   this.A3130RemessaRetornoSomarTarifa = "" ;
   this.Z3130RemessaRetornoSomarTarifa = "" ;
   this.O3130RemessaRetornoSomarTarifa = "" ;
   this.A10867RemessaRetornoCaracterFimLinha = "" ;
   this.Z10867RemessaRetornoCaracterFimLinha = "" ;
   this.O10867RemessaRetornoCaracterFimLinha = "" ;
   this.A10384RemessaRetornoOcorrenciaRemess = 0 ;
   this.Z10384RemessaRetornoOcorrenciaRemess = 0 ;
   this.O10384RemessaRetornoOcorrenciaRemess = 0 ;
   this.A10382RemessaRetornoOcorrenciaVenc = 0 ;
   this.Z10382RemessaRetornoOcorrenciaVenc = 0 ;
   this.O10382RemessaRetornoOcorrenciaVenc = 0 ;
   this.A10383RemessaRetornoOcorrenciaValor = 0 ;
   this.Z10383RemessaRetornoOcorrenciaValor = 0 ;
   this.O10383RemessaRetornoOcorrenciaValor = 0 ;
   this.A2794RemessaRetornoUsuarioAlt = "" ;
   this.Z2794RemessaRetornoUsuarioAlt = "" ;
   this.O2794RemessaRetornoUsuarioAlt = "" ;
   this.A2795RemessaRetornoDataHoraAlt = gx.date.nullDate() ;
   this.Z2795RemessaRetornoDataHoraAlt = gx.date.nullDate() ;
   this.O2795RemessaRetornoDataHoraAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV26Pgmname = "" ;
   this.AV27Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV18BancoEmpresaId = "" ;
   this.AV20SnAlterou = "" ;
   this.AV19RemessaRetornoId = 0 ;
   this.A2784RemessaRetornoEmpresaId = "" ;
   this.A2785RemessaRetornoId = 0 ;
   this.A2783RemessaRetornoBancoEmpId = "" ;
   this.A2794RemessaRetornoUsuarioAlt = "" ;
   this.A2795RemessaRetornoDataHoraAlt = gx.date.nullDate() ;
   this.Gx_BScreen = 0 ;
   this.A2786RemessaRetornoDescricao = "" ;
   this.A2787RemessaRetornoTamanho = 0 ;
   this.A2781RemessaRetornoBancoId = 0 ;
   this.A2782RemessaRetornoBancoDesc = "" ;
   this.A2788RemessaRetornoDiretorioRem = "" ;
   this.A2789RemessaRetornoExtensaoRem = "" ;
   this.A2796RemessaRetornoPrefixoRem = "" ;
   this.A2790RemessaRetornoDiretorioRet = "" ;
   this.A2797RemessaRetornoExtensaoRet = "" ;
   this.A2791RemessaRetornoPrefixoRet = "" ;
   this.A2792RemessaRetornoTipo = "" ;
   this.A2793RemessaRetornoFormatoData = "" ;
   this.A3130RemessaRetornoSomarTarifa = "" ;
   this.A10384RemessaRetornoOcorrenciaRemess = 0 ;
   this.A10382RemessaRetornoOcorrenciaVenc = 0 ;
   this.A10383RemessaRetornoOcorrenciaValor = 0 ;
   this.A10867RemessaRetornoCaracterFimLinha = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e12522_client": ["'FECHAR'", true] ,"e13522_client": ["AFTER TRN", true] ,"e1452291_client": ["ENTER", true] ,"e1552291_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV19RemessaRetornoId',fld:'vREMESSARETORNOID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPT_2781", [30]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV19RemessaRetornoId", "vREMESSARETORNOID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A2784RemessaRetornoEmpresaId", "REMESSARETORNOEMPRESAID", 0, "char");
   this.setVCMap("AV18BancoEmpresaId", "vBANCOEMPRESAID", 0, "char");
   this.setVCMap("A2783RemessaRetornoBancoEmpId", "REMESSARETORNOBANCOEMPID", 0, "char");
   this.setVCMap("A2788RemessaRetornoDiretorioRem", "REMESSARETORNODIRETORIOREM", 0, "svchar");
   this.setVCMap("A2790RemessaRetornoDiretorioRet", "REMESSARETORNODIRETORIORET", 0, "svchar");
   this.setVCMap("AV20SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("Gx_BScreen", "vGXBSCREEN", 0, "int");
   this.setVCMap("AV27Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV26Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 291 ]= ["O2793RemessaRetornoFormatoData","O2792RemessaRetornoTipo","O2797RemessaRetornoExtensaoRet","O2791RemessaRetornoPrefixoRet","O2790RemessaRetornoDiretorioRet","O2789RemessaRetornoExtensaoRem","O2796RemessaRetornoPrefixoRem","O2788RemessaRetornoDiretorioRem","O2781RemessaRetornoBancoId","O2787RemessaRetornoTamanho","O2786RemessaRetornoDescricao"] ;
});
gx.setParentObj(new tremessaretorno());
