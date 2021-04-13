/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:38:3.36
*/
gx.evt.autoSkip = false;
gx.define('hremessaretorno', false, function () {
   this.ServerClass =  "hremessaretorno" ;
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
      this.AV32SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
   };
   this.e11j02_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12j02_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e16j02_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13j02_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14j02_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15j02_client=function()
   {
      this.executeServerEvent("'PROCURAR'", true, arguments[0], false, false);
   };
   this.e21j02_client=function()
   {
      this.executeServerEvent("'OCORRENCIA'", true, arguments[0], false, false);
   };
   this.e22j02_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e23j02_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e24j02_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e17j02_client=function()
   {
      this.executeServerEvent("'COPIAR'", true, null, false, false);
   };
   this.e25j02_client=function()
   {
      this.executeServerEvent("'SUBIR'", true, arguments[0], false, false);
   };
   this.e26j02_client=function()
   {
      this.executeServerEvent("'DESCER'", true, arguments[0], false, false);
   };
   this.e27j02_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e28j02_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e29j02_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,15,17,19,21,24,26,27,31,32,33,34,35,36,37,38,39,40,41,42,48];
   this.GXLastCtrlId =48;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",30,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hremessaretorno",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(2785,31,"REMESSARETORNOID","","","RemessaRetornoId","int",0,"px",4,4,"right",null,[],2785,"RemessaRetornoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2786,32,"REMESSARETORNODESCRICAO","","","RemessaRetornoDescricao","svchar",0,"px",40,40,"left",null,[],2786,"RemessaRetornoDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2787,33,"REMESSARETORNOTAMANHO","","","RemessaRetornoTamanho","int",0,"px",4,4,"right",null,[],2787,"RemessaRetornoTamanho",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2782,34,"REMESSARETORNOBANCODESC","","","RemessaRetornoBancoDesc","svchar",0,"px",25,25,"left",null,[],2782,"RemessaRetornoBancoDesc",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addComboBox(2792,35,"REMESSARETORNOTIPO","","RemessaRetornoTipo","char",null,0,true,false,0,"px","");
   GridContainer.addBitmap("&Bmplay","vBMPLAY",36,0,"px",17,"px",null,"","Layout","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpoco","vBMPOCO",37,0,"px",17,"px","e21j02_client","","Ocorrência","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",38,0,"px",17,"px","e22j02_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",39,0,"px",17,"px","e23j02_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",40,0,"px",17,"px","e24j02_client","","Consultar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpsobe","vBMPSOBE",41,0,"px",17,"px","e25j02_client","","Sobe","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpdesc","vBMPDESC",42,0,"px",17,"px","e26j02_client","","Desce","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE4",grid:0};
   GXValidFnc[8]={fld:"TABLE3",grid:0};
   GXValidFnc[11]={fld:"IMAGE2",grid:0};
   GXValidFnc[13]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[15]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[17]={fld:"BTNHELP",grid:0};
   GXValidFnc[19]={fld:"IMAGE1",grid:0};
   GXValidFnc[21]={fld:"TABLE5",grid:0};
   GXValidFnc[24]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[27]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[31]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"REMESSARETORNOID",gxz:"Z2785RemessaRetornoId",gxold:"O2785RemessaRetornoId",gxvar:"A2785RemessaRetornoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2785RemessaRetornoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2785RemessaRetornoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("REMESSARETORNOID",row || gx.fn.currentGridRowImpl(30),gx.O.A2785RemessaRetornoId,0)},c2v:function(){gx.O.A2785RemessaRetornoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("REMESSARETORNOID",row || gx.fn.currentGridRowImpl(30),'.')},nac:gx.falseFn};
   GXValidFnc[32]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"REMESSARETORNODESCRICAO",gxz:"Z2786RemessaRetornoDescricao",gxold:"O2786RemessaRetornoDescricao",gxvar:"A2786RemessaRetornoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2786RemessaRetornoDescricao=Value},v2z:function(Value){gx.O.Z2786RemessaRetornoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("REMESSARETORNODESCRICAO",row || gx.fn.currentGridRowImpl(30),gx.O.A2786RemessaRetornoDescricao,0)},c2v:function(){gx.O.A2786RemessaRetornoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("REMESSARETORNODESCRICAO",row || gx.fn.currentGridRowImpl(30))},nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"REMESSARETORNOTAMANHO",gxz:"Z2787RemessaRetornoTamanho",gxold:"O2787RemessaRetornoTamanho",gxvar:"A2787RemessaRetornoTamanho",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2787RemessaRetornoTamanho=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2787RemessaRetornoTamanho=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("REMESSARETORNOTAMANHO",row || gx.fn.currentGridRowImpl(30),gx.O.A2787RemessaRetornoTamanho,0)},c2v:function(){gx.O.A2787RemessaRetornoTamanho=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("REMESSARETORNOTAMANHO",row || gx.fn.currentGridRowImpl(30),'.')},nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"REMESSARETORNOBANCODESC",gxz:"Z2782RemessaRetornoBancoDesc",gxold:"O2782RemessaRetornoBancoDesc",gxvar:"A2782RemessaRetornoBancoDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2782RemessaRetornoBancoDesc=Value},v2z:function(Value){gx.O.Z2782RemessaRetornoBancoDesc=Value},v2c:function(row){gx.fn.setGridControlValue("REMESSARETORNOBANCODESC",row || gx.fn.currentGridRowImpl(30),gx.O.A2782RemessaRetornoBancoDesc,0)},c2v:function(){gx.O.A2782RemessaRetornoBancoDesc=this.val()},val:function(row){return gx.fn.getGridControlValue("REMESSARETORNOBANCODESC",row || gx.fn.currentGridRowImpl(30))},nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"REMESSARETORNOTIPO",gxz:"Z2792RemessaRetornoTipo",gxold:"O2792RemessaRetornoTipo",gxvar:"A2792RemessaRetornoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A2792RemessaRetornoTipo=Value},v2z:function(Value){gx.O.Z2792RemessaRetornoTipo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("REMESSARETORNOTIPO",row || gx.fn.currentGridRowImpl(30),gx.O.A2792RemessaRetornoTipo)},c2v:function(){gx.O.A2792RemessaRetornoTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("REMESSARETORNOTIPO",row || gx.fn.currentGridRowImpl(30))},nac:gx.falseFn};
   GXValidFnc[36]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPLAY",gxz:"ZV27bmpLay",gxold:"OV27bmpLay",gxvar:"AV27bmpLay",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV27bmpLay=Value},v2z:function(Value){gx.O.ZV27bmpLay=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPLAY",row || gx.fn.currentGridRowImpl(30),gx.O.AV27bmpLay,gx.O.AV43Bmplay_GXI)},c2v:function(){gx.O.AV43Bmplay_GXI=this.val_GXI();gx.O.AV27bmpLay=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPLAY",row || gx.fn.currentGridRowImpl(30))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPLAY_GXI",row || gx.fn.currentGridRowImpl(30))}, gxvar_GXI:'AV43Bmplay_GXI',nac:gx.falseFn};
   GXValidFnc[37]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPOCO",gxz:"ZV28bmpOco",gxold:"OV28bmpOco",gxvar:"AV28bmpOco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV28bmpOco=Value},v2z:function(Value){gx.O.ZV28bmpOco=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPOCO",row || gx.fn.currentGridRowImpl(30),gx.O.AV28bmpOco,gx.O.AV39Bmpoco_GXI)},c2v:function(){gx.O.AV39Bmpoco_GXI=this.val_GXI();gx.O.AV28bmpOco=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPOCO",row || gx.fn.currentGridRowImpl(30))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPOCO_GXI",row || gx.fn.currentGridRowImpl(30))}, gxvar_GXI:'AV39Bmpoco_GXI',nac:gx.falseFn};
   GXValidFnc[38]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(30),gx.O.AV7bmpAlt,gx.O.AV37Bmpalt_GXI)},c2v:function(){gx.O.AV37Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(30))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(30))}, gxvar_GXI:'AV37Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[39]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(30),gx.O.AV8bmpExc,gx.O.AV42Bmpexc_GXI)},c2v:function(){gx.O.AV42Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(30))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(30))}, gxvar_GXI:'AV42Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[40]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(30),gx.O.AV16bmpCon,gx.O.AV38Bmpcon_GXI)},c2v:function(){gx.O.AV38Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(30))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(30))}, gxvar_GXI:'AV38Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[41]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPSOBE",gxz:"ZV29bmpSobe",gxold:"OV29bmpSobe",gxvar:"AV29bmpSobe",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV29bmpSobe=Value},v2z:function(Value){gx.O.ZV29bmpSobe=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPSOBE",row || gx.fn.currentGridRowImpl(30),gx.O.AV29bmpSobe,gx.O.AV40Bmpsobe_GXI)},c2v:function(){gx.O.AV40Bmpsobe_GXI=this.val_GXI();gx.O.AV29bmpSobe=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPSOBE",row || gx.fn.currentGridRowImpl(30))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPSOBE_GXI",row || gx.fn.currentGridRowImpl(30))}, gxvar_GXI:'AV40Bmpsobe_GXI',nac:gx.falseFn};
   GXValidFnc[42]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPDESC",gxz:"ZV30bmpDesc",gxold:"OV30bmpDesc",gxvar:"AV30bmpDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV30bmpDesc=Value},v2z:function(Value){gx.O.ZV30bmpDesc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPDESC",row || gx.fn.currentGridRowImpl(30),gx.O.AV30bmpDesc,gx.O.AV41Bmpdesc_GXI)},c2v:function(){gx.O.AV41Bmpdesc_GXI=this.val_GXI();gx.O.AV30bmpDesc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPDESC",row || gx.fn.currentGridRowImpl(30))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPDESC_GXI",row || gx.fn.currentGridRowImpl(30))}, gxvar_GXI:'AV41Bmpdesc_GXI',nac:gx.falseFn};
   GXValidFnc[48]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z2785RemessaRetornoId = 0 ;
   this.O2785RemessaRetornoId = 0 ;
   this.Z2786RemessaRetornoDescricao = "" ;
   this.O2786RemessaRetornoDescricao = "" ;
   this.Z2787RemessaRetornoTamanho = 0 ;
   this.O2787RemessaRetornoTamanho = 0 ;
   this.Z2782RemessaRetornoBancoDesc = "" ;
   this.O2782RemessaRetornoBancoDesc = "" ;
   this.Z2792RemessaRetornoTipo = "" ;
   this.O2792RemessaRetornoTipo = "" ;
   this.ZV27bmpLay = "" ;
   this.OV27bmpLay = "" ;
   this.ZV28bmpOco = "" ;
   this.OV28bmpOco = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.ZV29bmpSobe = "" ;
   this.OV29bmpSobe = "" ;
   this.ZV30bmpDesc = "" ;
   this.OV30bmpDesc = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A2784RemessaRetornoEmpresaId = "" ;
   this.A2783RemessaRetornoBancoEmpId = "" ;
   this.A2781RemessaRetornoBancoId = 0 ;
   this.A2785RemessaRetornoId = 0 ;
   this.A2786RemessaRetornoDescricao = "" ;
   this.A2787RemessaRetornoTamanho = 0 ;
   this.A2782RemessaRetornoBancoDesc = "" ;
   this.A2792RemessaRetornoTipo = "" ;
   this.AV27bmpLay = "" ;
   this.AV28bmpOco = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.AV29bmpSobe = "" ;
   this.AV30bmpDesc = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.AV32SnRecuperaFiltro = "" ;
   this.Events = {"e11j02_client": ["'ANTERIOR'", true] ,"e12j02_client": ["'PROXIMO'", true] ,"e16j02_client": ["VPAGINA.CLICK", true] ,"e13j02_client": ["'NOVO'", true] ,"e14j02_client": ["'FECHAR'", true] ,"e15j02_client": ["'PROCURAR'", true] ,"e21j02_client": ["'OCORRENCIA'", true] ,"e22j02_client": ["'ALTERAR'", true] ,"e23j02_client": ["'EXCLUIR'", true] ,"e24j02_client": ["'CONSULTAR'", true] ,"e17j02_client": ["'COPIAR'", true] ,"e25j02_client": ["'SUBIR'", true] ,"e26j02_client": ["'DESCER'", true] ,"e27j02_client": ["'ATUALIZAPAGINA'", true] ,"e28j02_client": ["ENTER", true] ,"e29j02_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV28bmpOco',fld:'vBMPOCO'},{av:'gx.fn.getCtrlProperty("vBMPOCO","Tooltiptext")',ctrl:'vBMPOCO',prop:'Tooltiptext'},{av:'AV29bmpSobe',fld:'vBMPSOBE'},{av:'gx.fn.getCtrlProperty("vBMPSOBE","Tooltiptext")',ctrl:'vBMPSOBE',prop:'Tooltiptext'},{av:'AV30bmpDesc',fld:'vBMPDESC'},{av:'gx.fn.getCtrlProperty("vBMPDESC","Tooltiptext")',ctrl:'vBMPDESC',prop:'Tooltiptext'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2785RemessaRetornoId',fld:'REMESSARETORNOID'},{av:'A2786RemessaRetornoDescricao',fld:'REMESSARETORNODESCRICAO'},{av:'A2787RemessaRetornoTamanho',fld:'REMESSARETORNOTAMANHO'},{av:'A2792RemessaRetornoTipo',fld:'REMESSARETORNOTIPO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV28bmpOco',fld:'vBMPOCO'},{av:'gx.fn.getCtrlProperty("vBMPOCO","Tooltiptext")',ctrl:'vBMPOCO',prop:'Tooltiptext'},{av:'AV29bmpSobe',fld:'vBMPSOBE'},{av:'gx.fn.getCtrlProperty("vBMPSOBE","Tooltiptext")',ctrl:'vBMPSOBE',prop:'Tooltiptext'},{av:'AV30bmpDesc',fld:'vBMPDESC'},{av:'gx.fn.getCtrlProperty("vBMPDESC","Tooltiptext")',ctrl:'vBMPDESC',prop:'Tooltiptext'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2785RemessaRetornoId',fld:'REMESSARETORNOID'},{av:'A2786RemessaRetornoDescricao',fld:'REMESSARETORNODESCRICAO'},{av:'A2787RemessaRetornoTamanho',fld:'REMESSARETORNOTAMANHO'},{av:'A2792RemessaRetornoTipo',fld:'REMESSARETORNOTIPO'}],[{ctrl:'REMESSARETORNOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("REMESSARETORNOID","Title")',ctrl:'REMESSARETORNOID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'REMESSARETORNODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("REMESSARETORNODESCRICAO","Title")',ctrl:'REMESSARETORNODESCRICAO',prop:'Title'},{ctrl:'REMESSARETORNOTAMANHO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("REMESSARETORNOTAMANHO","Title")',ctrl:'REMESSARETORNOTAMANHO',prop:'Title'},{ctrl:'REMESSARETORNOBANCODESC',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("REMESSARETORNOBANCODESC","Title")',ctrl:'REMESSARETORNOBANCODESC',prop:'Title'},{ctrl:'REMESSARETORNOTIPO'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A2785RemessaRetornoId',fld:'REMESSARETORNOID'},{av:'A2786RemessaRetornoDescricao',fld:'REMESSARETORNODESCRICAO'},{av:'A2787RemessaRetornoTamanho',fld:'REMESSARETORNOTAMANHO'},{av:'A2792RemessaRetornoTipo',fld:'REMESSARETORNOTIPO'}],[{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV27bmpLay',fld:'vBMPLAY'},{av:'gx.fn.getCtrlProperty("vBMPLAY","Tooltiptext")',ctrl:'vBMPLAY',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPLAY","Link")',ctrl:'vBMPLAY',prop:'Link'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV28bmpOco',fld:'vBMPOCO'},{av:'gx.fn.getCtrlProperty("vBMPOCO","Tooltiptext")',ctrl:'vBMPOCO',prop:'Tooltiptext'},{av:'AV29bmpSobe',fld:'vBMPSOBE'},{av:'gx.fn.getCtrlProperty("vBMPSOBE","Tooltiptext")',ctrl:'vBMPSOBE',prop:'Tooltiptext'},{av:'AV30bmpDesc',fld:'vBMPDESC'},{av:'gx.fn.getCtrlProperty("vBMPDESC","Tooltiptext")',ctrl:'vBMPDESC',prop:'Tooltiptext'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2785RemessaRetornoId',fld:'REMESSARETORNOID'},{av:'A2786RemessaRetornoDescricao',fld:'REMESSARETORNODESCRICAO'},{av:'A2787RemessaRetornoTamanho',fld:'REMESSARETORNOTAMANHO'},{av:'A2792RemessaRetornoTipo',fld:'REMESSARETORNOTIPO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV28bmpOco',fld:'vBMPOCO'},{av:'gx.fn.getCtrlProperty("vBMPOCO","Tooltiptext")',ctrl:'vBMPOCO',prop:'Tooltiptext'},{av:'AV29bmpSobe',fld:'vBMPSOBE'},{av:'gx.fn.getCtrlProperty("vBMPSOBE","Tooltiptext")',ctrl:'vBMPSOBE',prop:'Tooltiptext'},{av:'AV30bmpDesc',fld:'vBMPDESC'},{av:'gx.fn.getCtrlProperty("vBMPDESC","Tooltiptext")',ctrl:'vBMPDESC',prop:'Tooltiptext'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2785RemessaRetornoId',fld:'REMESSARETORNOID'},{av:'A2786RemessaRetornoDescricao',fld:'REMESSARETORNODESCRICAO'},{av:'A2787RemessaRetornoTamanho',fld:'REMESSARETORNOTAMANHO'},{av:'A2792RemessaRetornoTipo',fld:'REMESSARETORNOTIPO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV28bmpOco',fld:'vBMPOCO'},{av:'gx.fn.getCtrlProperty("vBMPOCO","Tooltiptext")',ctrl:'vBMPOCO',prop:'Tooltiptext'},{av:'AV29bmpSobe',fld:'vBMPSOBE'},{av:'gx.fn.getCtrlProperty("vBMPSOBE","Tooltiptext")',ctrl:'vBMPSOBE',prop:'Tooltiptext'},{av:'AV30bmpDesc',fld:'vBMPDESC'},{av:'gx.fn.getCtrlProperty("vBMPDESC","Tooltiptext")',ctrl:'vBMPDESC',prop:'Tooltiptext'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2785RemessaRetornoId',fld:'REMESSARETORNOID'},{av:'A2786RemessaRetornoDescricao',fld:'REMESSARETORNODESCRICAO'},{av:'A2787RemessaRetornoTamanho',fld:'REMESSARETORNOTAMANHO'},{av:'A2792RemessaRetornoTipo',fld:'REMESSARETORNOTIPO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV28bmpOco',fld:'vBMPOCO'},{av:'gx.fn.getCtrlProperty("vBMPOCO","Tooltiptext")',ctrl:'vBMPOCO',prop:'Tooltiptext'},{av:'AV29bmpSobe',fld:'vBMPSOBE'},{av:'gx.fn.getCtrlProperty("vBMPSOBE","Tooltiptext")',ctrl:'vBMPSOBE',prop:'Tooltiptext'},{av:'AV30bmpDesc',fld:'vBMPDESC'},{av:'gx.fn.getCtrlProperty("vBMPDESC","Tooltiptext")',ctrl:'vBMPDESC',prop:'Tooltiptext'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2785RemessaRetornoId',fld:'REMESSARETORNOID'},{av:'A2786RemessaRetornoDescricao',fld:'REMESSARETORNODESCRICAO'},{av:'A2787RemessaRetornoTamanho',fld:'REMESSARETORNOTAMANHO'},{av:'A2792RemessaRetornoTipo',fld:'REMESSARETORNOTIPO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'OCORRENCIA'"] = [[{av:'A2785RemessaRetornoId',fld:'REMESSARETORNOID'},{av:'A2786RemessaRetornoDescricao',fld:'REMESSARETORNODESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A2786RemessaRetornoDescricao',fld:'REMESSARETORNODESCRICAO'},{av:'A2785RemessaRetornoId',fld:'REMESSARETORNOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A2785RemessaRetornoId',fld:'REMESSARETORNOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A2785RemessaRetornoId',fld:'REMESSARETORNOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A2785RemessaRetornoId',fld:'REMESSARETORNOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'AV23filtros',fld:'vFILTROS'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A2785RemessaRetornoId',fld:'REMESSARETORNOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A2785RemessaRetornoId',fld:'REMESSARETORNOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'COPIAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV28bmpOco',fld:'vBMPOCO'},{av:'gx.fn.getCtrlProperty("vBMPOCO","Tooltiptext")',ctrl:'vBMPOCO',prop:'Tooltiptext'},{av:'AV29bmpSobe',fld:'vBMPSOBE'},{av:'gx.fn.getCtrlProperty("vBMPSOBE","Tooltiptext")',ctrl:'vBMPSOBE',prop:'Tooltiptext'},{av:'AV30bmpDesc',fld:'vBMPDESC'},{av:'gx.fn.getCtrlProperty("vBMPDESC","Tooltiptext")',ctrl:'vBMPDESC',prop:'Tooltiptext'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2785RemessaRetornoId',fld:'REMESSARETORNOID'},{av:'A2786RemessaRetornoDescricao',fld:'REMESSARETORNODESCRICAO'},{av:'A2787RemessaRetornoTamanho',fld:'REMESSARETORNOTAMANHO'},{av:'A2792RemessaRetornoTipo',fld:'REMESSARETORNOTIPO'}],[]];
   this.EvtParms["'SUBIR'"] = [[{av:'A2785RemessaRetornoId',fld:'REMESSARETORNOID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV31MsgRetorno',fld:'vMSGRETORNO'}]];
   this.EvtParms["'DESCER'"] = [[{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A2785RemessaRetornoId',fld:'REMESSARETORNOID'}],[{av:'AV31MsgRetorno',fld:'vMSGRETORNO'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV28bmpOco',fld:'vBMPOCO'},{av:'gx.fn.getCtrlProperty("vBMPOCO","Tooltiptext")',ctrl:'vBMPOCO',prop:'Tooltiptext'},{av:'AV29bmpSobe',fld:'vBMPSOBE'},{av:'gx.fn.getCtrlProperty("vBMPSOBE","Tooltiptext")',ctrl:'vBMPSOBE',prop:'Tooltiptext'},{av:'AV30bmpDesc',fld:'vBMPDESC'},{av:'gx.fn.getCtrlProperty("vBMPDESC","Tooltiptext")',ctrl:'vBMPDESC',prop:'Tooltiptext'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2785RemessaRetornoId',fld:'REMESSARETORNOID'},{av:'A2786RemessaRetornoDescricao',fld:'REMESSARETORNODESCRICAO'},{av:'A2787RemessaRetornoTamanho',fld:'REMESSARETORNOTAMANHO'},{av:'A2792RemessaRetornoTipo',fld:'REMESSARETORNOTIPO'}],[]];
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV32SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV32SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[48]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Jsonclick", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV28bmpOco", rfrProp:"Value", gxAttId:"Bmpoco"});
   GridContainer.addRefreshingVar({rfrVar:"AV28bmpOco", rfrProp:"Tooltiptext", gxAttId:"Bmpoco"});
   GridContainer.addRefreshingVar({rfrVar:"AV29bmpSobe", rfrProp:"Value", gxAttId:"Bmpsobe"});
   GridContainer.addRefreshingVar({rfrVar:"AV29bmpSobe", rfrProp:"Tooltiptext", gxAttId:"Bmpsobe"});
   GridContainer.addRefreshingVar({rfrVar:"AV30bmpDesc", rfrProp:"Value", gxAttId:"Bmpdesc"});
   GridContainer.addRefreshingVar({rfrVar:"AV30bmpDesc", rfrProp:"Tooltiptext", gxAttId:"Bmpdesc"});
   GridContainer.addRefreshingVar({rfrVar:"AV32SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"A2785RemessaRetornoId", rfrProp:"Value", gxAttId:"2785"});
   GridContainer.addRefreshingVar({rfrVar:"A2786RemessaRetornoDescricao", rfrProp:"Value", gxAttId:"2786"});
   GridContainer.addRefreshingVar({rfrVar:"A2787RemessaRetornoTamanho", rfrProp:"Value", gxAttId:"2787"});
   GridContainer.addRefreshingVar({rfrVar:"A2792RemessaRetornoTipo", rfrProp:"Value", gxAttId:"2792"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hremessaretorno());
