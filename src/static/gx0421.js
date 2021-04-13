/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:28:29.20
*/
gx.evt.autoSkip = false;
gx.define('gx0421', false, function () {
   this.ServerClass =  "gx0421" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
      this.AV12pFilialEmpresaId=gx.fn.getControlValue("vPFILIALEMPRESAID") ;
      this.AV13pFilialId=gx.fn.getIntegerValue("vPFILIALID",'.') ;
   };
   this.Validv_Cfilialtipopessoa=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCFILIALTIPOPESSOA");
         this.AnyError  = 0;
         if ( ! ( this.AV8cFilialTipoPessoa == "F" || this.AV8cFilialTipoPessoa == "J" || (""==this.AV8cFilialTipoPessoa) ) )
         {
            try {
               gxballoon.setError("Campo cFilialTipoPessoa fora do intervalo");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e131l02_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141l01_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,43,47,48,49,50,51,54];
   this.GXLastCtrlId =54;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",46,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0421",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",47,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(1156,48,"FILIALID","Código da Filial","","FilialId","int",0,"px",7,7,"right",null,[],1156,"FilialId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1136,49,"FILIALNOME","Nome da Filial","Selecionar","FilialNome","svchar",0,"px",100,80,"left",null,[],1136,"FilialNome",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1227,50,"FILIALNUMERO","Número","","FilialNumero","int",0,"px",7,7,"right",null,[],1227,"FilialNumero",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1228,51,"FILIALEMPRESAID","Empresa da Filial","","FilialEmpresaId","char",0,"px",10,10,"left",null,[],1228,"FilialEmpresaId",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKFILIALID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCFILIALID",gxz:"ZV6cFilialId",gxold:"OV6cFilialId",gxvar:"AV6cFilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cFilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6cFilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCFILIALID",gx.O.AV6cFilialId,0)},c2v:function(){gx.O.AV6cFilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKFILIALNOME", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCFILIALNOME",gxz:"ZV7cFilialNome",gxold:"OV7cFilialNome",gxvar:"AV7cFilialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cFilialNome=Value},v2z:function(Value){gx.O.ZV7cFilialNome=Value},v2c:function(){gx.fn.setControlValue("vCFILIALNOME",gx.O.AV7cFilialNome,0)},c2v:function(){gx.O.AV7cFilialNome=this.val()},val:function(){return gx.fn.getControlValue("vCFILIALNOME")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKFILIALTIPOPESSOA", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Cfilialtipopessoa,isvalid:null,rgrid:[this.Grid1Container],fld:"vCFILIALTIPOPESSOA",gxz:"ZV8cFilialTipoPessoa",gxold:"OV8cFilialTipoPessoa",gxvar:"AV8cFilialTipoPessoa",ucs:[],op:[24],ip:[24],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV8cFilialTipoPessoa=Value},v2z:function(Value){gx.O.ZV8cFilialTipoPessoa=Value},v2c:function(){gx.fn.setComboBoxValue("vCFILIALTIPOPESSOA",gx.O.AV8cFilialTipoPessoa)},c2v:function(){gx.O.AV8cFilialTipoPessoa=this.val()},val:function(){return gx.fn.getControlValue("vCFILIALTIPOPESSOA")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKFILIALCPF", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:14,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCFILIALCPF",gxz:"ZV9cFilialCPF",gxold:"OV9cFilialCPF",gxvar:"AV9cFilialCPF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cFilialCPF=Value},v2z:function(Value){gx.O.ZV9cFilialCPF=Value},v2c:function(){gx.fn.setControlValue("vCFILIALCPF",gx.O.AV9cFilialCPF,0)},c2v:function(){gx.O.AV9cFilialCPF=this.val()},val:function(){return gx.fn.getControlValue("vCFILIALCPF")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKFILIALCNPJ", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCFILIALCNPJ",gxz:"ZV10cFilialCNPJ",gxold:"OV10cFilialCNPJ",gxvar:"AV10cFilialCNPJ",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cFilialCNPJ=Value},v2z:function(Value){gx.O.ZV10cFilialCNPJ=Value},v2c:function(){gx.fn.setControlValue("vCFILIALCNPJ",gx.O.AV10cFilialCNPJ,0)},c2v:function(){gx.O.AV10cFilialCNPJ=this.val()},val:function(){return gx.fn.getControlValue("vCFILIALCNPJ")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKFILIALINSCESTADUAL", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"svchar",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCFILIALINSCESTADUAL",gxz:"ZV11cFilialInscEstadual",gxold:"OV11cFilialInscEstadual",gxvar:"AV11cFilialInscEstadual",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cFilialInscEstadual=Value},v2z:function(Value){gx.O.ZV11cFilialInscEstadual=Value},v2c:function(){gx.fn.setControlValue("vCFILIALINSCESTADUAL",gx.O.AV11cFilialInscEstadual,0)},c2v:function(){gx.O.AV11cFilialInscEstadual=this.val()},val:function(){return gx.fn.getControlValue("vCFILIALINSCESTADUAL")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"GROUP2",grid:0};
   GXValidFnc[43]={fld:"TABLE3",grid:0};
   GXValidFnc[47]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(46),gx.O.AV5LinkSelection,gx.O.AV16Linkselection_GXI)},c2v:function(){gx.O.AV16Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV16Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FILIALID",gxz:"Z1156FilialId",gxold:"O1156FilialId",gxvar:"A1156FilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1156FilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1156FilialId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("FILIALID",row || gx.fn.currentGridRowImpl(46),gx.O.A1156FilialId,0)},c2v:function(){gx.O.A1156FilialId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("FILIALID",row || gx.fn.currentGridRowImpl(46),'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FILIALNOME",gxz:"Z1136FilialNome",gxold:"O1136FilialNome",gxvar:"A1136FilialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1136FilialNome=Value},v2z:function(Value){gx.O.Z1136FilialNome=Value},v2c:function(row){gx.fn.setGridControlValue("FILIALNOME",row || gx.fn.currentGridRowImpl(46),gx.O.A1136FilialNome,0)},c2v:function(){gx.O.A1136FilialNome=this.val()},val:function(row){return gx.fn.getGridControlValue("FILIALNOME",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FILIALNUMERO",gxz:"Z1227FilialNumero",gxold:"O1227FilialNumero",gxvar:"A1227FilialNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1227FilialNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1227FilialNumero=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("FILIALNUMERO",row || gx.fn.currentGridRowImpl(46),gx.O.A1227FilialNumero,0)},c2v:function(){gx.O.A1227FilialNumero=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("FILIALNUMERO",row || gx.fn.currentGridRowImpl(46),'.')},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FILIALEMPRESAID",gxz:"Z1228FilialEmpresaId",gxold:"O1228FilialEmpresaId",gxvar:"A1228FilialEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1228FilialEmpresaId=Value},v2z:function(Value){gx.O.Z1228FilialEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("FILIALEMPRESAID",row || gx.fn.currentGridRowImpl(46),gx.O.A1228FilialEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1228FilialEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("FILIALEMPRESAID",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[54]={fld:"TABLE4",grid:0};
   this.AV6cFilialId = 0 ;
   this.ZV6cFilialId = 0 ;
   this.OV6cFilialId = 0 ;
   this.AV7cFilialNome = "" ;
   this.ZV7cFilialNome = "" ;
   this.OV7cFilialNome = "" ;
   this.AV8cFilialTipoPessoa = "" ;
   this.ZV8cFilialTipoPessoa = "" ;
   this.OV8cFilialTipoPessoa = "" ;
   this.AV9cFilialCPF = "" ;
   this.ZV9cFilialCPF = "" ;
   this.OV9cFilialCPF = "" ;
   this.AV10cFilialCNPJ = "" ;
   this.ZV10cFilialCNPJ = "" ;
   this.OV10cFilialCNPJ = "" ;
   this.AV11cFilialInscEstadual = "" ;
   this.ZV11cFilialInscEstadual = "" ;
   this.OV11cFilialInscEstadual = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z1156FilialId = 0 ;
   this.O1156FilialId = 0 ;
   this.Z1136FilialNome = "" ;
   this.O1136FilialNome = "" ;
   this.Z1227FilialNumero = 0 ;
   this.O1227FilialNumero = 0 ;
   this.Z1228FilialEmpresaId = "" ;
   this.O1228FilialEmpresaId = "" ;
   this.AV6cFilialId = 0 ;
   this.AV7cFilialNome = "" ;
   this.AV8cFilialTipoPessoa = "" ;
   this.AV9cFilialCPF = "" ;
   this.AV10cFilialCNPJ = "" ;
   this.AV11cFilialInscEstadual = "" ;
   this.AV12pFilialEmpresaId = "" ;
   this.AV13pFilialId = 0 ;
   this.A1176FilialInscEstadual = "" ;
   this.A1245FilialCNPJ = "" ;
   this.A1193FilialCPF = "" ;
   this.A1257FilialTipoPessoa = "" ;
   this.AV5LinkSelection = "" ;
   this.A1156FilialId = 0 ;
   this.A1136FilialNome = "" ;
   this.A1227FilialNumero = 0 ;
   this.A1228FilialEmpresaId = "" ;
   this.Events = {"e131l02_client": ["ENTER", true] ,"e141l01_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cFilialId',fld:'vCFILIALID'},{av:'AV7cFilialNome',fld:'vCFILIALNOME'},{av:'AV8cFilialTipoPessoa',fld:'vCFILIALTIPOPESSOA'},{av:'AV9cFilialCPF',fld:'vCFILIALCPF'},{av:'AV10cFilialCNPJ',fld:'vCFILIALCNPJ'},{av:'AV11cFilialInscEstadual',fld:'vCFILIALINSCESTADUAL'},{av:'AV12pFilialEmpresaId',fld:'vPFILIALEMPRESAID',hsh:true}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A1156FilialId',fld:'FILIALID'}],[{av:'AV13pFilialId',fld:'vPFILIALID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cFilialId',fld:'vCFILIALID'},{av:'AV7cFilialNome',fld:'vCFILIALNOME'},{av:'AV8cFilialTipoPessoa',fld:'vCFILIALTIPOPESSOA'},{av:'AV9cFilialCPF',fld:'vCFILIALCPF'},{av:'AV10cFilialCNPJ',fld:'vCFILIALCNPJ'},{av:'AV11cFilialInscEstadual',fld:'vCFILIALINSCESTADUAL'},{av:'AV12pFilialEmpresaId',fld:'vPFILIALEMPRESAID',hsh:true}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cFilialId',fld:'vCFILIALID'},{av:'AV7cFilialNome',fld:'vCFILIALNOME'},{av:'AV8cFilialTipoPessoa',fld:'vCFILIALTIPOPESSOA'},{av:'AV9cFilialCPF',fld:'vCFILIALCPF'},{av:'AV10cFilialCNPJ',fld:'vCFILIALCNPJ'},{av:'AV11cFilialInscEstadual',fld:'vCFILIALINSCESTADUAL'},{av:'AV12pFilialEmpresaId',fld:'vPFILIALEMPRESAID',hsh:true}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cFilialId',fld:'vCFILIALID'},{av:'AV7cFilialNome',fld:'vCFILIALNOME'},{av:'AV8cFilialTipoPessoa',fld:'vCFILIALTIPOPESSOA'},{av:'AV9cFilialCPF',fld:'vCFILIALCPF'},{av:'AV10cFilialCNPJ',fld:'vCFILIALCNPJ'},{av:'AV11cFilialInscEstadual',fld:'vCFILIALINSCESTADUAL'},{av:'AV12pFilialEmpresaId',fld:'vPFILIALEMPRESAID',hsh:true}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cFilialId',fld:'vCFILIALID'},{av:'AV7cFilialNome',fld:'vCFILIALNOME'},{av:'AV8cFilialTipoPessoa',fld:'vCFILIALTIPOPESSOA'},{av:'AV9cFilialCPF',fld:'vCFILIALCPF'},{av:'AV10cFilialCNPJ',fld:'vCFILIALCNPJ'},{av:'AV11cFilialInscEstadual',fld:'vCFILIALINSCESTADUAL'},{av:'AV12pFilialEmpresaId',fld:'vPFILIALEMPRESAID',hsh:true}],[]];
   this.setVCMap("AV12pFilialEmpresaId", "vPFILIALEMPRESAID", 0, "char");
   this.setVCMap("AV13pFilialId", "vPFILIALID", 0, "int");
   this.setVCMap("AV12pFilialEmpresaId", "vPFILIALEMPRESAID", 0, "char");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar({rfrVar:"AV12pFilialEmpresaId"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0421());
