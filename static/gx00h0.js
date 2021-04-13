/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:24:16.16
*/
gx.evt.autoSkip = false;
gx.define('gx00h0', false, function () {
   this.ServerClass =  "gx00h0" ;
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
      this.AV13pEmpresaId=gx.fn.getControlValue("vPEMPRESAID") ;
   };
   this.Validv_Cempresauf=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCEMPRESAUF");
         this.AnyError  = 0;
         if ( ! ( this.AV11cEmpresaUF == "" || this.AV11cEmpresaUF == "AC" || this.AV11cEmpresaUF == "AL" || this.AV11cEmpresaUF == "AP" || this.AV11cEmpresaUF == "AM" || this.AV11cEmpresaUF == "BA" || this.AV11cEmpresaUF == "CE" || this.AV11cEmpresaUF == "DF" || this.AV11cEmpresaUF == "ES" || this.AV11cEmpresaUF == "GO" || this.AV11cEmpresaUF == "MA" || this.AV11cEmpresaUF == "MT" || this.AV11cEmpresaUF == "MS" || this.AV11cEmpresaUF == "MG" || this.AV11cEmpresaUF == "PA" || this.AV11cEmpresaUF == "PB" || this.AV11cEmpresaUF == "PR" || this.AV11cEmpresaUF == "PE" || this.AV11cEmpresaUF == "PI" || this.AV11cEmpresaUF == "RJ" || this.AV11cEmpresaUF == "RN" || this.AV11cEmpresaUF == "RS" || this.AV11cEmpresaUF == "RO" || this.AV11cEmpresaUF == "RR" || this.AV11cEmpresaUF == "SC" || this.AV11cEmpresaUF == "SP" || this.AV11cEmpresaUF == "SE" || this.AV11cEmpresaUF == "TO" || this.AV11cEmpresaUF == "EX" || (""==this.AV11cEmpresaUF) ) )
         {
            try {
               gxballoon.setError("Campo cEmpresaUF fora do intervalo");
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
   this.e131hs2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141hs1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,58,61];
   this.GXLastCtrlId =61;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx00h0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(138,53,"EMPRESAID","Empresa","","EmpresaId","char",0,"px",10,10,"left",null,[],138,"EmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(186,54,"EMPRESANOME","Nome da Empresa","","EmpresaNome","svchar",0,"px",40,40,"left",null,[],186,"EmpresaNome",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(187,55,"EMPRESAENDERECO","Endereço","","EmpresaEndereco","svchar",0,"px",50,50,"left",null,[],187,"EmpresaEndereco",true,0,false,false,"Attribute",1,"");
   Grid1Container.addComboBox(190,56,"EMPRESAUF","UF","EmpresaUF","char",null,0,true,false,0,"px","");
   Grid1Container.addSingleLineEdit(192,57,"EMPRESATELEFONE","Telefone","","EmpresaTelefone","svchar",0,"px",15,15,"left",null,[],192,"EmpresaTelefone",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(198,58,"IMPRESSORAID","Código","","ImpressoraId","int",0,"px",7,7,"right",null,[],198,"ImpressoraId",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCEMPRESAID",gxz:"ZV6cEmpresaId",gxold:"OV6cEmpresaId",gxvar:"AV6cEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cEmpresaId=Value},v2z:function(Value){gx.O.ZV6cEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCEMPRESAID",gx.O.AV6cEmpresaId,0)},c2v:function(){gx.O.AV6cEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKEMPRESANOME", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCEMPRESANOME",gxz:"ZV7cEmpresaNome",gxold:"OV7cEmpresaNome",gxvar:"AV7cEmpresaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cEmpresaNome=Value},v2z:function(Value){gx.O.ZV7cEmpresaNome=Value},v2c:function(){gx.fn.setControlValue("vCEMPRESANOME",gx.O.AV7cEmpresaNome,0)},c2v:function(){gx.O.AV7cEmpresaNome=this.val()},val:function(){return gx.fn.getControlValue("vCEMPRESANOME")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKEMPRESAENDERECO", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCEMPRESAENDERECO",gxz:"ZV8cEmpresaEndereco",gxold:"OV8cEmpresaEndereco",gxvar:"AV8cEmpresaEndereco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cEmpresaEndereco=Value},v2z:function(Value){gx.O.ZV8cEmpresaEndereco=Value},v2c:function(){gx.fn.setControlValue("vCEMPRESAENDERECO",gx.O.AV8cEmpresaEndereco,0)},c2v:function(){gx.O.AV8cEmpresaEndereco=this.val()},val:function(){return gx.fn.getControlValue("vCEMPRESAENDERECO")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKEMPRESACOMPLEMENTO", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCEMPRESACOMPLEMENTO",gxz:"ZV9cEmpresaComplemento",gxold:"OV9cEmpresaComplemento",gxvar:"AV9cEmpresaComplemento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cEmpresaComplemento=Value},v2z:function(Value){gx.O.ZV9cEmpresaComplemento=Value},v2c:function(){gx.fn.setControlValue("vCEMPRESACOMPLEMENTO",gx.O.AV9cEmpresaComplemento,0)},c2v:function(){gx.O.AV9cEmpresaComplemento=this.val()},val:function(){return gx.fn.getControlValue("vCEMPRESACOMPLEMENTO")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKEMPRESACIDADE", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCEMPRESACIDADE",gxz:"ZV10cEmpresaCidade",gxold:"OV10cEmpresaCidade",gxvar:"AV10cEmpresaCidade",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cEmpresaCidade=Value},v2z:function(Value){gx.O.ZV10cEmpresaCidade=Value},v2c:function(){gx.fn.setControlValue("vCEMPRESACIDADE",gx.O.AV10cEmpresaCidade,0)},c2v:function(){gx.O.AV10cEmpresaCidade=this.val()},val:function(){return gx.fn.getControlValue("vCEMPRESACIDADE")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKEMPRESAUF", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:2,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Cempresauf,isvalid:null,rgrid:[this.Grid1Container],fld:"vCEMPRESAUF",gxz:"ZV11cEmpresaUF",gxold:"OV11cEmpresaUF",gxvar:"AV11cEmpresaUF",ucs:[],op:[39],ip:[39],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV11cEmpresaUF=Value},v2z:function(Value){gx.O.ZV11cEmpresaUF=Value},v2c:function(){gx.fn.setComboBoxValue("vCEMPRESAUF",gx.O.AV11cEmpresaUF)},c2v:function(){gx.O.AV11cEmpresaUF=this.val()},val:function(){return gx.fn.getControlValue("vCEMPRESAUF")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKEMPRESAFANTASIA", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCEMPRESAFANTASIA",gxz:"ZV12cEmpresaFantasia",gxold:"OV12cEmpresaFantasia",gxvar:"AV12cEmpresaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cEmpresaFantasia=Value},v2z:function(Value){gx.O.ZV12cEmpresaFantasia=Value},v2c:function(){gx.fn.setControlValue("vCEMPRESAFANTASIA",gx.O.AV12cEmpresaFantasia,0)},c2v:function(){gx.O.AV12cEmpresaFantasia=this.val()},val:function(){return gx.fn.getControlValue("vCEMPRESAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV16Linkselection_GXI)},c2v:function(){gx.O.AV16Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV16Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"EMPRESAID",gxz:"Z138EmpresaId",gxold:"O138EmpresaId",gxvar:"A138EmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A138EmpresaId=Value},v2z:function(Value){gx.O.Z138EmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("EMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A138EmpresaId,0)},c2v:function(){gx.O.A138EmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("EMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"EMPRESANOME",gxz:"Z186EmpresaNome",gxold:"O186EmpresaNome",gxvar:"A186EmpresaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A186EmpresaNome=Value},v2z:function(Value){gx.O.Z186EmpresaNome=Value},v2c:function(row){gx.fn.setGridControlValue("EMPRESANOME",row || gx.fn.currentGridRowImpl(51),gx.O.A186EmpresaNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A186EmpresaNome=this.val()},val:function(row){return gx.fn.getGridControlValue("EMPRESANOME",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"svchar",len:50,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"EMPRESAENDERECO",gxz:"Z187EmpresaEndereco",gxold:"O187EmpresaEndereco",gxvar:"A187EmpresaEndereco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A187EmpresaEndereco=Value},v2z:function(Value){gx.O.Z187EmpresaEndereco=Value},v2c:function(row){gx.fn.setGridControlValue("EMPRESAENDERECO",row || gx.fn.currentGridRowImpl(51),gx.O.A187EmpresaEndereco,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A187EmpresaEndereco=this.val()},val:function(row){return gx.fn.getGridControlValue("EMPRESAENDERECO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"char",len:2,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"EMPRESAUF",gxz:"Z190EmpresaUF",gxold:"O190EmpresaUF",gxvar:"A190EmpresaUF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A190EmpresaUF=Value},v2z:function(Value){gx.O.Z190EmpresaUF=Value},v2c:function(row){gx.fn.setGridComboBoxValue("EMPRESAUF",row || gx.fn.currentGridRowImpl(51),gx.O.A190EmpresaUF);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A190EmpresaUF=this.val()},val:function(row){return gx.fn.getGridControlValue("EMPRESAUF",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"svchar",len:15,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"EMPRESATELEFONE",gxz:"Z192EmpresaTelefone",gxold:"O192EmpresaTelefone",gxvar:"A192EmpresaTelefone",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A192EmpresaTelefone=Value},v2z:function(Value){gx.O.Z192EmpresaTelefone=Value},v2c:function(row){gx.fn.setGridControlValue("EMPRESATELEFONE",row || gx.fn.currentGridRowImpl(51),gx.O.A192EmpresaTelefone,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A192EmpresaTelefone=this.val()},val:function(row){return gx.fn.getGridControlValue("EMPRESATELEFONE",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORAID",gxz:"Z198ImpressoraId",gxold:"O198ImpressoraId",gxvar:"A198ImpressoraId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A198ImpressoraId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z198ImpressoraId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("IMPRESSORAID",row || gx.fn.currentGridRowImpl(51),gx.O.A198ImpressoraId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A198ImpressoraId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("IMPRESSORAID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[61]={fld:"TABLE4",grid:0};
   this.AV6cEmpresaId = "" ;
   this.ZV6cEmpresaId = "" ;
   this.OV6cEmpresaId = "" ;
   this.AV7cEmpresaNome = "" ;
   this.ZV7cEmpresaNome = "" ;
   this.OV7cEmpresaNome = "" ;
   this.AV8cEmpresaEndereco = "" ;
   this.ZV8cEmpresaEndereco = "" ;
   this.OV8cEmpresaEndereco = "" ;
   this.AV9cEmpresaComplemento = "" ;
   this.ZV9cEmpresaComplemento = "" ;
   this.OV9cEmpresaComplemento = "" ;
   this.AV10cEmpresaCidade = "" ;
   this.ZV10cEmpresaCidade = "" ;
   this.OV10cEmpresaCidade = "" ;
   this.AV11cEmpresaUF = "" ;
   this.ZV11cEmpresaUF = "" ;
   this.OV11cEmpresaUF = "" ;
   this.AV12cEmpresaFantasia = "" ;
   this.ZV12cEmpresaFantasia = "" ;
   this.OV12cEmpresaFantasia = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z138EmpresaId = "" ;
   this.O138EmpresaId = "" ;
   this.Z186EmpresaNome = "" ;
   this.O186EmpresaNome = "" ;
   this.Z187EmpresaEndereco = "" ;
   this.O187EmpresaEndereco = "" ;
   this.Z190EmpresaUF = "" ;
   this.O190EmpresaUF = "" ;
   this.Z192EmpresaTelefone = "" ;
   this.O192EmpresaTelefone = "" ;
   this.Z198ImpressoraId = 0 ;
   this.O198ImpressoraId = 0 ;
   this.AV6cEmpresaId = "" ;
   this.AV7cEmpresaNome = "" ;
   this.AV8cEmpresaEndereco = "" ;
   this.AV9cEmpresaComplemento = "" ;
   this.AV10cEmpresaCidade = "" ;
   this.AV11cEmpresaUF = "" ;
   this.AV12cEmpresaFantasia = "" ;
   this.AV13pEmpresaId = "" ;
   this.A191EmpresaFantasia = "" ;
   this.A189EmpresaCidade = "" ;
   this.A188EmpresaComplemento = "" ;
   this.AV5LinkSelection = "" ;
   this.A138EmpresaId = "" ;
   this.A186EmpresaNome = "" ;
   this.A187EmpresaEndereco = "" ;
   this.A190EmpresaUF = "" ;
   this.A192EmpresaTelefone = "" ;
   this.A198ImpressoraId = 0 ;
   this.Events = {"e131hs2_client": ["ENTER", true] ,"e141hs1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEmpresaId',fld:'vCEMPRESAID'},{av:'AV7cEmpresaNome',fld:'vCEMPRESANOME'},{av:'AV8cEmpresaEndereco',fld:'vCEMPRESAENDERECO'},{av:'AV9cEmpresaComplemento',fld:'vCEMPRESACOMPLEMENTO'},{av:'AV10cEmpresaCidade',fld:'vCEMPRESACIDADE'},{av:'AV11cEmpresaUF',fld:'vCEMPRESAUF'},{av:'AV12cEmpresaFantasia',fld:'vCEMPRESAFANTASIA'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A138EmpresaId',fld:'EMPRESAID'}],[{av:'AV13pEmpresaId',fld:'vPEMPRESAID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEmpresaId',fld:'vCEMPRESAID'},{av:'AV7cEmpresaNome',fld:'vCEMPRESANOME'},{av:'AV8cEmpresaEndereco',fld:'vCEMPRESAENDERECO'},{av:'AV9cEmpresaComplemento',fld:'vCEMPRESACOMPLEMENTO'},{av:'AV10cEmpresaCidade',fld:'vCEMPRESACIDADE'},{av:'AV11cEmpresaUF',fld:'vCEMPRESAUF'},{av:'AV12cEmpresaFantasia',fld:'vCEMPRESAFANTASIA'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEmpresaId',fld:'vCEMPRESAID'},{av:'AV7cEmpresaNome',fld:'vCEMPRESANOME'},{av:'AV8cEmpresaEndereco',fld:'vCEMPRESAENDERECO'},{av:'AV9cEmpresaComplemento',fld:'vCEMPRESACOMPLEMENTO'},{av:'AV10cEmpresaCidade',fld:'vCEMPRESACIDADE'},{av:'AV11cEmpresaUF',fld:'vCEMPRESAUF'},{av:'AV12cEmpresaFantasia',fld:'vCEMPRESAFANTASIA'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEmpresaId',fld:'vCEMPRESAID'},{av:'AV7cEmpresaNome',fld:'vCEMPRESANOME'},{av:'AV8cEmpresaEndereco',fld:'vCEMPRESAENDERECO'},{av:'AV9cEmpresaComplemento',fld:'vCEMPRESACOMPLEMENTO'},{av:'AV10cEmpresaCidade',fld:'vCEMPRESACIDADE'},{av:'AV11cEmpresaUF',fld:'vCEMPRESAUF'},{av:'AV12cEmpresaFantasia',fld:'vCEMPRESAFANTASIA'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEmpresaId',fld:'vCEMPRESAID'},{av:'AV7cEmpresaNome',fld:'vCEMPRESANOME'},{av:'AV8cEmpresaEndereco',fld:'vCEMPRESAENDERECO'},{av:'AV9cEmpresaComplemento',fld:'vCEMPRESACOMPLEMENTO'},{av:'AV10cEmpresaCidade',fld:'vCEMPRESACIDADE'},{av:'AV11cEmpresaUF',fld:'vCEMPRESAUF'},{av:'AV12cEmpresaFantasia',fld:'vCEMPRESAFANTASIA'}],[]];
   this.setVCMap("AV13pEmpresaId", "vPEMPRESAID", 0, "char");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx00h0());
