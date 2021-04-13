/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:58:33.53
*/
gx.evt.autoSkip = false;
gx.define('hconsultavendedor', false, function () {
   this.ServerClass =  "hconsultavendedor" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("6", "'GXM_FIRST'");
   this.addKeyListener("7", "'GXM_PREVIOUS'");
   this.addKeyListener("8", "'GXM_NEXT'");
   this.addKeyListener("9", "'GXM_LAST'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV8UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV19PVendedorId=gx.fn.getIntegerValue("vPVENDEDORID",'.') ;
   };
   this.Validv_Vendedorativo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vVENDEDORATIVO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Vendedorsnvendedor=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vVENDEDORSNVENDEDOR");
         this.AnyError  = 0;
         if ( ! ( this.AV17VendedorSNVendedor == "N" || this.AV17VendedorSNVendedor == "S" || (""==this.AV17VendedorSNVendedor) ) )
         {
            try {
               gxballoon.setError("Campo VendedorSNVendedor fora do intervalo");
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
   this.Validv_Vendedorsncomprador=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vVENDEDORSNCOMPRADOR");
         this.AnyError  = 0;
         if ( ! ( this.AV18VendedorSNComprador == "N" || this.AV18VendedorSNComprador == "S" || (""==this.AV18VendedorSNComprador) ) )
         {
            try {
               gxballoon.setError("Campo VendedorSNComprador fora do intervalo");
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
   this.e188b2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e118b2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e128b2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e138b2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e148b2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e158b2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e168b2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e218b1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,22,23,26,28,30,32,38,39,40,41,42,43,49,52,55,57,59,61,63,64,65,66,67,68];
   this.GXLastCtrlId =68;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",37,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultavendedor",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(1237,38,"VENDEDORID","","","VendedorId","int",0,"px",7,7,"right",null,[],1237,"VendedorId",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(1148,39,"VENDEDORNOME","","","VendedorNome","svchar",0,"px",40,40,"left",null,[],1148,"VendedorNome",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(1138,40,"VENDEDORPERCENTUALCOMISSAO","","","VendedorPercentualComissao","decimal",0,"px",6,6,"right",null,[],1138,"VendedorPercentualComissao",true,2,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(6477,41,"VENDEDORATIVO","Vendedor Ativo","","VendedorAtivo","char",0,"px",1,1,"left",null,[],6477,"VendedorAtivo",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(10899,42,"VENDEDORDESCONTOMES","","","VendedorDescontoMes","decimal",0,"px",22,22,"right",null,[],10899,"VendedorDescontoMes",true,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Valorsaldovendedor",43,"vVALORSALDOVENDEDOR","Saldo Vendedor","","ValorSaldoVendedor","decimal",0,"px",22,22,"right",null,[],"Valorsaldovendedor","ValorSaldoVendedor",true,2,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vVENDEDORID",gxz:"ZV15VendedorId",gxold:"OV15VendedorId",gxvar:"AV15VendedorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15VendedorId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV15VendedorId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vVENDEDORID",gx.O.AV15VendedorId,0)},c2v:function(){gx.O.AV15VendedorId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVENDEDORID",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vVENDEDORNOME",gxz:"ZV16VendedorNome",gxold:"OV16VendedorNome",gxvar:"AV16VendedorNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16VendedorNome=Value},v2z:function(Value){gx.O.ZV16VendedorNome=Value},v2c:function(){gx.fn.setControlValue("vVENDEDORNOME",gx.O.AV16VendedorNome,0)},c2v:function(){gx.O.AV16VendedorNome=this.val()},val:function(){return gx.fn.getControlValue("vVENDEDORNOME")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TABLE2",grid:0};
   GXValidFnc[23]={fld:"TABLE3",grid:0};
   GXValidFnc[26]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Vendedorativo,isvalid:null,rgrid:[this.GridContainer],fld:"vVENDEDORATIVO",gxz:"ZV21VendedorAtivo",gxold:"OV21VendedorAtivo",gxvar:"AV21VendedorAtivo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV21VendedorAtivo=Value},v2z:function(Value){gx.O.ZV21VendedorAtivo=Value},v2c:function(){gx.fn.setCheckBoxValue("vVENDEDORATIVO",gx.O.AV21VendedorAtivo,"S")},c2v:function(){gx.O.AV21VendedorAtivo=this.val()},val:function(){return gx.fn.getControlValue("vVENDEDORATIVO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[28]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Vendedorsnvendedor,isvalid:null,rgrid:[this.GridContainer],fld:"vVENDEDORSNVENDEDOR",gxz:"ZV17VendedorSNVendedor",gxold:"OV17VendedorSNVendedor",gxvar:"AV17VendedorSNVendedor",ucs:[],op:[28],ip:[28],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV17VendedorSNVendedor=Value},v2z:function(Value){gx.O.ZV17VendedorSNVendedor=Value},v2c:function(){gx.fn.setCheckBoxValue("vVENDEDORSNVENDEDOR",gx.O.AV17VendedorSNVendedor,"S")},c2v:function(){gx.O.AV17VendedorSNVendedor=this.val()},val:function(){return gx.fn.getControlValue("vVENDEDORSNVENDEDOR")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[30]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Vendedorsncomprador,isvalid:null,rgrid:[this.GridContainer],fld:"vVENDEDORSNCOMPRADOR",gxz:"ZV18VendedorSNComprador",gxold:"OV18VendedorSNComprador",gxvar:"AV18VendedorSNComprador",ucs:[],op:[30],ip:[30],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV18VendedorSNComprador=Value},v2z:function(Value){gx.O.ZV18VendedorSNComprador=Value},v2c:function(){gx.fn.setCheckBoxValue("vVENDEDORSNCOMPRADOR",gx.O.AV18VendedorSNComprador,"S")},c2v:function(){gx.O.AV18VendedorSNComprador=this.val()},val:function(){return gx.fn.getControlValue("vVENDEDORSNCOMPRADOR")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[32]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vVENDEDORSNGERENTE",gxz:"ZV25VendedorSNGerente",gxold:"OV25VendedorSNGerente",gxvar:"AV25VendedorSNGerente",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV25VendedorSNGerente=Value},v2z:function(Value){gx.O.ZV25VendedorSNGerente=Value},v2c:function(){gx.fn.setCheckBoxValue("vVENDEDORSNGERENTE",gx.O.AV25VendedorSNGerente,"S")},c2v:function(){gx.O.AV25VendedorSNGerente=this.val()},val:function(){return gx.fn.getControlValue("vVENDEDORSNGERENTE")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[38]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"VENDEDORID",gxz:"Z1237VendedorId",gxold:"O1237VendedorId",gxvar:"A1237VendedorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1237VendedorId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1237VendedorId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("VENDEDORID",row || gx.fn.currentGridRowImpl(37),gx.O.A1237VendedorId,0)},c2v:function(){gx.O.A1237VendedorId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("VENDEDORID",row || gx.fn.currentGridRowImpl(37),'.')},nac:gx.falseFn};
   GXValidFnc[39]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"VENDEDORNOME",gxz:"Z1148VendedorNome",gxold:"O1148VendedorNome",gxvar:"A1148VendedorNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1148VendedorNome=Value},v2z:function(Value){gx.O.Z1148VendedorNome=Value},v2c:function(row){gx.fn.setGridControlValue("VENDEDORNOME",row || gx.fn.currentGridRowImpl(37),gx.O.A1148VendedorNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1148VendedorNome=this.val()},val:function(row){return gx.fn.getGridControlValue("VENDEDORNOME",row || gx.fn.currentGridRowImpl(37))},nac:gx.falseFn};
   GXValidFnc[40]={lvl:2,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"VENDEDORPERCENTUALCOMISSAO",gxz:"Z1138VendedorPercentualComissao",gxold:"O1138VendedorPercentualComissao",gxvar:"A1138VendedorPercentualComissao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1138VendedorPercentualComissao=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z1138VendedorPercentualComissao=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("VENDEDORPERCENTUALCOMISSAO",row || gx.fn.currentGridRowImpl(37),gx.O.A1138VendedorPercentualComissao,2,',')},c2v:function(){gx.O.A1138VendedorPercentualComissao=this.val()},val:function(row){return gx.fn.getGridDecimalValue("VENDEDORPERCENTUALCOMISSAO",row || gx.fn.currentGridRowImpl(37),'.',',')},nac:gx.falseFn};
   GXValidFnc[41]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"VENDEDORATIVO",gxz:"Z6477VendedorAtivo",gxold:"O6477VendedorAtivo",gxvar:"A6477VendedorAtivo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A6477VendedorAtivo=Value},v2z:function(Value){gx.O.Z6477VendedorAtivo=Value},v2c:function(row){gx.fn.setGridControlValue("VENDEDORATIVO",row || gx.fn.currentGridRowImpl(37),gx.O.A6477VendedorAtivo,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6477VendedorAtivo=this.val()},val:function(row){return gx.fn.getGridControlValue("VENDEDORATIVO",row || gx.fn.currentGridRowImpl(37))},nac:gx.falseFn};
   GXValidFnc[42]={lvl:2,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"VENDEDORDESCONTOMES",gxz:"Z10899VendedorDescontoMes",gxold:"O10899VendedorDescontoMes",gxvar:"A10899VendedorDescontoMes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10899VendedorDescontoMes=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z10899VendedorDescontoMes=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("VENDEDORDESCONTOMES",row || gx.fn.currentGridRowImpl(37),gx.O.A10899VendedorDescontoMes,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10899VendedorDescontoMes=this.val()},val:function(row){return gx.fn.getGridDecimalValue("VENDEDORDESCONTOMES",row || gx.fn.currentGridRowImpl(37),'.',',')},nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vVALORSALDOVENDEDOR",gxz:"ZV30ValorSaldoVendedor",gxold:"OV30ValorSaldoVendedor",gxvar:"AV30ValorSaldoVendedor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV30ValorSaldoVendedor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV30ValorSaldoVendedor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("vVALORSALDOVENDEDOR",row || gx.fn.currentGridRowImpl(37),gx.O.AV30ValorSaldoVendedor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV30ValorSaldoVendedor=this.val()},val:function(row){return gx.fn.getGridDecimalValue("vVALORSALDOVENDEDOR",row || gx.fn.currentGridRowImpl(37),'.',',')},nac:gx.falseFn};
   GXValidFnc[49]={fld:"TABLENAV",grid:0};
   GXValidFnc[52]={fld:"BTNADD",grid:0};
   GXValidFnc[55]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[57]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[59]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[61]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[63]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[64]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV23Pagina",gxold:"OV23Pagina",gxvar:"AV23Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV23Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV23Pagina)},c2v:function(){gx.O.AV23Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[65]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV24PaginaAux",gxold:"OV24PaginaAux",gxvar:"AV24PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV24PaginaAux,0)},c2v:function(){gx.O.AV24PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[66]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[67]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vUSUARIOFILIALID",gxz:"ZV27UsuarioFilialId",gxold:"OV27UsuarioFilialId",gxvar:"AV27UsuarioFilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27UsuarioFilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27UsuarioFilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vUSUARIOFILIALID",gx.O.AV27UsuarioFilialId,0)},c2v:function(){gx.O.AV27UsuarioFilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vUSUARIOFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[68]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vSNCONSFILVENDED",gxz:"ZV33SnConsFilVended",gxold:"OV33SnConsFilVended",gxvar:"AV33SnConsFilVended",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33SnConsFilVended=Value},v2z:function(Value){gx.O.ZV33SnConsFilVended=Value},v2c:function(){gx.fn.setControlValue("vSNCONSFILVENDED",gx.O.AV33SnConsFilVended,0)},c2v:function(){gx.O.AV33SnConsFilVended=this.val()},val:function(){return gx.fn.getControlValue("vSNCONSFILVENDED")},nac:gx.falseFn};
   this.AV15VendedorId = 0 ;
   this.ZV15VendedorId = 0 ;
   this.OV15VendedorId = 0 ;
   this.AV16VendedorNome = "" ;
   this.ZV16VendedorNome = "" ;
   this.OV16VendedorNome = "" ;
   this.AV21VendedorAtivo = "" ;
   this.ZV21VendedorAtivo = "" ;
   this.OV21VendedorAtivo = "" ;
   this.AV17VendedorSNVendedor = "" ;
   this.ZV17VendedorSNVendedor = "" ;
   this.OV17VendedorSNVendedor = "" ;
   this.AV18VendedorSNComprador = "" ;
   this.ZV18VendedorSNComprador = "" ;
   this.OV18VendedorSNComprador = "" ;
   this.AV25VendedorSNGerente = "" ;
   this.ZV25VendedorSNGerente = "" ;
   this.OV25VendedorSNGerente = "" ;
   this.Z1237VendedorId = 0 ;
   this.O1237VendedorId = 0 ;
   this.Z1148VendedorNome = "" ;
   this.O1148VendedorNome = "" ;
   this.Z1138VendedorPercentualComissao = 0 ;
   this.O1138VendedorPercentualComissao = 0 ;
   this.Z6477VendedorAtivo = "" ;
   this.O6477VendedorAtivo = "" ;
   this.Z10899VendedorDescontoMes = 0 ;
   this.O10899VendedorDescontoMes = 0 ;
   this.ZV30ValorSaldoVendedor = 0 ;
   this.OV30ValorSaldoVendedor = 0 ;
   this.AV23Pagina = 0 ;
   this.ZV23Pagina = 0 ;
   this.OV23Pagina = 0 ;
   this.AV24PaginaAux = 0 ;
   this.ZV24PaginaAux = 0 ;
   this.OV24PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV27UsuarioFilialId = 0 ;
   this.ZV27UsuarioFilialId = 0 ;
   this.OV27UsuarioFilialId = 0 ;
   this.AV33SnConsFilVended = "" ;
   this.ZV33SnConsFilVended = "" ;
   this.OV33SnConsFilVended = "" ;
   this.AV15VendedorId = 0 ;
   this.AV16VendedorNome = "" ;
   this.AV21VendedorAtivo = "" ;
   this.AV17VendedorSNVendedor = "" ;
   this.AV18VendedorSNComprador = "" ;
   this.AV25VendedorSNGerente = "" ;
   this.AV23Pagina = 0 ;
   this.AV24PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV27UsuarioFilialId = 0 ;
   this.AV33SnConsFilVended = "" ;
   this.AV19PVendedorId = 0 ;
   this.A1156FilialId = 0 ;
   this.A1223VendedorSNVendedor = "" ;
   this.A1127VendedorSNComprador = "" ;
   this.A1182VendedorSNGerente = "" ;
   this.A1229VendedorEmpresaId = "" ;
   this.A1237VendedorId = 0 ;
   this.A1148VendedorNome = "" ;
   this.A1138VendedorPercentualComissao = 0 ;
   this.A6477VendedorAtivo = "" ;
   this.A10899VendedorDescontoMes = 0 ;
   this.AV30ValorSaldoVendedor = 0 ;
   this.A75UsuarioId = "" ;
   this.A1564UsuarioFilialId = 0 ;
   this.AV12EmpresaPadrao = "" ;
   this.AV8UsrCod = "" ;
   this.Events = {"e188b2_client": ["ENTER", true] ,"e118b2_client": ["'GXM_FIRST'", true] ,"e128b2_client": ["'GXM_PREVIOUS'", true] ,"e138b2_client": ["'GXM_NEXT'", true] ,"e148b2_client": ["'GXM_LAST'", true] ,"e158b2_client": ["'PROCURAR'", true] ,"e168b2_client": ["'NOVO'", true] ,"e218b1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15VendedorId',fld:'vVENDEDORID'},{av:'AV16VendedorNome',fld:'vVENDEDORNOME'},{av:'AV21VendedorAtivo',fld:'vVENDEDORATIVO'},{av:'AV17VendedorSNVendedor',fld:'vVENDEDORSNVENDEDOR'},{av:'AV18VendedorSNComprador',fld:'vVENDEDORSNCOMPRADOR'},{av:'AV25VendedorSNGerente',fld:'vVENDEDORSNGERENTE'},{av:'AV27UsuarioFilialId',fld:'vUSUARIOFILIALID'},{av:'AV33SnConsFilVended',fld:'vSNCONSFILVENDED'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV8UsrCod',fld:'vUSRCOD',hsh:true},{av:'A1237VendedorId',fld:'VENDEDORID'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'VENDEDORID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("VENDEDORID","Title")',ctrl:'VENDEDORID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'VENDEDORNOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("VENDEDORNOME","Title")',ctrl:'VENDEDORNOME',prop:'Title'},{ctrl:'VENDEDORPERCENTUALCOMISSAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("VENDEDORPERCENTUALCOMISSAO","Title")',ctrl:'VENDEDORPERCENTUALCOMISSAO',prop:'Title'},{ctrl:'VENDEDORDESCONTOMES',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("VENDEDORDESCONTOMES","Title")',ctrl:'VENDEDORDESCONTOMES',prop:'Title'},{av:'AV24PaginaAux',fld:'vPAGINAAUX'},{av:'AV23Pagina',fld:'vPAGINA'},{av:'AV22NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'},{av:'AV15VendedorId',fld:'vVENDEDORID'},{av:'AV16VendedorNome',fld:'vVENDEDORNOME'}]];
   this.EvtParms["ENTER"] = [[{av:'A1237VendedorId',fld:'VENDEDORID'}],[{av:'AV19PVendedorId',fld:'vPVENDEDORID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15VendedorId',fld:'vVENDEDORID'},{av:'AV16VendedorNome',fld:'vVENDEDORNOME'},{av:'AV21VendedorAtivo',fld:'vVENDEDORATIVO'},{av:'AV17VendedorSNVendedor',fld:'vVENDEDORSNVENDEDOR'},{av:'AV18VendedorSNComprador',fld:'vVENDEDORSNCOMPRADOR'},{av:'AV25VendedorSNGerente',fld:'vVENDEDORSNGERENTE'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV27UsuarioFilialId',fld:'vUSUARIOFILIALID'},{av:'AV33SnConsFilVended',fld:'vSNCONSFILVENDED'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV8UsrCod',fld:'vUSRCOD',hsh:true},{av:'A1237VendedorId',fld:'VENDEDORID'}],[{av:'AV23Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15VendedorId',fld:'vVENDEDORID'},{av:'AV16VendedorNome',fld:'vVENDEDORNOME'},{av:'AV21VendedorAtivo',fld:'vVENDEDORATIVO'},{av:'AV17VendedorSNVendedor',fld:'vVENDEDORSNVENDEDOR'},{av:'AV18VendedorSNComprador',fld:'vVENDEDORSNCOMPRADOR'},{av:'AV25VendedorSNGerente',fld:'vVENDEDORSNGERENTE'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV27UsuarioFilialId',fld:'vUSUARIOFILIALID'},{av:'AV33SnConsFilVended',fld:'vSNCONSFILVENDED'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV8UsrCod',fld:'vUSRCOD',hsh:true},{av:'A1237VendedorId',fld:'VENDEDORID'},{av:'AV23Pagina',fld:'vPAGINA'}],[{av:'AV23Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15VendedorId',fld:'vVENDEDORID'},{av:'AV16VendedorNome',fld:'vVENDEDORNOME'},{av:'AV21VendedorAtivo',fld:'vVENDEDORATIVO'},{av:'AV17VendedorSNVendedor',fld:'vVENDEDORSNVENDEDOR'},{av:'AV18VendedorSNComprador',fld:'vVENDEDORSNCOMPRADOR'},{av:'AV25VendedorSNGerente',fld:'vVENDEDORSNGERENTE'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV27UsuarioFilialId',fld:'vUSUARIOFILIALID'},{av:'AV33SnConsFilVended',fld:'vSNCONSFILVENDED'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV8UsrCod',fld:'vUSRCOD',hsh:true},{av:'A1237VendedorId',fld:'VENDEDORID'},{av:'AV23Pagina',fld:'vPAGINA'},{av:'AV24PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV23Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15VendedorId',fld:'vVENDEDORID'},{av:'AV16VendedorNome',fld:'vVENDEDORNOME'},{av:'AV21VendedorAtivo',fld:'vVENDEDORATIVO'},{av:'AV17VendedorSNVendedor',fld:'vVENDEDORSNVENDEDOR'},{av:'AV18VendedorSNComprador',fld:'vVENDEDORSNCOMPRADOR'},{av:'AV25VendedorSNGerente',fld:'vVENDEDORSNGERENTE'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV27UsuarioFilialId',fld:'vUSUARIOFILIALID'},{av:'AV33SnConsFilVended',fld:'vSNCONSFILVENDED'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV8UsrCod',fld:'vUSRCOD',hsh:true},{av:'A1237VendedorId',fld:'VENDEDORID'},{av:'AV24PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV23Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15VendedorId',fld:'vVENDEDORID'},{av:'AV16VendedorNome',fld:'vVENDEDORNOME'},{av:'AV21VendedorAtivo',fld:'vVENDEDORATIVO'},{av:'AV17VendedorSNVendedor',fld:'vVENDEDORSNVENDEDOR'},{av:'AV18VendedorSNComprador',fld:'vVENDEDORSNCOMPRADOR'},{av:'AV25VendedorSNGerente',fld:'vVENDEDORSNGERENTE'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV27UsuarioFilialId',fld:'vUSUARIOFILIALID'},{av:'AV33SnConsFilVended',fld:'vSNCONSFILVENDED'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV8UsrCod',fld:'vUSRCOD',hsh:true},{av:'A1237VendedorId',fld:'VENDEDORID'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV23Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'NOVO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15VendedorId',fld:'vVENDEDORID'},{av:'AV16VendedorNome',fld:'vVENDEDORNOME'},{av:'AV21VendedorAtivo',fld:'vVENDEDORATIVO'},{av:'AV17VendedorSNVendedor',fld:'vVENDEDORSNVENDEDOR'},{av:'AV18VendedorSNComprador',fld:'vVENDEDORSNCOMPRADOR'},{av:'AV25VendedorSNGerente',fld:'vVENDEDORSNGERENTE'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV27UsuarioFilialId',fld:'vUSUARIOFILIALID'},{av:'AV33SnConsFilVended',fld:'vSNCONSFILVENDED'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV8UsrCod',fld:'vUSRCOD',hsh:true},{av:'A1237VendedorId',fld:'VENDEDORID'}],[]];
   this.EvtParms["GRID.LOAD"] = [[{av:'AV8UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A1237VendedorId',fld:'VENDEDORID'}],[{av:'AV31DataAux',fld:'vDATAAUX'},{av:'AV32DataInicio',fld:'vDATAINICIO'},{av:'AV30ValorSaldoVendedor',fld:'vVALORSALDOVENDEDOR'}]];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV8UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV19PVendedorId", "vPVENDEDORID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV8UsrCod", "vUSRCOD", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[26]);
   GridContainer.addRefreshingVar(this.GXValidFnc[28]);
   GridContainer.addRefreshingVar(this.GXValidFnc[30]);
   GridContainer.addRefreshingVar(this.GXValidFnc[32]);
   GridContainer.addRefreshingVar(this.GXValidFnc[66]);
   GridContainer.addRefreshingVar(this.GXValidFnc[67]);
   GridContainer.addRefreshingVar(this.GXValidFnc[68]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV8UsrCod"});
   GridContainer.addRefreshingVar({rfrVar:"A1237VendedorId", rfrProp:"Value", gxAttId:"1237"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultavendedor());
