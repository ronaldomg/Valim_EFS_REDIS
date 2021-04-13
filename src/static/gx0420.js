/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:29:16.24
*/
gx.evt.autoSkip = false;
gx.define('gx0420', false, function () {
   this.ServerClass =  "gx0420" ;
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
      this.AV13pFilialEmpresaId=gx.fn.getControlValue("vPFILIALEMPRESAID") ;
      this.AV14pFilialId=gx.fn.getIntegerValue("vPFILIALID",'.') ;
   };
   this.Validv_Cfilialtipopessoa=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCFILIALTIPOPESSOA");
         this.AnyError  = 0;
         if ( ! ( this.AV9cFilialTipoPessoa == "F" || this.AV9cFilialTipoPessoa == "J" || (""==this.AV9cFilialTipoPessoa) ) )
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
   this.e131li2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141li1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,58,59,60,61,64];
   this.GXLastCtrlId =64;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0420",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(1228,53,"FILIALEMPRESAID","Empresa da Filial","","FilialEmpresaId","char",0,"px",10,10,"left",null,[],1228,"FilialEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1156,54,"FILIALID","Código da Filial","","FilialId","int",0,"px",7,7,"right",null,[],1156,"FilialId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addComboBox(1257,55,"FILIALTIPOPESSOA","Tipo de Pessoa","FilialTipoPessoa","char",null,0,true,false,0,"px","");
   Grid1Container.addSingleLineEdit(1193,56,"FILIALCPF","CPF","","FilialCPF","char",0,"px",14,14,"left",null,[],1193,"FilialCPF",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1245,57,"FILIALCNPJ","CNPJ","","FilialCNPJ","char",0,"px",18,18,"left",null,[],1245,"FilialCNPJ",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1176,58,"FILIALINSCESTADUAL","Inscrição Estadual","","FilialInscEstadual","svchar",0,"px",18,18,"left",null,[],1176,"FilialInscEstadual",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1227,59,"FILIALNUMERO","Número","","FilialNumero","int",0,"px",7,7,"right",null,[],1227,"FilialNumero",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1226,60,"FILIALCEP","CEP","","FilialCEP","char",0,"px",9,9,"left",null,[],1226,"FilialCEP",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1218,61,"FILIALSUFRAMA","Suframa","","FilialSuframa","char",0,"px",9,9,"left",null,[],1218,"FilialSuframa",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKFILIALEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCFILIALEMPRESAID",gxz:"ZV6cFilialEmpresaId",gxold:"OV6cFilialEmpresaId",gxvar:"AV6cFilialEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cFilialEmpresaId=Value},v2z:function(Value){gx.O.ZV6cFilialEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCFILIALEMPRESAID",gx.O.AV6cFilialEmpresaId,0)},c2v:function(){gx.O.AV6cFilialEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCFILIALEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKFILIALID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCFILIALID",gxz:"ZV7cFilialId",gxold:"OV7cFilialId",gxvar:"AV7cFilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cFilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cFilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCFILIALID",gx.O.AV7cFilialId,0)},c2v:function(){gx.O.AV7cFilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKFILIALNOME", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCFILIALNOME",gxz:"ZV8cFilialNome",gxold:"OV8cFilialNome",gxvar:"AV8cFilialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cFilialNome=Value},v2z:function(Value){gx.O.ZV8cFilialNome=Value},v2c:function(){gx.fn.setControlValue("vCFILIALNOME",gx.O.AV8cFilialNome,0)},c2v:function(){gx.O.AV8cFilialNome=this.val()},val:function(){return gx.fn.getControlValue("vCFILIALNOME")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKFILIALTIPOPESSOA", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Cfilialtipopessoa,isvalid:null,rgrid:[this.Grid1Container],fld:"vCFILIALTIPOPESSOA",gxz:"ZV9cFilialTipoPessoa",gxold:"OV9cFilialTipoPessoa",gxvar:"AV9cFilialTipoPessoa",ucs:[],op:[29],ip:[29],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV9cFilialTipoPessoa=Value},v2z:function(Value){gx.O.ZV9cFilialTipoPessoa=Value},v2c:function(){gx.fn.setComboBoxValue("vCFILIALTIPOPESSOA",gx.O.AV9cFilialTipoPessoa)},c2v:function(){gx.O.AV9cFilialTipoPessoa=this.val()},val:function(){return gx.fn.getControlValue("vCFILIALTIPOPESSOA")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKFILIALCPF", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:14,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCFILIALCPF",gxz:"ZV10cFilialCPF",gxold:"OV10cFilialCPF",gxvar:"AV10cFilialCPF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cFilialCPF=Value},v2z:function(Value){gx.O.ZV10cFilialCPF=Value},v2c:function(){gx.fn.setControlValue("vCFILIALCPF",gx.O.AV10cFilialCPF,0)},c2v:function(){gx.O.AV10cFilialCPF=this.val()},val:function(){return gx.fn.getControlValue("vCFILIALCPF")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKFILIALCNPJ", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCFILIALCNPJ",gxz:"ZV11cFilialCNPJ",gxold:"OV11cFilialCNPJ",gxvar:"AV11cFilialCNPJ",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cFilialCNPJ=Value},v2z:function(Value){gx.O.ZV11cFilialCNPJ=Value},v2c:function(){gx.fn.setControlValue("vCFILIALCNPJ",gx.O.AV11cFilialCNPJ,0)},c2v:function(){gx.O.AV11cFilialCNPJ=this.val()},val:function(){return gx.fn.getControlValue("vCFILIALCNPJ")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKFILIALINSCESTADUAL", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"svchar",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCFILIALINSCESTADUAL",gxz:"ZV12cFilialInscEstadual",gxold:"OV12cFilialInscEstadual",gxvar:"AV12cFilialInscEstadual",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cFilialInscEstadual=Value},v2z:function(Value){gx.O.ZV12cFilialInscEstadual=Value},v2c:function(){gx.fn.setControlValue("vCFILIALINSCESTADUAL",gx.O.AV12cFilialInscEstadual,0)},c2v:function(){gx.O.AV12cFilialInscEstadual=this.val()},val:function(){return gx.fn.getControlValue("vCFILIALINSCESTADUAL")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV17Linkselection_GXI)},c2v:function(){gx.O.AV17Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV17Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FILIALEMPRESAID",gxz:"Z1228FilialEmpresaId",gxold:"O1228FilialEmpresaId",gxvar:"A1228FilialEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1228FilialEmpresaId=Value},v2z:function(Value){gx.O.Z1228FilialEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("FILIALEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A1228FilialEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1228FilialEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("FILIALEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FILIALID",gxz:"Z1156FilialId",gxold:"O1156FilialId",gxvar:"A1156FilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1156FilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1156FilialId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("FILIALID",row || gx.fn.currentGridRowImpl(51),gx.O.A1156FilialId,0)},c2v:function(){gx.O.A1156FilialId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("FILIALID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FILIALTIPOPESSOA",gxz:"Z1257FilialTipoPessoa",gxold:"O1257FilialTipoPessoa",gxvar:"A1257FilialTipoPessoa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A1257FilialTipoPessoa=Value},v2z:function(Value){gx.O.Z1257FilialTipoPessoa=Value},v2c:function(row){gx.fn.setGridComboBoxValue("FILIALTIPOPESSOA",row || gx.fn.currentGridRowImpl(51),gx.O.A1257FilialTipoPessoa);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1257FilialTipoPessoa=this.val()},val:function(row){return gx.fn.getGridControlValue("FILIALTIPOPESSOA",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"char",len:14,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FILIALCPF",gxz:"Z1193FilialCPF",gxold:"O1193FilialCPF",gxvar:"A1193FilialCPF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1193FilialCPF=Value},v2z:function(Value){gx.O.Z1193FilialCPF=Value},v2c:function(row){gx.fn.setGridControlValue("FILIALCPF",row || gx.fn.currentGridRowImpl(51),gx.O.A1193FilialCPF,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1193FilialCPF=this.val()},val:function(row){return gx.fn.getGridControlValue("FILIALCPF",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"char",len:18,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FILIALCNPJ",gxz:"Z1245FilialCNPJ",gxold:"O1245FilialCNPJ",gxvar:"A1245FilialCNPJ",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1245FilialCNPJ=Value},v2z:function(Value){gx.O.Z1245FilialCNPJ=Value},v2c:function(row){gx.fn.setGridControlValue("FILIALCNPJ",row || gx.fn.currentGridRowImpl(51),gx.O.A1245FilialCNPJ,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1245FilialCNPJ=this.val()},val:function(row){return gx.fn.getGridControlValue("FILIALCNPJ",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"svchar",len:18,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FILIALINSCESTADUAL",gxz:"Z1176FilialInscEstadual",gxold:"O1176FilialInscEstadual",gxvar:"A1176FilialInscEstadual",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1176FilialInscEstadual=Value},v2z:function(Value){gx.O.Z1176FilialInscEstadual=Value},v2c:function(row){gx.fn.setGridControlValue("FILIALINSCESTADUAL",row || gx.fn.currentGridRowImpl(51),gx.O.A1176FilialInscEstadual,0)},c2v:function(){gx.O.A1176FilialInscEstadual=this.val()},val:function(row){return gx.fn.getGridControlValue("FILIALINSCESTADUAL",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FILIALNUMERO",gxz:"Z1227FilialNumero",gxold:"O1227FilialNumero",gxvar:"A1227FilialNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1227FilialNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1227FilialNumero=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("FILIALNUMERO",row || gx.fn.currentGridRowImpl(51),gx.O.A1227FilialNumero,0)},c2v:function(){gx.O.A1227FilialNumero=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("FILIALNUMERO",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"char",len:9,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FILIALCEP",gxz:"Z1226FilialCEP",gxold:"O1226FilialCEP",gxvar:"A1226FilialCEP",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1226FilialCEP=Value},v2z:function(Value){gx.O.Z1226FilialCEP=Value},v2c:function(row){gx.fn.setGridControlValue("FILIALCEP",row || gx.fn.currentGridRowImpl(51),gx.O.A1226FilialCEP,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1226FilialCEP=this.val()},val:function(row){return gx.fn.getGridControlValue("FILIALCEP",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"char",len:9,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FILIALSUFRAMA",gxz:"Z1218FilialSuframa",gxold:"O1218FilialSuframa",gxvar:"A1218FilialSuframa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1218FilialSuframa=Value},v2z:function(Value){gx.O.Z1218FilialSuframa=Value},v2c:function(row){gx.fn.setGridControlValue("FILIALSUFRAMA",row || gx.fn.currentGridRowImpl(51),gx.O.A1218FilialSuframa,0)},c2v:function(){gx.O.A1218FilialSuframa=this.val()},val:function(row){return gx.fn.getGridControlValue("FILIALSUFRAMA",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[64]={fld:"TABLE4",grid:0};
   this.AV6cFilialEmpresaId = "" ;
   this.ZV6cFilialEmpresaId = "" ;
   this.OV6cFilialEmpresaId = "" ;
   this.AV7cFilialId = 0 ;
   this.ZV7cFilialId = 0 ;
   this.OV7cFilialId = 0 ;
   this.AV8cFilialNome = "" ;
   this.ZV8cFilialNome = "" ;
   this.OV8cFilialNome = "" ;
   this.AV9cFilialTipoPessoa = "" ;
   this.ZV9cFilialTipoPessoa = "" ;
   this.OV9cFilialTipoPessoa = "" ;
   this.AV10cFilialCPF = "" ;
   this.ZV10cFilialCPF = "" ;
   this.OV10cFilialCPF = "" ;
   this.AV11cFilialCNPJ = "" ;
   this.ZV11cFilialCNPJ = "" ;
   this.OV11cFilialCNPJ = "" ;
   this.AV12cFilialInscEstadual = "" ;
   this.ZV12cFilialInscEstadual = "" ;
   this.OV12cFilialInscEstadual = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z1228FilialEmpresaId = "" ;
   this.O1228FilialEmpresaId = "" ;
   this.Z1156FilialId = 0 ;
   this.O1156FilialId = 0 ;
   this.Z1257FilialTipoPessoa = "" ;
   this.O1257FilialTipoPessoa = "" ;
   this.Z1193FilialCPF = "" ;
   this.O1193FilialCPF = "" ;
   this.Z1245FilialCNPJ = "" ;
   this.O1245FilialCNPJ = "" ;
   this.Z1176FilialInscEstadual = "" ;
   this.O1176FilialInscEstadual = "" ;
   this.Z1227FilialNumero = 0 ;
   this.O1227FilialNumero = 0 ;
   this.Z1226FilialCEP = "" ;
   this.O1226FilialCEP = "" ;
   this.Z1218FilialSuframa = "" ;
   this.O1218FilialSuframa = "" ;
   this.AV6cFilialEmpresaId = "" ;
   this.AV7cFilialId = 0 ;
   this.AV8cFilialNome = "" ;
   this.AV9cFilialTipoPessoa = "" ;
   this.AV10cFilialCPF = "" ;
   this.AV11cFilialCNPJ = "" ;
   this.AV12cFilialInscEstadual = "" ;
   this.AV13pFilialEmpresaId = "" ;
   this.AV14pFilialId = 0 ;
   this.A1136FilialNome = "" ;
   this.AV5LinkSelection = "" ;
   this.A1228FilialEmpresaId = "" ;
   this.A1156FilialId = 0 ;
   this.A1257FilialTipoPessoa = "" ;
   this.A1193FilialCPF = "" ;
   this.A1245FilialCNPJ = "" ;
   this.A1176FilialInscEstadual = "" ;
   this.A1227FilialNumero = 0 ;
   this.A1226FilialCEP = "" ;
   this.A1218FilialSuframa = "" ;
   this.Events = {"e131li2_client": ["ENTER", true] ,"e141li1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cFilialEmpresaId',fld:'vCFILIALEMPRESAID'},{av:'AV7cFilialId',fld:'vCFILIALID'},{av:'AV8cFilialNome',fld:'vCFILIALNOME'},{av:'AV9cFilialTipoPessoa',fld:'vCFILIALTIPOPESSOA'},{av:'AV10cFilialCPF',fld:'vCFILIALCPF'},{av:'AV11cFilialCNPJ',fld:'vCFILIALCNPJ'},{av:'AV12cFilialInscEstadual',fld:'vCFILIALINSCESTADUAL'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'}],[{av:'AV13pFilialEmpresaId',fld:'vPFILIALEMPRESAID'},{av:'AV14pFilialId',fld:'vPFILIALID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cFilialEmpresaId',fld:'vCFILIALEMPRESAID'},{av:'AV7cFilialId',fld:'vCFILIALID'},{av:'AV8cFilialNome',fld:'vCFILIALNOME'},{av:'AV9cFilialTipoPessoa',fld:'vCFILIALTIPOPESSOA'},{av:'AV10cFilialCPF',fld:'vCFILIALCPF'},{av:'AV11cFilialCNPJ',fld:'vCFILIALCNPJ'},{av:'AV12cFilialInscEstadual',fld:'vCFILIALINSCESTADUAL'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cFilialEmpresaId',fld:'vCFILIALEMPRESAID'},{av:'AV7cFilialId',fld:'vCFILIALID'},{av:'AV8cFilialNome',fld:'vCFILIALNOME'},{av:'AV9cFilialTipoPessoa',fld:'vCFILIALTIPOPESSOA'},{av:'AV10cFilialCPF',fld:'vCFILIALCPF'},{av:'AV11cFilialCNPJ',fld:'vCFILIALCNPJ'},{av:'AV12cFilialInscEstadual',fld:'vCFILIALINSCESTADUAL'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cFilialEmpresaId',fld:'vCFILIALEMPRESAID'},{av:'AV7cFilialId',fld:'vCFILIALID'},{av:'AV8cFilialNome',fld:'vCFILIALNOME'},{av:'AV9cFilialTipoPessoa',fld:'vCFILIALTIPOPESSOA'},{av:'AV10cFilialCPF',fld:'vCFILIALCPF'},{av:'AV11cFilialCNPJ',fld:'vCFILIALCNPJ'},{av:'AV12cFilialInscEstadual',fld:'vCFILIALINSCESTADUAL'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cFilialEmpresaId',fld:'vCFILIALEMPRESAID'},{av:'AV7cFilialId',fld:'vCFILIALID'},{av:'AV8cFilialNome',fld:'vCFILIALNOME'},{av:'AV9cFilialTipoPessoa',fld:'vCFILIALTIPOPESSOA'},{av:'AV10cFilialCPF',fld:'vCFILIALCPF'},{av:'AV11cFilialCNPJ',fld:'vCFILIALCNPJ'},{av:'AV12cFilialInscEstadual',fld:'vCFILIALINSCESTADUAL'}],[]];
   this.setVCMap("AV13pFilialEmpresaId", "vPFILIALEMPRESAID", 0, "char");
   this.setVCMap("AV14pFilialId", "vPFILIALID", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0420());
