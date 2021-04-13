/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:45:29.32
*/
gx.evt.autoSkip = false;
gx.define('hmodalemiteetiqueta', false, function () {
   this.ServerClass =  "hmodalemiteetiqueta" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV15SessaoAux=gx.fn.getIntegerValue("vSESSAOAUX",'.') ;
   };
   this.s132_client=function()
   {
      this.AV7SNErro =  "N"  ;
      if ( (0.0==this.AV8ValorInicial) && this.AV7SNErro == "N" )
      {
         this.addMessage("Informe o Valor Inicial");
         gx.fn.usrSetFocus("vVALORINICIAL") ;
         this.AV7SNErro =  "S"  ;
      }
      if ( (0.0==this.AV9ValorFinal) && this.AV7SNErro == "N" )
      {
         this.addMessage("Informe o Valor Final");
         gx.fn.usrSetFocus("vVALORFINAL") ;
         this.AV7SNErro =  "S"  ;
      }
      if ( this.AV8ValorInicial > this.AV9ValorFinal && this.AV7SNErro == "N" )
      {
         this.addMessage("Valor Inicial deve ser menor ou igual o Final");
         gx.fn.usrSetFocus("vVALORINICIAL") ;
         this.AV7SNErro =  "S"  ;
      }
      if ( this.AV12SdtGrid.length > 0 && this.AV7SNErro == "N" )
      {
         this.AV25GXV2 = gx.num.trunc( 1 ,0) ;
         while ( this.AV25GXV2 <= this.AV12SdtGrid.length )
         {
            this.AV13SdtGridItem =  this.AV12SdtGrid[this.AV25GXV2 - 1]  ;
            if ( this.AV8ValorInicial >= this.AV13SdtGridItem.ValorInicial && this.AV8ValorInicial <= this.AV13SdtGridItem.ValorFinal )
            {
               this.addMessage("Intervalo já cadastrado ou conflitante");
               gx.fn.usrSetFocus("vVALORINICIAL") ;
               this.AV7SNErro =  "S"  ;
            }
            else
            {
               if ( this.AV9ValorFinal >= this.AV13SdtGridItem.ValorInicial && this.AV9ValorFinal <= this.AV13SdtGridItem.ValorFinal )
               {
                  this.addMessage("Intervalo já cadastrado ou conflitante");
                  gx.fn.usrSetFocus("vVALORFINAL") ;
                  this.AV7SNErro =  "S"  ;
               }
            }
            if ( this.AV7SNErro == "S" )
            {
               break;
            }
            this.AV25GXV2 = gx.num.trunc( this.AV25GXV2 + 1 ,0) ;
         }
      }
      if ( (0==this.AV10QtdeParcelas) && this.AV7SNErro == "N" )
      {
         this.addMessage("Informe a Qtde de Parcelas");
         gx.fn.usrSetFocus("vQTDEPARCELAS") ;
         this.AV7SNErro =  "S"  ;
      }
      if ( this.AV10QtdeParcelas < 0 && this.AV7SNErro == "N" )
      {
         this.addMessage("Qtde de Parcelas Inválida");
         gx.fn.usrSetFocus("vQTDEPARCELAS") ;
         this.AV7SNErro =  "S"  ;
      }
   };
   this.s152_client=function()
   {
      this.AV8ValorInicial =  0.0  ;
      this.AV9ValorFinal =  0.0  ;
      this.AV10QtdeParcelas = gx.num.trunc( 0 ,0) ;
      this.AV11TaxaJuros =  0.0  ;
   };
   this.e111g22_client=function()
   {
      this.executeServerEvent("'ADICIONAR'", false, null, false, false);
   };
   this.e141g22_client=function()
   {
      this.executeServerEvent("'EXCLUIRITEMGRID'", true, arguments[0], false, false);
   };
   this.e121g22_client=function()
   {
      this.executeServerEvent("'CONFIRMAR'", false, null, false, false);
   };
   this.e161g22_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e171g22_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,13,15,17,19,22,24,27,29,34,36,37,38,39,40,41,48];
   this.GXLastCtrlId =48;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",35,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hmodalemiteetiqueta",[],false,1,false,true,0,false,false,false,"CollSdtModalEmiteEtiqueta.SdtModalEmiteEtiquetaItem",0,"px","Novo registro",false,false,false,null,null,false,"AV12SdtGrid",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("GXV110",36,"CTLVALORINICIAL","Valor Inicial","","ValorInicial","decimal",0,"px",22,22,"right",null,[],"GXV110","GXV110",true,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV111",37,"CTLVALORFINAL","Valor Final","","ValorFinal","decimal",0,"px",22,22,"right",null,[],"GXV111","GXV111",true,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV112",38,"CTLQTDEPARCELAS","Qtde Parcelas","","QtdeParcelas","int",0,"px",2,2,"right",null,[],"GXV112","GXV112",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV113",39,"CTLTAXAJUROS","Taxa Juros","","TaxaJuros","decimal",0,"px",6,6,"right",null,[],"GXV113","GXV113",true,2,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpexcluir","vBMPEXCLUIR",40,0,"px",17,"px","e141g22_client","","Exc","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE3",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TABLE1",grid:0};
   GXValidFnc[13]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORINICIAL",gxz:"ZV8ValorInicial",gxold:"OV8ValorInicial",gxvar:"AV8ValorInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8ValorInicial=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV8ValorInicial=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALORINICIAL",gx.O.AV8ValorInicial,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV8ValorInicial=this.val()},val:function(){return gx.fn.getDecimalValue("vVALORINICIAL",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 15 , function() {
   });
   GXValidFnc[17]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORFINAL",gxz:"ZV9ValorFinal",gxold:"OV9ValorFinal",gxvar:"AV9ValorFinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9ValorFinal=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV9ValorFinal=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALORFINAL",gx.O.AV9ValorFinal,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV9ValorFinal=this.val()},val:function(){return gx.fn.getDecimalValue("vVALORFINAL",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 19 , function() {
   });
   GXValidFnc[22]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:2,dec:0,sign:true,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDEPARCELAS",gxz:"ZV10QtdeParcelas",gxold:"OV10QtdeParcelas",gxvar:"AV10QtdeParcelas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10QtdeParcelas=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV10QtdeParcelas=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDEPARCELAS",gx.O.AV10QtdeParcelas,0)},c2v:function(){gx.O.AV10QtdeParcelas=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDEPARCELAS",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTAXAJUROS",gxz:"ZV11TaxaJuros",gxold:"OV11TaxaJuros",gxvar:"AV11TaxaJuros",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11TaxaJuros=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV11TaxaJuros=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vTAXAJUROS",gx.O.AV11TaxaJuros,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV11TaxaJuros=this.val()},val:function(){return gx.fn.getDecimalValue("vTAXAJUROS",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 29 , function() {
   });
   GXValidFnc[34]={fld:"ROL1", format:2,grid:0};
   GXValidFnc[36]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:0,grid:35,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLVALORINICIAL",gxz:"ZV20GXV110",gxold:"OV20GXV110",gxvar:"GXV110",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV110=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV20GXV110=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLVALORINICIAL",row || gx.fn.currentGridRowImpl(35),gx.O.GXV110,2,',')},c2v:function(){gx.O.GXV110=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLVALORINICIAL",row || gx.fn.currentGridRowImpl(35),'.',',')},nac:gx.falseFn};
   GXValidFnc[37]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:0,grid:35,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLVALORFINAL",gxz:"ZV21GXV111",gxold:"OV21GXV111",gxvar:"GXV111",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV111=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV21GXV111=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLVALORFINAL",row || gx.fn.currentGridRowImpl(35),gx.O.GXV111,2,',')},c2v:function(){gx.O.GXV111=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLVALORFINAL",row || gx.fn.currentGridRowImpl(35),'.',',')},nac:gx.falseFn};
   GXValidFnc[38]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,isacc:0,grid:35,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLQTDEPARCELAS",gxz:"ZV22GXV112",gxold:"OV22GXV112",gxvar:"GXV112",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV112=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22GXV112=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLQTDEPARCELAS",row || gx.fn.currentGridRowImpl(35),gx.O.GXV112,0)},c2v:function(){gx.O.GXV112=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLQTDEPARCELAS",row || gx.fn.currentGridRowImpl(35),'.')},nac:gx.falseFn};
   GXValidFnc[39]={lvl:2,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,isacc:0,grid:35,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLTAXAJUROS",gxz:"ZV23GXV113",gxold:"OV23GXV113",gxvar:"GXV113",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV113=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV23GXV113=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLTAXAJUROS",row || gx.fn.currentGridRowImpl(35),gx.O.GXV113,2,',')},c2v:function(){gx.O.GXV113=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLTAXAJUROS",row || gx.fn.currentGridRowImpl(35),'.',',')},nac:gx.falseFn};
   GXValidFnc[40]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:35,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXCLUIR",gxz:"ZV14bmpExcluir",gxold:"OV14bmpExcluir",gxvar:"AV14bmpExcluir",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV14bmpExcluir=Value},v2z:function(Value){gx.O.ZV14bmpExcluir=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXCLUIR",row || gx.fn.currentGridRowImpl(35),gx.O.AV14bmpExcluir,gx.O.AV24Bmpexcluir_GXI)},c2v:function(){gx.O.AV24Bmpexcluir_GXI=this.val_GXI();gx.O.AV14bmpExcluir=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXCLUIR",row || gx.fn.currentGridRowImpl(35))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXCLUIR_GXI",row || gx.fn.currentGridRowImpl(35))}, gxvar_GXI:'AV24Bmpexcluir_GXI',nac:gx.falseFn};
   GXValidFnc[41]={fld:"ROL2", format:2,grid:0};
   GXValidFnc[48]={fld:"JS", format:2,grid:0};
   this.AV8ValorInicial = 0 ;
   this.ZV8ValorInicial = 0 ;
   this.OV8ValorInicial = 0 ;
   this.AV9ValorFinal = 0 ;
   this.ZV9ValorFinal = 0 ;
   this.OV9ValorFinal = 0 ;
   this.AV10QtdeParcelas = 0 ;
   this.ZV10QtdeParcelas = 0 ;
   this.OV10QtdeParcelas = 0 ;
   this.AV11TaxaJuros = 0 ;
   this.ZV11TaxaJuros = 0 ;
   this.OV11TaxaJuros = 0 ;
   this.ZV20GXV110 = 0 ;
   this.OV20GXV110 = 0 ;
   this.ZV21GXV111 = 0 ;
   this.OV21GXV111 = 0 ;
   this.ZV22GXV112 = 0 ;
   this.OV22GXV112 = 0 ;
   this.ZV23GXV113 = 0 ;
   this.OV23GXV113 = 0 ;
   this.ZV14bmpExcluir = "" ;
   this.OV14bmpExcluir = "" ;
   this.AV8ValorInicial = 0 ;
   this.AV9ValorFinal = 0 ;
   this.AV10QtdeParcelas = 0 ;
   this.AV11TaxaJuros = 0 ;
   this.AV15SessaoAux = 0 ;
   this.GXV110 = 0 ;
   this.GXV111 = 0 ;
   this.GXV112 = 0 ;
   this.GXV113 = 0 ;
   this.AV14bmpExcluir = "" ;
   this.AV13SdtGridItem = {} ;
   this.AV25GXV2 = 0 ;
   this.AV12SdtGrid = [ ] ;
   this.AV7SNErro = "" ;
   this.Events = {"e111g22_client": ["'ADICIONAR'", true] ,"e141g22_client": ["'EXCLUIRITEMGRID'", true] ,"e121g22_client": ["'CONFIRMAR'", true] ,"e161g22_client": ["ENTER", true] ,"e171g22_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV12SdtGrid',fld:'vSDTGRID',grid:35},{av:'AV14bmpExcluir',fld:'vBMPEXCLUIR'},{av:'gx.fn.getCtrlProperty("vBMPEXCLUIR","Tooltiptext")',ctrl:'vBMPEXCLUIR',prop:'Tooltiptext'}],[]];
   this.EvtParms["'ADICIONAR'"] = [[{av:'AV7SNErro',fld:'vSNERRO'},{av:'AV8ValorInicial',fld:'vVALORINICIAL'},{av:'AV9ValorFinal',fld:'vVALORFINAL'},{av:'AV12SdtGrid',fld:'vSDTGRID',grid:35},{av:'AV10QtdeParcelas',fld:'vQTDEPARCELAS'},{av:'AV11TaxaJuros',fld:'vTAXAJUROS'},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV14bmpExcluir',fld:'vBMPEXCLUIR'},{av:'gx.fn.getCtrlProperty("vBMPEXCLUIR","Tooltiptext")',ctrl:'vBMPEXCLUIR',prop:'Tooltiptext'}],[{av:'AV7SNErro',fld:'vSNERRO'},{av:'AV25GXV2',fld:'vGXV2'},{av:'AV13SdtGridItem',fld:'vSDTGRIDITEM'},{av:'AV12SdtGrid',fld:'vSDTGRID',grid:35},{av:'AV8ValorInicial',fld:'vVALORINICIAL'},{av:'AV9ValorFinal',fld:'vVALORFINAL'},{av:'AV10QtdeParcelas',fld:'vQTDEPARCELAS'},{av:'AV11TaxaJuros',fld:'vTAXAJUROS'}]];
   this.EvtParms["'EXCLUIRITEMGRID'"] = [[{av:'AV12SdtGrid',fld:'vSDTGRID',grid:35},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV14bmpExcluir',fld:'vBMPEXCLUIR'},{av:'gx.fn.getCtrlProperty("vBMPEXCLUIR","Tooltiptext")',ctrl:'vBMPEXCLUIR',prop:'Tooltiptext'}],[{av:'AV12SdtGrid',fld:'vSDTGRID',grid:35}]];
   this.EvtParms["'CONFIRMAR'"] = [[{av:'AV15SessaoAux',fld:'vSESSAOAUX'},{av:'AV12SdtGrid',fld:'vSDTGRID',grid:35}],[]];
   this.setVCMap("AV15SessaoAux", "vSESSAOAUX", 0, "int");
   GridContainer.addRefreshingVar({rfrVar:"AV14bmpExcluir", rfrProp:"Value", gxAttId:"Bmpexcluir"});
   GridContainer.addRefreshingVar({rfrVar:"AV14bmpExcluir", rfrProp:"Tooltiptext", gxAttId:"Bmpexcluir"});
   this.addGridBCProperty("Sdtgrid", ["ValorInicial"], this.GXValidFnc[36], "AV12SdtGrid");
   this.addGridBCProperty("Sdtgrid", ["ValorFinal"], this.GXValidFnc[37], "AV12SdtGrid");
   this.addGridBCProperty("Sdtgrid", ["QtdeParcelas"], this.GXValidFnc[38], "AV12SdtGrid");
   this.addGridBCProperty("Sdtgrid", ["TaxaJuros"], this.GXValidFnc[39], "AV12SdtGrid");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodalemiteetiqueta());
