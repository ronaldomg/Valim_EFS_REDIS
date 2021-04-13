/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:35:7.64
*/
gx.evt.autoSkip = false;
gx.define('gx0bq0', false, function () {
   this.ServerClass =  "gx0bq0" ;
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
      this.AV13pTransportadorEmpresaId=gx.fn.getControlValue("vPTRANSPORTADOREMPRESAID") ;
      this.AV14pTransportadorCodigo=gx.fn.getIntegerValue("vPTRANSPORTADORCODIGO",'.') ;
   };
   this.Validv_Ctransportadortppessoa=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCTRANSPORTADORTPPESSOA");
         this.AnyError  = 0;
         if ( ! ( this.AV9cTransportadorTpPessoa == "F" || this.AV9cTransportadorTpPessoa == "J" || (""==this.AV9cTransportadorTpPessoa) ) )
         {
            try {
               gxballoon.setError("Campo cTransportadorTpPessoa fora do intervalo");
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
   this.e131pp2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141pp1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,60];
   this.GXLastCtrlId =60;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0bq0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(3378,53,"TRANSPORTADOREMPRESAID","Empresa Transportador","","TransportadorEmpresaId","char",0,"px",10,10,"left",null,[],3378,"TransportadorEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3379,54,"TRANSPORTADORCODIGO","Código Transportador","","TransportadorCodigo","int",0,"px",6,6,"right",null,[],3379,"TransportadorCodigo",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3798,55,"TRANSPORTADORNOME","Nome Transportador","Selecionar","TransportadorNome","svchar",0,"px",60,60,"left",null,[],3798,"TransportadorNome",true,0,false,false,"Attribute",1,"");
   Grid1Container.addComboBox(4141,56,"TRANSPORTADORTPPESSOA","Tipo Pessoa","TransportadorTpPessoa","char",null,0,true,false,0,"px","");
   Grid1Container.addComboBox(4145,57,"TRANSPORTADORUFINSCESTADUAL","UF Inscrição","TransportadorUFInscEstadual","char",null,0,true,false,0,"px","");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKTRANSPORTADOREMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTRANSPORTADOREMPRESAID",gxz:"ZV6cTransportadorEmpresaId",gxold:"OV6cTransportadorEmpresaId",gxvar:"AV6cTransportadorEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cTransportadorEmpresaId=Value},v2z:function(Value){gx.O.ZV6cTransportadorEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCTRANSPORTADOREMPRESAID",gx.O.AV6cTransportadorEmpresaId,0)},c2v:function(){gx.O.AV6cTransportadorEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCTRANSPORTADOREMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKTRANSPORTADORCODIGO", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTRANSPORTADORCODIGO",gxz:"ZV7cTransportadorCodigo",gxold:"OV7cTransportadorCodigo",gxvar:"AV7cTransportadorCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cTransportadorCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cTransportadorCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCTRANSPORTADORCODIGO",gx.O.AV7cTransportadorCodigo,0)},c2v:function(){gx.O.AV7cTransportadorCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCTRANSPORTADORCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKTRANSPORTADORNOME", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTRANSPORTADORNOME",gxz:"ZV8cTransportadorNome",gxold:"OV8cTransportadorNome",gxvar:"AV8cTransportadorNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cTransportadorNome=Value},v2z:function(Value){gx.O.ZV8cTransportadorNome=Value},v2c:function(){gx.fn.setControlValue("vCTRANSPORTADORNOME",gx.O.AV8cTransportadorNome,0)},c2v:function(){gx.O.AV8cTransportadorNome=this.val()},val:function(){return gx.fn.getControlValue("vCTRANSPORTADORNOME")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKTRANSPORTADORTPPESSOA", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Ctransportadortppessoa,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTRANSPORTADORTPPESSOA",gxz:"ZV9cTransportadorTpPessoa",gxold:"OV9cTransportadorTpPessoa",gxvar:"AV9cTransportadorTpPessoa",ucs:[],op:[29],ip:[29],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV9cTransportadorTpPessoa=Value},v2z:function(Value){gx.O.ZV9cTransportadorTpPessoa=Value},v2c:function(){gx.fn.setComboBoxValue("vCTRANSPORTADORTPPESSOA",gx.O.AV9cTransportadorTpPessoa)},c2v:function(){gx.O.AV9cTransportadorTpPessoa=this.val()},val:function(){return gx.fn.getControlValue("vCTRANSPORTADORTPPESSOA")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKTRANSPORTADORCPF", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:14,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTRANSPORTADORCPF",gxz:"ZV10cTransportadorCPF",gxold:"OV10cTransportadorCPF",gxvar:"AV10cTransportadorCPF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cTransportadorCPF=Value},v2z:function(Value){gx.O.ZV10cTransportadorCPF=Value},v2c:function(){gx.fn.setControlValue("vCTRANSPORTADORCPF",gx.O.AV10cTransportadorCPF,0)},c2v:function(){gx.O.AV10cTransportadorCPF=this.val()},val:function(){return gx.fn.getControlValue("vCTRANSPORTADORCPF")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKTRANSPORTADORCNPJ", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTRANSPORTADORCNPJ",gxz:"ZV11cTransportadorCNPJ",gxold:"OV11cTransportadorCNPJ",gxvar:"AV11cTransportadorCNPJ",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cTransportadorCNPJ=Value},v2z:function(Value){gx.O.ZV11cTransportadorCNPJ=Value},v2c:function(){gx.fn.setControlValue("vCTRANSPORTADORCNPJ",gx.O.AV11cTransportadorCNPJ,0)},c2v:function(){gx.O.AV11cTransportadorCNPJ=this.val()},val:function(){return gx.fn.getControlValue("vCTRANSPORTADORCNPJ")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKTRANSPORTADORINSCESTADUAL", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"svchar",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTRANSPORTADORINSCESTADUAL",gxz:"ZV12cTransportadorInscEstadual",gxold:"OV12cTransportadorInscEstadual",gxvar:"AV12cTransportadorInscEstadual",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cTransportadorInscEstadual=Value},v2z:function(Value){gx.O.ZV12cTransportadorInscEstadual=Value},v2c:function(){gx.fn.setControlValue("vCTRANSPORTADORINSCESTADUAL",gx.O.AV12cTransportadorInscEstadual,0)},c2v:function(){gx.O.AV12cTransportadorInscEstadual=this.val()},val:function(){return gx.fn.getControlValue("vCTRANSPORTADORINSCESTADUAL")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV17Linkselection_GXI)},c2v:function(){gx.O.AV17Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV17Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TRANSPORTADOREMPRESAID",gxz:"Z3378TransportadorEmpresaId",gxold:"O3378TransportadorEmpresaId",gxvar:"A3378TransportadorEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3378TransportadorEmpresaId=Value},v2z:function(Value){gx.O.Z3378TransportadorEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSPORTADOREMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A3378TransportadorEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3378TransportadorEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSPORTADOREMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TRANSPORTADORCODIGO",gxz:"Z3379TransportadorCodigo",gxold:"O3379TransportadorCodigo",gxvar:"A3379TransportadorCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3379TransportadorCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3379TransportadorCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TRANSPORTADORCODIGO",row || gx.fn.currentGridRowImpl(51),gx.O.A3379TransportadorCodigo,0)},c2v:function(){gx.O.A3379TransportadorCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TRANSPORTADORCODIGO",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TRANSPORTADORNOME",gxz:"Z3798TransportadorNome",gxold:"O3798TransportadorNome",gxvar:"A3798TransportadorNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3798TransportadorNome=Value},v2z:function(Value){gx.O.Z3798TransportadorNome=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSPORTADORNOME",row || gx.fn.currentGridRowImpl(51),gx.O.A3798TransportadorNome,0)},c2v:function(){gx.O.A3798TransportadorNome=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSPORTADORNOME",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TRANSPORTADORTPPESSOA",gxz:"Z4141TransportadorTpPessoa",gxold:"O4141TransportadorTpPessoa",gxvar:"A4141TransportadorTpPessoa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A4141TransportadorTpPessoa=Value},v2z:function(Value){gx.O.Z4141TransportadorTpPessoa=Value},v2c:function(row){gx.fn.setGridComboBoxValue("TRANSPORTADORTPPESSOA",row || gx.fn.currentGridRowImpl(51),gx.O.A4141TransportadorTpPessoa);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4141TransportadorTpPessoa=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSPORTADORTPPESSOA",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"char",len:2,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TRANSPORTADORUFINSCESTADUAL",gxz:"Z4145TransportadorUFInscEstadual",gxold:"O4145TransportadorUFInscEstadual",gxvar:"A4145TransportadorUFInscEstadual",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A4145TransportadorUFInscEstadual=Value},v2z:function(Value){gx.O.Z4145TransportadorUFInscEstadual=Value},v2c:function(row){gx.fn.setGridComboBoxValue("TRANSPORTADORUFINSCESTADUAL",row || gx.fn.currentGridRowImpl(51),gx.O.A4145TransportadorUFInscEstadual);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4145TransportadorUFInscEstadual=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSPORTADORUFINSCESTADUAL",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[60]={fld:"TABLE4",grid:0};
   this.AV6cTransportadorEmpresaId = "" ;
   this.ZV6cTransportadorEmpresaId = "" ;
   this.OV6cTransportadorEmpresaId = "" ;
   this.AV7cTransportadorCodigo = 0 ;
   this.ZV7cTransportadorCodigo = 0 ;
   this.OV7cTransportadorCodigo = 0 ;
   this.AV8cTransportadorNome = "" ;
   this.ZV8cTransportadorNome = "" ;
   this.OV8cTransportadorNome = "" ;
   this.AV9cTransportadorTpPessoa = "" ;
   this.ZV9cTransportadorTpPessoa = "" ;
   this.OV9cTransportadorTpPessoa = "" ;
   this.AV10cTransportadorCPF = "" ;
   this.ZV10cTransportadorCPF = "" ;
   this.OV10cTransportadorCPF = "" ;
   this.AV11cTransportadorCNPJ = "" ;
   this.ZV11cTransportadorCNPJ = "" ;
   this.OV11cTransportadorCNPJ = "" ;
   this.AV12cTransportadorInscEstadual = "" ;
   this.ZV12cTransportadorInscEstadual = "" ;
   this.OV12cTransportadorInscEstadual = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z3378TransportadorEmpresaId = "" ;
   this.O3378TransportadorEmpresaId = "" ;
   this.Z3379TransportadorCodigo = 0 ;
   this.O3379TransportadorCodigo = 0 ;
   this.Z3798TransportadorNome = "" ;
   this.O3798TransportadorNome = "" ;
   this.Z4141TransportadorTpPessoa = "" ;
   this.O4141TransportadorTpPessoa = "" ;
   this.Z4145TransportadorUFInscEstadual = "" ;
   this.O4145TransportadorUFInscEstadual = "" ;
   this.AV6cTransportadorEmpresaId = "" ;
   this.AV7cTransportadorCodigo = 0 ;
   this.AV8cTransportadorNome = "" ;
   this.AV9cTransportadorTpPessoa = "" ;
   this.AV10cTransportadorCPF = "" ;
   this.AV11cTransportadorCNPJ = "" ;
   this.AV12cTransportadorInscEstadual = "" ;
   this.AV13pTransportadorEmpresaId = "" ;
   this.AV14pTransportadorCodigo = 0 ;
   this.A4144TransportadorInscEstadual = "" ;
   this.A4143TransportadorCNPJ = "" ;
   this.A4142TransportadorCPF = "" ;
   this.AV5LinkSelection = "" ;
   this.A3378TransportadorEmpresaId = "" ;
   this.A3379TransportadorCodigo = 0 ;
   this.A3798TransportadorNome = "" ;
   this.A4141TransportadorTpPessoa = "" ;
   this.A4145TransportadorUFInscEstadual = "" ;
   this.Events = {"e131pp2_client": ["ENTER", true] ,"e141pp1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTransportadorEmpresaId',fld:'vCTRANSPORTADOREMPRESAID'},{av:'AV7cTransportadorCodigo',fld:'vCTRANSPORTADORCODIGO'},{av:'AV8cTransportadorNome',fld:'vCTRANSPORTADORNOME'},{av:'AV9cTransportadorTpPessoa',fld:'vCTRANSPORTADORTPPESSOA'},{av:'AV10cTransportadorCPF',fld:'vCTRANSPORTADORCPF'},{av:'AV11cTransportadorCNPJ',fld:'vCTRANSPORTADORCNPJ'},{av:'AV12cTransportadorInscEstadual',fld:'vCTRANSPORTADORINSCESTADUAL'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A3378TransportadorEmpresaId',fld:'TRANSPORTADOREMPRESAID'},{av:'A3379TransportadorCodigo',fld:'TRANSPORTADORCODIGO'}],[{av:'AV13pTransportadorEmpresaId',fld:'vPTRANSPORTADOREMPRESAID'},{av:'AV14pTransportadorCodigo',fld:'vPTRANSPORTADORCODIGO'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTransportadorEmpresaId',fld:'vCTRANSPORTADOREMPRESAID'},{av:'AV7cTransportadorCodigo',fld:'vCTRANSPORTADORCODIGO'},{av:'AV8cTransportadorNome',fld:'vCTRANSPORTADORNOME'},{av:'AV9cTransportadorTpPessoa',fld:'vCTRANSPORTADORTPPESSOA'},{av:'AV10cTransportadorCPF',fld:'vCTRANSPORTADORCPF'},{av:'AV11cTransportadorCNPJ',fld:'vCTRANSPORTADORCNPJ'},{av:'AV12cTransportadorInscEstadual',fld:'vCTRANSPORTADORINSCESTADUAL'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTransportadorEmpresaId',fld:'vCTRANSPORTADOREMPRESAID'},{av:'AV7cTransportadorCodigo',fld:'vCTRANSPORTADORCODIGO'},{av:'AV8cTransportadorNome',fld:'vCTRANSPORTADORNOME'},{av:'AV9cTransportadorTpPessoa',fld:'vCTRANSPORTADORTPPESSOA'},{av:'AV10cTransportadorCPF',fld:'vCTRANSPORTADORCPF'},{av:'AV11cTransportadorCNPJ',fld:'vCTRANSPORTADORCNPJ'},{av:'AV12cTransportadorInscEstadual',fld:'vCTRANSPORTADORINSCESTADUAL'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTransportadorEmpresaId',fld:'vCTRANSPORTADOREMPRESAID'},{av:'AV7cTransportadorCodigo',fld:'vCTRANSPORTADORCODIGO'},{av:'AV8cTransportadorNome',fld:'vCTRANSPORTADORNOME'},{av:'AV9cTransportadorTpPessoa',fld:'vCTRANSPORTADORTPPESSOA'},{av:'AV10cTransportadorCPF',fld:'vCTRANSPORTADORCPF'},{av:'AV11cTransportadorCNPJ',fld:'vCTRANSPORTADORCNPJ'},{av:'AV12cTransportadorInscEstadual',fld:'vCTRANSPORTADORINSCESTADUAL'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTransportadorEmpresaId',fld:'vCTRANSPORTADOREMPRESAID'},{av:'AV7cTransportadorCodigo',fld:'vCTRANSPORTADORCODIGO'},{av:'AV8cTransportadorNome',fld:'vCTRANSPORTADORNOME'},{av:'AV9cTransportadorTpPessoa',fld:'vCTRANSPORTADORTPPESSOA'},{av:'AV10cTransportadorCPF',fld:'vCTRANSPORTADORCPF'},{av:'AV11cTransportadorCNPJ',fld:'vCTRANSPORTADORCNPJ'},{av:'AV12cTransportadorInscEstadual',fld:'vCTRANSPORTADORINSCESTADUAL'}],[]];
   this.setVCMap("AV13pTransportadorEmpresaId", "vPTRANSPORTADOREMPRESAID", 0, "char");
   this.setVCMap("AV14pTransportadorCodigo", "vPTRANSPORTADORCODIGO", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0bq0());
