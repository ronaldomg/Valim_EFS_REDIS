/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:58:13.97
*/
gx.evt.autoSkip = false;
gx.define('hconsultatipolancamento', false, function () {
   this.ServerClass =  "hconsultatipolancamento" ;
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
      this.AV18PTipoLancamentoId=gx.fn.getIntegerValue("vPTIPOLANCAMENTOID",'.') ;
   };
   this.e177y2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e117y2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e127y2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e137y2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e147y2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e157y2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e207y2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e217y1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,29,30,31,32,33,34,40,43,45,47,49,51,52,53,54];
   this.GXLastCtrlId =54;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",28,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultatipolancamento",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(962,29,"TIPOLANCAMENTOID","","","TipoLancamentoId","int",0,"px",4,4,"right",null,[],962,"TipoLancamentoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(963,30,"TIPOLANCAMENTODESCRICAO","","","TipoLancamentoDescricao","svchar",0,"px",25,25,"left",null,[],963,"TipoLancamentoDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addComboBox(964,31,"TIPOLANCAMENTOPAGREC","Pagar/Receber","TipoLancamentoPagRec","char",null,0,false,false,0,"px","");
   GridContainer.addComboBox(965,32,"TIPOLANCAMENTOTIPO","Tipo do Tipo Lançamento","TipoLancamentoTipo","char",null,0,false,false,0,"px","");
   GridContainer.addSingleLineEdit("Desctipolancamentopagrec",33,"vDESCTIPOLANCAMENTOPAGREC","Pagar/Receber","","DescTipoLancamentoPagRec","svchar",0,"px",8,8,"left",null,[],"Desctipolancamentopagrec","DescTipoLancamentoPagRec",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Desctipolancamentotipo",34,"vDESCTIPOLANCAMENTOTIPO","Tipo lançamento","","DescTipoLancamentoTipo","svchar",0,"px",15,15,"left",null,[],"Desctipolancamentotipo","DescTipoLancamentoTipo",true,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTIPOLANCAMENTODESCRICAO",gxz:"ZV15TipoLancamentoDescricao",gxold:"OV15TipoLancamentoDescricao",gxvar:"AV15TipoLancamentoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15TipoLancamentoDescricao=Value},v2z:function(Value){gx.O.ZV15TipoLancamentoDescricao=Value},v2c:function(){gx.fn.setControlValue("vTIPOLANCAMENTODESCRICAO",gx.O.AV15TipoLancamentoDescricao,0)},c2v:function(){gx.O.AV15TipoLancamentoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTIPOLANCAMENTODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTIPOLANCAMENTOPAGREC",gxz:"ZV16TipoLancamentoPagRec",gxold:"OV16TipoLancamentoPagRec",gxvar:"AV16TipoLancamentoPagRec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV16TipoLancamentoPagRec=Value},v2z:function(Value){gx.O.ZV16TipoLancamentoPagRec=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPOLANCAMENTOPAGREC",gx.O.AV16TipoLancamentoPagRec)},c2v:function(){gx.O.AV16TipoLancamentoPagRec=this.val()},val:function(){return gx.fn.getControlValue("vTIPOLANCAMENTOPAGREC")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTIPOLANCAMENTOTIPO",gxz:"ZV17TipoLancamentoTipo",gxold:"OV17TipoLancamentoTipo",gxvar:"AV17TipoLancamentoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV17TipoLancamentoTipo=Value},v2z:function(Value){gx.O.ZV17TipoLancamentoTipo=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPOLANCAMENTOTIPO",gx.O.AV17TipoLancamentoTipo)},c2v:function(){gx.O.AV17TipoLancamentoTipo=this.val()},val:function(){return gx.fn.getControlValue("vTIPOLANCAMENTOTIPO")},nac:gx.falseFn};
   GXValidFnc[29]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPOLANCAMENTOID",gxz:"Z962TipoLancamentoId",gxold:"O962TipoLancamentoId",gxvar:"A962TipoLancamentoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A962TipoLancamentoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z962TipoLancamentoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TIPOLANCAMENTOID",row || gx.fn.currentGridRowImpl(28),gx.O.A962TipoLancamentoId,0)},c2v:function(){gx.O.A962TipoLancamentoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TIPOLANCAMENTOID",row || gx.fn.currentGridRowImpl(28),'.')},nac:gx.falseFn};
   GXValidFnc[30]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPOLANCAMENTODESCRICAO",gxz:"Z963TipoLancamentoDescricao",gxold:"O963TipoLancamentoDescricao",gxvar:"A963TipoLancamentoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A963TipoLancamentoDescricao=Value},v2z:function(Value){gx.O.Z963TipoLancamentoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("TIPOLANCAMENTODESCRICAO",row || gx.fn.currentGridRowImpl(28),gx.O.A963TipoLancamentoDescricao,0)},c2v:function(){gx.O.A963TipoLancamentoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOLANCAMENTODESCRICAO",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[31]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPOLANCAMENTOPAGREC",gxz:"Z964TipoLancamentoPagRec",gxold:"O964TipoLancamentoPagRec",gxvar:"A964TipoLancamentoPagRec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A964TipoLancamentoPagRec=Value},v2z:function(Value){gx.O.Z964TipoLancamentoPagRec=Value},v2c:function(row){gx.fn.setGridComboBoxValue("TIPOLANCAMENTOPAGREC",row || gx.fn.currentGridRowImpl(28),gx.O.A964TipoLancamentoPagRec)},c2v:function(){gx.O.A964TipoLancamentoPagRec=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOLANCAMENTOPAGREC",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[32]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPOLANCAMENTOTIPO",gxz:"Z965TipoLancamentoTipo",gxold:"O965TipoLancamentoTipo",gxvar:"A965TipoLancamentoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A965TipoLancamentoTipo=Value},v2z:function(Value){gx.O.Z965TipoLancamentoTipo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("TIPOLANCAMENTOTIPO",row || gx.fn.currentGridRowImpl(28),gx.O.A965TipoLancamentoTipo)},c2v:function(){gx.O.A965TipoLancamentoTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOLANCAMENTOTIPO",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"svchar",len:8,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vDESCTIPOLANCAMENTOPAGREC",gxz:"ZV19DescTipoLancamentoPagRec",gxold:"OV19DescTipoLancamentoPagRec",gxvar:"AV19DescTipoLancamentoPagRec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV19DescTipoLancamentoPagRec=Value},v2z:function(Value){gx.O.ZV19DescTipoLancamentoPagRec=Value},v2c:function(row){gx.fn.setGridControlValue("vDESCTIPOLANCAMENTOPAGREC",row || gx.fn.currentGridRowImpl(28),gx.O.AV19DescTipoLancamentoPagRec,0)},c2v:function(){gx.O.AV19DescTipoLancamentoPagRec=this.val()},val:function(row){return gx.fn.getGridControlValue("vDESCTIPOLANCAMENTOPAGREC",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"svchar",len:15,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vDESCTIPOLANCAMENTOTIPO",gxz:"ZV20DescTipoLancamentoTipo",gxold:"OV20DescTipoLancamentoTipo",gxvar:"AV20DescTipoLancamentoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV20DescTipoLancamentoTipo=Value},v2z:function(Value){gx.O.ZV20DescTipoLancamentoTipo=Value},v2c:function(row){gx.fn.setGridControlValue("vDESCTIPOLANCAMENTOTIPO",row || gx.fn.currentGridRowImpl(28),gx.O.AV20DescTipoLancamentoTipo,0)},c2v:function(){gx.O.AV20DescTipoLancamentoTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("vDESCTIPOLANCAMENTOTIPO",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[40]={fld:"TABLENAV",grid:0};
   GXValidFnc[43]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[45]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[47]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[49]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[51]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[52]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV22Pagina",gxold:"OV22Pagina",gxvar:"AV22Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV22Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV22Pagina)},c2v:function(){gx.O.AV22Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[53]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV23PaginaAux",gxold:"OV23PaginaAux",gxvar:"AV23PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV23PaginaAux,0)},c2v:function(){gx.O.AV23PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[54]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV15TipoLancamentoDescricao = "" ;
   this.ZV15TipoLancamentoDescricao = "" ;
   this.OV15TipoLancamentoDescricao = "" ;
   this.AV16TipoLancamentoPagRec = "" ;
   this.ZV16TipoLancamentoPagRec = "" ;
   this.OV16TipoLancamentoPagRec = "" ;
   this.AV17TipoLancamentoTipo = "" ;
   this.ZV17TipoLancamentoTipo = "" ;
   this.OV17TipoLancamentoTipo = "" ;
   this.Z962TipoLancamentoId = 0 ;
   this.O962TipoLancamentoId = 0 ;
   this.Z963TipoLancamentoDescricao = "" ;
   this.O963TipoLancamentoDescricao = "" ;
   this.Z964TipoLancamentoPagRec = "" ;
   this.O964TipoLancamentoPagRec = "" ;
   this.Z965TipoLancamentoTipo = "" ;
   this.O965TipoLancamentoTipo = "" ;
   this.ZV19DescTipoLancamentoPagRec = "" ;
   this.OV19DescTipoLancamentoPagRec = "" ;
   this.ZV20DescTipoLancamentoTipo = "" ;
   this.OV20DescTipoLancamentoTipo = "" ;
   this.AV22Pagina = 0 ;
   this.ZV22Pagina = 0 ;
   this.OV22Pagina = 0 ;
   this.AV23PaginaAux = 0 ;
   this.ZV23PaginaAux = 0 ;
   this.OV23PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV15TipoLancamentoDescricao = "" ;
   this.AV16TipoLancamentoPagRec = "" ;
   this.AV17TipoLancamentoTipo = "" ;
   this.AV22Pagina = 0 ;
   this.AV23PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV18PTipoLancamentoId = 0 ;
   this.A1046TipoLancamentoEmpresaid = "" ;
   this.A962TipoLancamentoId = 0 ;
   this.A963TipoLancamentoDescricao = "" ;
   this.A964TipoLancamentoPagRec = "" ;
   this.A965TipoLancamentoTipo = "" ;
   this.AV19DescTipoLancamentoPagRec = "" ;
   this.AV20DescTipoLancamentoTipo = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.Events = {"e177y2_client": ["ENTER", true] ,"e117y2_client": ["'GXM_FIRST'", true] ,"e127y2_client": ["'GXM_PREVIOUS'", true] ,"e137y2_client": ["'GXM_NEXT'", true] ,"e147y2_client": ["'GXM_LAST'", true] ,"e157y2_client": ["'PROCURAR'", true] ,"e207y2_client": ["'ATUALIZAPAGINA'", true] ,"e217y1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15TipoLancamentoDescricao',fld:'vTIPOLANCAMENTODESCRICAO'},{av:'AV16TipoLancamentoPagRec',fld:'vTIPOLANCAMENTOPAGREC'},{av:'AV17TipoLancamentoTipo',fld:'vTIPOLANCAMENTOTIPO'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A964TipoLancamentoPagRec',fld:'TIPOLANCAMENTOPAGREC'},{av:'A965TipoLancamentoTipo',fld:'TIPOLANCAMENTOTIPO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'TIPOLANCAMENTOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TIPOLANCAMENTOID","Title")',ctrl:'TIPOLANCAMENTOID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'TIPOLANCAMENTODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TIPOLANCAMENTODESCRICAO","Title")',ctrl:'TIPOLANCAMENTODESCRICAO',prop:'Title'},{av:'AV23PaginaAux',fld:'vPAGINAAUX'},{av:'AV22Pagina',fld:'vPAGINA'},{av:'AV21NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A962TipoLancamentoId',fld:'TIPOLANCAMENTOID'}],[{av:'AV18PTipoLancamentoId',fld:'vPTIPOLANCAMENTOID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15TipoLancamentoDescricao',fld:'vTIPOLANCAMENTODESCRICAO'},{av:'AV16TipoLancamentoPagRec',fld:'vTIPOLANCAMENTOPAGREC'},{av:'AV17TipoLancamentoTipo',fld:'vTIPOLANCAMENTOTIPO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A964TipoLancamentoPagRec',fld:'TIPOLANCAMENTOPAGREC'},{av:'A965TipoLancamentoTipo',fld:'TIPOLANCAMENTOTIPO'}],[{av:'AV22Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15TipoLancamentoDescricao',fld:'vTIPOLANCAMENTODESCRICAO'},{av:'AV16TipoLancamentoPagRec',fld:'vTIPOLANCAMENTOPAGREC'},{av:'AV17TipoLancamentoTipo',fld:'vTIPOLANCAMENTOTIPO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A964TipoLancamentoPagRec',fld:'TIPOLANCAMENTOPAGREC'},{av:'A965TipoLancamentoTipo',fld:'TIPOLANCAMENTOTIPO'},{av:'AV22Pagina',fld:'vPAGINA'}],[{av:'AV22Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15TipoLancamentoDescricao',fld:'vTIPOLANCAMENTODESCRICAO'},{av:'AV16TipoLancamentoPagRec',fld:'vTIPOLANCAMENTOPAGREC'},{av:'AV17TipoLancamentoTipo',fld:'vTIPOLANCAMENTOTIPO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A964TipoLancamentoPagRec',fld:'TIPOLANCAMENTOPAGREC'},{av:'A965TipoLancamentoTipo',fld:'TIPOLANCAMENTOTIPO'},{av:'AV22Pagina',fld:'vPAGINA'},{av:'AV23PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV22Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15TipoLancamentoDescricao',fld:'vTIPOLANCAMENTODESCRICAO'},{av:'AV16TipoLancamentoPagRec',fld:'vTIPOLANCAMENTOPAGREC'},{av:'AV17TipoLancamentoTipo',fld:'vTIPOLANCAMENTOTIPO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A964TipoLancamentoPagRec',fld:'TIPOLANCAMENTOPAGREC'},{av:'A965TipoLancamentoTipo',fld:'TIPOLANCAMENTOTIPO'},{av:'AV23PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV22Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15TipoLancamentoDescricao',fld:'vTIPOLANCAMENTODESCRICAO'},{av:'AV16TipoLancamentoPagRec',fld:'vTIPOLANCAMENTOPAGREC'},{av:'AV17TipoLancamentoTipo',fld:'vTIPOLANCAMENTOTIPO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A964TipoLancamentoPagRec',fld:'TIPOLANCAMENTOPAGREC'},{av:'A965TipoLancamentoTipo',fld:'TIPOLANCAMENTOTIPO'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV22Pagina',fld:'vPAGINA'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A964TipoLancamentoPagRec',fld:'TIPOLANCAMENTOPAGREC'},{av:'A965TipoLancamentoTipo',fld:'TIPOLANCAMENTOTIPO'}],[{av:'AV19DescTipoLancamentoPagRec',fld:'vDESCTIPOLANCAMENTOPAGREC'},{av:'AV20DescTipoLancamentoTipo',fld:'vDESCTIPOLANCAMENTOTIPO'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15TipoLancamentoDescricao',fld:'vTIPOLANCAMENTODESCRICAO'},{av:'AV16TipoLancamentoPagRec',fld:'vTIPOLANCAMENTOPAGREC'},{av:'AV17TipoLancamentoTipo',fld:'vTIPOLANCAMENTOTIPO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A964TipoLancamentoPagRec',fld:'TIPOLANCAMENTOPAGREC'},{av:'A965TipoLancamentoTipo',fld:'TIPOLANCAMENTOTIPO'}],[]];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV18PTipoLancamentoId", "vPTIPOLANCAMENTOID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[23]);
   GridContainer.addRefreshingVar(this.GXValidFnc[54]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"A964TipoLancamentoPagRec", rfrProp:"Value", gxAttId:"964"});
   GridContainer.addRefreshingVar({rfrVar:"A965TipoLancamentoTipo", rfrProp:"Value", gxAttId:"965"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultatipolancamento());
