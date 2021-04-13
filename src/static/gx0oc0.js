/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:48:51.72
*/
gx.evt.autoSkip = false;
gx.define('gx0oc0', false, function () {
   this.ServerClass =  "gx0oc0" ;
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
      this.AV11pNFeCNPJ=gx.fn.getControlValue("vPNFECNPJ") ;
      this.AV12pNFeSerie=gx.fn.getIntegerValue("vPNFESERIE",'.') ;
      this.AV13pNFeNumero=gx.fn.getIntegerValue("vPNFENUMERO",'.') ;
      this.AV14pNfeReciboNumero=gx.fn.getIntegerValue("vPNFERECIBONUMERO",'.') ;
   };
   this.Validv_Cnferecibosituacao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCNFERECIBOSITUACAO");
         this.AnyError  = 0;
         if ( ! ( this.AV10cNfeReciboSituacao == "A" || this.AV10cNfeReciboSituacao == "C" || (""==this.AV10cNfeReciboSituacao) ) )
         {
            try {
               gxballoon.setError("Campo cNfeReciboSituacao fora do intervalo");
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
   this.e132hl2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e142hl1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,38,42,43,44,45,46,47,50];
   this.GXLastCtrlId =50;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",41,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0oc0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",42,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(11675,43,"NFECNPJ","CNPJ","","NFeCNPJ","char",0,"px",18,18,"left",null,[],11675,"NFeCNPJ",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(11676,44,"NFESERIE","Série","","NFeSerie","int",0,"px",4,4,"right",null,[],11676,"NFeSerie",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(11677,45,"NFENUMERO","Documento","","NFeNumero","int",0,"px",10,10,"right",null,[],11677,"NFeNumero",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(11834,46,"NFERECIBONUMERO","do recibo","","NfeReciboNumero","int",0,"px",18,18,"right",null,[],11834,"NfeReciboNumero",true,0,false,false,"Attribute",1,"");
   Grid1Container.addComboBox(11835,47,"NFERECIBOSITUACAO","Situação","NfeReciboSituacao","char",null,0,true,false,0,"px","");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKNFECNPJ", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCNFECNPJ",gxz:"ZV6cNFeCNPJ",gxold:"OV6cNFeCNPJ",gxvar:"AV6cNFeCNPJ",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cNFeCNPJ=Value},v2z:function(Value){gx.O.ZV6cNFeCNPJ=Value},v2c:function(){gx.fn.setControlValue("vCNFECNPJ",gx.O.AV6cNFeCNPJ,0)},c2v:function(){gx.O.AV6cNFeCNPJ=this.val()},val:function(){return gx.fn.getControlValue("vCNFECNPJ")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKNFESERIE", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCNFESERIE",gxz:"ZV7cNFeSerie",gxold:"OV7cNFeSerie",gxvar:"AV7cNFeSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cNFeSerie=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cNFeSerie=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCNFESERIE",gx.O.AV7cNFeSerie,0)},c2v:function(){gx.O.AV7cNFeSerie=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCNFESERIE",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKNFENUMERO", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCNFENUMERO",gxz:"ZV8cNFeNumero",gxold:"OV8cNFeNumero",gxvar:"AV8cNFeNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cNFeNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8cNFeNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCNFENUMERO",gx.O.AV8cNFeNumero,0)},c2v:function(){gx.O.AV8cNFeNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCNFENUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKNFERECIBONUMERO", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:18,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCNFERECIBONUMERO",gxz:"ZV9cNfeReciboNumero",gxold:"OV9cNfeReciboNumero",gxvar:"AV9cNfeReciboNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cNfeReciboNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV9cNfeReciboNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCNFERECIBONUMERO",gx.O.AV9cNfeReciboNumero,0)},c2v:function(){gx.O.AV9cNfeReciboNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCNFERECIBONUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKNFERECIBOSITUACAO", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Cnferecibosituacao,isvalid:null,rgrid:[this.Grid1Container],fld:"vCNFERECIBOSITUACAO",gxz:"ZV10cNfeReciboSituacao",gxold:"OV10cNfeReciboSituacao",gxvar:"AV10cNfeReciboSituacao",ucs:[],op:[34],ip:[34],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV10cNfeReciboSituacao=Value},v2z:function(Value){gx.O.ZV10cNfeReciboSituacao=Value},v2c:function(){gx.fn.setComboBoxValue("vCNFERECIBOSITUACAO",gx.O.AV10cNfeReciboSituacao)},c2v:function(){gx.O.AV10cNfeReciboSituacao=this.val()},val:function(){return gx.fn.getControlValue("vCNFERECIBOSITUACAO")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"GROUP2",grid:0};
   GXValidFnc[38]={fld:"TABLE3",grid:0};
   GXValidFnc[42]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(41),gx.O.AV5LinkSelection,gx.O.AV17Linkselection_GXI)},c2v:function(){gx.O.AV17Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(41))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(41))}, gxvar_GXI:'AV17Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"char",len:18,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"NFECNPJ",gxz:"Z11675NFeCNPJ",gxold:"O11675NFeCNPJ",gxvar:"A11675NFeCNPJ",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11675NFeCNPJ=Value},v2z:function(Value){gx.O.Z11675NFeCNPJ=Value},v2c:function(row){gx.fn.setGridControlValue("NFECNPJ",row || gx.fn.currentGridRowImpl(41),gx.O.A11675NFeCNPJ,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11675NFeCNPJ=this.val()},val:function(row){return gx.fn.getGridControlValue("NFECNPJ",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[44]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"NFESERIE",gxz:"Z11676NFeSerie",gxold:"O11676NFeSerie",gxvar:"A11676NFeSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A11676NFeSerie=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11676NFeSerie=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("NFESERIE",row || gx.fn.currentGridRowImpl(41),gx.O.A11676NFeSerie,0)},c2v:function(){gx.O.A11676NFeSerie=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("NFESERIE",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"NFENUMERO",gxz:"Z11677NFeNumero",gxold:"O11677NFeNumero",gxvar:"A11677NFeNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A11677NFeNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11677NFeNumero=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("NFENUMERO",row || gx.fn.currentGridRowImpl(41),gx.O.A11677NFeNumero,0)},c2v:function(){gx.O.A11677NFeNumero=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("NFENUMERO",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"int",len:18,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZZZZ9",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"NFERECIBONUMERO",gxz:"Z11834NfeReciboNumero",gxold:"O11834NfeReciboNumero",gxvar:"A11834NfeReciboNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A11834NfeReciboNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11834NfeReciboNumero=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("NFERECIBONUMERO",row || gx.fn.currentGridRowImpl(41),gx.O.A11834NfeReciboNumero,0)},c2v:function(){gx.O.A11834NfeReciboNumero=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("NFERECIBONUMERO",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"NFERECIBOSITUACAO",gxz:"Z11835NfeReciboSituacao",gxold:"O11835NfeReciboSituacao",gxvar:"A11835NfeReciboSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A11835NfeReciboSituacao=Value},v2z:function(Value){gx.O.Z11835NfeReciboSituacao=Value},v2c:function(row){gx.fn.setGridComboBoxValue("NFERECIBOSITUACAO",row || gx.fn.currentGridRowImpl(41),gx.O.A11835NfeReciboSituacao);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11835NfeReciboSituacao=this.val()},val:function(row){return gx.fn.getGridControlValue("NFERECIBOSITUACAO",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[50]={fld:"TABLE4",grid:0};
   this.AV6cNFeCNPJ = "" ;
   this.ZV6cNFeCNPJ = "" ;
   this.OV6cNFeCNPJ = "" ;
   this.AV7cNFeSerie = 0 ;
   this.ZV7cNFeSerie = 0 ;
   this.OV7cNFeSerie = 0 ;
   this.AV8cNFeNumero = 0 ;
   this.ZV8cNFeNumero = 0 ;
   this.OV8cNFeNumero = 0 ;
   this.AV9cNfeReciboNumero = 0 ;
   this.ZV9cNfeReciboNumero = 0 ;
   this.OV9cNfeReciboNumero = 0 ;
   this.AV10cNfeReciboSituacao = "" ;
   this.ZV10cNfeReciboSituacao = "" ;
   this.OV10cNfeReciboSituacao = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z11675NFeCNPJ = "" ;
   this.O11675NFeCNPJ = "" ;
   this.Z11676NFeSerie = 0 ;
   this.O11676NFeSerie = 0 ;
   this.Z11677NFeNumero = 0 ;
   this.O11677NFeNumero = 0 ;
   this.Z11834NfeReciboNumero = 0 ;
   this.O11834NfeReciboNumero = 0 ;
   this.Z11835NfeReciboSituacao = "" ;
   this.O11835NfeReciboSituacao = "" ;
   this.AV6cNFeCNPJ = "" ;
   this.AV7cNFeSerie = 0 ;
   this.AV8cNFeNumero = 0 ;
   this.AV9cNfeReciboNumero = 0 ;
   this.AV10cNfeReciboSituacao = "" ;
   this.AV11pNFeCNPJ = "" ;
   this.AV12pNFeSerie = 0 ;
   this.AV13pNFeNumero = 0 ;
   this.AV14pNfeReciboNumero = 0 ;
   this.AV5LinkSelection = "" ;
   this.A11675NFeCNPJ = "" ;
   this.A11676NFeSerie = 0 ;
   this.A11677NFeNumero = 0 ;
   this.A11834NfeReciboNumero = 0 ;
   this.A11835NfeReciboSituacao = "" ;
   this.Events = {"e132hl2_client": ["ENTER", true] ,"e142hl1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cNFeCNPJ',fld:'vCNFECNPJ'},{av:'AV7cNFeSerie',fld:'vCNFESERIE'},{av:'AV8cNFeNumero',fld:'vCNFENUMERO'},{av:'AV9cNfeReciboNumero',fld:'vCNFERECIBONUMERO'},{av:'AV10cNfeReciboSituacao',fld:'vCNFERECIBOSITUACAO'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A11675NFeCNPJ',fld:'NFECNPJ'},{av:'A11676NFeSerie',fld:'NFESERIE'},{av:'A11677NFeNumero',fld:'NFENUMERO'},{av:'A11834NfeReciboNumero',fld:'NFERECIBONUMERO'}],[{av:'AV11pNFeCNPJ',fld:'vPNFECNPJ'},{av:'AV12pNFeSerie',fld:'vPNFESERIE'},{av:'AV13pNFeNumero',fld:'vPNFENUMERO'},{av:'AV14pNfeReciboNumero',fld:'vPNFERECIBONUMERO'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cNFeCNPJ',fld:'vCNFECNPJ'},{av:'AV7cNFeSerie',fld:'vCNFESERIE'},{av:'AV8cNFeNumero',fld:'vCNFENUMERO'},{av:'AV9cNfeReciboNumero',fld:'vCNFERECIBONUMERO'},{av:'AV10cNfeReciboSituacao',fld:'vCNFERECIBOSITUACAO'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cNFeCNPJ',fld:'vCNFECNPJ'},{av:'AV7cNFeSerie',fld:'vCNFESERIE'},{av:'AV8cNFeNumero',fld:'vCNFENUMERO'},{av:'AV9cNfeReciboNumero',fld:'vCNFERECIBONUMERO'},{av:'AV10cNfeReciboSituacao',fld:'vCNFERECIBOSITUACAO'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cNFeCNPJ',fld:'vCNFECNPJ'},{av:'AV7cNFeSerie',fld:'vCNFESERIE'},{av:'AV8cNFeNumero',fld:'vCNFENUMERO'},{av:'AV9cNfeReciboNumero',fld:'vCNFERECIBONUMERO'},{av:'AV10cNfeReciboSituacao',fld:'vCNFERECIBOSITUACAO'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cNFeCNPJ',fld:'vCNFECNPJ'},{av:'AV7cNFeSerie',fld:'vCNFESERIE'},{av:'AV8cNFeNumero',fld:'vCNFENUMERO'},{av:'AV9cNfeReciboNumero',fld:'vCNFERECIBONUMERO'},{av:'AV10cNfeReciboSituacao',fld:'vCNFERECIBOSITUACAO'}],[]];
   this.setVCMap("AV11pNFeCNPJ", "vPNFECNPJ", 0, "char");
   this.setVCMap("AV12pNFeSerie", "vPNFESERIE", 0, "int");
   this.setVCMap("AV13pNFeNumero", "vPNFENUMERO", 0, "int");
   this.setVCMap("AV14pNfeReciboNumero", "vPNFERECIBONUMERO", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0oc0());
