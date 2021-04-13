/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:58:38.32
*/
gx.evt.autoSkip = false;
gx.define('hconsultasituacaotributaria', false, function () {
   this.ServerClass =  "hconsultasituacaotributaria" ;
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
      this.AV21SituacaoTributariaTipo=gx.fn.getControlValue("vSITUACAOTRIBUTARIATIPO") ;
      this.AV23SituacaoTributariaCod=gx.fn.getControlValue("vSITUACAOTRIBUTARIACOD") ;
      this.AV30SituacaoTributariaTipoOut=gx.fn.getControlValue("vSITUACAOTRIBUTARIATIPOOUT") ;
   };
   this.e17np2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11np2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12np2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13np2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14np2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15np2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e20np2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e21np1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,29,30,31,32,33,34,35,36,37,43,46,48,50,52,54,55,56,57];
   this.GXLastCtrlId =57;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",28,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultasituacaotributaria",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(3566,29,"SITUACAOTRIBUTARIACODIGO","","","SituacaoTributariaCodigo","char",0,"px",4,4,"left",null,[],3566,"SituacaoTributariaCodigo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Descsituacaotributaria",30,"vDESCSITUACAOTRIBUTARIA","","","DescSituacaoTributaria","svchar",0,"px",80,80,"left",null,[],"Descsituacaotributaria","DescSituacaoTributaria",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(3571,31,"SITUACAOTRIBUTARIADESCRICAO","Descrição da Situação Tributária","","SituacaoTributariaDescricao","svchar",0,"px",130,80,"left",null,[],3571,"SituacaoTributariaDescricao",false,0,false,false,"Attribute",1,"");
   GridContainer.addComboBox(3568,32,"SITUACAOTRIBUTARIATIPOTRIBUTAC","","SituacaoTributariaTipoTributac","char",null,0,true,false,0,"px","");
   GridContainer.addBitmap("&Bmpsnreducao","vBMPSNREDUCAO",33,0,"px",17,"px",null,"","Redução","Image","");
   GridContainer.addBitmap("&Bmpsnsubstit","vBMPSNSUBSTIT",34,0,"px",17,"px",null,"","S.T.","Image","");
   GridContainer.addSingleLineEdit(3569,35,"SITUACAOTRIBUTARIASNREDUCAO","Redução na Base de Cálculo ICMS?","","SituacaoTributariaSnReducao","char",0,"px",1,1,"left",null,[],3569,"SituacaoTributariaSnReducao",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3570,36,"SITUACAOTRIBUTARIASNSUBSTIT","Substituição Tributária?","","SituacaoTributariaSnSubstit","char",0,"px",1,1,"left",null,[],3570,"SituacaoTributariaSnSubstit",false,0,false,false,"Attribute",1,"");
   GridContainer.addComboBox(3564,37,"SITUACAOTRIBUTARIATIPO","Tipo de Situação Tributária","SituacaoTributariaTipo","char",null,0,false,false,0,"px","");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vSITUACAOTRIBUTARIATIPOFILTRO",gxz:"ZV38SituacaoTributariaTipoFiltro",gxold:"OV38SituacaoTributariaTipoFiltro",gxvar:"AV38SituacaoTributariaTipoFiltro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV38SituacaoTributariaTipoFiltro=Value},v2z:function(Value){gx.O.ZV38SituacaoTributariaTipoFiltro=Value},v2c:function(){gx.fn.setComboBoxValue("vSITUACAOTRIBUTARIATIPOFILTRO",gx.O.AV38SituacaoTributariaTipoFiltro)},c2v:function(){gx.O.AV38SituacaoTributariaTipoFiltro=this.val()},val:function(){return gx.fn.getControlValue("vSITUACAOTRIBUTARIATIPOFILTRO")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vSITUACAOTRIBUTARIACODIGO",gxz:"ZV16SituacaoTributariaCodigo",gxold:"OV16SituacaoTributariaCodigo",gxvar:"AV16SituacaoTributariaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16SituacaoTributariaCodigo=Value},v2z:function(Value){gx.O.ZV16SituacaoTributariaCodigo=Value},v2c:function(){gx.fn.setControlValue("vSITUACAOTRIBUTARIACODIGO",gx.O.AV16SituacaoTributariaCodigo,0)},c2v:function(){gx.O.AV16SituacaoTributariaCodigo=this.val()},val:function(){return gx.fn.getControlValue("vSITUACAOTRIBUTARIACODIGO")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"svchar",len:130,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vSITUACAOTRIBUTARIADESCRICAO",gxz:"ZV17SituacaoTributariaDescricao",gxold:"OV17SituacaoTributariaDescricao",gxvar:"AV17SituacaoTributariaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17SituacaoTributariaDescricao=Value},v2z:function(Value){gx.O.ZV17SituacaoTributariaDescricao=Value},v2c:function(){gx.fn.setControlValue("vSITUACAOTRIBUTARIADESCRICAO",gx.O.AV17SituacaoTributariaDescricao,0)},c2v:function(){gx.O.AV17SituacaoTributariaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vSITUACAOTRIBUTARIADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[29]={lvl:2,type:"char",len:4,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SITUACAOTRIBUTARIACODIGO",gxz:"Z3566SituacaoTributariaCodigo",gxold:"O3566SituacaoTributariaCodigo",gxvar:"A3566SituacaoTributariaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3566SituacaoTributariaCodigo=Value},v2z:function(Value){gx.O.Z3566SituacaoTributariaCodigo=Value},v2c:function(row){gx.fn.setGridControlValue("SITUACAOTRIBUTARIACODIGO",row || gx.fn.currentGridRowImpl(28),gx.O.A3566SituacaoTributariaCodigo,0)},c2v:function(){gx.O.A3566SituacaoTributariaCodigo=this.val()},val:function(row){return gx.fn.getGridControlValue("SITUACAOTRIBUTARIACODIGO",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[30]={lvl:2,type:"svchar",len:80,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vDESCSITUACAOTRIBUTARIA",gxz:"ZV37DescSituacaoTributaria",gxold:"OV37DescSituacaoTributaria",gxvar:"AV37DescSituacaoTributaria",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV37DescSituacaoTributaria=Value},v2z:function(Value){gx.O.ZV37DescSituacaoTributaria=Value},v2c:function(row){gx.fn.setGridControlValue("vDESCSITUACAOTRIBUTARIA",row || gx.fn.currentGridRowImpl(28),gx.O.AV37DescSituacaoTributaria,0)},c2v:function(){gx.O.AV37DescSituacaoTributaria=this.val()},val:function(row){return gx.fn.getGridControlValue("vDESCSITUACAOTRIBUTARIA",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[31]={lvl:2,type:"svchar",len:130,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SITUACAOTRIBUTARIADESCRICAO",gxz:"Z3571SituacaoTributariaDescricao",gxold:"O3571SituacaoTributariaDescricao",gxvar:"A3571SituacaoTributariaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3571SituacaoTributariaDescricao=Value},v2z:function(Value){gx.O.Z3571SituacaoTributariaDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("SITUACAOTRIBUTARIADESCRICAO",row || gx.fn.currentGridRowImpl(28),gx.O.A3571SituacaoTributariaDescricao,0)},c2v:function(){gx.O.A3571SituacaoTributariaDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("SITUACAOTRIBUTARIADESCRICAO",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[32]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SITUACAOTRIBUTARIATIPOTRIBUTAC",gxz:"Z3568SituacaoTributariaTipoTributac",gxold:"O3568SituacaoTributariaTipoTributac",gxvar:"A3568SituacaoTributariaTipoTributac",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A3568SituacaoTributariaTipoTributac=Value},v2z:function(Value){gx.O.Z3568SituacaoTributariaTipoTributac=Value},v2c:function(row){gx.fn.setGridComboBoxValue("SITUACAOTRIBUTARIATIPOTRIBUTAC",row || gx.fn.currentGridRowImpl(28),gx.O.A3568SituacaoTributariaTipoTributac)},c2v:function(){gx.O.A3568SituacaoTributariaTipoTributac=this.val()},val:function(row){return gx.fn.getGridControlValue("SITUACAOTRIBUTARIATIPOTRIBUTAC",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPSNREDUCAO",gxz:"ZV25bmpSnReducao",gxold:"OV25bmpSnReducao",gxvar:"AV25bmpSnReducao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV25bmpSnReducao=Value},v2z:function(Value){gx.O.ZV25bmpSnReducao=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPSNREDUCAO",row || gx.fn.currentGridRowImpl(28),gx.O.AV25bmpSnReducao,gx.O.AV42Bmpsnreducao_GXI)},c2v:function(){gx.O.AV42Bmpsnreducao_GXI=this.val_GXI();gx.O.AV25bmpSnReducao=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPSNREDUCAO",row || gx.fn.currentGridRowImpl(28))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPSNREDUCAO_GXI",row || gx.fn.currentGridRowImpl(28))}, gxvar_GXI:'AV42Bmpsnreducao_GXI',nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPSNSUBSTIT",gxz:"ZV26bmpSnSubstit",gxold:"OV26bmpSnSubstit",gxvar:"AV26bmpSnSubstit",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV26bmpSnSubstit=Value},v2z:function(Value){gx.O.ZV26bmpSnSubstit=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPSNSUBSTIT",row || gx.fn.currentGridRowImpl(28),gx.O.AV26bmpSnSubstit,gx.O.AV43Bmpsnsubstit_GXI)},c2v:function(){gx.O.AV43Bmpsnsubstit_GXI=this.val_GXI();gx.O.AV26bmpSnSubstit=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPSNSUBSTIT",row || gx.fn.currentGridRowImpl(28))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPSNSUBSTIT_GXI",row || gx.fn.currentGridRowImpl(28))}, gxvar_GXI:'AV43Bmpsnsubstit_GXI',nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SITUACAOTRIBUTARIASNREDUCAO",gxz:"Z3569SituacaoTributariaSnReducao",gxold:"O3569SituacaoTributariaSnReducao",gxvar:"A3569SituacaoTributariaSnReducao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3569SituacaoTributariaSnReducao=Value},v2z:function(Value){gx.O.Z3569SituacaoTributariaSnReducao=Value},v2c:function(row){gx.fn.setGridControlValue("SITUACAOTRIBUTARIASNREDUCAO",row || gx.fn.currentGridRowImpl(28),gx.O.A3569SituacaoTributariaSnReducao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3569SituacaoTributariaSnReducao=this.val()},val:function(row){return gx.fn.getGridControlValue("SITUACAOTRIBUTARIASNREDUCAO",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[36]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SITUACAOTRIBUTARIASNSUBSTIT",gxz:"Z3570SituacaoTributariaSnSubstit",gxold:"O3570SituacaoTributariaSnSubstit",gxvar:"A3570SituacaoTributariaSnSubstit",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3570SituacaoTributariaSnSubstit=Value},v2z:function(Value){gx.O.Z3570SituacaoTributariaSnSubstit=Value},v2c:function(row){gx.fn.setGridControlValue("SITUACAOTRIBUTARIASNSUBSTIT",row || gx.fn.currentGridRowImpl(28),gx.O.A3570SituacaoTributariaSnSubstit,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3570SituacaoTributariaSnSubstit=this.val()},val:function(row){return gx.fn.getGridControlValue("SITUACAOTRIBUTARIASNSUBSTIT",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[37]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SITUACAOTRIBUTARIATIPO",gxz:"Z3564SituacaoTributariaTipo",gxold:"O3564SituacaoTributariaTipo",gxvar:"A3564SituacaoTributariaTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A3564SituacaoTributariaTipo=Value},v2z:function(Value){gx.O.Z3564SituacaoTributariaTipo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("SITUACAOTRIBUTARIATIPO",row || gx.fn.currentGridRowImpl(28),gx.O.A3564SituacaoTributariaTipo)},c2v:function(){gx.O.A3564SituacaoTributariaTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("SITUACAOTRIBUTARIATIPO",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TABLENAV",grid:0};
   GXValidFnc[46]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[48]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[50]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[52]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[54]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[55]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV33Pagina",gxold:"OV33Pagina",gxvar:"AV33Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV33Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV33Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV33Pagina)},c2v:function(){gx.O.AV33Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV34PaginaAux",gxold:"OV34PaginaAux",gxvar:"AV34PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV34PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV34PaginaAux,0)},c2v:function(){gx.O.AV34PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV38SituacaoTributariaTipoFiltro = "" ;
   this.ZV38SituacaoTributariaTipoFiltro = "" ;
   this.OV38SituacaoTributariaTipoFiltro = "" ;
   this.AV16SituacaoTributariaCodigo = "" ;
   this.ZV16SituacaoTributariaCodigo = "" ;
   this.OV16SituacaoTributariaCodigo = "" ;
   this.AV17SituacaoTributariaDescricao = "" ;
   this.ZV17SituacaoTributariaDescricao = "" ;
   this.OV17SituacaoTributariaDescricao = "" ;
   this.Z3566SituacaoTributariaCodigo = "" ;
   this.O3566SituacaoTributariaCodigo = "" ;
   this.ZV37DescSituacaoTributaria = "" ;
   this.OV37DescSituacaoTributaria = "" ;
   this.Z3571SituacaoTributariaDescricao = "" ;
   this.O3571SituacaoTributariaDescricao = "" ;
   this.Z3568SituacaoTributariaTipoTributac = "" ;
   this.O3568SituacaoTributariaTipoTributac = "" ;
   this.ZV25bmpSnReducao = "" ;
   this.OV25bmpSnReducao = "" ;
   this.ZV26bmpSnSubstit = "" ;
   this.OV26bmpSnSubstit = "" ;
   this.Z3569SituacaoTributariaSnReducao = "" ;
   this.O3569SituacaoTributariaSnReducao = "" ;
   this.Z3570SituacaoTributariaSnSubstit = "" ;
   this.O3570SituacaoTributariaSnSubstit = "" ;
   this.Z3564SituacaoTributariaTipo = "" ;
   this.O3564SituacaoTributariaTipo = "" ;
   this.AV33Pagina = 0 ;
   this.ZV33Pagina = 0 ;
   this.OV33Pagina = 0 ;
   this.AV34PaginaAux = 0 ;
   this.ZV34PaginaAux = 0 ;
   this.OV34PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV38SituacaoTributariaTipoFiltro = "" ;
   this.AV16SituacaoTributariaCodigo = "" ;
   this.AV17SituacaoTributariaDescricao = "" ;
   this.AV33Pagina = 0 ;
   this.AV34PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV21SituacaoTributariaTipo = "" ;
   this.AV23SituacaoTributariaCod = "" ;
   this.AV30SituacaoTributariaTipoOut = "" ;
   this.A3566SituacaoTributariaCodigo = "" ;
   this.AV37DescSituacaoTributaria = "" ;
   this.A3571SituacaoTributariaDescricao = "" ;
   this.A3568SituacaoTributariaTipoTributac = "" ;
   this.AV25bmpSnReducao = "" ;
   this.AV26bmpSnSubstit = "" ;
   this.A3569SituacaoTributariaSnReducao = "" ;
   this.A3570SituacaoTributariaSnSubstit = "" ;
   this.A3564SituacaoTributariaTipo = "" ;
   this.Events = {"e17np2_client": ["ENTER", true] ,"e11np2_client": ["'GXM_FIRST'", true] ,"e12np2_client": ["'GXM_PREVIOUS'", true] ,"e13np2_client": ["'GXM_NEXT'", true] ,"e14np2_client": ["'GXM_LAST'", true] ,"e15np2_client": ["'PROCURAR'", true] ,"e20np2_client": ["'ATUALIZAPAGINA'", true] ,"e21np1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV38SituacaoTributariaTipoFiltro',fld:'vSITUACAOTRIBUTARIATIPOFILTRO'},{av:'AV16SituacaoTributariaCodigo',fld:'vSITUACAOTRIBUTARIACODIGO'},{av:'AV17SituacaoTributariaDescricao',fld:'vSITUACAOTRIBUTARIADESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV21SituacaoTributariaTipo',fld:'vSITUACAOTRIBUTARIATIPO',hsh:true},{av:'A3571SituacaoTributariaDescricao',fld:'SITUACAOTRIBUTARIADESCRICAO'},{av:'A3569SituacaoTributariaSnReducao',fld:'SITUACAOTRIBUTARIASNREDUCAO'},{av:'A3570SituacaoTributariaSnSubstit',fld:'SITUACAOTRIBUTARIASNSUBSTIT'}],[]];
   this.EvtParms["ENTER"] = [[{av:'A3566SituacaoTributariaCodigo',fld:'SITUACAOTRIBUTARIACODIGO'},{av:'A3564SituacaoTributariaTipo',fld:'SITUACAOTRIBUTARIATIPO'}],[{av:'AV23SituacaoTributariaCod',fld:'vSITUACAOTRIBUTARIACOD'},{av:'AV30SituacaoTributariaTipoOut',fld:'vSITUACAOTRIBUTARIATIPOOUT'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV38SituacaoTributariaTipoFiltro',fld:'vSITUACAOTRIBUTARIATIPOFILTRO'},{av:'AV16SituacaoTributariaCodigo',fld:'vSITUACAOTRIBUTARIACODIGO'},{av:'AV17SituacaoTributariaDescricao',fld:'vSITUACAOTRIBUTARIADESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV21SituacaoTributariaTipo',fld:'vSITUACAOTRIBUTARIATIPO',hsh:true},{av:'A3571SituacaoTributariaDescricao',fld:'SITUACAOTRIBUTARIADESCRICAO'},{av:'A3569SituacaoTributariaSnReducao',fld:'SITUACAOTRIBUTARIASNREDUCAO'},{av:'A3570SituacaoTributariaSnSubstit',fld:'SITUACAOTRIBUTARIASNSUBSTIT'}],[{av:'AV33Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV38SituacaoTributariaTipoFiltro',fld:'vSITUACAOTRIBUTARIATIPOFILTRO'},{av:'AV16SituacaoTributariaCodigo',fld:'vSITUACAOTRIBUTARIACODIGO'},{av:'AV17SituacaoTributariaDescricao',fld:'vSITUACAOTRIBUTARIADESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV21SituacaoTributariaTipo',fld:'vSITUACAOTRIBUTARIATIPO',hsh:true},{av:'A3571SituacaoTributariaDescricao',fld:'SITUACAOTRIBUTARIADESCRICAO'},{av:'A3569SituacaoTributariaSnReducao',fld:'SITUACAOTRIBUTARIASNREDUCAO'},{av:'A3570SituacaoTributariaSnSubstit',fld:'SITUACAOTRIBUTARIASNSUBSTIT'},{av:'AV33Pagina',fld:'vPAGINA'}],[{av:'AV33Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV38SituacaoTributariaTipoFiltro',fld:'vSITUACAOTRIBUTARIATIPOFILTRO'},{av:'AV16SituacaoTributariaCodigo',fld:'vSITUACAOTRIBUTARIACODIGO'},{av:'AV17SituacaoTributariaDescricao',fld:'vSITUACAOTRIBUTARIADESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV21SituacaoTributariaTipo',fld:'vSITUACAOTRIBUTARIATIPO',hsh:true},{av:'A3571SituacaoTributariaDescricao',fld:'SITUACAOTRIBUTARIADESCRICAO'},{av:'A3569SituacaoTributariaSnReducao',fld:'SITUACAOTRIBUTARIASNREDUCAO'},{av:'A3570SituacaoTributariaSnSubstit',fld:'SITUACAOTRIBUTARIASNSUBSTIT'},{av:'AV33Pagina',fld:'vPAGINA'},{av:'AV34PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV33Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV38SituacaoTributariaTipoFiltro',fld:'vSITUACAOTRIBUTARIATIPOFILTRO'},{av:'AV16SituacaoTributariaCodigo',fld:'vSITUACAOTRIBUTARIACODIGO'},{av:'AV17SituacaoTributariaDescricao',fld:'vSITUACAOTRIBUTARIADESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV21SituacaoTributariaTipo',fld:'vSITUACAOTRIBUTARIATIPO',hsh:true},{av:'A3571SituacaoTributariaDescricao',fld:'SITUACAOTRIBUTARIADESCRICAO'},{av:'A3569SituacaoTributariaSnReducao',fld:'SITUACAOTRIBUTARIASNREDUCAO'},{av:'A3570SituacaoTributariaSnSubstit',fld:'SITUACAOTRIBUTARIASNSUBSTIT'},{av:'AV34PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV33Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV38SituacaoTributariaTipoFiltro',fld:'vSITUACAOTRIBUTARIATIPOFILTRO'},{av:'AV16SituacaoTributariaCodigo',fld:'vSITUACAOTRIBUTARIACODIGO'},{av:'AV17SituacaoTributariaDescricao',fld:'vSITUACAOTRIBUTARIADESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV21SituacaoTributariaTipo',fld:'vSITUACAOTRIBUTARIATIPO',hsh:true},{av:'A3571SituacaoTributariaDescricao',fld:'SITUACAOTRIBUTARIADESCRICAO'},{av:'A3569SituacaoTributariaSnReducao',fld:'SITUACAOTRIBUTARIASNREDUCAO'},{av:'A3570SituacaoTributariaSnSubstit',fld:'SITUACAOTRIBUTARIASNSUBSTIT'}],[{av:'AV33Pagina',fld:'vPAGINA'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A3571SituacaoTributariaDescricao',fld:'SITUACAOTRIBUTARIADESCRICAO'},{av:'A3569SituacaoTributariaSnReducao',fld:'SITUACAOTRIBUTARIASNREDUCAO'},{av:'A3570SituacaoTributariaSnSubstit',fld:'SITUACAOTRIBUTARIASNSUBSTIT'}],[{av:'AV37DescSituacaoTributaria',fld:'vDESCSITUACAOTRIBUTARIA'},{av:'AV25bmpSnReducao',fld:'vBMPSNREDUCAO'},{av:'AV26bmpSnSubstit',fld:'vBMPSNSUBSTIT'}]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'AV21SituacaoTributariaTipo',fld:'vSITUACAOTRIBUTARIATIPO',hsh:true},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{av:'gx.fn.getCtrlProperty("vBMPSNREDUCAO","Visible")',ctrl:'vBMPSNREDUCAO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBMPSNSUBSTIT","Visible")',ctrl:'vBMPSNSUBSTIT',prop:'Visible'},{ctrl:'SITUACAOTRIBUTARIACODIGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("SITUACAOTRIBUTARIACODIGO","Title")',ctrl:'SITUACAOTRIBUTARIACODIGO',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'vDESCSITUACAOTRIBUTARIA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vDESCSITUACAOTRIBUTARIA","Title")',ctrl:'vDESCSITUACAOTRIBUTARIA',prop:'Title'},{ctrl:'SITUACAOTRIBUTARIATIPOTRIBUTAC'},{av:'AV34PaginaAux',fld:'vPAGINAAUX'},{av:'AV33Pagina',fld:'vPAGINA'},{av:'AV36NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV38SituacaoTributariaTipoFiltro',fld:'vSITUACAOTRIBUTARIATIPOFILTRO'},{av:'AV16SituacaoTributariaCodigo',fld:'vSITUACAOTRIBUTARIACODIGO'},{av:'AV17SituacaoTributariaDescricao',fld:'vSITUACAOTRIBUTARIADESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV21SituacaoTributariaTipo',fld:'vSITUACAOTRIBUTARIATIPO',hsh:true},{av:'A3571SituacaoTributariaDescricao',fld:'SITUACAOTRIBUTARIADESCRICAO'},{av:'A3569SituacaoTributariaSnReducao',fld:'SITUACAOTRIBUTARIASNREDUCAO'},{av:'A3570SituacaoTributariaSnSubstit',fld:'SITUACAOTRIBUTARIASNSUBSTIT'}],[]];
   this.setVCMap("AV21SituacaoTributariaTipo", "vSITUACAOTRIBUTARIATIPO", 0, "char");
   this.setVCMap("AV23SituacaoTributariaCod", "vSITUACAOTRIBUTARIACOD", 0, "char");
   this.setVCMap("AV30SituacaoTributariaTipoOut", "vSITUACAOTRIBUTARIATIPOOUT", 0, "char");
   this.setVCMap("AV21SituacaoTributariaTipo", "vSITUACAOTRIBUTARIATIPO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[23]);
   GridContainer.addRefreshingVar(this.GXValidFnc[57]);
   GridContainer.addRefreshingVar({rfrVar:"AV21SituacaoTributariaTipo"});
   GridContainer.addRefreshingVar({rfrVar:"A3571SituacaoTributariaDescricao", rfrProp:"Value", gxAttId:"3571"});
   GridContainer.addRefreshingVar({rfrVar:"A3569SituacaoTributariaSnReducao", rfrProp:"Value", gxAttId:"3569"});
   GridContainer.addRefreshingVar({rfrVar:"A3570SituacaoTributariaSnSubstit", rfrProp:"Value", gxAttId:"3570"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultasituacaotributaria());
