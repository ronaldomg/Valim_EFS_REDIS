/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:14:30.28
*/
gx.evt.autoSkip = false;
gx.define('hbuscafornecedorganhador', false, function () {
   this.ServerClass =  "hbuscafornecedorganhador" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.refreshAndEnter = true;
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
   };
   this.Validv_Solicitacaonumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSOLICITACAONUMERO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.s153_client=function()
   {
      this.AV25SnRepetido =  ""  ;
      this.AV40GXV2 = gx.num.trunc( 1 ,0) ;
      while ( this.AV40GXV2 <= this.AV18SdtGanhador.length )
      {
         this.AV16SdtGanhadorItem =  this.AV18SdtGanhador[this.AV40GXV2 - 1]  ;
         if ( this.AV16SdtGanhadorItem.PessoaId == this.AV11PessoaId )
         {
            this.AV25SnRepetido =  "S"  ;
            this.AV16SdtGanhadorItem.Valor =  gx.num.add( this.AV16SdtGanhadorItem.Valor , ( gx.num.round( this.AV17MenorValor, 2) ) )  ;
         }
         this.AV40GXV2 = gx.num.trunc( this.AV40GXV2 + 1 ,0) ;
      }
   };
   this.e13s62_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11s62_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e14s62_client=function()
   {
      this.executeServerEvent("'SELECIONA'", true, arguments[0], false, false);
   };
   this.e16s62_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,8,11,13,14,15,16,17];
   this.GXLastCtrlId =17;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",12,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"hbuscafornecedorganhador",[],false,1,false,true,0,true,false,false,"CollSdtGanhador.SdtGanhadorItem",0,"px","Novo registro",true,false,false,null,null,false,"AV18SdtGanhador",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Bmpganhador","vBMPGANHADOR",13,0,"px",17,"px","e14s62_client","","","Image","GridColumnImage");
   Grid1Container.addSingleLineEdit("GXV10E",14,"CTLPESSOAID","Fornecedor","","PessoaId","int",63,"px",7,7,"right",null,[],"GXV10E","GXV10E",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV10F",15,"CTLPESSOAFANTASIA","Nome","","PessoaFantasia","svchar",310,"px",60,60,"left",null,[],"GXV10F","GXV10F",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV10G",16,"CTLVALOR","Valor","","Valor","decimal",136,"px",18,18,"right",null,[],"GXV10G","GXV10G",true,2,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[8]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"9999999",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Solicitacaonumero,isvalid:null,rgrid:[],fld:"vSOLICITACAONUMERO",gxz:"ZV14SolicitacaoNumero",gxold:"OV14SolicitacaoNumero",gxvar:"AV14SolicitacaoNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14SolicitacaoNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV14SolicitacaoNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSOLICITACAONUMERO",gx.O.AV14SolicitacaoNumero,0)},c2v:function(){gx.O.AV14SolicitacaoNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSOLICITACAONUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[11]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[13]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:12,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPGANHADOR",gxz:"ZV22bmpGanhador",gxold:"OV22bmpGanhador",gxvar:"AV22bmpGanhador",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV22bmpGanhador=Value},v2z:function(Value){gx.O.ZV22bmpGanhador=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPGANHADOR",row || gx.fn.currentGridRowImpl(12),gx.O.AV22bmpGanhador,gx.O.AV35Bmpganhador_GXI)},c2v:function(){gx.O.AV35Bmpganhador_GXI=this.val_GXI();gx.O.AV22bmpGanhador=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPGANHADOR",row || gx.fn.currentGridRowImpl(12))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPGANHADOR_GXI",row || gx.fn.currentGridRowImpl(12))}, gxvar_GXI:'AV35Bmpganhador_GXI',nac:gx.falseFn};
   GXValidFnc[14]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:0,grid:12,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOAID",gxz:"ZV32GXV10E",gxold:"OV32GXV10E",gxvar:"GXV10E",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV10E=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV32GXV10E=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLPESSOAID",row || gx.fn.currentGridRowImpl(12),gx.O.GXV10E,0)},c2v:function(){gx.O.GXV10E=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLPESSOAID",row || gx.fn.currentGridRowImpl(12),'.')},nac:gx.falseFn};
   GXValidFnc[15]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:0,isacc:0,grid:12,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOAFANTASIA",gxz:"ZV33GXV10F",gxold:"OV33GXV10F",gxvar:"GXV10F",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10F=Value},v2z:function(Value){gx.O.ZV33GXV10F=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPESSOAFANTASIA",row || gx.fn.currentGridRowImpl(12),gx.O.GXV10F,0)},c2v:function(){gx.O.GXV10F=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPESSOAFANTASIA",row || gx.fn.currentGridRowImpl(12))},nac:gx.falseFn};
   GXValidFnc[16]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZZZZZZZZZZZZ9.99",ro:0,isacc:0,grid:12,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLVALOR",gxz:"ZV34GXV10G",gxold:"OV34GXV10G",gxvar:"GXV10G",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV10G=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV34GXV10G=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLVALOR",row || gx.fn.currentGridRowImpl(12),gx.O.GXV10G,2,',')},c2v:function(){gx.O.GXV10G=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLVALOR",row || gx.fn.currentGridRowImpl(12),'.',',')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"DIV2", format:2,grid:0};
   this.AV14SolicitacaoNumero = 0 ;
   this.ZV14SolicitacaoNumero = 0 ;
   this.OV14SolicitacaoNumero = 0 ;
   this.ZV22bmpGanhador = "" ;
   this.OV22bmpGanhador = "" ;
   this.ZV32GXV10E = 0 ;
   this.OV32GXV10E = 0 ;
   this.ZV33GXV10F = "" ;
   this.OV33GXV10F = "" ;
   this.ZV34GXV10G = 0 ;
   this.OV34GXV10G = 0 ;
   this.AV14SolicitacaoNumero = 0 ;
   this.AV22bmpGanhador = "" ;
   this.GXV10E = 0 ;
   this.GXV10F = "" ;
   this.GXV10G = 0 ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A71PessoaFantasia = "" ;
   this.A3397CotacaoSnGanhador = "" ;
   this.A3392SolicitacaoItemSeq = 0 ;
   this.A3371SolicitacaoNumero = 0 ;
   this.A3370SolicitacaoEmpresaId = "" ;
   this.A3473CotacaoValorTotalAVista = 0 ;
   this.A3467CotacaoValorSeguro = 0 ;
   this.A3462CotacaoValorFrete = 0 ;
   this.A3466CotacaoValorEncargos = 0 ;
   this.A3479CotacaoValorTotalaPrazo = 0 ;
   this.A4052SolicitacaoItemDataHoraAlt = gx.date.nullDate() ;
   this.A4042SolicitacaoItemQtdePedida = 0 ;
   this.AV17MenorValor = 0 ;
   this.AV16SdtGanhadorItem = {} ;
   this.AV11PessoaId = 0 ;
   this.AV18SdtGanhador = [ ] ;
   this.AV40GXV2 = 0 ;
   this.AV25SnRepetido = "" ;
   this.Events = {"e13s62_client": ["ENTER", true] ,"e11s62_client": ["'FECHAR'", true] ,"e14s62_client": ["'SELECIONA'", true] ,"e16s62_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'AV18SdtGanhador',fld:'vSDTGANHADOR',grid:12},{av:'subGrid1_Rows'},{av:'AV22bmpGanhador',fld:'vBMPGANHADOR'},{av:'gx.fn.getCtrlProperty("vBMPGANHADOR","Tooltiptext")',ctrl:'vBMPGANHADOR',prop:'Tooltiptext'}],[]];
   this.EvtParms["ENTER"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV23PessoaCodigo',fld:'vPESSOACODIGO'}],[{av:'AV23PessoaCodigo',fld:'vPESSOACODIGO'}]];
   this.EvtParms["'SELECIONA'"] = [[{av:'AV18SdtGanhador',fld:'vSDTGANHADOR',grid:12},{av:'AV23PessoaCodigo',fld:'vPESSOACODIGO'}],[{av:'AV23PessoaCodigo',fld:'vPESSOACODIGO'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV22bmpGanhador',fld:'vBMPGANHADOR'},{av:'gx.fn.getCtrlProperty("vBMPGANHADOR","Tooltiptext")',ctrl:'vBMPGANHADOR',prop:'Tooltiptext'},{av:'AV18SdtGanhador',fld:'vSDTGANHADOR',grid:12}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV22bmpGanhador',fld:'vBMPGANHADOR'},{av:'gx.fn.getCtrlProperty("vBMPGANHADOR","Tooltiptext")',ctrl:'vBMPGANHADOR',prop:'Tooltiptext'},{av:'AV18SdtGanhador',fld:'vSDTGANHADOR',grid:12}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV22bmpGanhador',fld:'vBMPGANHADOR'},{av:'gx.fn.getCtrlProperty("vBMPGANHADOR","Tooltiptext")',ctrl:'vBMPGANHADOR',prop:'Tooltiptext'},{av:'AV18SdtGanhador',fld:'vSDTGANHADOR',grid:12}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV22bmpGanhador',fld:'vBMPGANHADOR'},{av:'gx.fn.getCtrlProperty("vBMPGANHADOR","Tooltiptext")',ctrl:'vBMPGANHADOR',prop:'Tooltiptext'},{av:'AV18SdtGanhador',fld:'vSDTGANHADOR',grid:12}],[]];
   Grid1Container.addRefreshingVar({rfrVar:"AV22bmpGanhador", rfrProp:"Value", gxAttId:"Bmpganhador"});
   Grid1Container.addRefreshingVar({rfrVar:"AV22bmpGanhador", rfrProp:"Tooltiptext", gxAttId:"Bmpganhador"});
   this.addGridBCProperty("Sdtganhador", ["PessoaId"], this.GXValidFnc[14], "AV18SdtGanhador");
   this.addGridBCProperty("Sdtganhador", ["PessoaFantasia"], this.GXValidFnc[15], "AV18SdtGanhador");
   this.addGridBCProperty("Sdtganhador", ["Valor"], this.GXValidFnc[16], "AV18SdtGanhador");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hbuscafornecedorganhador());
