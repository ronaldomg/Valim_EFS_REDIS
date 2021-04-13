/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 15:9:23.80
*/
gx.evt.autoSkip = false;
gx.define('hapuracao', false, function () {
   this.ServerClass =  "hapuracao" ;
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
      this.AV40SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.A1228FilialEmpresaId=gx.fn.getControlValue("FILIALEMPRESAID") ;
      this.A1156FilialId=gx.fn.getIntegerValue("FILIALID",'.') ;
      this.A1136FilialNome=gx.fn.getControlValue("FILIALNOME") ;
   };
   this.Validv_Filialid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFILIALID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Uf=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vUF");
         this.AnyError  = 0;
         if ( ! ( this.AV30UF == "" || this.AV30UF == "AC" || this.AV30UF == "AL" || this.AV30UF == "AP" || this.AV30UF == "AM" || this.AV30UF == "BA" || this.AV30UF == "CE" || this.AV30UF == "DF" || this.AV30UF == "ES" || this.AV30UF == "GO" || this.AV30UF == "MA" || this.AV30UF == "MT" || this.AV30UF == "MS" || this.AV30UF == "MG" || this.AV30UF == "PA" || this.AV30UF == "PB" || this.AV30UF == "PR" || this.AV30UF == "PE" || this.AV30UF == "PI" || this.AV30UF == "RJ" || this.AV30UF == "RN" || this.AV30UF == "RS" || this.AV30UF == "RO" || this.AV30UF == "RR" || this.AV30UF == "SC" || this.AV30UF == "SP" || this.AV30UF == "SE" || this.AV30UF == "TO" || this.AV30UF == "EX" || (""==this.AV30UF) ) )
         {
            try {
               gxballoon.setError("Campo UF fora do intervalo");
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
   this.Validv_Filialempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFILIALEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11zs2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12zs2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e16zs2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13zs2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14zs2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15zs2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e19zs2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e20zs2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e21zs2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e22zs2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e24zs2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e25zs2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,14,15,18,20,23,25,30,33,36,38,40,42,44,47,49,50,54,55,56,57,58,59,60,61,62,68,69,71,72];
   this.GXLastCtrlId =72;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",53,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hapuracao",[],false,1,false,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(6680,54,"APURACAODATA","","","ApuracaoData","date",0,"px",10,10,"right",null,[],6680,"ApuracaoData",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(6681,55,"APURACAOSEQUENCIA","","","ApuracaoSequencia","int",0,"px",2,2,"right",null,[],6681,"ApuracaoSequencia",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addComboBox(6672,56,"APURACAOUF","","ApuracaoUF","char",null,0,true,false,0,"px","");
   GridContainer.addSingleLineEdit(6673,57,"APURACAOVALOR","","","ApuracaoValor","decimal",0,"px",22,22,"right",null,[],6673,"ApuracaoValor",true,2,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",58,0,"px",17,"px","e19zs2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",59,0,"px",17,"px","e20zs2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",60,0,"px",17,"px","e21zs2_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(6679,61,"APURACAOFILIALID","Código Filial","","ApuracaoFilialId","int",0,"px",7,7,"right",null,[],6679,"ApuracaoFilialId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(6677,62,"APURACAOTIPO","Tipo","","ApuracaoTipo","char",0,"px",1,1,"left",null,[],6677,"ApuracaoTipo",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE7",grid:0};
   GXValidFnc[8]={fld:"TABLE3",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialid,isvalid:null,rgrid:[this.GridContainer],fld:"vFILIALID",gxz:"ZV27FilialId",gxold:"OV27FilialId",gxvar:"AV27FilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27FilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27FilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALID",gx.O.AV27FilialId,0)},c2v:function(){gx.O.AV27FilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[14]={fld:"PROMPTFILIAL",grid:0};
   GXValidFnc[15]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALNOME",gxz:"ZV28FilialNome",gxold:"OV28FilialNome",gxvar:"AV28FilialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28FilialNome=Value},v2z:function(Value){gx.O.ZV28FilialNome=Value},v2c:function(){gx.fn.setControlValue("vFILIALNOME",gx.O.AV28FilialNome,0)},c2v:function(){gx.O.AV28FilialNome=this.val()},val:function(){return gx.fn.getControlValue("vFILIALNOME")},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTPAPURACAO",gxz:"ZV29TpApuracao",gxold:"OV29TpApuracao",gxvar:"AV29TpApuracao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV29TpApuracao=Value},v2z:function(Value){gx.O.ZV29TpApuracao=Value},v2c:function(){gx.fn.setComboBoxValue("vTPAPURACAO",gx.O.AV29TpApuracao)},c2v:function(){gx.O.AV29TpApuracao=this.val()},val:function(){return gx.fn.getControlValue("vTPAPURACAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TXTTITAPL3", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"char",len:2,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Uf,isvalid:null,rgrid:[this.GridContainer],fld:"vUF",gxz:"ZV30UF",gxold:"OV30UF",gxvar:"AV30UF",ucs:[],op:[25],ip:[25],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV30UF=Value},v2z:function(Value){gx.O.ZV30UF=Value},v2c:function(){gx.fn.setComboBoxValue("vUF",gx.O.AV30UF);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV30UF=this.val()},val:function(){return gx.fn.getControlValue("vUF")},nac:gx.falseFn};
   this.declareDomainHdlr( 25 , function() {
   });
   GXValidFnc[30]={fld:"TABLE4",grid:0};
   GXValidFnc[33]={fld:"TABLE8",grid:0};
   GXValidFnc[36]={fld:"IMAGE2",grid:0};
   GXValidFnc[38]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[40]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[42]={fld:"BTNHELP",grid:0};
   GXValidFnc[44]={fld:"TABLE5",grid:0};
   GXValidFnc[47]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"APURACAODATA",gxz:"Z6680ApuracaoData",gxold:"O6680ApuracaoData",gxvar:"A6680ApuracaoData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A6680ApuracaoData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z6680ApuracaoData=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("APURACAODATA",row || gx.fn.currentGridRowImpl(53),gx.O.A6680ApuracaoData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6680ApuracaoData=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("APURACAODATA",row || gx.fn.currentGridRowImpl(53))},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"APURACAOSEQUENCIA",gxz:"Z6681ApuracaoSequencia",gxold:"O6681ApuracaoSequencia",gxvar:"A6681ApuracaoSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A6681ApuracaoSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6681ApuracaoSequencia=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("APURACAOSEQUENCIA",row || gx.fn.currentGridRowImpl(53),gx.O.A6681ApuracaoSequencia,0)},c2v:function(){gx.O.A6681ApuracaoSequencia=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("APURACAOSEQUENCIA",row || gx.fn.currentGridRowImpl(53),'.')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"char",len:2,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"APURACAOUF",gxz:"Z6672ApuracaoUF",gxold:"O6672ApuracaoUF",gxvar:"A6672ApuracaoUF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A6672ApuracaoUF=Value},v2z:function(Value){gx.O.Z6672ApuracaoUF=Value},v2c:function(row){gx.fn.setGridComboBoxValue("APURACAOUF",row || gx.fn.currentGridRowImpl(53),gx.O.A6672ApuracaoUF);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6672ApuracaoUF=this.val()},val:function(row){return gx.fn.getGridControlValue("APURACAOUF",row || gx.fn.currentGridRowImpl(53))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"APURACAOVALOR",gxz:"Z6673ApuracaoValor",gxold:"O6673ApuracaoValor",gxvar:"A6673ApuracaoValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A6673ApuracaoValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z6673ApuracaoValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("APURACAOVALOR",row || gx.fn.currentGridRowImpl(53),gx.O.A6673ApuracaoValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6673ApuracaoValor=this.val()},val:function(row){return gx.fn.getGridDecimalValue("APURACAOVALOR",row || gx.fn.currentGridRowImpl(53),'.',',')},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(53),gx.O.AV7bmpAlt,gx.O.AV45Bmpalt_GXI)},c2v:function(){gx.O.AV45Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(53))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(53))}, gxvar_GXI:'AV45Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(53),gx.O.AV8bmpExc,gx.O.AV46Bmpexc_GXI)},c2v:function(){gx.O.AV46Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(53))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(53))}, gxvar_GXI:'AV46Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(53),gx.O.AV16bmpCon,gx.O.AV47Bmpcon_GXI)},c2v:function(){gx.O.AV47Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(53))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(53))}, gxvar_GXI:'AV47Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"APURACAOFILIALID",gxz:"Z6679ApuracaoFilialId",gxold:"O6679ApuracaoFilialId",gxvar:"A6679ApuracaoFilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A6679ApuracaoFilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6679ApuracaoFilialId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("APURACAOFILIALID",row || gx.fn.currentGridRowImpl(53),gx.O.A6679ApuracaoFilialId,0)},c2v:function(){gx.O.A6679ApuracaoFilialId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("APURACAOFILIALID",row || gx.fn.currentGridRowImpl(53),'.')},nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"APURACAOTIPO",gxz:"Z6677ApuracaoTipo",gxold:"O6677ApuracaoTipo",gxvar:"A6677ApuracaoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A6677ApuracaoTipo=Value},v2z:function(Value){gx.O.Z6677ApuracaoTipo=Value},v2c:function(row){gx.fn.setGridControlValue("APURACAOTIPO",row || gx.fn.currentGridRowImpl(53),gx.O.A6677ApuracaoTipo,0)},c2v:function(){gx.O.A6677ApuracaoTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("APURACAOTIPO",row || gx.fn.currentGridRowImpl(53))},nac:gx.falseFn};
   GXValidFnc[68]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDEFIL",gxz:"ZV39QtdeFil",gxold:"OV39QtdeFil",gxvar:"AV39QtdeFil",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39QtdeFil=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV39QtdeFil=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDEFIL",gx.O.AV39QtdeFil,0)},c2v:function(){gx.O.AV39QtdeFil=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDEFIL",'.')},nac:gx.falseFn};
   GXValidFnc[69]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialempresaid,isvalid:null,rgrid:[],fld:"vFILIALEMPRESAID",gxz:"ZV31FilialEmpresaId",gxold:"OV31FilialEmpresaId",gxvar:"AV31FilialEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31FilialEmpresaId=Value},v2z:function(Value){gx.O.ZV31FilialEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vFILIALEMPRESAID",gx.O.AV31FilialEmpresaId,0)},c2v:function(){gx.O.AV31FilialEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vFILIALEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[71]={fld:"JS", format:2,grid:0};
   GXValidFnc[72]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV27FilialId = 0 ;
   this.ZV27FilialId = 0 ;
   this.OV27FilialId = 0 ;
   this.AV28FilialNome = "" ;
   this.ZV28FilialNome = "" ;
   this.OV28FilialNome = "" ;
   this.AV29TpApuracao = "" ;
   this.ZV29TpApuracao = "" ;
   this.OV29TpApuracao = "" ;
   this.AV30UF = "" ;
   this.ZV30UF = "" ;
   this.OV30UF = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z6680ApuracaoData = gx.date.nullDate() ;
   this.O6680ApuracaoData = gx.date.nullDate() ;
   this.Z6681ApuracaoSequencia = 0 ;
   this.O6681ApuracaoSequencia = 0 ;
   this.Z6672ApuracaoUF = "" ;
   this.O6672ApuracaoUF = "" ;
   this.Z6673ApuracaoValor = 0 ;
   this.O6673ApuracaoValor = 0 ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z6679ApuracaoFilialId = 0 ;
   this.O6679ApuracaoFilialId = 0 ;
   this.Z6677ApuracaoTipo = "" ;
   this.O6677ApuracaoTipo = "" ;
   this.AV39QtdeFil = 0 ;
   this.ZV39QtdeFil = 0 ;
   this.OV39QtdeFil = 0 ;
   this.AV31FilialEmpresaId = "" ;
   this.ZV31FilialEmpresaId = "" ;
   this.OV31FilialEmpresaId = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV27FilialId = 0 ;
   this.AV28FilialNome = "" ;
   this.AV29TpApuracao = "" ;
   this.AV30UF = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV39QtdeFil = 0 ;
   this.AV31FilialEmpresaId = "" ;
   this.AV11OrderedBy = 0 ;
   this.A6676ApuracaoEmpresaId = "" ;
   this.A6680ApuracaoData = gx.date.nullDate() ;
   this.A6681ApuracaoSequencia = 0 ;
   this.A6672ApuracaoUF = "" ;
   this.A6673ApuracaoValor = 0 ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A6679ApuracaoFilialId = 0 ;
   this.A6677ApuracaoTipo = "" ;
   this.A1156FilialId = 0 ;
   this.A1228FilialEmpresaId = "" ;
   this.A1136FilialNome = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.AV40SnRecuperaFiltro = "" ;
   this.Events = {"e11zs2_client": ["'ANTERIOR'", true] ,"e12zs2_client": ["'PROXIMO'", true] ,"e16zs2_client": ["VPAGINA.CLICK", true] ,"e13zs2_client": ["'NOVO'", true] ,"e14zs2_client": ["'FECHAR'", true] ,"e15zs2_client": ["'PROCURAR'", true] ,"e19zs2_client": ["'ALTERAR'", true] ,"e20zs2_client": ["'EXCLUIR'", true] ,"e21zs2_client": ["'CONSULTAR'", true] ,"e22zs2_client": ["'ATUALIZAPAGINA'", true] ,"e24zs2_client": ["ENTER", true] ,"e25zs2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27FilialId',fld:'vFILIALID'},{av:'AV29TpApuracao',fld:'vTPAPURACAO'},{av:'AV30UF',fld:'vUF'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV40SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV31FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27FilialId',fld:'vFILIALID'},{av:'AV29TpApuracao',fld:'vTPAPURACAO'},{av:'AV30UF',fld:'vUF'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV40SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV31FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'}],[{ctrl:'APURACAODATA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("APURACAODATA","Title")',ctrl:'APURACAODATA',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'APURACAOSEQUENCIA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("APURACAOSEQUENCIA","Title")',ctrl:'APURACAOSEQUENCIA',prop:'Title'},{ctrl:'APURACAOUF'},{ctrl:'APURACAOVALOR',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("APURACAOVALOR","Title")',ctrl:'APURACAOVALOR',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV40SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27FilialId',fld:'vFILIALID'},{av:'AV29TpApuracao',fld:'vTPAPURACAO'},{av:'AV32UFAux',fld:'vUFAUX'},{av:'AV30UF',fld:'vUF'},{av:'AV28FilialNome',fld:'vFILIALNOME'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27FilialId',fld:'vFILIALID'},{av:'AV29TpApuracao',fld:'vTPAPURACAO'},{av:'AV30UF',fld:'vUF'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV40SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV31FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27FilialId',fld:'vFILIALID'},{av:'AV29TpApuracao',fld:'vTPAPURACAO'},{av:'AV30UF',fld:'vUF'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV40SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV31FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27FilialId',fld:'vFILIALID'},{av:'AV29TpApuracao',fld:'vTPAPURACAO'},{av:'AV30UF',fld:'vUF'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV40SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV31FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV38TpErro',fld:'vTPERRO'},{av:'AV27FilialId',fld:'vFILIALID'},{av:'AV29TpApuracao',fld:'vTPAPURACAO'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV31FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV30UF',fld:'vUF'}],[{av:'AV37DataAtual',fld:'vDATAATUAL'},{av:'AV36DataNula',fld:'vDATANULA'},{av:'AV29TpApuracao',fld:'vTPAPURACAO'},{av:'AV27FilialId',fld:'vFILIALID'},{av:'AV38TpErro',fld:'vTPERRO'},{av:'AV49GXLvl216',fld:'vGXLVL216'},{av:'AV28FilialNome',fld:'vFILIALNOME'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27FilialId',fld:'vFILIALID'},{av:'AV29TpApuracao',fld:'vTPAPURACAO'},{av:'AV30UF',fld:'vUF'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV40SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV31FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'AV38TpErro',fld:'vTPERRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV38TpErro',fld:'vTPERRO'},{av:'AV49GXLvl216',fld:'vGXLVL216'},{av:'AV28FilialNome',fld:'vFILIALNOME'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A6679ApuracaoFilialId',fld:'APURACAOFILIALID'},{av:'A6677ApuracaoTipo',fld:'APURACAOTIPO'},{av:'A6680ApuracaoData',fld:'APURACAODATA'},{av:'A6681ApuracaoSequencia',fld:'APURACAOSEQUENCIA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27FilialId',fld:'vFILIALID'},{av:'AV29TpApuracao',fld:'vTPAPURACAO'},{av:'AV30UF',fld:'vUF'}],[{av:'A6681ApuracaoSequencia',fld:'APURACAOSEQUENCIA'},{av:'A6680ApuracaoData',fld:'APURACAODATA'},{av:'A6677ApuracaoTipo',fld:'APURACAOTIPO'},{av:'A6679ApuracaoFilialId',fld:'APURACAOFILIALID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A6679ApuracaoFilialId',fld:'APURACAOFILIALID'},{av:'A6677ApuracaoTipo',fld:'APURACAOTIPO'},{av:'A6680ApuracaoData',fld:'APURACAODATA'},{av:'A6681ApuracaoSequencia',fld:'APURACAOSEQUENCIA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27FilialId',fld:'vFILIALID'},{av:'AV29TpApuracao',fld:'vTPAPURACAO'},{av:'AV30UF',fld:'vUF'}],[{av:'A6681ApuracaoSequencia',fld:'APURACAOSEQUENCIA'},{av:'A6680ApuracaoData',fld:'APURACAODATA'},{av:'A6677ApuracaoTipo',fld:'APURACAOTIPO'},{av:'A6679ApuracaoFilialId',fld:'APURACAOFILIALID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A6679ApuracaoFilialId',fld:'APURACAOFILIALID'},{av:'A6677ApuracaoTipo',fld:'APURACAOTIPO'},{av:'A6680ApuracaoData',fld:'APURACAODATA'},{av:'A6681ApuracaoSequencia',fld:'APURACAOSEQUENCIA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27FilialId',fld:'vFILIALID'},{av:'AV29TpApuracao',fld:'vTPAPURACAO'},{av:'AV30UF',fld:'vUF'}],[{av:'A6681ApuracaoSequencia',fld:'APURACAOSEQUENCIA'},{av:'A6680ApuracaoData',fld:'APURACAODATA'},{av:'A6677ApuracaoTipo',fld:'APURACAOTIPO'},{av:'A6679ApuracaoFilialId',fld:'APURACAOFILIALID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27FilialId',fld:'vFILIALID'},{av:'AV29TpApuracao',fld:'vTPAPURACAO'},{av:'AV30UF',fld:'vUF'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV40SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV31FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'}],[]];
   this.setPrompt("PROMPTFILIAL", [13]);
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV40SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("A1228FilialEmpresaId", "FILIALEMPRESAID", 0, "char");
   this.setVCMap("A1156FilialId", "FILIALID", 0, "int");
   this.setVCMap("A1136FilialNome", "FILIALNOME", 0, "svchar");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV40SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("A1228FilialEmpresaId", "FILIALEMPRESAID", 0, "char");
   this.setVCMap("A1156FilialId", "FILIALID", 0, "int");
   this.setVCMap("A1136FilialNome", "FILIALNOME", 0, "svchar");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[20]);
   GridContainer.addRefreshingVar(this.GXValidFnc[25]);
   GridContainer.addRefreshingVar(this.GXValidFnc[72]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV40SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"A1228FilialEmpresaId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[69]);
   GridContainer.addRefreshingVar({rfrVar:"A1156FilialId"});
   GridContainer.addRefreshingVar({rfrVar:"A1136FilialNome"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hapuracao());
