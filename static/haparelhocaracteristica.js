/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:3:19.97
*/
gx.evt.autoSkip = false;
gx.define('haparelhocaracteristica', false, function () {
   this.ServerClass =  "haparelhocaracteristica" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("7", "'ANTERIOR'");
   this.addKeyListener("8", "'PROXIMO'");
   this.addKeyListener("3", "'NOVO'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("10", "'IMPRIMIR'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV17EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV39SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.AV45Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.A8829AparelhoCaracSNObrigatorio=gx.fn.getControlValue("APARELHOCARACSNOBRIGATORIO") ;
      this.A8827AparelhoCaracTipo=gx.fn.getIntegerValue("APARELHOCARACTIPO",'.') ;
   };
   this.e111bl2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e121bl2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e171bl2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e131bl2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e141bl2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e151bl2_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e161bl2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e201bl2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e211bl2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e221bl2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e241bl2_client=function()
   {
      this.executeServerEvent("'SOBENIVEL'", true, arguments[0], false, false);
   };
   this.e251bl2_client=function()
   {
      this.executeServerEvent("'DESCENIVEL'", true, arguments[0], false, false);
   };
   this.e261bl2_client=function()
   {
      this.executeServerEvent("'CHAMAVALORESCARACTERISTICA'", true, arguments[0], false, false);
   };
   this.e271bl2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e281bl2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,28,31,34,36,38,40,42,44,47,49,53,54,55,56,57,58,59,60,61,62,63,64,71];
   this.GXLastCtrlId =71;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",52,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"haparelhocaracteristica",[],false,1,false,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(8832,53,"APARELHOCARACID","Código","","AparelhoCaracId","int",0,"px",4,4,"right",null,[],8832,"AparelhoCaracId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(8826,54,"APARELHOCARACDESCRICAO","Descrição","","AparelhoCaracDescricao","svchar",0,"px",20,20,"left",null,[],8826,"AparelhoCaracDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Tipodadodescricao",55,"vTIPODADODESCRICAO","Tipo de Dado ","","TipoDadoDescricao","svchar",0,"px",10,10,"left",null,[],"Tipodadodescricao","TipoDadoDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(8828,56,"APARELHOCARACORDENACAO","Ordenação","","AparelhoCaracOrdenacao","int",0,"px",2,2,"right",null,[],8828,"AparelhoCaracOrdenacao",false,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Aparelhocaracsnobrigatorio","vAPARELHOCARACSNOBRIGATORIO",57,0,"px",17,"px",null,"","Obrigatório?","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpvalor","vBMPVALOR",58,0,"px",17,"px","e261bl2_client","","Valores","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpdesce","vBMPDESCE",59,0,"px",17,"px","e251bl2_client","","Desce","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpsobe","vBMPSOBE",60,0,"px",17,"px","e241bl2_client","","Sobe","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",61,0,"px",17,"px","e201bl2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",62,0,"px",17,"px","e211bl2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",63,0,"px",17,"px","e221bl2_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(8833,64,"APARELHOCARACEMPRESAID","Código da Empresa","","AparelhoCaracEmpresaId","char",0,"px",10,10,"left",null,[],8833,"AparelhoCaracEmpresaId",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE7",grid:0};
   GXValidFnc[8]={fld:"TABLE8",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vAPARELHOCARACID",gxz:"ZV28AparelhoCaracId",gxold:"OV28AparelhoCaracId",gxvar:"AV28AparelhoCaracId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28AparelhoCaracId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28AparelhoCaracId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vAPARELHOCARACID",gx.O.AV28AparelhoCaracId,0)},c2v:function(){gx.O.AV28AparelhoCaracId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vAPARELHOCARACID",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vAPARELHOCARACDESCRICAO",gxz:"ZV29AparelhoCaracDescricao",gxold:"OV29AparelhoCaracDescricao",gxvar:"AV29AparelhoCaracDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29AparelhoCaracDescricao=Value},v2z:function(Value){gx.O.ZV29AparelhoCaracDescricao=Value},v2c:function(){gx.fn.setControlValue("vAPARELHOCARACDESCRICAO",gx.O.AV29AparelhoCaracDescricao,0)},c2v:function(){gx.O.AV29AparelhoCaracDescricao=this.val()},val:function(){return gx.fn.getControlValue("vAPARELHOCARACDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vAPARELHOCARACTIPO",gxz:"ZV30AparelhoCaracTipo",gxold:"OV30AparelhoCaracTipo",gxvar:"AV30AparelhoCaracTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV30AparelhoCaracTipo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30AparelhoCaracTipo=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vAPARELHOCARACTIPO",gx.O.AV30AparelhoCaracTipo)},c2v:function(){gx.O.AV30AparelhoCaracTipo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vAPARELHOCARACTIPO",'.')},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TABLE4",grid:0};
   GXValidFnc[31]={fld:"TABLE6",grid:0};
   GXValidFnc[34]={fld:"IMAGE2",grid:0};
   GXValidFnc[36]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[38]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[40]={fld:"IMAGE1",grid:0};
   GXValidFnc[42]={fld:"BTNHELP",grid:0};
   GXValidFnc[44]={fld:"TABLE5",grid:0};
   GXValidFnc[47]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:52,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"APARELHOCARACID",gxz:"Z8832AparelhoCaracId",gxold:"O8832AparelhoCaracId",gxvar:"A8832AparelhoCaracId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8832AparelhoCaracId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8832AparelhoCaracId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("APARELHOCARACID",row || gx.fn.currentGridRowImpl(52),gx.O.A8832AparelhoCaracId,0)},c2v:function(){gx.O.A8832AparelhoCaracId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("APARELHOCARACID",row || gx.fn.currentGridRowImpl(52),'.')},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:1,isacc:0,grid:52,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"APARELHOCARACDESCRICAO",gxz:"Z8826AparelhoCaracDescricao",gxold:"O8826AparelhoCaracDescricao",gxvar:"A8826AparelhoCaracDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8826AparelhoCaracDescricao=Value},v2z:function(Value){gx.O.Z8826AparelhoCaracDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("APARELHOCARACDESCRICAO",row || gx.fn.currentGridRowImpl(52),gx.O.A8826AparelhoCaracDescricao,0)},c2v:function(){gx.O.A8826AparelhoCaracDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("APARELHOCARACDESCRICAO",row || gx.fn.currentGridRowImpl(52))},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"svchar",len:10,dec:0,sign:false,ro:0,isacc:0,grid:52,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vTIPODADODESCRICAO",gxz:"ZV27TipoDadoDescricao",gxold:"OV27TipoDadoDescricao",gxvar:"AV27TipoDadoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV27TipoDadoDescricao=Value},v2z:function(Value){gx.O.ZV27TipoDadoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("vTIPODADODESCRICAO",row || gx.fn.currentGridRowImpl(52),gx.O.AV27TipoDadoDescricao,0)},c2v:function(){gx.O.AV27TipoDadoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("vTIPODADODESCRICAO",row || gx.fn.currentGridRowImpl(52))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:52,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"APARELHOCARACORDENACAO",gxz:"Z8828AparelhoCaracOrdenacao",gxold:"O8828AparelhoCaracOrdenacao",gxvar:"A8828AparelhoCaracOrdenacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8828AparelhoCaracOrdenacao=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8828AparelhoCaracOrdenacao=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("APARELHOCARACORDENACAO",row || gx.fn.currentGridRowImpl(52),gx.O.A8828AparelhoCaracOrdenacao,0)},c2v:function(){gx.O.A8828AparelhoCaracOrdenacao=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("APARELHOCARACORDENACAO",row || gx.fn.currentGridRowImpl(52),'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:52,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vAPARELHOCARACSNOBRIGATORIO",gxz:"ZV31AparelhoCaracSNObrigatorio",gxold:"OV31AparelhoCaracSNObrigatorio",gxvar:"AV31AparelhoCaracSNObrigatorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV31AparelhoCaracSNObrigatorio=Value},v2z:function(Value){gx.O.ZV31AparelhoCaracSNObrigatorio=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vAPARELHOCARACSNOBRIGATORIO",row || gx.fn.currentGridRowImpl(52),gx.O.AV31AparelhoCaracSNObrigatorio,gx.O.AV53Aparelhocaracsnobrigatorio_GXI)},c2v:function(){gx.O.AV53Aparelhocaracsnobrigatorio_GXI=this.val_GXI();gx.O.AV31AparelhoCaracSNObrigatorio=this.val()},val:function(row){return gx.fn.getGridControlValue("vAPARELHOCARACSNOBRIGATORIO",row || gx.fn.currentGridRowImpl(52))},val_GXI:function(row){return gx.fn.getGridControlValue("vAPARELHOCARACSNOBRIGATORIO_GXI",row || gx.fn.currentGridRowImpl(52))}, gxvar_GXI:'AV53Aparelhocaracsnobrigatorio_GXI',nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:52,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPVALOR",gxz:"ZV34bmpValor",gxold:"OV34bmpValor",gxvar:"AV34bmpValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV34bmpValor=Value},v2z:function(Value){gx.O.ZV34bmpValor=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPVALOR",row || gx.fn.currentGridRowImpl(52),gx.O.AV34bmpValor,gx.O.AV52Bmpvalor_GXI)},c2v:function(){gx.O.AV52Bmpvalor_GXI=this.val_GXI();gx.O.AV34bmpValor=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPVALOR",row || gx.fn.currentGridRowImpl(52))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPVALOR_GXI",row || gx.fn.currentGridRowImpl(52))}, gxvar_GXI:'AV52Bmpvalor_GXI',nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:52,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPDESCE",gxz:"ZV33bmpDesce",gxold:"OV33bmpDesce",gxvar:"AV33bmpDesce",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV33bmpDesce=Value},v2z:function(Value){gx.O.ZV33bmpDesce=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPDESCE",row || gx.fn.currentGridRowImpl(52),gx.O.AV33bmpDesce,gx.O.AV51Bmpdesce_GXI)},c2v:function(){gx.O.AV51Bmpdesce_GXI=this.val_GXI();gx.O.AV33bmpDesce=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPDESCE",row || gx.fn.currentGridRowImpl(52))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPDESCE_GXI",row || gx.fn.currentGridRowImpl(52))}, gxvar_GXI:'AV51Bmpdesce_GXI',nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:52,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPSOBE",gxz:"ZV32bmpSobe",gxold:"OV32bmpSobe",gxvar:"AV32bmpSobe",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV32bmpSobe=Value},v2z:function(Value){gx.O.ZV32bmpSobe=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPSOBE",row || gx.fn.currentGridRowImpl(52),gx.O.AV32bmpSobe,gx.O.AV50Bmpsobe_GXI)},c2v:function(){gx.O.AV50Bmpsobe_GXI=this.val_GXI();gx.O.AV32bmpSobe=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPSOBE",row || gx.fn.currentGridRowImpl(52))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPSOBE_GXI",row || gx.fn.currentGridRowImpl(52))}, gxvar_GXI:'AV50Bmpsobe_GXI',nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:52,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(52),gx.O.AV7bmpAlt,gx.O.AV47Bmpalt_GXI)},c2v:function(){gx.O.AV47Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(52))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(52))}, gxvar_GXI:'AV47Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:52,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(52),gx.O.AV8bmpExc,gx.O.AV48Bmpexc_GXI)},c2v:function(){gx.O.AV48Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(52))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(52))}, gxvar_GXI:'AV48Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[63]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:52,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(52),gx.O.AV16bmpCon,gx.O.AV49Bmpcon_GXI)},c2v:function(){gx.O.AV49Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(52))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(52))}, gxvar_GXI:'AV49Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[64]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:52,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"APARELHOCARACEMPRESAID",gxz:"Z8833AparelhoCaracEmpresaId",gxold:"O8833AparelhoCaracEmpresaId",gxvar:"A8833AparelhoCaracEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8833AparelhoCaracEmpresaId=Value},v2z:function(Value){gx.O.Z8833AparelhoCaracEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("APARELHOCARACEMPRESAID",row || gx.fn.currentGridRowImpl(52),gx.O.A8833AparelhoCaracEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8833AparelhoCaracEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("APARELHOCARACEMPRESAID",row || gx.fn.currentGridRowImpl(52))},nac:gx.falseFn};
   GXValidFnc[71]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   this.AV28AparelhoCaracId = 0 ;
   this.ZV28AparelhoCaracId = 0 ;
   this.OV28AparelhoCaracId = 0 ;
   this.AV29AparelhoCaracDescricao = "" ;
   this.ZV29AparelhoCaracDescricao = "" ;
   this.OV29AparelhoCaracDescricao = "" ;
   this.AV30AparelhoCaracTipo = 0 ;
   this.ZV30AparelhoCaracTipo = 0 ;
   this.OV30AparelhoCaracTipo = 0 ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.Z8832AparelhoCaracId = 0 ;
   this.O8832AparelhoCaracId = 0 ;
   this.Z8826AparelhoCaracDescricao = "" ;
   this.O8826AparelhoCaracDescricao = "" ;
   this.ZV27TipoDadoDescricao = "" ;
   this.OV27TipoDadoDescricao = "" ;
   this.Z8828AparelhoCaracOrdenacao = 0 ;
   this.O8828AparelhoCaracOrdenacao = 0 ;
   this.ZV31AparelhoCaracSNObrigatorio = "" ;
   this.OV31AparelhoCaracSNObrigatorio = "" ;
   this.ZV34bmpValor = "" ;
   this.OV34bmpValor = "" ;
   this.ZV33bmpDesce = "" ;
   this.OV33bmpDesce = "" ;
   this.ZV32bmpSobe = "" ;
   this.OV32bmpSobe = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z8833AparelhoCaracEmpresaId = "" ;
   this.O8833AparelhoCaracEmpresaId = "" ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.AV28AparelhoCaracId = 0 ;
   this.AV29AparelhoCaracDescricao = "" ;
   this.AV30AparelhoCaracTipo = 0 ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.A8829AparelhoCaracSNObrigatorio = "" ;
   this.A8827AparelhoCaracTipo = 0 ;
   this.A8832AparelhoCaracId = 0 ;
   this.A8826AparelhoCaracDescricao = "" ;
   this.AV27TipoDadoDescricao = "" ;
   this.A8828AparelhoCaracOrdenacao = 0 ;
   this.AV31AparelhoCaracSNObrigatorio = "" ;
   this.AV34bmpValor = "" ;
   this.AV33bmpDesce = "" ;
   this.AV32bmpSobe = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A8833AparelhoCaracEmpresaId = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.AV39SnRecuperaFiltro = "" ;
   this.AV45Pgmname = "" ;
   this.Events = {"e111bl2_client": ["'ANTERIOR'", true] ,"e121bl2_client": ["'PROXIMO'", true] ,"e171bl2_client": ["VPAGINA.CLICK", true] ,"e131bl2_client": ["'NOVO'", true] ,"e141bl2_client": ["'FECHAR'", true] ,"e151bl2_client": ["'IMPRIMIR'", true] ,"e161bl2_client": ["'PROCURAR'", true] ,"e201bl2_client": ["'ALTERAR'", true] ,"e211bl2_client": ["'EXCLUIR'", true] ,"e221bl2_client": ["'CONSULTAR'", true] ,"e241bl2_client": ["'SOBENIVEL'", true] ,"e251bl2_client": ["'DESCENIVEL'", true] ,"e261bl2_client": ["'CHAMAVALORESCARACTERISTICA'", true] ,"e271bl2_client": ["ENTER", true] ,"e281bl2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28AparelhoCaracId',fld:'vAPARELHOCARACID'},{av:'AV29AparelhoCaracDescricao',fld:'vAPARELHOCARACDESCRICAO'},{av:'AV30AparelhoCaracTipo',fld:'vAPARELHOCARACTIPO'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV32bmpSobe',fld:'vBMPSOBE'},{av:'gx.fn.getCtrlProperty("vBMPSOBE","Tooltiptext")',ctrl:'vBMPSOBE',prop:'Tooltiptext'},{av:'AV33bmpDesce',fld:'vBMPDESCE'},{av:'gx.fn.getCtrlProperty("vBMPDESCE","Tooltiptext")',ctrl:'vBMPDESCE',prop:'Tooltiptext'},{av:'AV34bmpValor',fld:'vBMPVALOR'},{av:'gx.fn.getCtrlProperty("vBMPVALOR","Tooltiptext")',ctrl:'vBMPVALOR',prop:'Tooltiptext'},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV45Pgmname',fld:'vPGMNAME'},{av:'A8829AparelhoCaracSNObrigatorio',fld:'APARELHOCARACSNOBRIGATORIO'},{av:'A8827AparelhoCaracTipo',fld:'APARELHOCARACTIPO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28AparelhoCaracId',fld:'vAPARELHOCARACID'},{av:'AV29AparelhoCaracDescricao',fld:'vAPARELHOCARACDESCRICAO'},{av:'AV30AparelhoCaracTipo',fld:'vAPARELHOCARACTIPO'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV32bmpSobe',fld:'vBMPSOBE'},{av:'gx.fn.getCtrlProperty("vBMPSOBE","Tooltiptext")',ctrl:'vBMPSOBE',prop:'Tooltiptext'},{av:'AV33bmpDesce',fld:'vBMPDESCE'},{av:'gx.fn.getCtrlProperty("vBMPDESCE","Tooltiptext")',ctrl:'vBMPDESCE',prop:'Tooltiptext'},{av:'AV34bmpValor',fld:'vBMPVALOR'},{av:'gx.fn.getCtrlProperty("vBMPVALOR","Tooltiptext")',ctrl:'vBMPVALOR',prop:'Tooltiptext'},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV45Pgmname',fld:'vPGMNAME'},{av:'A8829AparelhoCaracSNObrigatorio',fld:'APARELHOCARACSNOBRIGATORIO'},{av:'A8827AparelhoCaracTipo',fld:'APARELHOCARACTIPO'}],[{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV28AparelhoCaracId',fld:'vAPARELHOCARACID'},{av:'AV29AparelhoCaracDescricao',fld:'vAPARELHOCARACDESCRICAO'},{av:'AV30AparelhoCaracTipo',fld:'vAPARELHOCARACTIPO'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28AparelhoCaracId',fld:'vAPARELHOCARACID'},{av:'AV29AparelhoCaracDescricao',fld:'vAPARELHOCARACDESCRICAO'},{av:'AV30AparelhoCaracTipo',fld:'vAPARELHOCARACTIPO'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV32bmpSobe',fld:'vBMPSOBE'},{av:'gx.fn.getCtrlProperty("vBMPSOBE","Tooltiptext")',ctrl:'vBMPSOBE',prop:'Tooltiptext'},{av:'AV33bmpDesce',fld:'vBMPDESCE'},{av:'gx.fn.getCtrlProperty("vBMPDESCE","Tooltiptext")',ctrl:'vBMPDESCE',prop:'Tooltiptext'},{av:'AV34bmpValor',fld:'vBMPVALOR'},{av:'gx.fn.getCtrlProperty("vBMPVALOR","Tooltiptext")',ctrl:'vBMPVALOR',prop:'Tooltiptext'},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV45Pgmname',fld:'vPGMNAME'},{av:'A8829AparelhoCaracSNObrigatorio',fld:'APARELHOCARACSNOBRIGATORIO'},{av:'A8827AparelhoCaracTipo',fld:'APARELHOCARACTIPO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28AparelhoCaracId',fld:'vAPARELHOCARACID'},{av:'AV29AparelhoCaracDescricao',fld:'vAPARELHOCARACDESCRICAO'},{av:'AV30AparelhoCaracTipo',fld:'vAPARELHOCARACTIPO'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV32bmpSobe',fld:'vBMPSOBE'},{av:'gx.fn.getCtrlProperty("vBMPSOBE","Tooltiptext")',ctrl:'vBMPSOBE',prop:'Tooltiptext'},{av:'AV33bmpDesce',fld:'vBMPDESCE'},{av:'gx.fn.getCtrlProperty("vBMPDESCE","Tooltiptext")',ctrl:'vBMPDESCE',prop:'Tooltiptext'},{av:'AV34bmpValor',fld:'vBMPVALOR'},{av:'gx.fn.getCtrlProperty("vBMPVALOR","Tooltiptext")',ctrl:'vBMPVALOR',prop:'Tooltiptext'},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV45Pgmname',fld:'vPGMNAME'},{av:'A8829AparelhoCaracSNObrigatorio',fld:'APARELHOCARACSNOBRIGATORIO'},{av:'A8827AparelhoCaracTipo',fld:'APARELHOCARACTIPO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28AparelhoCaracId',fld:'vAPARELHOCARACID'},{av:'AV29AparelhoCaracDescricao',fld:'vAPARELHOCARACDESCRICAO'},{av:'AV30AparelhoCaracTipo',fld:'vAPARELHOCARACTIPO'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV32bmpSobe',fld:'vBMPSOBE'},{av:'gx.fn.getCtrlProperty("vBMPSOBE","Tooltiptext")',ctrl:'vBMPSOBE',prop:'Tooltiptext'},{av:'AV33bmpDesce',fld:'vBMPDESCE'},{av:'gx.fn.getCtrlProperty("vBMPDESCE","Tooltiptext")',ctrl:'vBMPDESCE',prop:'Tooltiptext'},{av:'AV34bmpValor',fld:'vBMPVALOR'},{av:'gx.fn.getCtrlProperty("vBMPVALOR","Tooltiptext")',ctrl:'vBMPVALOR',prop:'Tooltiptext'},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV45Pgmname',fld:'vPGMNAME'},{av:'A8829AparelhoCaracSNObrigatorio',fld:'APARELHOCARACSNOBRIGATORIO'},{av:'A8827AparelhoCaracTipo',fld:'APARELHOCARACTIPO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV28AparelhoCaracId',fld:'vAPARELHOCARACID'},{av:'AV29AparelhoCaracDescricao',fld:'vAPARELHOCARACDESCRICAO'},{av:'AV30AparelhoCaracTipo',fld:'vAPARELHOCARACTIPO'},{av:'AV45Pgmname',fld:'vPGMNAME'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV45Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV45Pgmname',fld:'vPGMNAME'},{av:'AV37QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV46Pgmdesc',fld:'vPGMDESC'}],[{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV37QtdPagGeradas',fld:'vQTDPAGGERADAS'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28AparelhoCaracId',fld:'vAPARELHOCARACID'},{av:'AV29AparelhoCaracDescricao',fld:'vAPARELHOCARACDESCRICAO'},{av:'AV30AparelhoCaracTipo',fld:'vAPARELHOCARACTIPO'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV32bmpSobe',fld:'vBMPSOBE'},{av:'gx.fn.getCtrlProperty("vBMPSOBE","Tooltiptext")',ctrl:'vBMPSOBE',prop:'Tooltiptext'},{av:'AV33bmpDesce',fld:'vBMPDESCE'},{av:'gx.fn.getCtrlProperty("vBMPDESCE","Tooltiptext")',ctrl:'vBMPDESCE',prop:'Tooltiptext'},{av:'AV34bmpValor',fld:'vBMPVALOR'},{av:'gx.fn.getCtrlProperty("vBMPVALOR","Tooltiptext")',ctrl:'vBMPVALOR',prop:'Tooltiptext'},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV45Pgmname',fld:'vPGMNAME'},{av:'A8829AparelhoCaracSNObrigatorio',fld:'APARELHOCARACSNOBRIGATORIO'},{av:'A8827AparelhoCaracTipo',fld:'APARELHOCARACTIPO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A8832AparelhoCaracId',fld:'APARELHOCARACID'},{av:'A8826AparelhoCaracDescricao',fld:'APARELHOCARACDESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV28AparelhoCaracId',fld:'vAPARELHOCARACID'},{av:'AV29AparelhoCaracDescricao',fld:'vAPARELHOCARACDESCRICAO'},{av:'AV30AparelhoCaracTipo',fld:'vAPARELHOCARACTIPO'},{av:'AV45Pgmname',fld:'vPGMNAME'}],[{av:'A8826AparelhoCaracDescricao',fld:'APARELHOCARACDESCRICAO'},{av:'A8832AparelhoCaracId',fld:'APARELHOCARACID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A8833AparelhoCaracEmpresaId',fld:'APARELHOCARACEMPRESAID'},{av:'A8832AparelhoCaracId',fld:'APARELHOCARACID'},{av:'A8826AparelhoCaracDescricao',fld:'APARELHOCARACDESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV28AparelhoCaracId',fld:'vAPARELHOCARACID'},{av:'AV29AparelhoCaracDescricao',fld:'vAPARELHOCARACDESCRICAO'},{av:'AV30AparelhoCaracTipo',fld:'vAPARELHOCARACTIPO'},{av:'AV45Pgmname',fld:'vPGMNAME'}],[{av:'AV42hasData',fld:'vHASDATA'},{av:'A8826AparelhoCaracDescricao',fld:'APARELHOCARACDESCRICAO'},{av:'A8832AparelhoCaracId',fld:'APARELHOCARACID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A8832AparelhoCaracId',fld:'APARELHOCARACID'},{av:'A8826AparelhoCaracDescricao',fld:'APARELHOCARACDESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV28AparelhoCaracId',fld:'vAPARELHOCARACID'},{av:'AV29AparelhoCaracDescricao',fld:'vAPARELHOCARACDESCRICAO'},{av:'AV30AparelhoCaracTipo',fld:'vAPARELHOCARACTIPO'},{av:'AV45Pgmname',fld:'vPGMNAME'}],[{av:'A8826AparelhoCaracDescricao',fld:'APARELHOCARACDESCRICAO'},{av:'A8832AparelhoCaracId',fld:'APARELHOCARACID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A8829AparelhoCaracSNObrigatorio',fld:'APARELHOCARACSNOBRIGATORIO'},{av:'A8827AparelhoCaracTipo',fld:'APARELHOCARACTIPO'}],[{av:'AV31AparelhoCaracSNObrigatorio',fld:'vAPARELHOCARACSNOBRIGATORIO'},{av:'gx.fn.getCtrlProperty("vBMPVALOR","Enabled")',ctrl:'vBMPVALOR',prop:'Enabled'},{av:'AV27TipoDadoDescricao',fld:'vTIPODADODESCRICAO'}]];
   this.EvtParms["'SOBENIVEL'"] = [[{av:'A8828AparelhoCaracOrdenacao',fld:'APARELHOCARACORDENACAO'},{av:'A8833AparelhoCaracEmpresaId',fld:'APARELHOCARACEMPRESAID'},{av:'A8832AparelhoCaracId',fld:'APARELHOCARACID'},{av:'AV40ordenacao',fld:'vORDENACAO'}],[{av:'AV40ordenacao',fld:'vORDENACAO'},{av:'AV42hasData',fld:'vHASDATA'}]];
   this.EvtParms["'DESCENIVEL'"] = [[{av:'A8833AparelhoCaracEmpresaId',fld:'APARELHOCARACEMPRESAID'},{av:'AV38UltimaAparelhoCaracOrdenacao',fld:'vULTIMAAPARELHOCARACORDENACAO'},{av:'A8828AparelhoCaracOrdenacao',fld:'APARELHOCARACORDENACAO'},{av:'A8832AparelhoCaracId',fld:'APARELHOCARACID'},{av:'AV40ordenacao',fld:'vORDENACAO'}],[{av:'AV38UltimaAparelhoCaracOrdenacao',fld:'vULTIMAAPARELHOCARACORDENACAO'},{av:'A8833AparelhoCaracEmpresaId',fld:'APARELHOCARACEMPRESAID'},{av:'AV40ordenacao',fld:'vORDENACAO'},{av:'AV42hasData',fld:'vHASDATA'}]];
   this.EvtParms["'CHAMAVALORESCARACTERISTICA'"] = [[{av:'A8832AparelhoCaracId',fld:'APARELHOCARACID'}],[{av:'A8832AparelhoCaracId',fld:'APARELHOCARACID'}]];
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV39SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV45Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("A8829AparelhoCaracSNObrigatorio", "APARELHOCARACSNOBRIGATORIO", 0, "char");
   this.setVCMap("A8827AparelhoCaracTipo", "APARELHOCARACTIPO", 0, "int");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV39SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV45Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("A8829AparelhoCaracSNObrigatorio", "APARELHOCARACSNOBRIGATORIO", 0, "char");
   this.setVCMap("A8827AparelhoCaracTipo", "APARELHOCARACTIPO", 0, "int");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[23]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV32bmpSobe", rfrProp:"Value", gxAttId:"Bmpsobe"});
   GridContainer.addRefreshingVar({rfrVar:"AV32bmpSobe", rfrProp:"Tooltiptext", gxAttId:"Bmpsobe"});
   GridContainer.addRefreshingVar({rfrVar:"AV33bmpDesce", rfrProp:"Value", gxAttId:"Bmpdesce"});
   GridContainer.addRefreshingVar({rfrVar:"AV33bmpDesce", rfrProp:"Tooltiptext", gxAttId:"Bmpdesce"});
   GridContainer.addRefreshingVar({rfrVar:"AV34bmpValor", rfrProp:"Value", gxAttId:"Bmpvalor"});
   GridContainer.addRefreshingVar({rfrVar:"AV34bmpValor", rfrProp:"Tooltiptext", gxAttId:"Bmpvalor"});
   GridContainer.addRefreshingVar({rfrVar:"AV39SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"AV45Pgmname"});
   GridContainer.addRefreshingVar({rfrVar:"A8829AparelhoCaracSNObrigatorio"});
   GridContainer.addRefreshingVar({rfrVar:"A8827AparelhoCaracTipo"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new haparelhocaracteristica());
