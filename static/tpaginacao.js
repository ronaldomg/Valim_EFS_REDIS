/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 2:51:31.92
*/
gx.evt.autoSkip = false;
gx.define('tpaginacao', false, function () {
   this.ServerClass =  "tpaginacao" ;
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
      this.AV20EmpresaPaginacaoEmpresaId=gx.fn.getControlValue("vEMPRESAPAGINACAOEMPRESAID") ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV22Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV21Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Empresapaginacaoempresaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Empresapaginacaoempresaid",["gx.O.A82EmpresaPaginacaoEmpresaId", "gx.O.A83EmpresaPaginacaoNome"],["A83EmpresaPaginacaoNome"]);
      return true;
   }
   this.Valid_Paginacaonumerodiario=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PAGINACAONUMERODIARIO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Paginacaoquantidadediario=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PAGINACAOQUANTIDADEDIARIO");
         this.AnyError  = 0;
         if ( (0==this.A84PaginacaoQuantidadeDiario) )
         {
            try {
               gxballoon.setError("Informe a quantidade de páginas do Diário");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( this.A85PaginacaoNumeroDiario > this.A84PaginacaoQuantidadeDiario )
         {
            try {
               gxballoon.setError("Página Atual do Diário maior que a Qtde de Páginas");
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
   this.Valid_Paginacaonumerorazao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PAGINACAONUMERORAZAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Paginacaoquantidaderazao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PAGINACAOQUANTIDADERAZAO");
         this.AnyError  = 0;
         if ( (0==this.A86PaginacaoQuantidadeRazao) )
         {
            try {
               gxballoon.setError("Informe a quantidade de páginas da Razão");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( this.A87PaginacaoNumeroRazao > this.A86PaginacaoQuantidadeRazao )
         {
            try {
               gxballoon.setError("Página Atual da Razão maior que a Qtde de Páginas");
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
   this.Valid_Paginacaonumerobalanco=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PAGINACAONUMEROBALANCO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Paginacaoquantidadebalanco=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PAGINACAOQUANTIDADEBALANCO");
         this.AnyError  = 0;
         if ( (0==this.A88PaginacaoQuantidadeBalanco) )
         {
            try {
               gxballoon.setError("Informe a quantidade do balanço Patrimonial");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( this.A89PaginacaoNumeroBalanco > this.A88PaginacaoQuantidadeBalanco )
         {
            try {
               gxballoon.setError("Página Atual do Balanço Patrimonial maior que a Qtde de Páginas");
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
   this.Valid_Paginacaonumeroplanocontas=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PAGINACAONUMEROPLANOCONTAS");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Paginacaoquantidadeplanocontas=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PAGINACAOQUANTIDADEPLANOCONTAS");
         this.AnyError  = 0;
         if ( (0==this.A90PaginacaoQuantidadePlanoContas) )
         {
            try {
               gxballoon.setError("Informe a quantidade do Plano de Contas");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( this.A91PaginacaoNumeroPlanoContas > this.A90PaginacaoQuantidadePlanoContas )
         {
            try {
               gxballoon.setError("Página Atual do Plano de Contas maior que a Qtde de Páginas");
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
   this.Valid_Paginacaonumerobalancete=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PAGINACAONUMEROBALANCETE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Paginacaoquantidadebalancete=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Paginacaoquantidadebalancete",["gx.O.O93PaginacaoNumeroBalancete", "gx.O.O92PaginacaoQuantidadeBalancete", "gx.O.O91PaginacaoNumeroPlanoContas", "gx.O.O90PaginacaoQuantidadePlanoContas", "gx.O.O89PaginacaoNumeroBalanco", "gx.O.O88PaginacaoQuantidadeBalanco", "gx.O.O87PaginacaoNumeroRazao", "gx.O.O86PaginacaoQuantidadeRazao", "gx.O.O85PaginacaoNumeroDiario", "gx.O.O84PaginacaoQuantidadeDiario", "gx.O.AV7UsrCod", "gx.O.A84PaginacaoQuantidadeDiario", "gx.O.A85PaginacaoNumeroDiario", "gx.O.A86PaginacaoQuantidadeRazao", "gx.O.A87PaginacaoNumeroRazao", "gx.O.A88PaginacaoQuantidadeBalanco", "gx.O.A89PaginacaoNumeroBalanco", "gx.O.A90PaginacaoQuantidadePlanoContas", "gx.O.A91PaginacaoNumeroPlanoContas", "gx.O.A92PaginacaoQuantidadeBalancete", "gx.O.A93PaginacaoNumeroBalancete", "gx.O.A791PaginacaoUsuarioId", 'gx.date.urlDateTime(gx.O.A792PaginacaoDataHoraAlt,"DMY4")'],["A791PaginacaoUsuarioId", "A792PaginacaoDataHoraAlt"]);
      return true;
   }
   this.e120x2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e130x2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e140x45_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e150x45_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,24,26,33,35,37,40,42,44,47,49,51,54,56,58,61,63,65,68,71,73,75,84,86];
   this.GXLastCtrlId =86;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Empresapaginacaoempresaid,isvalid:null,rgrid:[],fld:"EMPRESAPAGINACAOEMPRESAID",gxz:"Z82EmpresaPaginacaoEmpresaId",gxold:"O82EmpresaPaginacaoEmpresaId",gxvar:"A82EmpresaPaginacaoEmpresaId",ucs:[],op:[17],ip:[17,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A82EmpresaPaginacaoEmpresaId=Value},v2z:function(Value){gx.O.Z82EmpresaPaginacaoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("EMPRESAPAGINACAOEMPRESAID",gx.O.A82EmpresaPaginacaoEmpresaId,0)},c2v:function(){gx.O.A82EmpresaPaginacaoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("EMPRESAPAGINACAOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"EMPRESAPAGINACAONOME",gxz:"Z83EmpresaPaginacaoNome",gxold:"O83EmpresaPaginacaoNome",gxvar:"A83EmpresaPaginacaoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A83EmpresaPaginacaoNome=Value},v2z:function(Value){gx.O.Z83EmpresaPaginacaoNome=Value},v2c:function(){gx.fn.setControlValue("EMPRESAPAGINACAONOME",gx.O.A83EmpresaPaginacaoNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A83EmpresaPaginacaoNome=this.val()},val:function(){return gx.fn.getControlValue("EMPRESAPAGINACAONOME")},nac:gx.falseFn};
   this.declareDomainHdlr( 17 , function() {
   });
   GXValidFnc[24]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[26]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[33]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Paginacaonumerodiario,isvalid:null,rgrid:[],fld:"PAGINACAONUMERODIARIO",gxz:"Z85PaginacaoNumeroDiario",gxold:"O85PaginacaoNumeroDiario",gxvar:"A85PaginacaoNumeroDiario",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A85PaginacaoNumeroDiario=gx.num.intval(Value)},v2z:function(Value){gx.O.Z85PaginacaoNumeroDiario=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PAGINACAONUMERODIARIO",gx.O.A85PaginacaoNumeroDiario,0)},c2v:function(){gx.O.A85PaginacaoNumeroDiario=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PAGINACAONUMERODIARIO",'.')},nac:gx.falseFn};
   GXValidFnc[37]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Paginacaoquantidadediario,isvalid:null,rgrid:[],fld:"PAGINACAOQUANTIDADEDIARIO",gxz:"Z84PaginacaoQuantidadeDiario",gxold:"O84PaginacaoQuantidadeDiario",gxvar:"A84PaginacaoQuantidadeDiario",ucs:[],op:[35,37],ip:[35,37],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A84PaginacaoQuantidadeDiario=gx.num.intval(Value)},v2z:function(Value){gx.O.Z84PaginacaoQuantidadeDiario=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PAGINACAOQUANTIDADEDIARIO",gx.O.A84PaginacaoQuantidadeDiario,0)},c2v:function(){gx.O.A84PaginacaoQuantidadeDiario=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PAGINACAOQUANTIDADEDIARIO",'.')},nac:gx.falseFn};
   GXValidFnc[40]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Paginacaonumerorazao,isvalid:null,rgrid:[],fld:"PAGINACAONUMERORAZAO",gxz:"Z87PaginacaoNumeroRazao",gxold:"O87PaginacaoNumeroRazao",gxvar:"A87PaginacaoNumeroRazao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A87PaginacaoNumeroRazao=gx.num.intval(Value)},v2z:function(Value){gx.O.Z87PaginacaoNumeroRazao=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PAGINACAONUMERORAZAO",gx.O.A87PaginacaoNumeroRazao,0)},c2v:function(){gx.O.A87PaginacaoNumeroRazao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PAGINACAONUMERORAZAO",'.')},nac:gx.falseFn};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Paginacaoquantidaderazao,isvalid:null,rgrid:[],fld:"PAGINACAOQUANTIDADERAZAO",gxz:"Z86PaginacaoQuantidadeRazao",gxold:"O86PaginacaoQuantidadeRazao",gxvar:"A86PaginacaoQuantidadeRazao",ucs:[],op:[42,44],ip:[42,44],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A86PaginacaoQuantidadeRazao=gx.num.intval(Value)},v2z:function(Value){gx.O.Z86PaginacaoQuantidadeRazao=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PAGINACAOQUANTIDADERAZAO",gx.O.A86PaginacaoQuantidadeRazao,0)},c2v:function(){gx.O.A86PaginacaoQuantidadeRazao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PAGINACAOQUANTIDADERAZAO",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Paginacaonumerobalanco,isvalid:null,rgrid:[],fld:"PAGINACAONUMEROBALANCO",gxz:"Z89PaginacaoNumeroBalanco",gxold:"O89PaginacaoNumeroBalanco",gxvar:"A89PaginacaoNumeroBalanco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A89PaginacaoNumeroBalanco=gx.num.intval(Value)},v2z:function(Value){gx.O.Z89PaginacaoNumeroBalanco=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PAGINACAONUMEROBALANCO",gx.O.A89PaginacaoNumeroBalanco,0)},c2v:function(){gx.O.A89PaginacaoNumeroBalanco=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PAGINACAONUMEROBALANCO",'.')},nac:gx.falseFn};
   GXValidFnc[51]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Paginacaoquantidadebalanco,isvalid:null,rgrid:[],fld:"PAGINACAOQUANTIDADEBALANCO",gxz:"Z88PaginacaoQuantidadeBalanco",gxold:"O88PaginacaoQuantidadeBalanco",gxvar:"A88PaginacaoQuantidadeBalanco",ucs:[],op:[49,51],ip:[49,51],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A88PaginacaoQuantidadeBalanco=gx.num.intval(Value)},v2z:function(Value){gx.O.Z88PaginacaoQuantidadeBalanco=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PAGINACAOQUANTIDADEBALANCO",gx.O.A88PaginacaoQuantidadeBalanco,0)},c2v:function(){gx.O.A88PaginacaoQuantidadeBalanco=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PAGINACAOQUANTIDADEBALANCO",'.')},nac:gx.falseFn};
   GXValidFnc[54]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[56]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Paginacaonumeroplanocontas,isvalid:null,rgrid:[],fld:"PAGINACAONUMEROPLANOCONTAS",gxz:"Z91PaginacaoNumeroPlanoContas",gxold:"O91PaginacaoNumeroPlanoContas",gxvar:"A91PaginacaoNumeroPlanoContas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A91PaginacaoNumeroPlanoContas=gx.num.intval(Value)},v2z:function(Value){gx.O.Z91PaginacaoNumeroPlanoContas=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PAGINACAONUMEROPLANOCONTAS",gx.O.A91PaginacaoNumeroPlanoContas,0)},c2v:function(){gx.O.A91PaginacaoNumeroPlanoContas=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PAGINACAONUMEROPLANOCONTAS",'.')},nac:gx.falseFn};
   GXValidFnc[58]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Paginacaoquantidadeplanocontas,isvalid:null,rgrid:[],fld:"PAGINACAOQUANTIDADEPLANOCONTAS",gxz:"Z90PaginacaoQuantidadePlanoContas",gxold:"O90PaginacaoQuantidadePlanoContas",gxvar:"A90PaginacaoQuantidadePlanoContas",ucs:[],op:[56,58],ip:[56,58],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A90PaginacaoQuantidadePlanoContas=gx.num.intval(Value)},v2z:function(Value){gx.O.Z90PaginacaoQuantidadePlanoContas=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PAGINACAOQUANTIDADEPLANOCONTAS",gx.O.A90PaginacaoQuantidadePlanoContas,0)},c2v:function(){gx.O.A90PaginacaoQuantidadePlanoContas=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PAGINACAOQUANTIDADEPLANOCONTAS",'.')},nac:gx.falseFn};
   GXValidFnc[61]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[63]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Paginacaonumerobalancete,isvalid:null,rgrid:[],fld:"PAGINACAONUMEROBALANCETE",gxz:"Z93PaginacaoNumeroBalancete",gxold:"O93PaginacaoNumeroBalancete",gxvar:"A93PaginacaoNumeroBalancete",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A93PaginacaoNumeroBalancete=gx.num.intval(Value)},v2z:function(Value){gx.O.Z93PaginacaoNumeroBalancete=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PAGINACAONUMEROBALANCETE",gx.O.A93PaginacaoNumeroBalancete,0)},c2v:function(){gx.O.A93PaginacaoNumeroBalancete=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PAGINACAONUMEROBALANCETE",'.')},nac:gx.falseFn};
   GXValidFnc[65]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Paginacaoquantidadebalancete,isvalid:null,rgrid:[],fld:"PAGINACAOQUANTIDADEBALANCETE",gxz:"Z92PaginacaoQuantidadeBalancete",gxold:"O92PaginacaoQuantidadeBalancete",gxvar:"A92PaginacaoQuantidadeBalancete",ucs:[],op:[63,65,75,73],ip:[75,73,63,65,56,58,49,51,42,44,35,37],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A92PaginacaoQuantidadeBalancete=gx.num.intval(Value)},v2z:function(Value){gx.O.Z92PaginacaoQuantidadeBalancete=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PAGINACAOQUANTIDADEBALANCETE",gx.O.A92PaginacaoQuantidadeBalancete,0)},c2v:function(){gx.O.A92PaginacaoQuantidadeBalancete=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PAGINACAOQUANTIDADEBALANCETE",'.')},nac:gx.falseFn};
   GXValidFnc[68]={fld:"TABLE4",grid:0};
   GXValidFnc[71]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[73]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PAGINACAOUSUARIOID",gxz:"Z791PaginacaoUsuarioId",gxold:"O791PaginacaoUsuarioId",gxvar:"A791PaginacaoUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A791PaginacaoUsuarioId=Value},v2z:function(Value){gx.O.Z791PaginacaoUsuarioId=Value},v2c:function(){gx.fn.setControlValue("PAGINACAOUSUARIOID",gx.O.A791PaginacaoUsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A791PaginacaoUsuarioId=this.val()},val:function(){return gx.fn.getControlValue("PAGINACAOUSUARIOID")},nac:gx.falseFn};
   this.declareDomainHdlr( 73 , function() {
   });
   GXValidFnc[75]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PAGINACAODATAHORAALT",gxz:"Z792PaginacaoDataHoraAlt",gxold:"O792PaginacaoDataHoraAlt",gxvar:"A792PaginacaoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A792PaginacaoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z792PaginacaoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("PAGINACAODATAHORAALT",gx.O.A792PaginacaoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A792PaginacaoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("PAGINACAODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 75 , function() {
   });
   GXValidFnc[84]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[86]={fld:"BTNHELP",grid:0};
   this.A82EmpresaPaginacaoEmpresaId = "" ;
   this.Z82EmpresaPaginacaoEmpresaId = "" ;
   this.O82EmpresaPaginacaoEmpresaId = "" ;
   this.A83EmpresaPaginacaoNome = "" ;
   this.Z83EmpresaPaginacaoNome = "" ;
   this.O83EmpresaPaginacaoNome = "" ;
   this.A85PaginacaoNumeroDiario = 0 ;
   this.Z85PaginacaoNumeroDiario = 0 ;
   this.O85PaginacaoNumeroDiario = 0 ;
   this.A84PaginacaoQuantidadeDiario = 0 ;
   this.Z84PaginacaoQuantidadeDiario = 0 ;
   this.O84PaginacaoQuantidadeDiario = 0 ;
   this.A87PaginacaoNumeroRazao = 0 ;
   this.Z87PaginacaoNumeroRazao = 0 ;
   this.O87PaginacaoNumeroRazao = 0 ;
   this.A86PaginacaoQuantidadeRazao = 0 ;
   this.Z86PaginacaoQuantidadeRazao = 0 ;
   this.O86PaginacaoQuantidadeRazao = 0 ;
   this.A89PaginacaoNumeroBalanco = 0 ;
   this.Z89PaginacaoNumeroBalanco = 0 ;
   this.O89PaginacaoNumeroBalanco = 0 ;
   this.A88PaginacaoQuantidadeBalanco = 0 ;
   this.Z88PaginacaoQuantidadeBalanco = 0 ;
   this.O88PaginacaoQuantidadeBalanco = 0 ;
   this.A91PaginacaoNumeroPlanoContas = 0 ;
   this.Z91PaginacaoNumeroPlanoContas = 0 ;
   this.O91PaginacaoNumeroPlanoContas = 0 ;
   this.A90PaginacaoQuantidadePlanoContas = 0 ;
   this.Z90PaginacaoQuantidadePlanoContas = 0 ;
   this.O90PaginacaoQuantidadePlanoContas = 0 ;
   this.A93PaginacaoNumeroBalancete = 0 ;
   this.Z93PaginacaoNumeroBalancete = 0 ;
   this.O93PaginacaoNumeroBalancete = 0 ;
   this.A92PaginacaoQuantidadeBalancete = 0 ;
   this.Z92PaginacaoQuantidadeBalancete = 0 ;
   this.O92PaginacaoQuantidadeBalancete = 0 ;
   this.A791PaginacaoUsuarioId = "" ;
   this.Z791PaginacaoUsuarioId = "" ;
   this.O791PaginacaoUsuarioId = "" ;
   this.A792PaginacaoDataHoraAlt = gx.date.nullDate() ;
   this.Z792PaginacaoDataHoraAlt = gx.date.nullDate() ;
   this.O792PaginacaoDataHoraAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV21Pgmname = "" ;
   this.AV22Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV16Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV20EmpresaPaginacaoEmpresaId = "" ;
   this.A82EmpresaPaginacaoEmpresaId = "" ;
   this.A791PaginacaoUsuarioId = "" ;
   this.A792PaginacaoDataHoraAlt = gx.date.nullDate() ;
   this.A83EmpresaPaginacaoNome = "" ;
   this.A84PaginacaoQuantidadeDiario = 0 ;
   this.A85PaginacaoNumeroDiario = 0 ;
   this.A86PaginacaoQuantidadeRazao = 0 ;
   this.A87PaginacaoNumeroRazao = 0 ;
   this.A88PaginacaoQuantidadeBalanco = 0 ;
   this.A89PaginacaoNumeroBalanco = 0 ;
   this.A90PaginacaoQuantidadePlanoContas = 0 ;
   this.A91PaginacaoNumeroPlanoContas = 0 ;
   this.A92PaginacaoQuantidadeBalancete = 0 ;
   this.A93PaginacaoNumeroBalancete = 0 ;
   this.Gx_mode = "" ;
   this.Events = {"e120x2_client": ["'FECHAR'", true] ,"e130x2_client": ["AFTER TRN", true] ,"e140x45_client": ["ENTER", true] ,"e150x45_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV20EmpresaPaginacaoEmpresaId',fld:'vEMPRESAPAGINACAOEMPRESAID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV20EmpresaPaginacaoEmpresaId", "vEMPRESAPAGINACAOEMPRESAID", 0, "char");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV22Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV21Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 45 ]= ["O93PaginacaoNumeroBalancete","O92PaginacaoQuantidadeBalancete","O91PaginacaoNumeroPlanoContas","O90PaginacaoQuantidadePlanoContas","O89PaginacaoNumeroBalanco","O88PaginacaoQuantidadeBalanco","O87PaginacaoNumeroRazao","O86PaginacaoQuantidadeRazao","O85PaginacaoNumeroDiario","O84PaginacaoQuantidadeDiario"] ;
});
gx.setParentObj(new tpaginacao());
