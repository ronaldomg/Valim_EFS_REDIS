/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 16:43:58.92
*/
gx.evt.autoSkip = false;
gx.define('hgnfecontingencia', false, function () {
   this.ServerClass =  "hgnfecontingencia" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.refreshAndEnter = true;
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV5Contingencia=gx.fn.getControlValue("vCONTINGENCIA") ;
      this.AV7Sessao=gx.fn.getControlValue("vSESSAO") ;
   };
   this.e121372_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e111372_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e161372_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,7,8,9,10,11,12,13,14,15,16,21,22,23];
   this.GXLastCtrlId =23;
   this.GrdcontingContainer = new gx.grid.grid(this, 2,"WbpLvl2",6,"Grdconting","Grdconting","GrdcontingContainer",this.CmpContext,this.IsMasterPage,"hgnfecontingencia",[],false,1,true,true,0,false,false,false,"CollContingenciaNFe.ContingenciaNFeItem",0,"px","Novo registro",false,false,false,null,null,false,"AV5Contingencia",false,[1,1,1,1]);
   var GrdcontingContainer = this.GrdcontingContainer;
   GrdcontingContainer.addSingleLineEdit("GXV107",7,"CTLSAIDA","Número da Saída","","Saida","int",0,"px",10,10,"right",null,[],"GXV107","GXV107",false,0,false,false,"Attribute",1,"");
   GrdcontingContainer.addSingleLineEdit("GXV108",8,"CTLENTRADA","Código da Entrada","","Entrada","int",0,"px",10,10,"right",null,[],"GXV108","GXV108",false,0,false,false,"Attribute",1,"");
   GrdcontingContainer.addSingleLineEdit("GXV109",9,"CTLNUMERO","Nota","","Numero","int",0,"px",10,10,"right",null,[],"GXV109","GXV109",true,0,false,false,"Attribute",1,"");
   GrdcontingContainer.addSingleLineEdit("GXV10A",10,"CTLSERIE","Série","","Serie","char",0,"px",4,4,"left",null,[],"GXV10A","GXV10A",true,0,false,false,"Attribute",1,"");
   GrdcontingContainer.addSingleLineEdit("GXV10B",11,"CTLDATAEMISSAO","Dt. Emissão","","DataEmissao","date",0,"px",10,10,"right",null,[],"GXV10B","GXV10B",true,0,false,false,"Attribute",1,"");
   GrdcontingContainer.addSingleLineEdit("GXV10C",12,"CTLFILIAL","Filial","","Filial","svchar",0,"px",100,80,"left",null,[],"GXV10C","GXV10C",true,0,false,false,"SemQuebraGrid",1,"");
   GrdcontingContainer.addSingleLineEdit("GXV10D",13,"CTLCLIENTE","Cliente/Fornecedor","","Cliente","svchar",0,"px",60,60,"left",null,[],"GXV10D","GXV10D",true,0,false,false,"SemQuebraGrid",1,"");
   GrdcontingContainer.addSingleLineEdit("GXV10E",14,"CTLSNIMPORT","Sn Import","","SnImport","char",0,"px",1,1,"left",null,[],"GXV10E","GXV10E",false,0,false,false,"Attribute",1,"");
   GrdcontingContainer.addBitmap("&Bmperro","vBMPERRO",15,0,"px",17,"px",null,"","Sit.","Image","GridColumnImage");
   this.setGrid(GrdcontingContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[7]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:6,gxgrid:this.GrdcontingContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLSAIDA",gxz:"ZV19GXV107",gxold:"OV19GXV107",gxvar:"GXV107",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV107=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19GXV107=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLSAIDA",row || gx.fn.currentGridRowImpl(6),gx.O.GXV107,0)},c2v:function(){gx.O.GXV107=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLSAIDA",row || gx.fn.currentGridRowImpl(6),'.')},nac:gx.falseFn};
   GXValidFnc[8]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:6,gxgrid:this.GrdcontingContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLENTRADA",gxz:"ZV20GXV108",gxold:"OV20GXV108",gxvar:"GXV108",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV108=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20GXV108=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLENTRADA",row || gx.fn.currentGridRowImpl(6),gx.O.GXV108,0)},c2v:function(){gx.O.GXV108=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLENTRADA",row || gx.fn.currentGridRowImpl(6),'.')},nac:gx.falseFn};
   GXValidFnc[9]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:6,gxgrid:this.GrdcontingContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLNUMERO",gxz:"ZV21GXV109",gxold:"OV21GXV109",gxvar:"GXV109",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV109=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21GXV109=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLNUMERO",row || gx.fn.currentGridRowImpl(6),gx.O.GXV109,0)},c2v:function(){gx.O.GXV109=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLNUMERO",row || gx.fn.currentGridRowImpl(6),'.')},nac:gx.falseFn};
   GXValidFnc[10]={lvl:2,type:"char",len:4,dec:0,sign:false,ro:1,isacc:0,grid:6,gxgrid:this.GrdcontingContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLSERIE",gxz:"ZV22GXV10A",gxold:"OV22GXV10A",gxvar:"GXV10A",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10A=Value},v2z:function(Value){gx.O.ZV22GXV10A=Value},v2c:function(row){gx.fn.setGridControlValue("CTLSERIE",row || gx.fn.currentGridRowImpl(6),gx.O.GXV10A,0)},c2v:function(){gx.O.GXV10A=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLSERIE",row || gx.fn.currentGridRowImpl(6))},nac:gx.falseFn};
   GXValidFnc[11]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:6,gxgrid:this.GrdcontingContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLDATAEMISSAO",gxz:"ZV23GXV10B",gxold:"OV23GXV10B",gxvar:"GXV10B",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV10B=gx.fn.toDatetimeValue(Value,"Y4MD")},v2z:function(Value){gx.O.ZV23GXV10B=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLDATAEMISSAO",row || gx.fn.currentGridRowImpl(6),gx.O.GXV10B,0)},c2v:function(){gx.O.GXV10B=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CTLDATAEMISSAO",row || gx.fn.currentGridRowImpl(6))},nac:gx.falseFn};
   GXValidFnc[12]={lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:1,isacc:0,grid:6,gxgrid:this.GrdcontingContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLFILIAL",gxz:"ZV24GXV10C",gxold:"OV24GXV10C",gxvar:"GXV10C",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10C=Value},v2z:function(Value){gx.O.ZV24GXV10C=Value},v2c:function(row){gx.fn.setGridControlValue("CTLFILIAL",row || gx.fn.currentGridRowImpl(6),gx.O.GXV10C,0)},c2v:function(){gx.O.GXV10C=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLFILIAL",row || gx.fn.currentGridRowImpl(6))},nac:gx.falseFn};
   GXValidFnc[13]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:1,isacc:0,grid:6,gxgrid:this.GrdcontingContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLCLIENTE",gxz:"ZV25GXV10D",gxold:"OV25GXV10D",gxvar:"GXV10D",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10D=Value},v2z:function(Value){gx.O.ZV25GXV10D=Value},v2c:function(row){gx.fn.setGridControlValue("CTLCLIENTE",row || gx.fn.currentGridRowImpl(6),gx.O.GXV10D,0)},c2v:function(){gx.O.GXV10D=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCLIENTE",row || gx.fn.currentGridRowImpl(6))},nac:gx.falseFn};
   GXValidFnc[14]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:6,gxgrid:this.GrdcontingContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLSNIMPORT",gxz:"ZV26GXV10E",gxold:"OV26GXV10E",gxvar:"GXV10E",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10E=Value},v2z:function(Value){gx.O.ZV26GXV10E=Value},v2c:function(row){gx.fn.setGridControlValue("CTLSNIMPORT",row || gx.fn.currentGridRowImpl(6),gx.O.GXV10E,0)},c2v:function(){gx.O.GXV10E=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLSNIMPORT",row || gx.fn.currentGridRowImpl(6))},nac:gx.falseFn};
   GXValidFnc[15]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:6,gxgrid:this.GrdcontingContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPERRO",gxz:"ZV8bmpErro",gxold:"OV8bmpErro",gxvar:"AV8bmpErro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpErro=Value},v2z:function(Value){gx.O.ZV8bmpErro=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPERRO",row || gx.fn.currentGridRowImpl(6),gx.O.AV8bmpErro,gx.O.AV27Bmperro_GXI)},c2v:function(){gx.O.AV27Bmperro_GXI=this.val_GXI();gx.O.AV8bmpErro=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPERRO",row || gx.fn.currentGridRowImpl(6))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPERRO_GXI",row || gx.fn.currentGridRowImpl(6))}, gxvar_GXI:'AV27Bmperro_GXI',nac:gx.falseFn};
   GXValidFnc[16]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[21]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSESSAOGNFE",gxz:"ZV12SessaoGNFE",gxold:"OV12SessaoGNFE",gxvar:"AV12SessaoGNFE",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12SessaoGNFE=Value},v2z:function(Value){gx.O.ZV12SessaoGNFE=Value},v2c:function(){gx.fn.setControlValue("vSESSAOGNFE",gx.O.AV12SessaoGNFE,0)},c2v:function(){gx.O.AV12SessaoGNFE=this.val()},val:function(){return gx.fn.getControlValue("vSESSAOGNFE")},nac:gx.falseFn};
   GXValidFnc[22]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNNFE",gxz:"ZV14SnNfe",gxold:"OV14SnNfe",gxvar:"AV14SnNfe",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14SnNfe=Value},v2z:function(Value){gx.O.ZV14SnNfe=Value},v2c:function(){gx.fn.setControlValue("vSNNFE",gx.O.AV14SnNfe,0)},c2v:function(){gx.O.AV14SnNfe=this.val()},val:function(){return gx.fn.getControlValue("vSNNFE")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"JAVASCRIPT", format:2,grid:0};
   this.ZV19GXV107 = 0 ;
   this.OV19GXV107 = 0 ;
   this.ZV20GXV108 = 0 ;
   this.OV20GXV108 = 0 ;
   this.ZV21GXV109 = 0 ;
   this.OV21GXV109 = 0 ;
   this.ZV22GXV10A = "" ;
   this.OV22GXV10A = "" ;
   this.ZV23GXV10B = gx.date.nullDate() ;
   this.OV23GXV10B = gx.date.nullDate() ;
   this.ZV24GXV10C = "" ;
   this.OV24GXV10C = "" ;
   this.ZV25GXV10D = "" ;
   this.OV25GXV10D = "" ;
   this.ZV26GXV10E = "" ;
   this.OV26GXV10E = "" ;
   this.ZV8bmpErro = "" ;
   this.OV8bmpErro = "" ;
   this.AV12SessaoGNFE = "" ;
   this.ZV12SessaoGNFE = "" ;
   this.OV12SessaoGNFE = "" ;
   this.AV14SnNfe = "" ;
   this.ZV14SnNfe = "" ;
   this.OV14SnNfe = "" ;
   this.AV12SessaoGNFE = "" ;
   this.AV14SnNfe = "" ;
   this.AV7Sessao = "" ;
   this.GXV107 = 0 ;
   this.GXV108 = 0 ;
   this.GXV109 = 0 ;
   this.GXV10A = "" ;
   this.GXV10B = gx.date.nullDate() ;
   this.GXV10C = "" ;
   this.GXV10D = "" ;
   this.GXV10E = "" ;
   this.AV8bmpErro = "" ;
   this.AV5Contingencia = [ ] ;
   this.Events = {"e121372_client": ["ENTER", true] ,"e111372_client": ["'FECHAR'", true] ,"e161372_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRDCONTING_nFirstRecordOnPage'},{av:'GRDCONTING_nEOF'},{av:'AV14SnNfe',fld:'vSNNFE'},{av:'AV5Contingencia',fld:'vCONTINGENCIA',grid:6},{av:'AV12SessaoGNFE',fld:'vSESSAOGNFE'}],[{av:'AV14SnNfe',fld:'vSNNFE'},{ctrl:'BTNCONFIRMAR',prop:'Visible'},{av:'AV29GXV3',fld:'vGXV3'},{av:'AV9ContingenciaItem',fld:'vCONTINGENCIAITEM'},{av:'AV10SnExiste',fld:'vSNEXISTE'},{av:'AV28GXV2',fld:'vGXV2'},{av:'AV13Nf',fld:'vNF'},{av:'AV15Status',fld:'vSTATUS'},{av:'AV12SessaoGNFE',fld:'vSESSAOGNFE'},{av:'gx.fn.getCtrlProperty("JAVASCRIPT","Caption")',ctrl:'JAVASCRIPT',prop:'Caption'}]];
   this.EvtParms["GRDCONTING.LOAD"] = [[{av:'AV5Contingencia',fld:'vCONTINGENCIA',grid:6}],[{av:'gx.fn.getCtrlProperty("vBMPERRO","Tooltiptext")',ctrl:'vBMPERRO',prop:'Tooltiptext'},{av:'AV8bmpErro',fld:'vBMPERRO'},{av:'gx.fn.getCtrlProperty("vBMPERRO","Link")',ctrl:'vBMPERRO',prop:'Link'}]];
   this.EvtParms["ENTER"] = [[{av:'AV5Contingencia',fld:'vCONTINGENCIA',grid:6},{av:'AV12SessaoGNFE',fld:'vSESSAOGNFE'}],[{av:'AV10SnExiste',fld:'vSNEXISTE'},{av:'AV28GXV2',fld:'vGXV2'},{av:'AV9ContingenciaItem',fld:'vCONTINGENCIAITEM'},{av:'AV13Nf',fld:'vNF'},{av:'AV15Status',fld:'vSTATUS'},{av:'AV12SessaoGNFE',fld:'vSESSAOGNFE'},{av:'gx.fn.getCtrlProperty("JAVASCRIPT","Caption")',ctrl:'JAVASCRIPT',prop:'Caption'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EnterCtrl = ["BTNCONFIRMAR"];
   this.setVCMap("AV5Contingencia", "vCONTINGENCIA", 0, "CollContingenciaNFe.ContingenciaNFeItem");
   this.setVCMap("AV7Sessao", "vSESSAO", 0, "svchar");
   this.setVCMap("AV5Contingencia", "vCONTINGENCIA", 0, "CollContingenciaNFe.ContingenciaNFeItem");
   GrdcontingContainer.addRefreshingVar(this.GXValidFnc[22]);
   GrdcontingContainer.addRefreshingVar({rfrVar:"AV5Contingencia"});
   GrdcontingContainer.addRefreshingVar(this.GXValidFnc[21]);
   this.addGridBCProperty("Contingencia", ["Saida"], this.GXValidFnc[7], "AV5Contingencia");
   this.addGridBCProperty("Contingencia", ["Entrada"], this.GXValidFnc[8], "AV5Contingencia");
   this.addGridBCProperty("Contingencia", ["Numero"], this.GXValidFnc[9], "AV5Contingencia");
   this.addGridBCProperty("Contingencia", ["Serie"], this.GXValidFnc[10], "AV5Contingencia");
   this.addGridBCProperty("Contingencia", ["DataEmissao"], this.GXValidFnc[11], "AV5Contingencia");
   this.addGridBCProperty("Contingencia", ["Filial"], this.GXValidFnc[12], "AV5Contingencia");
   this.addGridBCProperty("Contingencia", ["Cliente"], this.GXValidFnc[13], "AV5Contingencia");
   this.addGridBCProperty("Contingencia", ["SnImport"], this.GXValidFnc[14], "AV5Contingencia");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hgnfecontingencia());