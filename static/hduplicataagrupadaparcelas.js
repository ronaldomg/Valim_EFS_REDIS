/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:36:37.58
*/
gx.evt.autoSkip = false;
gx.define('hduplicataagrupadaparcelas', false, function () {
   this.ServerClass =  "hduplicataagrupadaparcelas" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.refreshAndEnter = true;
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("6", "'INSERIRNOVO'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV14ValorTotal=gx.fn.getDecimalValue("vVALORTOTAL",'.',',') ;
      this.AV17Contas=gx.fn.getControlValue("vCONTAS") ;
      this.AV7DtPriVencmto=gx.fn.getDateValue("vDTPRIVENCMTO") ;
      this.AV12QtdeParcela=gx.fn.getIntegerValue("vQTDEPARCELA",'.') ;
      this.AV11Periodicidade=gx.fn.getIntegerValue("vPERIODICIDADE",'.') ;
   };
   this.e122462_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e112462_client=function()
   {
      this.executeServerEvent("'INSERIRNOVO'", true, null, false, false);
   };
   this.e162462_client=function()
   {
      this.executeServerEvent("'EXCLUIRITEM'", true, arguments[0], false, false);
   };
   this.e172462_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,15,16,17,18,19,22];
   this.GXLastCtrlId =22;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",14,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"hduplicataagrupadaparcelas",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",false,false,true,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit("Noparcelagrid",15,"vNOPARCELAGRID","No Parcela Grid","","NoParcelaGrid","int",0,"px",4,4,"right",null,[],"Noparcelagrid","NoParcelaGrid",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("Dtvencimgrid",16,"vDTVENCIMGRID","Vecmto","","DtVencimGrid","date",0,"px",10,10,"right",null,[],"Dtvencimgrid","DtVencimGrid",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("Valorgrid",17,"vVALORGRID","Valor","","ValorGrid","decimal",0,"px",22,22,"right",null,[],"Valorgrid","ValorGrid",true,2,false,false,"Attribute",1,"");
   Grid1Container.addBitmap("&Bmpexc","vBMPEXC",18,0,"px",17,"px","e162462_client","","","Image","GridColumnImage");
   this.setGrid(Grid1Container);
   this.HDMASKDATAContainer = gx.uc.getNew(this, 29, 15, "HDMask", "HDMASKDATAContainer", "Hdmaskdata");
   var HDMASKDATAContainer = this.HDMASKDATAContainer;
   HDMASKDATAContainer.setDynProp("AttachControl", "Attachcontrol", "", "str");
   HDMASKDATAContainer.setProp("Picture", "Picture", "99/99/9999", "str");
   HDMASKDATAContainer.setProp("Default", "Default", "", "str");
   HDMASKDATAContainer.setProp("Version", "Version", "2.01", "str");
   HDMASKDATAContainer.setProp("Reverse", "Reverse", false, "bool");
   HDMASKDATAContainer.setProp("Signed", "Signed", false, "bool");
   HDMASKDATAContainer.setProp("UnmaskedChars", "Unmaskedchars", "[(),.:/ -]", "str");
   HDMASKDATAContainer.setProp("UnmaskedValue", "Unmaskedvalue", false, "bool");
   HDMASKDATAContainer.setProp("FixedChars", "Fixedchars", "[(),.:/ -]", "str");
   HDMASKDATAContainer.setProp("GetValue", "Getvalue", "", "char");
   HDMASKDATAContainer.setProp("ControlType", "Controltype", "Grid", "str");
   HDMASKDATAContainer.setProp("Visible", "Visible", true, "bool");
   HDMASKDATAContainer.setProp("Enabled", "Enabled", true, "boolean");
   HDMASKDATAContainer.setProp("Class", "Class", "", "char");
   HDMASKDATAContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(HDMASKDATAContainer);
   this.HDMASKVALORContainer = gx.uc.getNew(this, 30, 15, "HDMask", "HDMASKVALORContainer", "Hdmaskvalor");
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
   GXValidFnc[2]={fld:"TABLE3",grid:0};
   GXValidFnc[5]={fld:"TABLE4",grid:0};
   GXValidFnc[8]={fld:"TABLE2",grid:0};
   GXValidFnc[11]={fld:"IMAGE2",grid:0};
   GXValidFnc[13]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[15]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:0,grid:14,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vNOPARCELAGRID",gxz:"ZV10NoParcelaGrid",gxold:"OV10NoParcelaGrid",gxvar:"AV10NoParcelaGrid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV10NoParcelaGrid=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV10NoParcelaGrid=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vNOPARCELAGRID",row || gx.fn.currentGridRowImpl(14),gx.O.AV10NoParcelaGrid,0)},c2v:function(){gx.O.AV10NoParcelaGrid=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vNOPARCELAGRID",row || gx.fn.currentGridRowImpl(14),'.')},nac:gx.falseFn};
   GXValidFnc[16]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:0,isacc:0,grid:14,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vDTVENCIMGRID",gxz:"ZV8DtVencimGrid",gxold:"OV8DtVencimGrid",gxvar:"AV8DtVencimGrid",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8DtVencimGrid=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV8DtVencimGrid=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("vDTVENCIMGRID",row || gx.fn.currentGridRowImpl(14),gx.O.AV8DtVencimGrid,0)},c2v:function(){gx.O.AV8DtVencimGrid=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("vDTVENCIMGRID",row || gx.fn.currentGridRowImpl(14))},nac:gx.falseFn};
   GXValidFnc[17]={lvl:2,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:0,grid:14,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vVALORGRID",gxz:"ZV13ValorGrid",gxold:"OV13ValorGrid",gxvar:"AV13ValorGrid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV13ValorGrid=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV13ValorGrid=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("vVALORGRID",row || gx.fn.currentGridRowImpl(14),gx.O.AV13ValorGrid,2,',')},c2v:function(){gx.O.AV13ValorGrid=this.val()},val:function(row){return gx.fn.getGridDecimalValue("vVALORGRID",row || gx.fn.currentGridRowImpl(14),'.',',')},nac:gx.falseFn};
   GXValidFnc[18]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:14,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV5bmpExc",gxold:"OV5bmpExc",gxvar:"AV5bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5bmpExc=Value},v2z:function(Value){gx.O.ZV5bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(14),gx.O.AV5bmpExc,gx.O.AV33Bmpexc_GXI)},c2v:function(){gx.O.AV33Bmpexc_GXI=this.val_GXI();gx.O.AV5bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(14))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(14))}, gxvar_GXI:'AV33Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[19]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[22]={fld:"TXTVLRDUPLICATA", format:0,grid:0};
   this.ZV10NoParcelaGrid = 0 ;
   this.OV10NoParcelaGrid = 0 ;
   this.ZV8DtVencimGrid = gx.date.nullDate() ;
   this.OV8DtVencimGrid = gx.date.nullDate() ;
   this.ZV13ValorGrid = 0 ;
   this.OV13ValorGrid = 0 ;
   this.ZV5bmpExc = "" ;
   this.OV5bmpExc = "" ;
   this.AV14ValorTotal = 0 ;
   this.AV7DtPriVencmto = gx.date.nullDate() ;
   this.AV12QtdeParcela = 0 ;
   this.AV11Periodicidade = 0 ;
   this.AV10NoParcelaGrid = 0 ;
   this.AV8DtVencimGrid = gx.date.nullDate() ;
   this.AV13ValorGrid = 0 ;
   this.AV5bmpExc = "" ;
   this.AV17Contas = {} ;
   this.Events = {"e122462_client": ["ENTER", true] ,"e112462_client": ["'INSERIRNOVO'", true] ,"e162462_client": ["'EXCLUIRITEM'", true] ,"e172462_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'AV5bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV17Contas',fld:'vCONTAS'},{av:'AV14ValorTotal',fld:'vVALORTOTAL'}],[{av:'this.HDMASKDATAContainer.AttachControl',ctrl:'HDMASKDATA',prop:'AttachControl'},{av:'gx.fn.getCtrlProperty("TXTVLRDUPLICATA","Caption")',ctrl:'TXTVLRDUPLICATA',prop:'Caption'}]];
   this.EvtParms["ENTER"] = [[{av:'AV26ValorTotalParcelas',fld:'vVALORTOTALPARCELAS'},{av:'AV14ValorTotal',fld:'vVALORTOTAL'},{av:'AV11Periodicidade',fld:'vPERIODICIDADE'},{av:'AV12QtdeParcela',fld:'vQTDEPARCELA'},{av:'AV7DtPriVencmto',fld:'vDTPRIVENCMTO'},{av:'AV10NoParcelaGrid',fld:'vNOPARCELAGRID',grid:14},{av:'AV8DtVencimGrid',fld:'vDTVENCIMGRID',grid:14},{av:'AV13ValorGrid',fld:'vVALORGRID',grid:14},{av:'AV17Contas',fld:'vCONTAS'},{av:'AV27SnErro',fld:'vSNERRO'}],[{av:'AV27SnErro',fld:'vSNERRO'},{av:'AV17Contas',fld:'vCONTAS'},{av:'AV36GXV2',fld:'vGXV2'},{av:'AV18ContasParcela',fld:'vCONTASPARCELA'},{av:'AV26ValorTotalParcelas',fld:'vVALORTOTALPARCELAS'},{av:'AV23NumLinha',fld:'vNUMLINHA'},{av:'AV39GXV5',fld:'vGXV5'}]];
   this.EvtParms["GRID1.LOAD"] = [[{av:'AV17Contas',fld:'vCONTAS'}],[{av:'AV34GXV1',fld:'vGXV1'},{av:'AV18ContasParcela',fld:'vCONTASPARCELA'},{av:'AV8DtVencimGrid',fld:'vDTVENCIMGRID'},{av:'AV13ValorGrid',fld:'vVALORGRID'},{av:'AV10NoParcelaGrid',fld:'vNOPARCELAGRID'}]];
   this.EvtParms["'INSERIRNOVO'"] = [[{av:'AV10NoParcelaGrid',fld:'vNOPARCELAGRID',grid:14},{av:'AV8DtVencimGrid',fld:'vDTVENCIMGRID',grid:14},{av:'AV13ValorGrid',fld:'vVALORGRID',grid:14},{av:'AV17Contas',fld:'vCONTAS'},{av:'AV27SnErro',fld:'vSNERRO'}],[{av:'AV27SnErro',fld:'vSNERRO'},{av:'AV17Contas',fld:'vCONTAS'},{av:'AV36GXV2',fld:'vGXV2'},{av:'AV18ContasParcela',fld:'vCONTASPARCELA'},{av:'AV26ValorTotalParcelas',fld:'vVALORTOTALPARCELAS'},{av:'AV23NumLinha',fld:'vNUMLINHA'},{av:'AV39GXV5',fld:'vGXV5'}]];
   this.EvtParms["'EXCLUIRITEM'"] = [[{av:'AV10NoParcelaGrid',fld:'vNOPARCELAGRID',grid:14},{av:'AV17Contas',fld:'vCONTAS'},{av:'AV8DtVencimGrid',fld:'vDTVENCIMGRID',grid:14},{av:'AV13ValorGrid',fld:'vVALORGRID',grid:14},{av:'AV27SnErro',fld:'vSNERRO'}],[{av:'AV25NoPacAux',fld:'vNOPACAUX'},{av:'AV24NoAux',fld:'vNOAUX'},{av:'AV37GXV3',fld:'vGXV3'},{av:'AV18ContasParcela',fld:'vCONTASPARCELA'},{av:'AV17Contas',fld:'vCONTAS'},{av:'AV27SnErro',fld:'vSNERRO'},{av:'AV36GXV2',fld:'vGXV2'}]];
   this.EnterCtrl = ["BTNGRAVAR"];
   this.setVCMap("AV14ValorTotal", "vVALORTOTAL", 0, "decimal");
   this.setVCMap("AV17Contas", "vCONTAS", 0, "Contas");
   this.setVCMap("AV7DtPriVencmto", "vDTPRIVENCMTO", 0, "date");
   this.setVCMap("AV12QtdeParcela", "vQTDEPARCELA", 0, "int");
   this.setVCMap("AV11Periodicidade", "vPERIODICIDADE", 0, "int");
   this.setVCMap("AV14ValorTotal", "vVALORTOTAL", 0, "decimal");
   this.setVCMap("AV17Contas", "vCONTAS", 0, "Contas");
   Grid1Container.addRefreshingVar({rfrVar:"AV5bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   Grid1Container.addRefreshingVar({rfrVar:"AV5bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   Grid1Container.addRefreshingVar({rfrVar:"AV5bmpExc", rfrProp:"Jsonclick", gxAttId:"Bmpexc"});
   Grid1Container.addRefreshingVar({rfrVar:"AV14ValorTotal"});
   Grid1Container.addRefreshingVar({rfrVar:"AV17Contas"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hduplicataagrupadaparcelas());
