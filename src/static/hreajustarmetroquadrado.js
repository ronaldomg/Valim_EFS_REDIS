/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:54:41.92
*/
gx.evt.autoSkip = false;
gx.define('hreajustarmetroquadrado', false, function () {
   this.ServerClass =  "hreajustarmetroquadrado" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
   };
   this.Validv_Tipolancamentoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOLANCAMENTOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e18uk1_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hmodalparmarredondamento",[]), []);
      this.refreshOutputs([]);
   };
   this.e12uk2_client=function()
   {
      this.executeServerEvent("'REAJUSTARVALOR'", false, null, false, false);
   };
   this.e11uk2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13uk2_client=function()
   {
      this.executeServerEvent("'DESMARCARTODOS'", false, null, false, false);
   };
   this.e14uk2_client=function()
   {
      this.executeServerEvent("'MARCARTODOS'", false, null, false, false);
   };
   this.e19uk2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e20uk2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,14,16,24,26,27,28,29,30,31,32,39,40,41,47,50,52];
   this.GXLastCtrlId =52;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",25,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hreajustarmetroquadrado",[],false,1,true,true,0,true,false,false,"CollMetroQuadrado.MetroQuadradoItem",0,"px","Novo registro",true,false,true,null,null,false,"AV35MetroQuadrado",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("GXV10Q",26,"CTLVALORMETROID","Preço","","ValorMetroId","int",0,"px",5,5,"right",null,[],"GXV10Q","GXV10Q",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV10R",27,"CTLVALORMETRODESCRICAO","Descrição","","ValorMetrodescricao","svchar",0,"px",30,30,"left",null,[],"GXV10R","GXV10R",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV10S",28,"CTLVALORMETROVALOR","Valor Atual","","ValorMetroValor","decimal",0,"px",22,22,"right",null,[],"GXV10S","GXV10S",true,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV10T",29,"CTLNOVOVALOR","Novo Valor","","NovoValor","decimal",0,"px",22,22,"right",null,[],"GXV10T","GXV10T",true,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV10U",30,"CTLPERCREAJUSTE","% Reajuste","","PercReajuste","decimal",0,"px",6,6,"right",null,[],"GXV10U","GXV10U",true,2,false,false,"Attribute",1,"");
   GridContainer.addCheckBox("GXV10V",31,"CTLSNREAJUSTAR","","","SnReajustar","char","S","N",null,true,false,0,"px","");
   this.setGrid(GridContainer);
   this.HDMASKVALORContainer = gx.uc.getNew(this, 44, 14, "HDMask", "HDMASKVALORContainer", "Hdmaskvalor");
   var HDMASKVALORContainer = this.HDMASKVALORContainer;
   HDMASKVALORContainer.setProp("AttachControl", "Attachcontrol", "", "str");
   HDMASKVALORContainer.setProp("Picture", "Picture", "", "str");
   HDMASKVALORContainer.setProp("Default", "Default", "", "str");
   HDMASKVALORContainer.setProp("Version", "Version", "2.01", "str");
   HDMASKVALORContainer.setProp("Reverse", "Reverse", true, "bool");
   HDMASKVALORContainer.setProp("Signed", "Signed", false, "bool");
   HDMASKVALORContainer.setProp("UnmaskedChars", "Unmaskedchars", "", "str");
   HDMASKVALORContainer.setProp("UnmaskedValue", "Unmaskedvalue", false, "bool");
   HDMASKVALORContainer.setProp("FixedChars", "Fixedchars", "", "str");
   HDMASKVALORContainer.setProp("GetValue", "Getvalue", "", "char");
   HDMASKVALORContainer.setProp("ControlType", "Controltype", "Grid", "str");
   HDMASKVALORContainer.setProp("Visible", "Visible", true, "bool");
   HDMASKVALORContainer.setProp("Enabled", "Enabled", true, "boolean");
   HDMASKVALORContainer.setProp("Class", "Class", "", "char");
   HDMASKVALORContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(HDMASKVALORContainer);
   this.HDMASKPERCContainer = gx.uc.getNew(this, 45, 14, "HDMask", "HDMASKPERCContainer", "Hdmaskperc");
   var HDMASKPERCContainer = this.HDMASKPERCContainer;
   HDMASKPERCContainer.setProp("AttachControl", "Attachcontrol", "", "str");
   HDMASKPERCContainer.setProp("Picture", "Picture", "", "str");
   HDMASKPERCContainer.setProp("Default", "Default", "", "str");
   HDMASKPERCContainer.setProp("Version", "Version", "2.01", "str");
   HDMASKPERCContainer.setProp("Reverse", "Reverse", true, "bool");
   HDMASKPERCContainer.setProp("Signed", "Signed", false, "bool");
   HDMASKPERCContainer.setProp("UnmaskedChars", "Unmaskedchars", "", "str");
   HDMASKPERCContainer.setProp("UnmaskedValue", "Unmaskedvalue", false, "bool");
   HDMASKPERCContainer.setProp("FixedChars", "Fixedchars", "", "str");
   HDMASKPERCContainer.setProp("GetValue", "Getvalue", "", "char");
   HDMASKPERCContainer.setProp("ControlType", "Controltype", "Grid", "str");
   HDMASKPERCContainer.setProp("Visible", "Visible", true, "bool");
   HDMASKPERCContainer.setProp("Enabled", "Enabled", true, "boolean");
   HDMASKPERCContainer.setProp("Class", "Class", "", "char");
   HDMASKPERCContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(HDMASKPERCContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE7",grid:0};
   GXValidFnc[8]={fld:"TABLE1",grid:0};
   GXValidFnc[11]={fld:"TABLE3",grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNREAJUSTAR",gxz:"ZV41SnReajustar",gxold:"OV41SnReajustar",gxvar:"AV41SnReajustar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV41SnReajustar=Value},v2z:function(Value){gx.O.ZV41SnReajustar=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNREAJUSTAR",gx.O.AV41SnReajustar,"S")},c2v:function(){gx.O.AV41SnReajustar=this.val()},val:function(){return gx.fn.getControlValue("vSNREAJUSTAR")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[16]={fld:"TABLE4",grid:0};
   GXValidFnc[24]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[26]={lvl:2,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,isacc:0,grid:25,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLVALORMETROID",gxz:"ZV53GXV10Q",gxold:"OV53GXV10Q",gxvar:"GXV10Q",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV10Q=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV53GXV10Q=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLVALORMETROID",row || gx.fn.currentGridRowImpl(25),gx.O.GXV10Q,0)},c2v:function(){gx.O.GXV10Q=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLVALORMETROID",row || gx.fn.currentGridRowImpl(25),'.')},nac:gx.falseFn};
   GXValidFnc[27]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:0,isacc:0,grid:25,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLVALORMETRODESCRICAO",gxz:"ZV54GXV10R",gxold:"OV54GXV10R",gxvar:"GXV10R",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10R=Value},v2z:function(Value){gx.O.ZV54GXV10R=Value},v2c:function(row){gx.fn.setGridControlValue("CTLVALORMETRODESCRICAO",row || gx.fn.currentGridRowImpl(25),gx.O.GXV10R,0)},c2v:function(){gx.O.GXV10R=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLVALORMETRODESCRICAO",row || gx.fn.currentGridRowImpl(25))},nac:gx.falseFn};
   GXValidFnc[28]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:0,grid:25,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLVALORMETROVALOR",gxz:"ZV55GXV10S",gxold:"OV55GXV10S",gxvar:"GXV10S",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV10S=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV55GXV10S=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLVALORMETROVALOR",row || gx.fn.currentGridRowImpl(25),gx.O.GXV10S,2,',')},c2v:function(){gx.O.GXV10S=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLVALORMETROVALOR",row || gx.fn.currentGridRowImpl(25),'.',',')},nac:gx.falseFn};
   GXValidFnc[29]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:0,grid:25,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLNOVOVALOR",gxz:"ZV56GXV10T",gxold:"OV56GXV10T",gxvar:"GXV10T",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV10T=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV56GXV10T=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLNOVOVALOR",row || gx.fn.currentGridRowImpl(25),gx.O.GXV10T,2,',')},c2v:function(){gx.O.GXV10T=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLNOVOVALOR",row || gx.fn.currentGridRowImpl(25),'.',',')},nac:gx.falseFn};
   GXValidFnc[30]={lvl:2,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,isacc:0,grid:25,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPERCREAJUSTE",gxz:"ZV57GXV10U",gxold:"OV57GXV10U",gxvar:"GXV10U",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV10U=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV57GXV10U=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLPERCREAJUSTE",row || gx.fn.currentGridRowImpl(25),gx.O.GXV10U,2,',')},c2v:function(){gx.O.GXV10U=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLPERCREAJUSTE",row || gx.fn.currentGridRowImpl(25),'.',',')},nac:gx.falseFn};
   GXValidFnc[31]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:0,isacc:0,grid:25,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLSNREAJUSTAR",gxz:"ZV58GXV10V",gxold:"OV58GXV10V",gxvar:"GXV10V",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){gx.O.GXV10V=Value},v2z:function(Value){gx.O.ZV58GXV10V=Value},v2c:function(row){gx.fn.setGridCheckBoxValue("CTLSNREAJUSTAR",row || gx.fn.currentGridRowImpl(25),gx.O.GXV10V,"S")},c2v:function(){gx.O.GXV10V=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLSNREAJUSTAR",row || gx.fn.currentGridRowImpl(25))},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[32]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV33AcessoSistemaSequencia",gxold:"OV33AcessoSistemaSequencia",gxvar:"AV33AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV33AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV33AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV33AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[40]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tipolancamentoempresaid,isvalid:null,rgrid:[],fld:"vTIPOLANCAMENTOEMPRESAID",gxz:"ZV42TipoLancamentoEmpresaid",gxold:"OV42TipoLancamentoEmpresaid",gxvar:"AV42TipoLancamentoEmpresaid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42TipoLancamentoEmpresaid=Value},v2z:function(Value){gx.O.ZV42TipoLancamentoEmpresaid=Value},v2c:function(){gx.fn.setControlValue("vTIPOLANCAMENTOEMPRESAID",gx.O.AV42TipoLancamentoEmpresaid,0)},c2v:function(){gx.O.AV42TipoLancamentoEmpresaid=this.val()},val:function(){return gx.fn.getControlValue("vTIPOLANCAMENTOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[41]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECARAC",gxz:"ZV43QtdeCarac",gxold:"OV43QtdeCarac",gxvar:"AV43QtdeCarac",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV43QtdeCarac=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV43QtdeCarac=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDECARAC",gx.O.AV43QtdeCarac,0)},c2v:function(){gx.O.AV43QtdeCarac=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECARAC",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TABLE6",grid:0};
   GXValidFnc[50]={fld:"BTNPARM",grid:0};
   GXValidFnc[52]={fld:"BTNHELP",grid:0};
   this.AV41SnReajustar = "" ;
   this.ZV41SnReajustar = "" ;
   this.OV41SnReajustar = "" ;
   this.ZV53GXV10Q = 0 ;
   this.OV53GXV10Q = 0 ;
   this.ZV54GXV10R = "" ;
   this.OV54GXV10R = "" ;
   this.ZV55GXV10S = 0 ;
   this.OV55GXV10S = 0 ;
   this.ZV56GXV10T = 0 ;
   this.OV56GXV10T = 0 ;
   this.ZV57GXV10U = 0 ;
   this.OV57GXV10U = 0 ;
   this.ZV58GXV10V = "" ;
   this.OV58GXV10V = "" ;
   this.AV33AcessoSistemaSequencia = 0 ;
   this.ZV33AcessoSistemaSequencia = 0 ;
   this.OV33AcessoSistemaSequencia = 0 ;
   this.AV42TipoLancamentoEmpresaid = "" ;
   this.ZV42TipoLancamentoEmpresaid = "" ;
   this.OV42TipoLancamentoEmpresaid = "" ;
   this.AV43QtdeCarac = 0 ;
   this.ZV43QtdeCarac = 0 ;
   this.OV43QtdeCarac = 0 ;
   this.AV41SnReajustar = "" ;
   this.AV33AcessoSistemaSequencia = 0 ;
   this.AV42TipoLancamentoEmpresaid = "" ;
   this.AV43QtdeCarac = 0 ;
   this.GXV10Q = 0 ;
   this.GXV10R = "" ;
   this.GXV10S = 0 ;
   this.GXV10T = 0 ;
   this.GXV10U = 0 ;
   this.GXV10V = "" ;
   this.A5353ValorMetroEmpresaId = "" ;
   this.A5265ValorMetroDescricao = "" ;
   this.A5266ValorMetroValor = 0 ;
   this.A5264ValorMetroId = 0 ;
   this.A962TipoLancamentoId = 0 ;
   this.A1046TipoLancamentoEmpresaid = "" ;
   this.A964TipoLancamentoPagRec = "" ;
   this.A965TipoLancamentoTipo = "" ;
   this.Events = {"e12uk2_client": ["'REAJUSTARVALOR'", true] ,"e11uk2_client": ["'FECHAR'", true] ,"e13uk2_client": ["'DESMARCARTODOS'", true] ,"e14uk2_client": ["'MARCARTODOS'", true] ,"e19uk2_client": ["ENTER", true] ,"e20uk2_client": ["CANCEL", true] ,"e18uk1_client": ["'PARAMETROS'", false]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV35MetroQuadrado',fld:'vMETROQUADRADO',grid:25},{av:'subGrid_Rows'}],[]];
   this.EvtParms["'REAJUSTARVALOR'"] = [[{av:'AV39SnErro',fld:'vSNERRO'},{av:'AV35MetroQuadrado',fld:'vMETROQUADRADO',grid:25},{av:'AV16EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV41SnReajustar',fld:'vSNREAJUSTAR'},{av:'AV46TipoLancamentoId',fld:'vTIPOLANCAMENTOID'},{av:'A1046TipoLancamentoEmpresaid',fld:'TIPOLANCAMENTOEMPRESAID'},{av:'AV42TipoLancamentoEmpresaid',fld:'vTIPOLANCAMENTOEMPRESAID'},{av:'A962TipoLancamentoId',fld:'TIPOLANCAMENTOID'},{av:'A964TipoLancamentoPagRec',fld:'TIPOLANCAMENTOPAGREC'},{av:'A965TipoLancamentoTipo',fld:'TIPOLANCAMENTOTIPO'},{av:'A5264ValorMetroId',fld:'VALORMETROID'},{av:'A5353ValorMetroEmpresaId',fld:'VALORMETROEMPRESAID'},{av:'A5265ValorMetroDescricao',fld:'VALORMETRODESCRICAO'},{av:'A5266ValorMetroValor',fld:'VALORMETROVALOR'},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'}],[{av:'AV61GXV2',fld:'vGXV2'},{av:'AV36MetroQuadradoItem',fld:'vMETROQUADRADOITEM'},{av:'AV39SnErro',fld:'vSNERRO'},{av:'AV62GXLvl74',fld:'vGXLVL74'},{av:'AV63GXV3',fld:'vGXV3'},{av:'AV35MetroQuadrado',fld:'vMETROQUADRADO',grid:25}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV33AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["'DESMARCARTODOS'"] = [[{av:'AV35MetroQuadrado',fld:'vMETROQUADRADO',grid:25},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'}],[{av:'AV35MetroQuadrado',fld:'vMETROQUADRADO',grid:25}]];
   this.EvtParms["'MARCARTODOS'"] = [[{av:'AV35MetroQuadrado',fld:'vMETROQUADRADO',grid:25},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'}],[{av:'AV35MetroQuadrado',fld:'vMETROQUADRADO',grid:25}]];
   this.EvtParms["'PARAMETROS'"] = [[],[]];
   this.EvtParms["GRID_FIRSTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV35MetroQuadrado',fld:'vMETROQUADRADO',grid:25}],[]];
   this.EvtParms["GRID_PREVPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV35MetroQuadrado',fld:'vMETROQUADRADO',grid:25}],[]];
   this.EvtParms["GRID_NEXTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV35MetroQuadrado',fld:'vMETROQUADRADO',grid:25}],[]];
   this.EvtParms["GRID_LASTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV35MetroQuadrado',fld:'vMETROQUADRADO',grid:25}],[]];
   this.addGridBCProperty("Metroquadrado", ["ValorMetroId"], this.GXValidFnc[26], "AV35MetroQuadrado");
   this.addGridBCProperty("Metroquadrado", ["ValorMetrodescricao"], this.GXValidFnc[27], "AV35MetroQuadrado");
   this.addGridBCProperty("Metroquadrado", ["ValorMetroValor"], this.GXValidFnc[28], "AV35MetroQuadrado");
   this.addGridBCProperty("Metroquadrado", ["NovoValor"], this.GXValidFnc[29], "AV35MetroQuadrado");
   this.addGridBCProperty("Metroquadrado", ["PercReajuste"], this.GXValidFnc[30], "AV35MetroQuadrado");
   this.addGridBCProperty("Metroquadrado", ["SnReajustar"], this.GXValidFnc[31], "AV35MetroQuadrado");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hreajustarmetroquadrado());
