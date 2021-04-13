/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:17:17.65
*/
gx.evt.autoSkip = false;
gx.define('houtrasdespesasreceitas', false, function () {
   this.ServerClass =  "houtrasdespesasreceitas" ;
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
   };
   this.Validv_Convenioid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONVENIOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11cl2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12cl2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e16cl2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13cl2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14cl2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15cl2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e19cl2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e20cl2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e21cl2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e22cl2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e24cl2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e25cl2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,26,28,31,33,35,40,43,46,48,50,52,54,57,59,60,64,65,66,67,68,69,70,76,78,79,80,81];
   this.GXLastCtrlId =81;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",63,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"houtrasdespesasreceitas",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(2146,64,"OUTRASDESPESASRECEITASDATA","","","OutrasDespesasReceitasData","date",0,"px",10,10,"right",null,[],2146,"OutrasDespesasReceitasData",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2148,65,"OUTRASDESPESASRECEITASDESCRICA","","","OutrasDespesasReceitasDescrica","svchar",0,"px",50,50,"left",null,[],2148,"OutrasDespesasReceitasDescrica",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2149,66,"OUTRASDESPESASRECEITASVALOR","","","OutrasDespesasReceitasValor","decimal",0,"px",22,22,"right",null,[],2149,"OutrasDespesasReceitasValor",true,2,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",67,0,"px",17,"px","e19cl2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",68,0,"px",17,"px","e20cl2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",69,0,"px",17,"px","e21cl2_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(2147,70,"OUTRASDESPESASRECEITASSEQUENCI","Sequência","","OutrasDespesasReceitasSequenci","int",0,"px",3,3,"right",null,[],2147,"OutrasDespesasReceitasSequenci",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE9",grid:0};
   GXValidFnc[8]={fld:"TABLE10",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={fld:"TABLE12",grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Convenioid,isvalid:null,rgrid:[this.GridContainer],fld:"vCONVENIOID",gxz:"ZV27ConvenioId",gxold:"OV27ConvenioId",gxvar:"AV27ConvenioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27ConvenioId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27ConvenioId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONVENIOID",gx.O.AV27ConvenioId,0)},c2v:function(){gx.O.AV27ConvenioId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONVENIOID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONVENIODESCRICAO",gxz:"ZV39ConvenioDescricao",gxold:"OV39ConvenioDescricao",gxvar:"AV39ConvenioDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39ConvenioDescricao=Value},v2z:function(Value){gx.O.ZV39ConvenioDescricao=Value},v2c:function(){gx.fn.setControlValue("vCONVENIODESCRICAO",gx.O.AV39ConvenioDescricao,0)},c2v:function(){gx.O.AV39ConvenioDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCONVENIODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TXTTITAPL3", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vOUTRASDESPESASRECEITASTPLANCAM",gxz:"ZV28OutrasDespesasReceitasTpLancam",gxold:"OV28OutrasDespesasReceitasTpLancam",gxvar:"AV28OutrasDespesasReceitasTpLancam",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV28OutrasDespesasReceitasTpLancam=Value},v2z:function(Value){gx.O.ZV28OutrasDespesasReceitasTpLancam=Value},v2c:function(){gx.fn.setComboBoxValue("vOUTRASDESPESASRECEITASTPLANCAM",gx.O.AV28OutrasDespesasReceitasTpLancam)},c2v:function(){gx.O.AV28OutrasDespesasReceitasTpLancam=this.val()},val:function(){return gx.fn.getControlValue("vOUTRASDESPESASRECEITASTPLANCAM")},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[28]={fld:"TABLE11",grid:0};
   GXValidFnc[31]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vOUTRASDESPESASRECEITASDATAIN",gxz:"ZV29OutrasDespesasReceitasDataIn",gxold:"OV29OutrasDespesasReceitasDataIn",gxvar:"AV29OutrasDespesasReceitasDataIn",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29OutrasDespesasReceitasDataIn=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV29OutrasDespesasReceitasDataIn=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vOUTRASDESPESASRECEITASDATAIN",gx.O.AV29OutrasDespesasReceitasDataIn,0)},c2v:function(){gx.O.AV29OutrasDespesasReceitasDataIn=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vOUTRASDESPESASRECEITASDATAIN")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vOUTRASDESPESASRECEITASDATAFI",gxz:"ZV30OutrasDespesasReceitasDataFi",gxold:"OV30OutrasDespesasReceitasDataFi",gxvar:"AV30OutrasDespesasReceitasDataFi",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30OutrasDespesasReceitasDataFi=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV30OutrasDespesasReceitasDataFi=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vOUTRASDESPESASRECEITASDATAFI",gx.O.AV30OutrasDespesasReceitasDataFi,0)},c2v:function(){gx.O.AV30OutrasDespesasReceitasDataFi=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vOUTRASDESPESASRECEITASDATAFI")},nac:gx.falseFn};
   GXValidFnc[40]={fld:"TABLE4",grid:0};
   GXValidFnc[43]={fld:"TABLE8",grid:0};
   GXValidFnc[46]={fld:"IMAGE2",grid:0};
   GXValidFnc[48]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[50]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[52]={fld:"BTNHELP",grid:0};
   GXValidFnc[54]={fld:"TABLE5",grid:0};
   GXValidFnc[57]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[60]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[64]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:63,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"OUTRASDESPESASRECEITASDATA",gxz:"Z2146OutrasDespesasReceitasData",gxold:"O2146OutrasDespesasReceitasData",gxvar:"A2146OutrasDespesasReceitasData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2146OutrasDespesasReceitasData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2146OutrasDespesasReceitasData=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("OUTRASDESPESASRECEITASDATA",row || gx.fn.currentGridRowImpl(63),gx.O.A2146OutrasDespesasReceitasData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2146OutrasDespesasReceitasData=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("OUTRASDESPESASRECEITASDATA",row || gx.fn.currentGridRowImpl(63))},nac:gx.falseFn};
   GXValidFnc[65]={lvl:2,type:"svchar",len:50,dec:0,sign:false,ro:1,isacc:0,grid:63,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"OUTRASDESPESASRECEITASDESCRICA",gxz:"Z2148OutrasDespesasReceitasDescrica",gxold:"O2148OutrasDespesasReceitasDescrica",gxvar:"A2148OutrasDespesasReceitasDescrica",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2148OutrasDespesasReceitasDescrica=Value},v2z:function(Value){gx.O.Z2148OutrasDespesasReceitasDescrica=Value},v2c:function(row){gx.fn.setGridControlValue("OUTRASDESPESASRECEITASDESCRICA",row || gx.fn.currentGridRowImpl(63),gx.O.A2148OutrasDespesasReceitasDescrica,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2148OutrasDespesasReceitasDescrica=this.val()},val:function(row){return gx.fn.getGridControlValue("OUTRASDESPESASRECEITASDESCRICA",row || gx.fn.currentGridRowImpl(63))},nac:gx.falseFn};
   GXValidFnc[66]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:63,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"OUTRASDESPESASRECEITASVALOR",gxz:"Z2149OutrasDespesasReceitasValor",gxold:"O2149OutrasDespesasReceitasValor",gxvar:"A2149OutrasDespesasReceitasValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2149OutrasDespesasReceitasValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2149OutrasDespesasReceitasValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("OUTRASDESPESASRECEITASVALOR",row || gx.fn.currentGridRowImpl(63),gx.O.A2149OutrasDespesasReceitasValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2149OutrasDespesasReceitasValor=this.val()},val:function(row){return gx.fn.getGridDecimalValue("OUTRASDESPESASRECEITASVALOR",row || gx.fn.currentGridRowImpl(63),'.',',')},nac:gx.falseFn};
   GXValidFnc[67]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:63,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(63),gx.O.AV7bmpAlt,gx.O.AV46Bmpalt_GXI)},c2v:function(){gx.O.AV46Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(63))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(63))}, gxvar_GXI:'AV46Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[68]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:63,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(63),gx.O.AV8bmpExc,gx.O.AV47Bmpexc_GXI)},c2v:function(){gx.O.AV47Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(63))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(63))}, gxvar_GXI:'AV47Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[69]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:63,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(63),gx.O.AV16bmpCon,gx.O.AV48Bmpcon_GXI)},c2v:function(){gx.O.AV48Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(63))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(63))}, gxvar_GXI:'AV48Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[70]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:63,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"OUTRASDESPESASRECEITASSEQUENCI",gxz:"Z2147OutrasDespesasReceitasSequenci",gxold:"O2147OutrasDespesasReceitasSequenci",gxvar:"A2147OutrasDespesasReceitasSequenci",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2147OutrasDespesasReceitasSequenci=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2147OutrasDespesasReceitasSequenci=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("OUTRASDESPESASRECEITASSEQUENCI",row || gx.fn.currentGridRowImpl(63),gx.O.A2147OutrasDespesasReceitasSequenci,0)},c2v:function(){gx.O.A2147OutrasDespesasReceitasSequenci=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("OUTRASDESPESASRECEITASSEQUENCI",row || gx.fn.currentGridRowImpl(63),'.')},nac:gx.falseFn};
   GXValidFnc[76]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[78]={fld:"JSJSON", format:2,grid:0};
   GXValidFnc[79]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMPRESACONVENIO",gxz:"ZV36EmpresaConvenio",gxold:"OV36EmpresaConvenio",gxvar:"AV36EmpresaConvenio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36EmpresaConvenio=Value},v2z:function(Value){gx.O.ZV36EmpresaConvenio=Value},v2c:function(){gx.fn.setControlValue("vEMPRESACONVENIO",gx.O.AV36EmpresaConvenio,0)},c2v:function(){gx.O.AV36EmpresaConvenio=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESACONVENIO")},nac:gx.falseFn};
   GXValidFnc[80]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDE",gxz:"ZV41Qtde",gxold:"OV41Qtde",gxvar:"AV41Qtde",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41Qtde=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV41Qtde=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDE",gx.O.AV41Qtde,0)},c2v:function(){gx.O.AV41Qtde=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDE",'.')},nac:gx.falseFn};
   GXValidFnc[81]={fld:"PROMPT_CONVENIOID",grid:0};
   this.AV27ConvenioId = 0 ;
   this.ZV27ConvenioId = 0 ;
   this.OV27ConvenioId = 0 ;
   this.AV39ConvenioDescricao = "" ;
   this.ZV39ConvenioDescricao = "" ;
   this.OV39ConvenioDescricao = "" ;
   this.AV28OutrasDespesasReceitasTpLancam = "" ;
   this.ZV28OutrasDespesasReceitasTpLancam = "" ;
   this.OV28OutrasDespesasReceitasTpLancam = "" ;
   this.AV29OutrasDespesasReceitasDataIn = gx.date.nullDate() ;
   this.ZV29OutrasDespesasReceitasDataIn = gx.date.nullDate() ;
   this.OV29OutrasDespesasReceitasDataIn = gx.date.nullDate() ;
   this.AV30OutrasDespesasReceitasDataFi = gx.date.nullDate() ;
   this.ZV30OutrasDespesasReceitasDataFi = gx.date.nullDate() ;
   this.OV30OutrasDespesasReceitasDataFi = gx.date.nullDate() ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z2146OutrasDespesasReceitasData = gx.date.nullDate() ;
   this.O2146OutrasDespesasReceitasData = gx.date.nullDate() ;
   this.Z2148OutrasDespesasReceitasDescrica = "" ;
   this.O2148OutrasDespesasReceitasDescrica = "" ;
   this.Z2149OutrasDespesasReceitasValor = 0 ;
   this.O2149OutrasDespesasReceitasValor = 0 ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z2147OutrasDespesasReceitasSequenci = 0 ;
   this.O2147OutrasDespesasReceitasSequenci = 0 ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV36EmpresaConvenio = "" ;
   this.ZV36EmpresaConvenio = "" ;
   this.OV36EmpresaConvenio = "" ;
   this.AV41Qtde = 0 ;
   this.ZV41Qtde = 0 ;
   this.OV41Qtde = 0 ;
   this.AV27ConvenioId = 0 ;
   this.AV39ConvenioDescricao = "" ;
   this.AV28OutrasDespesasReceitasTpLancam = "" ;
   this.AV29OutrasDespesasReceitasDataIn = gx.date.nullDate() ;
   this.AV30OutrasDespesasReceitasDataFi = gx.date.nullDate() ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.AV36EmpresaConvenio = "" ;
   this.AV41Qtde = 0 ;
   this.A2145OutrasDespesasReceitasTpLancam = "" ;
   this.A1681ConvenioId = 0 ;
   this.A1680ConvenioEmpresaId = "" ;
   this.A2146OutrasDespesasReceitasData = gx.date.nullDate() ;
   this.A2148OutrasDespesasReceitasDescrica = "" ;
   this.A2149OutrasDespesasReceitasValor = 0 ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A2147OutrasDespesasReceitasSequenci = 0 ;
   this.AV17EmpresaPadrao = "" ;
   this.AV40SnRecuperaFiltro = "" ;
   this.Events = {"e11cl2_client": ["'ANTERIOR'", true] ,"e12cl2_client": ["'PROXIMO'", true] ,"e16cl2_client": ["VPAGINA.CLICK", true] ,"e13cl2_client": ["'NOVO'", true] ,"e14cl2_client": ["'FECHAR'", true] ,"e15cl2_client": ["'PROCURAR'", true] ,"e19cl2_client": ["'ALTERAR'", true] ,"e20cl2_client": ["'EXCLUIR'", true] ,"e21cl2_client": ["'CONSULTAR'", true] ,"e22cl2_client": ["'ATUALIZAPAGINA'", true] ,"e24cl2_client": ["ENTER", true] ,"e25cl2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ConvenioId',fld:'vCONVENIOID'},{av:'AV28OutrasDespesasReceitasTpLancam',fld:'vOUTRASDESPESASRECEITASTPLANCAM'},{av:'AV29OutrasDespesasReceitasDataIn',fld:'vOUTRASDESPESASRECEITASDATAIN'},{av:'AV30OutrasDespesasReceitasDataFi',fld:'vOUTRASDESPESASRECEITASDATAFI'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV40SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ConvenioId',fld:'vCONVENIOID'},{av:'AV28OutrasDespesasReceitasTpLancam',fld:'vOUTRASDESPESASRECEITASTPLANCAM'},{av:'AV29OutrasDespesasReceitasDataIn',fld:'vOUTRASDESPESASRECEITASDATAIN'},{av:'AV30OutrasDespesasReceitasDataFi',fld:'vOUTRASDESPESASRECEITASDATAFI'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV40SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[{ctrl:'OUTRASDESPESASRECEITASDATA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("OUTRASDESPESASRECEITASDATA","Title")',ctrl:'OUTRASDESPESASRECEITASDATA',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'OUTRASDESPESASRECEITASDESCRICA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("OUTRASDESPESASRECEITASDESCRICA","Title")',ctrl:'OUTRASDESPESASRECEITASDESCRICA',prop:'Title'},{ctrl:'OUTRASDESPESASRECEITASVALOR',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("OUTRASDESPESASRECEITASVALOR","Title")',ctrl:'OUTRASDESPESASRECEITASVALOR',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV40SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27ConvenioId',fld:'vCONVENIOID'},{av:'AV39ConvenioDescricao',fld:'vCONVENIODESCRICAO'},{av:'AV28OutrasDespesasReceitasTpLancam',fld:'vOUTRASDESPESASRECEITASTPLANCAM'},{av:'AV29OutrasDespesasReceitasDataIn',fld:'vOUTRASDESPESASRECEITASDATAIN'},{av:'AV30OutrasDespesasReceitasDataFi',fld:'vOUTRASDESPESASRECEITASDATAFI'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ConvenioId',fld:'vCONVENIOID'},{av:'AV28OutrasDespesasReceitasTpLancam',fld:'vOUTRASDESPESASRECEITASTPLANCAM'},{av:'AV29OutrasDespesasReceitasDataIn',fld:'vOUTRASDESPESASRECEITASDATAIN'},{av:'AV30OutrasDespesasReceitasDataFi',fld:'vOUTRASDESPESASRECEITASDATAFI'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV40SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV39ConvenioDescricao',fld:'vCONVENIODESCRICAO'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ConvenioId',fld:'vCONVENIOID'},{av:'AV28OutrasDespesasReceitasTpLancam',fld:'vOUTRASDESPESASRECEITASTPLANCAM'},{av:'AV29OutrasDespesasReceitasDataIn',fld:'vOUTRASDESPESASRECEITASDATAIN'},{av:'AV30OutrasDespesasReceitasDataFi',fld:'vOUTRASDESPESASRECEITASDATAFI'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV40SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV39ConvenioDescricao',fld:'vCONVENIODESCRICAO'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ConvenioId',fld:'vCONVENIOID'},{av:'AV28OutrasDespesasReceitasTpLancam',fld:'vOUTRASDESPESASRECEITASTPLANCAM'},{av:'AV29OutrasDespesasReceitasDataIn',fld:'vOUTRASDESPESASRECEITASDATAIN'},{av:'AV30OutrasDespesasReceitasDataFi',fld:'vOUTRASDESPESASRECEITASDATAFI'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV40SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV39ConvenioDescricao',fld:'vCONVENIODESCRICAO'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV31tpErro',fld:'vTPERRO'},{av:'Gx_date',fld:'vTODAY'},{av:'AV27ConvenioId',fld:'vCONVENIOID'},{av:'AV39ConvenioDescricao',fld:'vCONVENIODESCRICAO'},{av:'AV28OutrasDespesasReceitasTpLancam',fld:'vOUTRASDESPESASRECEITASTPLANCAM'},{av:'A1680ConvenioEmpresaId',fld:'CONVENIOEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A1681ConvenioId',fld:'CONVENIOID'},{av:'AV29OutrasDespesasReceitasDataIn',fld:'vOUTRASDESPESASRECEITASDATAIN'},{av:'AV30OutrasDespesasReceitasDataFi',fld:'vOUTRASDESPESASRECEITASDATAFI'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'AV35Data',fld:'vDATA'},{av:'AV28OutrasDespesasReceitasTpLancam',fld:'vOUTRASDESPESASRECEITASTPLANCAM'},{av:'AV39ConvenioDescricao',fld:'vCONVENIODESCRICAO'},{av:'AV27ConvenioId',fld:'vCONVENIOID'},{av:'AV31tpErro',fld:'vTPERRO'},{av:'AV50GXLvl245',fld:'vGXLVL245'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ConvenioId',fld:'vCONVENIOID'},{av:'AV28OutrasDespesasReceitasTpLancam',fld:'vOUTRASDESPESASRECEITASTPLANCAM'},{av:'AV29OutrasDespesasReceitasDataIn',fld:'vOUTRASDESPESASRECEITASDATAIN'},{av:'AV30OutrasDespesasReceitasDataFi',fld:'vOUTRASDESPESASRECEITASDATAFI'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV40SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV31tpErro',fld:'vTPERRO'},{av:'A1680ConvenioEmpresaId',fld:'CONVENIOEMPRESAID'},{av:'A1681ConvenioId',fld:'CONVENIOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV39ConvenioDescricao',fld:'vCONVENIODESCRICAO'}],[{av:'gx.fn.getCtrlProperty("IMAGE2","Enabled")',ctrl:'IMAGE2',prop:'Enabled'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV31tpErro',fld:'vTPERRO'},{av:'AV50GXLvl245',fld:'vGXLVL245'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'AV27ConvenioId',fld:'vCONVENIOID'},{av:'AV39ConvenioDescricao',fld:'vCONVENIODESCRICAO'},{av:'AV28OutrasDespesasReceitasTpLancam',fld:'vOUTRASDESPESASRECEITASTPLANCAM'},{av:'A2146OutrasDespesasReceitasData',fld:'OUTRASDESPESASRECEITASDATA'},{av:'A2147OutrasDespesasReceitasSequenci',fld:'OUTRASDESPESASRECEITASSEQUENCI'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV29OutrasDespesasReceitasDataIn',fld:'vOUTRASDESPESASRECEITASDATAIN'},{av:'AV30OutrasDespesasReceitasDataFi',fld:'vOUTRASDESPESASRECEITASDATAFI'}],[{av:'A2147OutrasDespesasReceitasSequenci',fld:'OUTRASDESPESASRECEITASSEQUENCI'},{av:'A2146OutrasDespesasReceitasData',fld:'OUTRASDESPESASRECEITASDATA'},{av:'AV28OutrasDespesasReceitasTpLancam',fld:'vOUTRASDESPESASRECEITASTPLANCAM'},{av:'AV39ConvenioDescricao',fld:'vCONVENIODESCRICAO'},{av:'AV27ConvenioId',fld:'vCONVENIOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'AV27ConvenioId',fld:'vCONVENIOID'},{av:'AV39ConvenioDescricao',fld:'vCONVENIODESCRICAO'},{av:'AV28OutrasDespesasReceitasTpLancam',fld:'vOUTRASDESPESASRECEITASTPLANCAM'},{av:'A2146OutrasDespesasReceitasData',fld:'OUTRASDESPESASRECEITASDATA'},{av:'A2147OutrasDespesasReceitasSequenci',fld:'OUTRASDESPESASRECEITASSEQUENCI'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV29OutrasDespesasReceitasDataIn',fld:'vOUTRASDESPESASRECEITASDATAIN'},{av:'AV30OutrasDespesasReceitasDataFi',fld:'vOUTRASDESPESASRECEITASDATAFI'}],[{av:'A2147OutrasDespesasReceitasSequenci',fld:'OUTRASDESPESASRECEITASSEQUENCI'},{av:'A2146OutrasDespesasReceitasData',fld:'OUTRASDESPESASRECEITASDATA'},{av:'AV28OutrasDespesasReceitasTpLancam',fld:'vOUTRASDESPESASRECEITASTPLANCAM'},{av:'AV39ConvenioDescricao',fld:'vCONVENIODESCRICAO'},{av:'AV27ConvenioId',fld:'vCONVENIOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'AV27ConvenioId',fld:'vCONVENIOID'},{av:'AV39ConvenioDescricao',fld:'vCONVENIODESCRICAO'},{av:'AV28OutrasDespesasReceitasTpLancam',fld:'vOUTRASDESPESASRECEITASTPLANCAM'},{av:'A2146OutrasDespesasReceitasData',fld:'OUTRASDESPESASRECEITASDATA'},{av:'A2147OutrasDespesasReceitasSequenci',fld:'OUTRASDESPESASRECEITASSEQUENCI'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV29OutrasDespesasReceitasDataIn',fld:'vOUTRASDESPESASRECEITASDATAIN'},{av:'AV30OutrasDespesasReceitasDataFi',fld:'vOUTRASDESPESASRECEITASDATAFI'}],[{av:'A2147OutrasDespesasReceitasSequenci',fld:'OUTRASDESPESASRECEITASSEQUENCI'},{av:'A2146OutrasDespesasReceitasData',fld:'OUTRASDESPESASRECEITASDATA'},{av:'AV28OutrasDespesasReceitasTpLancam',fld:'vOUTRASDESPESASRECEITASTPLANCAM'},{av:'AV39ConvenioDescricao',fld:'vCONVENIODESCRICAO'},{av:'AV27ConvenioId',fld:'vCONVENIOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ConvenioId',fld:'vCONVENIOID'},{av:'AV28OutrasDespesasReceitasTpLancam',fld:'vOUTRASDESPESASRECEITASTPLANCAM'},{av:'AV29OutrasDespesasReceitasDataIn',fld:'vOUTRASDESPESASRECEITASDATAIN'},{av:'AV30OutrasDespesasReceitasDataFi',fld:'vOUTRASDESPESASRECEITASDATAFI'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV40SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.setPrompt("PROMPT_CONVENIOID", [16]);
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV40SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV40SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[16]);
   GridContainer.addRefreshingVar(this.GXValidFnc[23]);
   GridContainer.addRefreshingVar(this.GXValidFnc[31]);
   GridContainer.addRefreshingVar(this.GXValidFnc[35]);
   GridContainer.addRefreshingVar(this.GXValidFnc[76]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV40SnRecuperaFiltro"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new houtrasdespesasreceitas());
