/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:41:11.34
*/
gx.evt.autoSkip = false;
gx.define('hlanccxabcodesp', false, function () {
   this.ServerClass =  "hlanccxabcodesp" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("7", "'ANTERIOR'");
   this.addKeyListener("8", "'PROXIMO'");
   this.addKeyListener("3", "'NOVO'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV17EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV28SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
   };
   this.Valid_Lanccxabcodespnumero=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(41) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("LANCCXABCODESPNUMERO", gx.fn.currentGridRowImpl(41));
         this.AnyError  = 0;
         this.StandaloneModal( );
         this.StandaloneNotModal( );

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Lanccxabcodespcaibanid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(41) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("LANCCXABCODESPCAIBANID", gx.fn.currentGridRowImpl(41));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11kq2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12kq2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e16kq2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13kq2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14kq2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15kq2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e19kq2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e20kq2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e21kq2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e22kq2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e24kq2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e25kq2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,18,21,24,26,28,30,32,35,37,38,42,43,44,45,46,47,48,49,50,57,58];
   this.GXLastCtrlId =58;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",41,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hlanccxabcodesp",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(3102,42,"LANCCXABCODESPNUMERO","","","LancCxaBcoDespNumero","int",0,"px",8,8,"right",null,[],3102,"LancCxaBcoDespNumero",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3093,43,"LANCCXABCODESPCAIBANID","Cxa/Bco","","LancCxaBcoDespCaiBanId","int",0,"px",5,5,"right",null,[],3093,"LancCxaBcoDespCaiBanId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3094,44,"LANCCXABCODESPCAIBANDESCRICAO","Descrição","","LancCxaBcoDespCaiBanDescricao","svchar",0,"px",25,25,"left",null,[],3094,"LancCxaBcoDespCaiBanDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(3091,45,"LANCCXABCODESPDATA","Data","","LancCxaBcoDespData","date",0,"px",10,10,"right",null,[],3091,"LancCxaBcoDespData",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3098,46,"LANCCXABCODESPPESSOAFANTASIA","Cliente/Fornecedor","","LancCxaBcoDespPessoaFantasia","svchar",0,"px",60,60,"left",null,[],3098,"LancCxaBcoDespPessoaFantasia",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(3095,47,"LANCCXABCODESPVALOR","Valor","","LancCxaBcoDespValor","decimal",0,"px",18,18,"right",null,[],3095,"LancCxaBcoDespValor",true,2,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",48,0,"px",17,"px","e20kq2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",49,0,"px",17,"px","e19kq2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",50,0,"px",17,"px","e21kq2_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vLANCCXABCODESPNUMERO",gxz:"ZV27LancCxaBcoDespNumero",gxold:"OV27LancCxaBcoDespNumero",gxvar:"AV27LancCxaBcoDespNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27LancCxaBcoDespNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27LancCxaBcoDespNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vLANCCXABCODESPNUMERO",gx.O.AV27LancCxaBcoDespNumero,0)},c2v:function(){gx.O.AV27LancCxaBcoDespNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLANCCXABCODESPNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TABLE4",grid:0};
   GXValidFnc[21]={fld:"TABLE6",grid:0};
   GXValidFnc[24]={fld:"IMAGE2",grid:0};
   GXValidFnc[26]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[28]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[30]={fld:"BTNHELP",grid:0};
   GXValidFnc[32]={fld:"TABLE5",grid:0};
   GXValidFnc[35]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[38]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[42]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:this.Valid_Lanccxabcodespnumero,isvalid:null,rgrid:[],fld:"LANCCXABCODESPNUMERO",gxz:"Z3102LancCxaBcoDespNumero",gxold:"O3102LancCxaBcoDespNumero",gxvar:"A3102LancCxaBcoDespNumero",ucs:[],op:[44,46,43,45,47],ip:[44,46,45,47,43,42],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3102LancCxaBcoDespNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3102LancCxaBcoDespNumero=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("LANCCXABCODESPNUMERO",row || gx.fn.currentGridRowImpl(41),gx.O.A3102LancCxaBcoDespNumero,0)},c2v:function(){gx.O.A3102LancCxaBcoDespNumero=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("LANCCXABCODESPNUMERO",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:this.Valid_Lanccxabcodespcaibanid,isvalid:null,rgrid:[],fld:"LANCCXABCODESPCAIBANID",gxz:"Z3093LancCxaBcoDespCaiBanId",gxold:"O3093LancCxaBcoDespCaiBanId",gxvar:"A3093LancCxaBcoDespCaiBanId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3093LancCxaBcoDespCaiBanId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3093LancCxaBcoDespCaiBanId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("LANCCXABCODESPCAIBANID",row || gx.fn.currentGridRowImpl(41),gx.O.A3093LancCxaBcoDespCaiBanId,0)},c2v:function(){gx.O.A3093LancCxaBcoDespCaiBanId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("LANCCXABCODESPCAIBANID",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[44]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"LANCCXABCODESPCAIBANDESCRICAO",gxz:"Z3094LancCxaBcoDespCaiBanDescricao",gxold:"O3094LancCxaBcoDespCaiBanDescricao",gxvar:"A3094LancCxaBcoDespCaiBanDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3094LancCxaBcoDespCaiBanDescricao=Value},v2z:function(Value){gx.O.Z3094LancCxaBcoDespCaiBanDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("LANCCXABCODESPCAIBANDESCRICAO",row || gx.fn.currentGridRowImpl(41),gx.O.A3094LancCxaBcoDespCaiBanDescricao,0)},c2v:function(){gx.O.A3094LancCxaBcoDespCaiBanDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("LANCCXABCODESPCAIBANDESCRICAO",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"LANCCXABCODESPDATA",gxz:"Z3091LancCxaBcoDespData",gxold:"O3091LancCxaBcoDespData",gxvar:"A3091LancCxaBcoDespData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3091LancCxaBcoDespData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3091LancCxaBcoDespData=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("LANCCXABCODESPDATA",row || gx.fn.currentGridRowImpl(41),gx.O.A3091LancCxaBcoDespData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3091LancCxaBcoDespData=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("LANCCXABCODESPDATA",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"LANCCXABCODESPPESSOAFANTASIA",gxz:"Z3098LancCxaBcoDespPessoaFantasia",gxold:"O3098LancCxaBcoDespPessoaFantasia",gxvar:"A3098LancCxaBcoDespPessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3098LancCxaBcoDespPessoaFantasia=Value},v2z:function(Value){gx.O.Z3098LancCxaBcoDespPessoaFantasia=Value},v2c:function(row){gx.fn.setGridControlValue("LANCCXABCODESPPESSOAFANTASIA",row || gx.fn.currentGridRowImpl(41),gx.O.A3098LancCxaBcoDespPessoaFantasia,0)},c2v:function(){gx.O.A3098LancCxaBcoDespPessoaFantasia=this.val()},val:function(row){return gx.fn.getGridControlValue("LANCCXABCODESPPESSOAFANTASIA",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"LANCCXABCODESPVALOR",gxz:"Z3095LancCxaBcoDespValor",gxold:"O3095LancCxaBcoDespValor",gxvar:"A3095LancCxaBcoDespValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3095LancCxaBcoDespValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3095LancCxaBcoDespValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("LANCCXABCODESPVALOR",row || gx.fn.currentGridRowImpl(41),gx.O.A3095LancCxaBcoDespValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3095LancCxaBcoDespValor=this.val()},val:function(row){return gx.fn.getGridDecimalValue("LANCCXABCODESPVALOR",row || gx.fn.currentGridRowImpl(41),'.',',')},nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(41),gx.O.AV8bmpExc,gx.O.AV34Bmpexc_GXI)},c2v:function(){gx.O.AV34Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(41))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(41))}, gxvar_GXI:'AV34Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(41),gx.O.AV7bmpAlt,gx.O.AV33Bmpalt_GXI)},c2v:function(){gx.O.AV33Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(41))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(41))}, gxvar_GXI:'AV33Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(41),gx.O.AV16bmpCon,gx.O.AV35Bmpcon_GXI)},c2v:function(){gx.O.AV35Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(41))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(41))}, gxvar_GXI:'AV35Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[57]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[58]={fld:"PROMPT_LANCCXABCODESPNUMERO",grid:0};
   this.AV27LancCxaBcoDespNumero = 0 ;
   this.ZV27LancCxaBcoDespNumero = 0 ;
   this.OV27LancCxaBcoDespNumero = 0 ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z3102LancCxaBcoDespNumero = 0 ;
   this.O3102LancCxaBcoDespNumero = 0 ;
   this.Z3093LancCxaBcoDespCaiBanId = 0 ;
   this.O3093LancCxaBcoDespCaiBanId = 0 ;
   this.Z3094LancCxaBcoDespCaiBanDescricao = "" ;
   this.O3094LancCxaBcoDespCaiBanDescricao = "" ;
   this.Z3091LancCxaBcoDespData = gx.date.nullDate() ;
   this.O3091LancCxaBcoDespData = gx.date.nullDate() ;
   this.Z3098LancCxaBcoDespPessoaFantasia = "" ;
   this.O3098LancCxaBcoDespPessoaFantasia = "" ;
   this.Z3095LancCxaBcoDespValor = 0 ;
   this.O3095LancCxaBcoDespValor = 0 ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV27LancCxaBcoDespNumero = 0 ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A3101LancCxaBcoDespEmpId = "" ;
   this.A3092LancCxaBcoDespCaiBanEmpId = "" ;
   this.A3096LancCxaBcoDespPessoaEmpId = "" ;
   this.A3097LancCxaBcoDespPessoaId = 0 ;
   this.A3102LancCxaBcoDespNumero = 0 ;
   this.A3093LancCxaBcoDespCaiBanId = 0 ;
   this.A3094LancCxaBcoDespCaiBanDescricao = "" ;
   this.A3091LancCxaBcoDespData = gx.date.nullDate() ;
   this.A3098LancCxaBcoDespPessoaFantasia = "" ;
   this.A3095LancCxaBcoDespValor = 0 ;
   this.AV8bmpExc = "" ;
   this.AV7bmpAlt = "" ;
   this.AV16bmpCon = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.AV28SnRecuperaFiltro = "" ;
   this.Events = {"e11kq2_client": ["'ANTERIOR'", true] ,"e12kq2_client": ["'PROXIMO'", true] ,"e16kq2_client": ["VPAGINA.CLICK", true] ,"e13kq2_client": ["'NOVO'", true] ,"e14kq2_client": ["'FECHAR'", true] ,"e15kq2_client": ["'PROCURAR'", true] ,"e19kq2_client": ["'ALTERAR'", true] ,"e20kq2_client": ["'EXCLUIR'", true] ,"e21kq2_client": ["'CONSULTAR'", true] ,"e22kq2_client": ["'ATUALIZAPAGINA'", true] ,"e24kq2_client": ["ENTER", true] ,"e25kq2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27LancCxaBcoDespNumero',fld:'vLANCCXABCODESPNUMERO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV28SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27LancCxaBcoDespNumero',fld:'vLANCCXABCODESPNUMERO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV28SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[{ctrl:'LANCCXABCODESPNUMERO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LANCCXABCODESPNUMERO","Title")',ctrl:'LANCCXABCODESPNUMERO',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV28SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27LancCxaBcoDespNumero',fld:'vLANCCXABCODESPNUMERO'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27LancCxaBcoDespNumero',fld:'vLANCCXABCODESPNUMERO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV28SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27LancCxaBcoDespNumero',fld:'vLANCCXABCODESPNUMERO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV28SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27LancCxaBcoDespNumero',fld:'vLANCCXABCODESPNUMERO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV28SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27LancCxaBcoDespNumero',fld:'vLANCCXABCODESPNUMERO'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27LancCxaBcoDespNumero',fld:'vLANCCXABCODESPNUMERO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV28SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A3102LancCxaBcoDespNumero',fld:'LANCCXABCODESPNUMERO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27LancCxaBcoDespNumero',fld:'vLANCCXABCODESPNUMERO'}],[{av:'A3102LancCxaBcoDespNumero',fld:'LANCCXABCODESPNUMERO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A3102LancCxaBcoDespNumero',fld:'LANCCXABCODESPNUMERO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27LancCxaBcoDespNumero',fld:'vLANCCXABCODESPNUMERO'}],[{av:'A3102LancCxaBcoDespNumero',fld:'LANCCXABCODESPNUMERO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A3102LancCxaBcoDespNumero',fld:'LANCCXABCODESPNUMERO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27LancCxaBcoDespNumero',fld:'vLANCCXABCODESPNUMERO'}],[{av:'A3102LancCxaBcoDespNumero',fld:'LANCCXABCODESPNUMERO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27LancCxaBcoDespNumero',fld:'vLANCCXABCODESPNUMERO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV28SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.setPrompt("PROMPT_LANCCXABCODESPNUMERO", [13]);
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV28SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV28SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[57]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV28SnRecuperaFiltro"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hlanccxabcodesp());
