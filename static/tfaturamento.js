/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 4:57:51.96
*/
gx.evt.autoSkip = false;
gx.define('tfaturamento', false, function () {
   this.ServerClass =  "tfaturamento" ;
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
   this.Valid_Faturamentoprodutoempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("FATURAMENTOPRODUTOEMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Faturamentoprodutoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("FATURAMENTOPRODUTOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Faturamentocombinacao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("FATURAMENTOCOMBINACAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Faturamentonumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("FATURAMENTONUMERO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Faturamentovalorunitario=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Faturamentovalorunitario",["gx.O.A11767FaturamentoProdutoEmpId", "gx.O.A11768FaturamentoProdutoId", "gx.O.A11769FaturamentoCombinacao", "gx.O.A11770FaturamentoNumero", "gx.num.urlDecimal(gx.O.A11771FaturamentoValorUnitario,\'.\',\',\')", "gx.O.A11778FaturamentoFilialEmpId", "gx.O.A11779FaturamentoFilialId", "gx.num.urlDecimal(gx.O.A11780FaturamentoQuantidade,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A11781FaturamentoQuantidadeDisponive,\'.\',\',\')", "gx.O.A11782FaturamentoTipo", "gx.O.A11783FaturamentoUsuario", "gx.num.urlDecimal(gx.O.A11784FaturamentoQuantidadeSubst,\'.\',\',\')"],["A11778FaturamentoFilialEmpId", "A11779FaturamentoFilialId", "A11780FaturamentoQuantidade", "A11781FaturamentoQuantidadeDisponive", "A11782FaturamentoTipo", "A11783FaturamentoUsuario", "A11784FaturamentoQuantidadeSubst", "Gx_mode", "Z11767FaturamentoProdutoEmpId", "Z11768FaturamentoProdutoId", "Z11769FaturamentoCombinacao", "Z11770FaturamentoNumero", "Z11771FaturamentoValorUnitario", "Z11778FaturamentoFilialEmpId", "Z11779FaturamentoFilialId", "Z11780FaturamentoQuantidade", "Z11781FaturamentoQuantidadeDisponive", "Z11782FaturamentoTipo", "Z11783FaturamentoUsuario", "Z11784FaturamentoQuantidadeSubst", "O11784FaturamentoQuantidadeSubst", "Gridtfaturamento_substituicao", "Gridtfaturamento_faturamentosaida", ["BTN_DELETE2","Enabled"], ["BTN_ENTER2","Enabled"]]);
      return true;
   }
   this.Valid_Faturamentosubstituicaoempid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(101) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("FATURAMENTOSUBSTITUICAOEMPID", gx.fn.currentGridRowImpl(101));
         this.AnyError  = 0;
         this.sMode872 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(872,101)  ;
         this.standaloneModalH7872( );
         this.standaloneNotModalH7872( );

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode872  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Faturamentosubstituicaoid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(101) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("FATURAMENTOSUBSTITUICAOID", gx.fn.currentGridRowImpl(101));
         this.AnyError  = 0;
         this.sMode872 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(872,101)  ;

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode872  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Faturamentosubstituicaocombina=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(101) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("FATURAMENTOSUBSTITUICAOCOMBINA", gx.fn.currentGridRowImpl(101));
         this.AnyError  = 0;
         this.sMode872 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(872,101)  ;
         if ( gx.fn.gridDuplicateKey(104) )
         {
            gxballoon.setError(gx.text.format( gx.getMessage( "GXM_1004"), "Substituicao", "", "", "", "", "", "", "", ""));
            this.AnyError = gx.num.trunc( 1 ,0) ;
         }

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode872  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Faturamentosubstituicaoquantid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(101) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("FATURAMENTOSUBSTITUICAOQUANTID", gx.fn.currentGridRowImpl(101));
         this.AnyError  = 0;
         this.sMode872 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(872,101)  ;
         try {
            this.A11784FaturamentoQuantidadeSubst =  gx.fn.sumFrm( "A11785FaturamentoSubstituicaoQuantid" , 0 , "." , "," , 101 , gx.trueFn , [] )  ;
         }
         catch(e){}
         if ( this.Gx_mode == "UPD" )
         {
         }

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode872  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.standaloneModalH7872=function()
   {
      try {
         if ( this.Gx_mode != "INS" )
         {
            gx.fn.setCtrlProperty("FATURAMENTOSUBSTITUICAOEMPID","Enabled", 0 );
         }
         else
         {
            gx.fn.setCtrlProperty("FATURAMENTOSUBSTITUICAOEMPID","Enabled", 1 );
         }
      }
      catch(e){}
      try {
         if ( this.Gx_mode != "INS" )
         {
            gx.fn.setCtrlProperty("FATURAMENTOSUBSTITUICAOID","Enabled", 0 );
         }
         else
         {
            gx.fn.setCtrlProperty("FATURAMENTOSUBSTITUICAOID","Enabled", 1 );
         }
      }
      catch(e){}
      try {
         if ( this.Gx_mode != "INS" )
         {
            gx.fn.setCtrlProperty("FATURAMENTOSUBSTITUICAOCOMBINA","Enabled", 0 );
         }
         else
         {
            gx.fn.setCtrlProperty("FATURAMENTOSUBSTITUICAOCOMBINA","Enabled", 1 );
         }
      }
      catch(e){}
      return true;
   }
   this.standaloneNotModalH7872=function()
   {
      return true;
   }
   this.Valid_Faturamentosaidaempid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(112) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("FATURAMENTOSAIDAEMPID", gx.fn.currentGridRowImpl(112));
         this.AnyError  = 0;
         this.sMode873 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(873,112)  ;
         this.standaloneModalH7873( );
         this.standaloneNotModalH7873( );

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode873  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Faturamentosaidaid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(112) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("FATURAMENTOSAIDAID", gx.fn.currentGridRowImpl(112));
         this.AnyError  = 0;
         this.sMode873 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(873,112)  ;

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode873  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Faturamentosaidaitemseq=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(112) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("FATURAMENTOSAIDAITEMSEQ", gx.fn.currentGridRowImpl(112));
         this.AnyError  = 0;
         this.sMode873 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(873,112)  ;
         if ( gx.fn.gridDuplicateKey(115) )
         {
            gxballoon.setError(gx.text.format( gx.getMessage( "GXM_1004"), "Saídas", "", "", "", "", "", "", "", ""));
            this.AnyError = gx.num.trunc( 1 ,0) ;
         }

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode873  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.standaloneModalH7873=function()
   {
      try {
         if ( this.Gx_mode != "INS" )
         {
            gx.fn.setCtrlProperty("FATURAMENTOSAIDAEMPID","Enabled", 0 );
         }
         else
         {
            gx.fn.setCtrlProperty("FATURAMENTOSAIDAEMPID","Enabled", 1 );
         }
      }
      catch(e){}
      try {
         if ( this.Gx_mode != "INS" )
         {
            gx.fn.setCtrlProperty("FATURAMENTOSAIDAID","Enabled", 0 );
         }
         else
         {
            gx.fn.setCtrlProperty("FATURAMENTOSAIDAID","Enabled", 1 );
         }
      }
      catch(e){}
      try {
         if ( this.Gx_mode != "INS" )
         {
            gx.fn.setCtrlProperty("FATURAMENTOSAIDAITEMSEQ","Enabled", 0 );
         }
         else
         {
            gx.fn.setCtrlProperty("FATURAMENTOSAIDAITEMSEQ","Enabled", 1 );
         }
      }
      catch(e){}
      return true;
   }
   this.standaloneNotModalH7873=function()
   {
      return true;
   }
   this.e11h7871_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12h7871_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,27,28,34,37,39,42,44,47,49,52,54,57,59,62,64,67,69,72,74,77,79,82,84,87,89,92,94,97,100,102,103,104,105,108,111,113,114,115];
   this.GXLastCtrlId =115;
   this.Gridtfaturamento_substituicaoContainer = new gx.grid.grid(this, 872,"Substituicao",101,"Gridtfaturamento_substituicao","Gridtfaturamento_substituicao","Gridtfaturamento_substituicaoContainer",this.CmpContext,this.IsMasterPage,"tfaturamento",[11772,11773,11774],false,1,false,true,5,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Gridtfaturamento_substituicaoContainer = this.Gridtfaturamento_substituicaoContainer;
   Gridtfaturamento_substituicaoContainer.addSingleLineEdit(11772,102,"FATURAMENTOSUBSTITUICAOEMPID","Empresa","","FaturamentoSubstituicaoEmpId","char",0,"px",10,10,"left",null,[],11772,"FaturamentoSubstituicaoEmpId",true,0,false,false,"Attribute",1,"");
   Gridtfaturamento_substituicaoContainer.addSingleLineEdit(11773,103,"FATURAMENTOSUBSTITUICAOID","de substituição","","FaturamentoSubstituicaoId","int",0,"px",10,10,"right",null,[],11773,"FaturamentoSubstituicaoId",true,0,false,false,"Attribute",1,"");
   Gridtfaturamento_substituicaoContainer.addSingleLineEdit(11774,104,"FATURAMENTOSUBSTITUICAOCOMBINA","Combinação","","FaturamentoSubstituicaoCombina","char",0,"px",20,20,"left",null,[],11774,"FaturamentoSubstituicaoCombina",true,0,false,false,"Attribute",1,"");
   Gridtfaturamento_substituicaoContainer.addSingleLineEdit(11785,105,"FATURAMENTOSUBSTITUICAOQUANTID","Quantidade","","FaturamentoSubstituicaoQuantid","decimal",0,"px",21,21,"right",null,[],11785,"FaturamentoSubstituicaoQuantid",true,4,false,false,"Attribute",1,"");
   this.setGrid(Gridtfaturamento_substituicaoContainer);
   this.Gridtfaturamento_faturamentosaidaContainer = new gx.grid.grid(this, 873,"FaturamentoSaida",112,"Gridtfaturamento_faturamentosaida","Gridtfaturamento_faturamentosaida","Gridtfaturamento_faturamentosaidaContainer",this.CmpContext,this.IsMasterPage,"tfaturamento",[11775,11776,11777],false,1,false,true,5,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Gridtfaturamento_faturamentosaidaContainer = this.Gridtfaturamento_faturamentosaidaContainer;
   Gridtfaturamento_faturamentosaidaContainer.addSingleLineEdit(11775,113,"FATURAMENTOSAIDAEMPID","Empresa","","FaturamentoSaidaEmpId","char",0,"px",10,10,"left",null,[],11775,"FaturamentoSaidaEmpId",true,0,false,false,"Attribute",1,"");
   Gridtfaturamento_faturamentosaidaContainer.addSingleLineEdit(11776,114,"FATURAMENTOSAIDAID","Saída","","FaturamentoSaidaId","int",0,"px",10,10,"right",null,[],11776,"FaturamentoSaidaId",true,0,false,false,"Attribute",1,"");
   Gridtfaturamento_faturamentosaidaContainer.addSingleLineEdit(11777,115,"FATURAMENTOSAIDAITEMSEQ","Item","","FaturamentoSaidaItemSeq","int",0,"px",6,6,"right",null,[],11777,"FaturamentoSaidaItemSeq",true,0,false,false,"Attribute",1,"");
   this.setGrid(Gridtfaturamento_faturamentosaidaContainer);
   GXValidFnc[2]={fld:"TABLEMAIN",grid:0};
   GXValidFnc[5]={fld:"TABLETOOLBAR",grid:0};
   GXValidFnc[8]={fld:"SECTIONTOOLBAR",grid:0};
   GXValidFnc[9]={fld:"BTN_FIRST",grid:0};
   GXValidFnc[10]={fld:"BTN_FIRST_SEPARATOR",grid:0};
   GXValidFnc[11]={fld:"BTN_PREVIOUS",grid:0};
   GXValidFnc[12]={fld:"BTN_PREVIOUS_SEPARATOR",grid:0};
   GXValidFnc[13]={fld:"BTN_NEXT",grid:0};
   GXValidFnc[14]={fld:"BTN_NEXT_SEPARATOR",grid:0};
   GXValidFnc[15]={fld:"BTN_LAST",grid:0};
   GXValidFnc[16]={fld:"BTN_LAST_SEPARATOR",grid:0};
   GXValidFnc[17]={fld:"BTN_SELECT",grid:0};
   GXValidFnc[18]={fld:"BTN_SELECT_SEPARATOR",grid:0};
   GXValidFnc[19]={fld:"BTN_ENTER2",grid:0};
   GXValidFnc[20]={fld:"BTN_ENTER2_SEPARATOR",grid:0};
   GXValidFnc[21]={fld:"BTN_CANCEL2",grid:0};
   GXValidFnc[22]={fld:"BTN_CANCEL2_SEPARATOR",grid:0};
   GXValidFnc[23]={fld:"BTN_DELETE2",grid:0};
   GXValidFnc[24]={fld:"BTN_DELETE2_SEPARATOR",grid:0};
   GXValidFnc[27]={fld:"GROUPDATA",grid:0};
   GXValidFnc[28]={fld:"TABLE1",grid:0};
   GXValidFnc[34]={fld:"TABLE2",grid:0};
   GXValidFnc[37]={fld:"TEXTBLOCKFATURAMENTOPRODUTOEMPID", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Faturamentoprodutoempid,isvalid:null,rgrid:[this.Gridtfaturamento_substituicaoContainer,this.Gridtfaturamento_faturamentosaidaContainer],fld:"FATURAMENTOPRODUTOEMPID",gxz:"Z11767FaturamentoProdutoEmpId",gxold:"O11767FaturamentoProdutoEmpId",gxvar:"A11767FaturamentoProdutoEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11767FaturamentoProdutoEmpId=Value},v2z:function(Value){gx.O.Z11767FaturamentoProdutoEmpId=Value},v2c:function(){gx.fn.setControlValue("FATURAMENTOPRODUTOEMPID",gx.O.A11767FaturamentoProdutoEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11767FaturamentoProdutoEmpId=this.val()},val:function(){return gx.fn.getControlValue("FATURAMENTOPRODUTOEMPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 39 , function() {
   });
   GXValidFnc[42]={fld:"TEXTBLOCKFATURAMENTOPRODUTOID", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Faturamentoprodutoid,isvalid:null,rgrid:[this.Gridtfaturamento_substituicaoContainer,this.Gridtfaturamento_faturamentosaidaContainer],fld:"FATURAMENTOPRODUTOID",gxz:"Z11768FaturamentoProdutoId",gxold:"O11768FaturamentoProdutoId",gxvar:"A11768FaturamentoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11768FaturamentoProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11768FaturamentoProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("FATURAMENTOPRODUTOID",gx.O.A11768FaturamentoProdutoId,0)},c2v:function(){gx.O.A11768FaturamentoProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("FATURAMENTOPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCKFATURAMENTOCOMBINACAO", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Faturamentocombinacao,isvalid:null,rgrid:[this.Gridtfaturamento_substituicaoContainer,this.Gridtfaturamento_faturamentosaidaContainer],fld:"FATURAMENTOCOMBINACAO",gxz:"Z11769FaturamentoCombinacao",gxold:"O11769FaturamentoCombinacao",gxvar:"A11769FaturamentoCombinacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11769FaturamentoCombinacao=Value},v2z:function(Value){gx.O.Z11769FaturamentoCombinacao=Value},v2c:function(){gx.fn.setControlValue("FATURAMENTOCOMBINACAO",gx.O.A11769FaturamentoCombinacao,0)},c2v:function(){gx.O.A11769FaturamentoCombinacao=this.val()},val:function(){return gx.fn.getControlValue("FATURAMENTOCOMBINACAO")},nac:gx.falseFn};
   GXValidFnc[52]={fld:"TEXTBLOCKFATURAMENTONUMERO", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Faturamentonumero,isvalid:null,rgrid:[this.Gridtfaturamento_substituicaoContainer,this.Gridtfaturamento_faturamentosaidaContainer],fld:"FATURAMENTONUMERO",gxz:"Z11770FaturamentoNumero",gxold:"O11770FaturamentoNumero",gxvar:"A11770FaturamentoNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11770FaturamentoNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11770FaturamentoNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("FATURAMENTONUMERO",gx.O.A11770FaturamentoNumero,0)},c2v:function(){gx.O.A11770FaturamentoNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("FATURAMENTONUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[57]={fld:"TEXTBLOCKFATURAMENTOVALORUNITARIO", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"decimal",len:18,dec:4,sign:false,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Faturamentovalorunitario,isvalid:null,rgrid:[this.Gridtfaturamento_substituicaoContainer,this.Gridtfaturamento_faturamentosaidaContainer],fld:"FATURAMENTOVALORUNITARIO",gxz:"Z11771FaturamentoValorUnitario",gxold:"O11771FaturamentoValorUnitario",gxvar:"A11771FaturamentoValorUnitario",ucs:[],op:[94,89,84,79,74,69,64],ip:[94,89,84,79,74,69,64,59,54,49,44,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11771FaturamentoValorUnitario=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z11771FaturamentoValorUnitario=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("FATURAMENTOVALORUNITARIO",gx.O.A11771FaturamentoValorUnitario,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11771FaturamentoValorUnitario=this.val()},val:function(){return gx.fn.getDecimalValue("FATURAMENTOVALORUNITARIO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 59 , function() {
   });
   GXValidFnc[62]={fld:"TEXTBLOCKFATURAMENTOFILIALEMPID", format:0,grid:0};
   GXValidFnc[64]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FATURAMENTOFILIALEMPID",gxz:"Z11778FaturamentoFilialEmpId",gxold:"O11778FaturamentoFilialEmpId",gxvar:"A11778FaturamentoFilialEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11778FaturamentoFilialEmpId=Value},v2z:function(Value){gx.O.Z11778FaturamentoFilialEmpId=Value},v2c:function(){gx.fn.setControlValue("FATURAMENTOFILIALEMPID",gx.O.A11778FaturamentoFilialEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11778FaturamentoFilialEmpId=this.val()},val:function(){return gx.fn.getControlValue("FATURAMENTOFILIALEMPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 64 , function() {
   });
   GXValidFnc[67]={fld:"TEXTBLOCKFATURAMENTOFILIALID", format:0,grid:0};
   GXValidFnc[69]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FATURAMENTOFILIALID",gxz:"Z11779FaturamentoFilialId",gxold:"O11779FaturamentoFilialId",gxvar:"A11779FaturamentoFilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11779FaturamentoFilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11779FaturamentoFilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("FATURAMENTOFILIALID",gx.O.A11779FaturamentoFilialId,0)},c2v:function(){gx.O.A11779FaturamentoFilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("FATURAMENTOFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[72]={fld:"TEXTBLOCKFATURAMENTOQUANTIDADE", format:0,grid:0};
   GXValidFnc[74]={lvl:0,type:"decimal",len:18,dec:4,sign:true,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FATURAMENTOQUANTIDADE",gxz:"Z11780FaturamentoQuantidade",gxold:"O11780FaturamentoQuantidade",gxvar:"A11780FaturamentoQuantidade",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11780FaturamentoQuantidade=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z11780FaturamentoQuantidade=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("FATURAMENTOQUANTIDADE",gx.O.A11780FaturamentoQuantidade,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11780FaturamentoQuantidade=this.val()},val:function(){return gx.fn.getDecimalValue("FATURAMENTOQUANTIDADE",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 74 , function() {
   });
   GXValidFnc[77]={fld:"TEXTBLOCKFATURAMENTOQUANTIDADEDISPONIVEL", format:0,grid:0};
   GXValidFnc[79]={lvl:0,type:"decimal",len:18,dec:4,sign:true,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FATURAMENTOQUANTIDADEDISPONIVE",gxz:"Z11781FaturamentoQuantidadeDisponive",gxold:"O11781FaturamentoQuantidadeDisponive",gxvar:"A11781FaturamentoQuantidadeDisponive",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11781FaturamentoQuantidadeDisponive=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z11781FaturamentoQuantidadeDisponive=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("FATURAMENTOQUANTIDADEDISPONIVE",gx.O.A11781FaturamentoQuantidadeDisponive,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11781FaturamentoQuantidadeDisponive=this.val()},val:function(){return gx.fn.getDecimalValue("FATURAMENTOQUANTIDADEDISPONIVE",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 79 , function() {
   });
   GXValidFnc[82]={fld:"TEXTBLOCKFATURAMENTOTIPO", format:0,grid:0};
   GXValidFnc[84]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FATURAMENTOTIPO",gxz:"Z11782FaturamentoTipo",gxold:"O11782FaturamentoTipo",gxvar:"A11782FaturamentoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11782FaturamentoTipo=Value},v2z:function(Value){gx.O.Z11782FaturamentoTipo=Value},v2c:function(){gx.fn.setControlValue("FATURAMENTOTIPO",gx.O.A11782FaturamentoTipo,0)},c2v:function(){gx.O.A11782FaturamentoTipo=this.val()},val:function(){return gx.fn.getControlValue("FATURAMENTOTIPO")},nac:gx.falseFn};
   GXValidFnc[87]={fld:"TEXTBLOCKFATURAMENTOUSUARIO", format:0,grid:0};
   GXValidFnc[89]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FATURAMENTOUSUARIO",gxz:"Z11783FaturamentoUsuario",gxold:"O11783FaturamentoUsuario",gxvar:"A11783FaturamentoUsuario",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11783FaturamentoUsuario=Value},v2z:function(Value){gx.O.Z11783FaturamentoUsuario=Value},v2c:function(){gx.fn.setControlValue("FATURAMENTOUSUARIO",gx.O.A11783FaturamentoUsuario,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11783FaturamentoUsuario=this.val()},val:function(){return gx.fn.getControlValue("FATURAMENTOUSUARIO")},nac:gx.falseFn};
   this.declareDomainHdlr( 89 , function() {
   });
   GXValidFnc[92]={fld:"TEXTBLOCKFATURAMENTOQUANTIDADESUBST", format:0,grid:0};
   GXValidFnc[94]={lvl:0,type:"decimal",len:18,dec:4,sign:true,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FATURAMENTOQUANTIDADESUBST",gxz:"Z11784FaturamentoQuantidadeSubst",gxold:"O11784FaturamentoQuantidadeSubst",gxvar:"A11784FaturamentoQuantidadeSubst",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11784FaturamentoQuantidadeSubst=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z11784FaturamentoQuantidadeSubst=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("FATURAMENTOQUANTIDADESUBST",gx.O.A11784FaturamentoQuantidadeSubst,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11784FaturamentoQuantidadeSubst=this.val()},val:function(){return gx.fn.getDecimalValue("FATURAMENTOQUANTIDADESUBST",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 94 , function() {
   });
   GXValidFnc[97]={fld:"TABLE3",grid:0};
   GXValidFnc[100]={fld:"TITLESUBSTITUICAO", format:0,grid:0};
   GXValidFnc[102]={lvl:872,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,isacc:1,grid:101,gxgrid:this.Gridtfaturamento_substituicaoContainer,fnc:this.Valid_Faturamentosubstituicaoempid,isvalid:null,rgrid:[],fld:"FATURAMENTOSUBSTITUICAOEMPID",gxz:"Z11772FaturamentoSubstituicaoEmpId",gxold:"O11772FaturamentoSubstituicaoEmpId",gxvar:"A11772FaturamentoSubstituicaoEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11772FaturamentoSubstituicaoEmpId=Value},v2z:function(Value){gx.O.Z11772FaturamentoSubstituicaoEmpId=Value},v2c:function(row){gx.fn.setGridControlValue("FATURAMENTOSUBSTITUICAOEMPID",row || gx.fn.currentGridRowImpl(101),gx.O.A11772FaturamentoSubstituicaoEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11772FaturamentoSubstituicaoEmpId=this.val()},val:function(row){return gx.fn.getGridControlValue("FATURAMENTOSUBSTITUICAOEMPID",row || gx.fn.currentGridRowImpl(101))},nac:gx.falseFn};
   GXValidFnc[103]={lvl:872,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,isacc:1,grid:101,gxgrid:this.Gridtfaturamento_substituicaoContainer,fnc:this.Valid_Faturamentosubstituicaoid,isvalid:null,rgrid:[],fld:"FATURAMENTOSUBSTITUICAOID",gxz:"Z11773FaturamentoSubstituicaoId",gxold:"O11773FaturamentoSubstituicaoId",gxvar:"A11773FaturamentoSubstituicaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A11773FaturamentoSubstituicaoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11773FaturamentoSubstituicaoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("FATURAMENTOSUBSTITUICAOID",row || gx.fn.currentGridRowImpl(101),gx.O.A11773FaturamentoSubstituicaoId,0)},c2v:function(){gx.O.A11773FaturamentoSubstituicaoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("FATURAMENTOSUBSTITUICAOID",row || gx.fn.currentGridRowImpl(101),'.')},nac:gx.falseFn};
   GXValidFnc[104]={lvl:872,type:"char",len:20,dec:0,sign:false,ro:0,isacc:1,grid:101,gxgrid:this.Gridtfaturamento_substituicaoContainer,fnc:this.Valid_Faturamentosubstituicaocombina,isvalid:null,rgrid:[],fld:"FATURAMENTOSUBSTITUICAOCOMBINA",gxz:"Z11774FaturamentoSubstituicaoCombina",gxold:"O11774FaturamentoSubstituicaoCombina",gxvar:"A11774FaturamentoSubstituicaoCombina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11774FaturamentoSubstituicaoCombina=Value},v2z:function(Value){gx.O.Z11774FaturamentoSubstituicaoCombina=Value},v2c:function(row){gx.fn.setGridControlValue("FATURAMENTOSUBSTITUICAOCOMBINA",row || gx.fn.currentGridRowImpl(101),gx.O.A11774FaturamentoSubstituicaoCombina,0)},c2v:function(){gx.O.A11774FaturamentoSubstituicaoCombina=this.val()},val:function(row){return gx.fn.getGridControlValue("FATURAMENTOSUBSTITUICAOCOMBINA",row || gx.fn.currentGridRowImpl(101))},nac:gx.falseFn};
   GXValidFnc[105]={lvl:872,type:"decimal",len:18,dec:4,sign:true,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,isacc:1,grid:101,gxgrid:this.Gridtfaturamento_substituicaoContainer,fnc:this.Valid_Faturamentosubstituicaoquantid,isvalid:null,rgrid:[],fld:"FATURAMENTOSUBSTITUICAOQUANTID",gxz:"Z11785FaturamentoSubstituicaoQuantid",gxold:"O11785FaturamentoSubstituicaoQuantid",gxvar:"A11785FaturamentoSubstituicaoQuantid",ucs:[],op:[94],ip:[94,105],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A11785FaturamentoSubstituicaoQuantid=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z11785FaturamentoSubstituicaoQuantid=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("FATURAMENTOSUBSTITUICAOQUANTID",row || gx.fn.currentGridRowImpl(101),gx.O.A11785FaturamentoSubstituicaoQuantid,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11785FaturamentoSubstituicaoQuantid=this.val()},val:function(row){return gx.fn.getGridDecimalValue("FATURAMENTOSUBSTITUICAOQUANTID",row || gx.fn.currentGridRowImpl(101),'.',',')},nac:gx.falseFn};
   GXValidFnc[108]={fld:"TABLE4",grid:0};
   GXValidFnc[111]={fld:"TITLEFATURAMENTOSAIDA", format:0,grid:0};
   GXValidFnc[113]={lvl:873,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,isacc:1,grid:112,gxgrid:this.Gridtfaturamento_faturamentosaidaContainer,fnc:this.Valid_Faturamentosaidaempid,isvalid:null,rgrid:[],fld:"FATURAMENTOSAIDAEMPID",gxz:"Z11775FaturamentoSaidaEmpId",gxold:"O11775FaturamentoSaidaEmpId",gxvar:"A11775FaturamentoSaidaEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11775FaturamentoSaidaEmpId=Value},v2z:function(Value){gx.O.Z11775FaturamentoSaidaEmpId=Value},v2c:function(row){gx.fn.setGridControlValue("FATURAMENTOSAIDAEMPID",row || gx.fn.currentGridRowImpl(112),gx.O.A11775FaturamentoSaidaEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11775FaturamentoSaidaEmpId=this.val()},val:function(row){return gx.fn.getGridControlValue("FATURAMENTOSAIDAEMPID",row || gx.fn.currentGridRowImpl(112))},nac:gx.falseFn};
   GXValidFnc[114]={lvl:873,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,isacc:1,grid:112,gxgrid:this.Gridtfaturamento_faturamentosaidaContainer,fnc:this.Valid_Faturamentosaidaid,isvalid:null,rgrid:[],fld:"FATURAMENTOSAIDAID",gxz:"Z11776FaturamentoSaidaId",gxold:"O11776FaturamentoSaidaId",gxvar:"A11776FaturamentoSaidaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A11776FaturamentoSaidaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11776FaturamentoSaidaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("FATURAMENTOSAIDAID",row || gx.fn.currentGridRowImpl(112),gx.O.A11776FaturamentoSaidaId,0)},c2v:function(){gx.O.A11776FaturamentoSaidaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("FATURAMENTOSAIDAID",row || gx.fn.currentGridRowImpl(112),'.')},nac:gx.falseFn};
   GXValidFnc[115]={lvl:873,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,isacc:1,grid:112,gxgrid:this.Gridtfaturamento_faturamentosaidaContainer,fnc:this.Valid_Faturamentosaidaitemseq,isvalid:null,rgrid:[],fld:"FATURAMENTOSAIDAITEMSEQ",gxz:"Z11777FaturamentoSaidaItemSeq",gxold:"O11777FaturamentoSaidaItemSeq",gxvar:"A11777FaturamentoSaidaItemSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A11777FaturamentoSaidaItemSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11777FaturamentoSaidaItemSeq=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("FATURAMENTOSAIDAITEMSEQ",row || gx.fn.currentGridRowImpl(112),gx.O.A11777FaturamentoSaidaItemSeq,0)},c2v:function(){gx.O.A11777FaturamentoSaidaItemSeq=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("FATURAMENTOSAIDAITEMSEQ",row || gx.fn.currentGridRowImpl(112),'.')},nac:gx.falseFn};
   this.A11767FaturamentoProdutoEmpId = "" ;
   this.Z11767FaturamentoProdutoEmpId = "" ;
   this.O11767FaturamentoProdutoEmpId = "" ;
   this.A11768FaturamentoProdutoId = 0 ;
   this.Z11768FaturamentoProdutoId = 0 ;
   this.O11768FaturamentoProdutoId = 0 ;
   this.A11769FaturamentoCombinacao = "" ;
   this.Z11769FaturamentoCombinacao = "" ;
   this.O11769FaturamentoCombinacao = "" ;
   this.A11770FaturamentoNumero = 0 ;
   this.Z11770FaturamentoNumero = 0 ;
   this.O11770FaturamentoNumero = 0 ;
   this.A11771FaturamentoValorUnitario = 0 ;
   this.Z11771FaturamentoValorUnitario = 0 ;
   this.O11771FaturamentoValorUnitario = 0 ;
   this.A11778FaturamentoFilialEmpId = "" ;
   this.Z11778FaturamentoFilialEmpId = "" ;
   this.O11778FaturamentoFilialEmpId = "" ;
   this.A11779FaturamentoFilialId = 0 ;
   this.Z11779FaturamentoFilialId = 0 ;
   this.O11779FaturamentoFilialId = 0 ;
   this.A11780FaturamentoQuantidade = 0 ;
   this.Z11780FaturamentoQuantidade = 0 ;
   this.O11780FaturamentoQuantidade = 0 ;
   this.A11781FaturamentoQuantidadeDisponive = 0 ;
   this.Z11781FaturamentoQuantidadeDisponive = 0 ;
   this.O11781FaturamentoQuantidadeDisponive = 0 ;
   this.A11782FaturamentoTipo = "" ;
   this.Z11782FaturamentoTipo = "" ;
   this.O11782FaturamentoTipo = "" ;
   this.A11783FaturamentoUsuario = "" ;
   this.Z11783FaturamentoUsuario = "" ;
   this.O11783FaturamentoUsuario = "" ;
   this.A11784FaturamentoQuantidadeSubst = 0 ;
   this.Z11784FaturamentoQuantidadeSubst = 0 ;
   this.O11784FaturamentoQuantidadeSubst = 0 ;
   this.Z11772FaturamentoSubstituicaoEmpId = "" ;
   this.O11772FaturamentoSubstituicaoEmpId = "" ;
   this.Z11773FaturamentoSubstituicaoId = 0 ;
   this.O11773FaturamentoSubstituicaoId = 0 ;
   this.Z11774FaturamentoSubstituicaoCombina = "" ;
   this.O11774FaturamentoSubstituicaoCombina = "" ;
   this.Z11785FaturamentoSubstituicaoQuantid = 0 ;
   this.O11785FaturamentoSubstituicaoQuantid = 0 ;
   this.Z11775FaturamentoSaidaEmpId = "" ;
   this.O11775FaturamentoSaidaEmpId = "" ;
   this.Z11776FaturamentoSaidaId = 0 ;
   this.O11776FaturamentoSaidaId = 0 ;
   this.Z11777FaturamentoSaidaItemSeq = 0 ;
   this.O11777FaturamentoSaidaItemSeq = 0 ;
   this.A11775FaturamentoSaidaEmpId = "" ;
   this.A11776FaturamentoSaidaId = 0 ;
   this.A11777FaturamentoSaidaItemSeq = 0 ;
   this.A11772FaturamentoSubstituicaoEmpId = "" ;
   this.A11773FaturamentoSubstituicaoId = 0 ;
   this.A11774FaturamentoSubstituicaoCombina = "" ;
   this.A11785FaturamentoSubstituicaoQuantid = 0 ;
   this.A11767FaturamentoProdutoEmpId = "" ;
   this.A11768FaturamentoProdutoId = 0 ;
   this.A11769FaturamentoCombinacao = "" ;
   this.A11770FaturamentoNumero = 0 ;
   this.A11771FaturamentoValorUnitario = 0 ;
   this.A11778FaturamentoFilialEmpId = "" ;
   this.A11779FaturamentoFilialId = 0 ;
   this.A11780FaturamentoQuantidade = 0 ;
   this.A11781FaturamentoQuantidadeDisponive = 0 ;
   this.A11782FaturamentoTipo = "" ;
   this.A11783FaturamentoUsuario = "" ;
   this.A11784FaturamentoQuantidadeSubst = 0 ;
   this.Events = {"e11h7871_client": ["ENTER", true] ,"e12h7871_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EnterCtrl = ["BTN_ENTER2" ,"BTN_ENTER2_SEPARATOR" ,"BTN_ENTER"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 871 ]= ["O11784FaturamentoQuantidadeSubst"] ;
   this.LvlOlds[ 872 ]= ["O11785FaturamentoSubstituicaoQuantid"] ;
});
gx.setParentObj(new tfaturamento());
