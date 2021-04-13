/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:32:51.83
*/
gx.evt.autoSkip = false;
gx.define('hcodclaproduto', false, function () {
   this.ServerClass =  "hcodclaproduto" ;
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
      this.AV33SnAbaClass=gx.fn.getControlValue("vSNABACLASS") ;
      this.AV34SnAbaCodif=gx.fn.getControlValue("vSNABACODIF") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV50SdtCodif=gx.fn.getControlValue("vSDTCODIF") ;
      this.AV28ProdutoEmpresaId=gx.fn.getControlValue("vPRODUTOEMPRESAID") ;
      this.AV54SnConsiste=gx.fn.getControlValue("vSNCONSISTE") ;
   };
   this.Validv_Produtoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRODUTOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Classificacaoestid=function()
   {
      gx.ajax.validSrvEvt("dyncall","validv_Classificacaoestid",["gx.O.AV49ClassificacaoEstId", "gx.O.GXV11G"],["GXV11G"]);
      return true;
   }
   this.Validv_Classificacaoestempresaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","validv_Classificacaoestempresaid",["gx.O.AV35ClassificacaoEstEmpresaId", "gx.O.AV49ClassificacaoEstId"],["AV49ClassificacaoEstId"]);
      return true;
   }
   this.Validv_Codificacaoestempresaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","validv_Codificacaoestempresaid",["gx.O.AV36CodificacaoEstEmpresaId", "gx.O.AV37CodifiPrincipal", "gx.O.AV48CodificacaoEstId"],["AV48CodificacaoEstId"]);
      return true;
   }
   this.Validv_Codifiprincipal=function()
   {
      gx.ajax.validSrvEvt("dyncall","validv_Codifiprincipal",["gx.O.AV36CodificacaoEstEmpresaId", "gx.O.AV37CodifiPrincipal", "gx.O.AV48CodificacaoEstId"],["AV48CodificacaoEstId"]);
      return true;
   }
   this.Validv_Classificacaoestid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCLASSIFICACAOESTID");
         this.AnyError  = 0;
         gxajaxCallCrl(["AV49ClassificacaoEstId"],"CTLPRODUTOCLASSIFICACAOVALOR");
      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e112382_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e122382_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e152382_client=function()
   {
      this.executeServerEvent("VCODIFICACAOESTID.CLICK", true, arguments[0], false, false);
   };
   this.e182382_client=function()
   {
      this.executeServerEvent("VCLASSIFICACAOESTID.CLICK", true, arguments[0], false, false);
   };
   this.e192382_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15,17,22,25,28,30,31,32,33,34,35,36,37,38,43,46,48,49,50,51,52,53,54,55,56,64,65,66];
   this.GXLastCtrlId =66;
   this.GdrcodifContainer = new gx.grid.grid(this, 2,"WbpLvl2",29,"Gdrcodif","Gdrcodif","GdrcodifContainer",this.CmpContext,this.IsMasterPage,"hcodclaproduto",[],false,1,true,true,0,true,false,false,"CollSdtCodificEst.SdtCodificEstItem",0,"px","Novo registro",true,false,false,null,null,false,"AV50SdtCodif",false,[1,1,1,1]);
   var GdrcodifContainer = this.GdrcodifContainer;
   GdrcodifContainer.addCheckBox("GXV10U",30,"CTLSNREMOVE","","","SnRemove","char","S","N",null,true,false,0,"px","GridColumnImage");
   GdrcodifContainer.addSingleLineEdit("GXV10V",31,"CTLIDX","Idx","","Idx","int",0,"px",4,4,"right",null,[],"GXV10V","GXV10V",false,0,false,false,"Attribute",1,"");
   GdrcodifContainer.addComboBox("Codificacaoestid",32,"vCODIFICACAOESTID","Codificação","CodificacaoEstId","char","e152382_client",1,true,false,0,"px","");
   GdrcodifContainer.addSingleLineEdit("GXV10X",33,"CTLCODIFICACAOESTID","Codificação","","CodificacaoEstId","char",0,"px",15,15,"left",null,[],"GXV10X","GXV10X",false,0,false,false,"Attribute",1,"");
   GdrcodifContainer.addSingleLineEdit("GXV10Y",34,"CTLPRODUTOCODIFICACAOVALOR","Valor","","ProdutoCodificacaoValor","char",0,"px",20,20,"left",null,[],"GXV10Y","GXV10Y",true,0,false,false,"Attribute",1,"");
   GdrcodifContainer.addSingleLineEdit("GXV10Z",35,"CTLCODIFICACAOESTUSUARIOALT","Usuário","","CodificacaoEstUsuarioAlt","char",0,"px",12,12,"left",null,[],"GXV10Z","GXV10Z",true,0,false,false,"Attribute",1,"");
   GdrcodifContainer.addSingleLineEdit("GXV110",36,"CTLCODIFICACAOESTDATAHORAALT","Última Alteração","","CodificacaoEstDataHoraAlt","dtime",0,"px",16,16,"right",null,[],"GXV110","GXV110",true,5,false,false,"Attribute",1,"");
   GdrcodifContainer.addSingleLineEdit("Idxcod",37,"vIDXCOD","Idx Cod","","IdxCod","int",0,"px",4,4,"right",null,[],"Idxcod","IdxCod",false,0,false,false,"Attribute",1,"");
   this.setGrid(GdrcodifContainer);
   this.GdrclassifContainer = new gx.grid.grid(this, 7,"WbpLvl7",47,"Gdrclassif","Gdrclassif","GdrclassifContainer",this.CmpContext,this.IsMasterPage,"hcodclaproduto",[],false,1,true,true,0,true,false,false,"CollSdtClassifEst.SdtClassifEstItem",0,"px","Novo registro",true,false,false,null,null,false,"AV51SdtClassif",false,[1,1,1,1]);
   var GdrclassifContainer = this.GdrclassifContainer;
   GdrclassifContainer.addSingleLineEdit("GXV11C",48,"CTLIDX1","Idx","","Idx","int",0,"px",4,4,"right",null,[],"GXV11C","GXV11C",false,0,false,false,"Attribute",1,"");
   GdrclassifContainer.addCheckBox("GXV11D",49,"CTLSNREMOVE1","","","SnRemove","char","S","N",null,true,false,0,"px","GridColumnImage");
   GdrclassifContainer.addComboBox("Classificacaoestid",50,"vCLASSIFICACAOESTID","Classificação","ClassificacaoEstId","char","e182382_client",1,true,false,0,"px","");
   GdrclassifContainer.addSingleLineEdit("GXV11F",51,"CTLCLASSIFICACAOESTID","Classificação","","ClassificacaoEstId","char",0,"px",15,15,"left",null,[],"GXV11F","GXV11F",false,0,false,false,"Attribute",1,"");
   GdrclassifContainer.addComboBox("GXV11G",52,"CTLPRODUTOCLASSIFICACAOVALOR","Valor","ProdutoClassificacaoValor","char",null,1,true,false,0,"px","");
   GdrclassifContainer.addSingleLineEdit("GXV11H",53,"CTLCLASSIFICACAOESTUSUARIOALT","Usuário","","ClassificacaoEstUsuarioAlt","char",0,"px",12,12,"left",null,[],"GXV11H","GXV11H",true,0,false,false,"Attribute",1,"");
   GdrclassifContainer.addSingleLineEdit("GXV11I",54,"CTLCLASSIFICACAOESTDATAHORAALT","Última Alteração","","ClassificacaoEstDataHoraAlt","dtime",0,"px",16,16,"right",null,[],"GXV11I","GXV11I",true,5,false,false,"Attribute",1,"");
   GdrclassifContainer.addSingleLineEdit("Idxcla",55,"vIDXCLA","Idx Cla","","IdxCla","int",0,"px",4,4,"right",null,[],"Idxcla","IdxCla",false,0,false,false,"Attribute",1,"");
   this.setGrid(GdrclassifContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={fld:"TABLE4",grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Produtoid,isvalid:null,rgrid:[],fld:"vPRODUTOID",gxz:"ZV29ProdutoId",gxold:"OV29ProdutoId",gxvar:"AV29ProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29ProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV29ProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOID",gx.O.AV29ProdutoId,0)},c2v:function(){gx.O.AV29ProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[15]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTODESCRICAORESUMIDA",gxz:"ZV30ProdutoDescricaoResumida",gxold:"OV30ProdutoDescricaoResumida",gxvar:"AV30ProdutoDescricaoResumida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30ProdutoDescricaoResumida=Value},v2z:function(Value){gx.O.ZV30ProdutoDescricaoResumida=Value},v2c:function(){gx.fn.setControlValue("vPRODUTODESCRICAORESUMIDA",gx.O.AV30ProdutoDescricaoResumida,0)},c2v:function(){gx.O.AV30ProdutoDescricaoResumida=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTODESCRICAORESUMIDA")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TABLE7",grid:0};
   GXValidFnc[25]={fld:"TXTABACODIFI", format:0,grid:0};
   GXValidFnc[28]={fld:"DIVCOD1", format:2,grid:0};
   GXValidFnc[30]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:0,isacc:0,grid:29,gxgrid:this.GdrcodifContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLSNREMOVE",gxz:"ZV59GXV10U",gxold:"OV59GXV10U",gxvar:"GXV10U",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){gx.O.GXV10U=Value},v2z:function(Value){gx.O.ZV59GXV10U=Value},v2c:function(row){gx.fn.setGridCheckBoxValue("CTLSNREMOVE",row || gx.fn.currentGridRowImpl(29),gx.O.GXV10U,"S")},c2v:function(){gx.O.GXV10U=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLSNREMOVE",row || gx.fn.currentGridRowImpl(29))},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[31]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:0,grid:29,gxgrid:this.GdrcodifContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLIDX",gxz:"ZV60GXV10V",gxold:"OV60GXV10V",gxvar:"GXV10V",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV10V=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV60GXV10V=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLIDX",row || gx.fn.currentGridRowImpl(29),gx.O.GXV10V,0)},c2v:function(){gx.O.GXV10V=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLIDX",row || gx.fn.currentGridRowImpl(29),'.')},nac:gx.falseFn};
   GXValidFnc[32]={lvl:2,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:29,gxgrid:this.GdrcodifContainer,fnc:null,isvalid:null,rgrid:[],fld:"vCODIFICACAOESTID",gxz:"ZV48CodificacaoEstId",gxold:"OV48CodificacaoEstId",gxvar:"AV48CodificacaoEstId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",inputType:'text',v2v:function(Value){gx.O.AV48CodificacaoEstId=Value},v2z:function(Value){gx.O.ZV48CodificacaoEstId=Value},v2c:function(row){gx.fn.setGridComboBoxValue("vCODIFICACAOESTID",row || gx.fn.currentGridRowImpl(29),gx.O.AV48CodificacaoEstId)},c2v:function(){gx.O.AV48CodificacaoEstId=this.val()},val:function(row){return gx.fn.getGridControlValue("vCODIFICACAOESTID",row || gx.fn.currentGridRowImpl(29))},nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:29,gxgrid:this.GdrcodifContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLCODIFICACAOESTID",gxz:"ZV61GXV10X",gxold:"OV61GXV10X",gxvar:"GXV10X",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10X=Value},v2z:function(Value){gx.O.ZV61GXV10X=Value},v2c:function(row){gx.fn.setGridControlValue("CTLCODIFICACAOESTID",row || gx.fn.currentGridRowImpl(29),gx.O.GXV10X,0)},c2v:function(){gx.O.GXV10X=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCODIFICACAOESTID",row || gx.fn.currentGridRowImpl(29))},nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"char",len:20,dec:0,sign:false,ro:0,isacc:0,grid:29,gxgrid:this.GdrcodifContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPRODUTOCODIFICACAOVALOR",gxz:"ZV62GXV10Y",gxold:"OV62GXV10Y",gxvar:"GXV10Y",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10Y=Value},v2z:function(Value){gx.O.ZV62GXV10Y=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPRODUTOCODIFICACAOVALOR",row || gx.fn.currentGridRowImpl(29),gx.O.GXV10Y,0)},c2v:function(){gx.O.GXV10Y=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPRODUTOCODIFICACAOVALOR",row || gx.fn.currentGridRowImpl(29))},nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:29,gxgrid:this.GdrcodifContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLCODIFICACAOESTUSUARIOALT",gxz:"ZV63GXV10Z",gxold:"OV63GXV10Z",gxvar:"GXV10Z",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10Z=Value},v2z:function(Value){gx.O.ZV63GXV10Z=Value},v2c:function(row){gx.fn.setGridControlValue("CTLCODIFICACAOESTUSUARIOALT",row || gx.fn.currentGridRowImpl(29),gx.O.GXV10Z,0)},c2v:function(){gx.O.GXV10Z=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCODIFICACAOESTUSUARIOALT",row || gx.fn.currentGridRowImpl(29))},nac:gx.falseFn};
   GXValidFnc[36]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:0,isacc:0,grid:29,gxgrid:this.GdrcodifContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLCODIFICACAOESTDATAHORAALT",gxz:"ZV64GXV110",gxold:"OV64GXV110",gxvar:"GXV110",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV110=gx.fn.toDatetimeValue(Value,"Y4MD")},v2z:function(Value){gx.O.ZV64GXV110=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLCODIFICACAOESTDATAHORAALT",row || gx.fn.currentGridRowImpl(29),gx.O.GXV110,0)},c2v:function(){gx.O.GXV110=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CTLCODIFICACAOESTDATAHORAALT",row || gx.fn.currentGridRowImpl(29))},nac:gx.falseFn};
   GXValidFnc[37]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:0,grid:29,gxgrid:this.GdrcodifContainer,fnc:null,isvalid:null,rgrid:[],fld:"vIDXCOD",gxz:"ZV52IdxCod",gxold:"OV52IdxCod",gxvar:"AV52IdxCod",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV52IdxCod=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV52IdxCod=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vIDXCOD",row || gx.fn.currentGridRowImpl(29),gx.O.AV52IdxCod,0)},c2v:function(){gx.O.AV52IdxCod=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vIDXCOD",row || gx.fn.currentGridRowImpl(29),'.')},nac:gx.falseFn};
   GXValidFnc[38]={fld:"DIVCOD2", format:2,grid:0};
   GXValidFnc[43]={fld:"TXTABACLASSI", format:0,grid:0};
   GXValidFnc[46]={fld:"DIVCLAS1", format:2,grid:0};
   GXValidFnc[48]={lvl:7,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:0,grid:47,gxgrid:this.GdrclassifContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLIDX1",gxz:"ZV66GXV11C",gxold:"OV66GXV11C",gxvar:"GXV11C",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11C=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV66GXV11C=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLIDX1",row || gx.fn.currentGridRowImpl(47),gx.O.GXV11C,0)},c2v:function(){gx.O.GXV11C=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLIDX1",row || gx.fn.currentGridRowImpl(47),'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:7,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:47,gxgrid:this.GdrclassifContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLSNREMOVE1",gxz:"ZV67GXV11D",gxold:"OV67GXV11D",gxvar:"GXV11D",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){gx.O.GXV11D=Value},v2z:function(Value){gx.O.ZV67GXV11D=Value},v2c:function(row){gx.fn.setGridCheckBoxValue("CTLSNREMOVE1",row || gx.fn.currentGridRowImpl(47),gx.O.GXV11D,"S")},c2v:function(){gx.O.GXV11D=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLSNREMOVE1",row || gx.fn.currentGridRowImpl(47))},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[50]={lvl:7,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:47,gxgrid:this.GdrclassifContainer,fnc:this.Validv_Classificacaoestid,isvalid:null,rgrid:[],fld:"vCLASSIFICACAOESTID",gxz:"ZV49ClassificacaoEstId",gxold:"OV49ClassificacaoEstId",gxvar:"AV49ClassificacaoEstId",ucs:[],op:[52],ip:[52,50],nacdep:[],ctrltype:"dyncombo",inputType:'text',v2v:function(Value){gx.O.AV49ClassificacaoEstId=Value},v2z:function(Value){gx.O.ZV49ClassificacaoEstId=Value},v2c:function(row){gx.fn.setGridComboBoxValue("vCLASSIFICACAOESTID",row || gx.fn.currentGridRowImpl(47),gx.O.AV49ClassificacaoEstId)},c2v:function(){gx.O.AV49ClassificacaoEstId=this.val()},val:function(row){return gx.fn.getGridControlValue("vCLASSIFICACAOESTID",row || gx.fn.currentGridRowImpl(47))},nac:gx.falseFn};
   GXValidFnc[51]={lvl:7,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:47,gxgrid:this.GdrclassifContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLCLASSIFICACAOESTID",gxz:"ZV68GXV11F",gxold:"OV68GXV11F",gxvar:"GXV11F",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11F=Value},v2z:function(Value){gx.O.ZV68GXV11F=Value},v2c:function(row){gx.fn.setGridControlValue("CTLCLASSIFICACAOESTID",row || gx.fn.currentGridRowImpl(47),gx.O.GXV11F,0)},c2v:function(){gx.O.GXV11F=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCLASSIFICACAOESTID",row || gx.fn.currentGridRowImpl(47))},nac:gx.falseFn};
   GXValidFnc[52]={lvl:7,type:"char",len:20,dec:0,sign:false,ro:0,isacc:0,grid:47,gxgrid:this.GdrclassifContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPRODUTOCLASSIFICACAOVALOR",gxz:"ZV69GXV11G",gxold:"OV69GXV11G",gxvar:"GXV11G",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",inputType:'text',v2v:function(Value){gx.O.GXV11G=Value},v2z:function(Value){gx.O.ZV69GXV11G=Value},v2c:function(row){gx.fn.setGridComboBoxValue("CTLPRODUTOCLASSIFICACAOVALOR",row || gx.fn.currentGridRowImpl(47),gx.O.GXV11G)},c2v:function(){gx.O.GXV11G=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPRODUTOCLASSIFICACAOVALOR",row || gx.fn.currentGridRowImpl(47))},nac:gx.falseFn};
   GXValidFnc[53]={lvl:7,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:47,gxgrid:this.GdrclassifContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLCLASSIFICACAOESTUSUARIOALT",gxz:"ZV70GXV11H",gxold:"OV70GXV11H",gxvar:"GXV11H",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11H=Value},v2z:function(Value){gx.O.ZV70GXV11H=Value},v2c:function(row){gx.fn.setGridControlValue("CTLCLASSIFICACAOESTUSUARIOALT",row || gx.fn.currentGridRowImpl(47),gx.O.GXV11H,0)},c2v:function(){gx.O.GXV11H=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCLASSIFICACAOESTUSUARIOALT",row || gx.fn.currentGridRowImpl(47))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:7,type:"dtime",len:10,dec:5,sign:false,ro:0,isacc:0,grid:47,gxgrid:this.GdrclassifContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLCLASSIFICACAOESTDATAHORAALT",gxz:"ZV71GXV11I",gxold:"OV71GXV11I",gxvar:"GXV11I",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11I=gx.fn.toDatetimeValue(Value,"Y4MD")},v2z:function(Value){gx.O.ZV71GXV11I=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLCLASSIFICACAOESTDATAHORAALT",row || gx.fn.currentGridRowImpl(47),gx.O.GXV11I,0)},c2v:function(){gx.O.GXV11I=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CTLCLASSIFICACAOESTDATAHORAALT",row || gx.fn.currentGridRowImpl(47))},nac:gx.falseFn};
   GXValidFnc[55]={lvl:7,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:0,grid:47,gxgrid:this.GdrclassifContainer,fnc:null,isvalid:null,rgrid:[],fld:"vIDXCLA",gxz:"ZV53IdxCla",gxold:"OV53IdxCla",gxvar:"AV53IdxCla",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV53IdxCla=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV53IdxCla=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vIDXCLA",row || gx.fn.currentGridRowImpl(47),gx.O.AV53IdxCla,0)},c2v:function(){gx.O.AV53IdxCla=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vIDXCLA",row || gx.fn.currentGridRowImpl(47),'.')},nac:gx.falseFn};
   GXValidFnc[56]={fld:"DIVCLAS2", format:2,grid:0};
   GXValidFnc[64]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Classificacaoestempresaid,isvalid:null,rgrid:[],fld:"vCLASSIFICACAOESTEMPRESAID",gxz:"ZV35ClassificacaoEstEmpresaId",gxold:"OV35ClassificacaoEstEmpresaId",gxvar:"AV35ClassificacaoEstEmpresaId",ucs:[],op:[50],ip:[50,64],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35ClassificacaoEstEmpresaId=Value},v2z:function(Value){gx.O.ZV35ClassificacaoEstEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCLASSIFICACAOESTEMPRESAID",gx.O.AV35ClassificacaoEstEmpresaId,0)},c2v:function(){gx.O.AV35ClassificacaoEstEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCLASSIFICACAOESTEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[65]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Codificacaoestempresaid,isvalid:null,rgrid:[],fld:"vCODIFICACAOESTEMPRESAID",gxz:"ZV36CodificacaoEstEmpresaId",gxold:"OV36CodificacaoEstEmpresaId",gxvar:"AV36CodificacaoEstEmpresaId",ucs:[],op:[32],ip:[32,66,65],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36CodificacaoEstEmpresaId=Value},v2z:function(Value){gx.O.ZV36CodificacaoEstEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCODIFICACAOESTEMPRESAID",gx.O.AV36CodificacaoEstEmpresaId,0)},c2v:function(){gx.O.AV36CodificacaoEstEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCODIFICACAOESTEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[66]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Codifiprincipal,isvalid:null,rgrid:[],fld:"vCODIFIPRINCIPAL",gxz:"ZV37CodifiPrincipal",gxold:"OV37CodifiPrincipal",gxvar:"AV37CodifiPrincipal",ucs:[],op:[32],ip:[32,66,65],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37CodifiPrincipal=Value},v2z:function(Value){gx.O.ZV37CodifiPrincipal=Value},v2c:function(){gx.fn.setControlValue("vCODIFIPRINCIPAL",gx.O.AV37CodifiPrincipal,0)},c2v:function(){gx.O.AV37CodifiPrincipal=this.val()},val:function(){return gx.fn.getControlValue("vCODIFIPRINCIPAL")},nac:gx.falseFn};
   this.AV29ProdutoId = 0 ;
   this.ZV29ProdutoId = 0 ;
   this.OV29ProdutoId = 0 ;
   this.AV30ProdutoDescricaoResumida = "" ;
   this.ZV30ProdutoDescricaoResumida = "" ;
   this.OV30ProdutoDescricaoResumida = "" ;
   this.ZV59GXV10U = "" ;
   this.OV59GXV10U = "" ;
   this.ZV60GXV10V = 0 ;
   this.OV60GXV10V = 0 ;
   this.ZV48CodificacaoEstId = "" ;
   this.OV48CodificacaoEstId = "" ;
   this.ZV61GXV10X = "" ;
   this.OV61GXV10X = "" ;
   this.ZV62GXV10Y = "" ;
   this.OV62GXV10Y = "" ;
   this.ZV63GXV10Z = "" ;
   this.OV63GXV10Z = "" ;
   this.ZV64GXV110 = gx.date.nullDate() ;
   this.OV64GXV110 = gx.date.nullDate() ;
   this.ZV52IdxCod = 0 ;
   this.OV52IdxCod = 0 ;
   this.ZV66GXV11C = 0 ;
   this.OV66GXV11C = 0 ;
   this.ZV67GXV11D = "" ;
   this.OV67GXV11D = "" ;
   this.ZV49ClassificacaoEstId = "" ;
   this.OV49ClassificacaoEstId = "" ;
   this.ZV68GXV11F = "" ;
   this.OV68GXV11F = "" ;
   this.ZV69GXV11G = "" ;
   this.OV69GXV11G = "" ;
   this.ZV70GXV11H = "" ;
   this.OV70GXV11H = "" ;
   this.ZV71GXV11I = gx.date.nullDate() ;
   this.OV71GXV11I = gx.date.nullDate() ;
   this.ZV53IdxCla = 0 ;
   this.OV53IdxCla = 0 ;
   this.AV35ClassificacaoEstEmpresaId = "" ;
   this.ZV35ClassificacaoEstEmpresaId = "" ;
   this.OV35ClassificacaoEstEmpresaId = "" ;
   this.AV36CodificacaoEstEmpresaId = "" ;
   this.ZV36CodificacaoEstEmpresaId = "" ;
   this.OV36CodificacaoEstEmpresaId = "" ;
   this.AV37CodifiPrincipal = "" ;
   this.ZV37CodifiPrincipal = "" ;
   this.OV37CodifiPrincipal = "" ;
   this.AV29ProdutoId = 0 ;
   this.AV30ProdutoDescricaoResumida = "" ;
   this.AV35ClassificacaoEstEmpresaId = "" ;
   this.AV36CodificacaoEstEmpresaId = "" ;
   this.AV37CodifiPrincipal = "" ;
   this.AV28ProdutoEmpresaId = "" ;
   this.AV54SnConsiste = "" ;
   this.GXV10U = "" ;
   this.GXV10V = 0 ;
   this.AV48CodificacaoEstId = "" ;
   this.GXV10X = "" ;
   this.GXV10Y = "" ;
   this.GXV10Z = "" ;
   this.GXV110 = gx.date.nullDate() ;
   this.AV52IdxCod = 0 ;
   this.GXV11C = 0 ;
   this.GXV11D = "" ;
   this.AV49ClassificacaoEstId = "" ;
   this.GXV11F = "" ;
   this.GXV11G = "" ;
   this.GXV11H = "" ;
   this.GXV11I = gx.date.nullDate() ;
   this.AV53IdxCla = 0 ;
   this.A2929ClassificacaoEstEmpresaId = "" ;
   this.A2965ProdutoId = 0 ;
   this.A2964ProdutoEmpresaId = "" ;
   this.A2930ClassificacaoEstId = "" ;
   this.A3401ProdutoClassificacaoValor = "" ;
   this.A3959ProdutoClassificacaoUsuarioAlt = "" ;
   this.A3960ProdutoClassificacaoDtHrAlt = gx.date.nullDate() ;
   this.A2936CodificacaoEstEmpresaId = "" ;
   this.A2937CodificacaoEstId = "" ;
   this.A3961ProdutoCodificacaoUsuarioAlt = "" ;
   this.A3402ProdutoCodificacaoValor = "" ;
   this.A3962ProdutoCodificacaoDtHrAlt = gx.date.nullDate() ;
   this.A2923ClassificacaoEstSnObrigatorio = "" ;
   this.A2922ClassificacaoEstDescricao = "" ;
   this.A2933CodificacaoEstSnObrigatorio = "" ;
   this.A2932CodificacaoEstDescricao = "" ;
   this.AV33SnAbaClass = "" ;
   this.AV34SnAbaCodif = "" ;
   this.Gx_mode = "" ;
   this.AV50SdtCodif = [ ] ;
   this.Events = {"e112382_client": ["ENTER", true] ,"e122382_client": ["'FECHAR'", true] ,"e152382_client": ["VCODIFICACAOESTID.CLICK", true] ,"e182382_client": ["VCLASSIFICACAOESTID.CLICK", true] ,"e192382_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GDRCODIF_nFirstRecordOnPage'},{av:'GDRCODIF_nEOF'},{av:'subGdrcodif_Rows'},{av:'AV50SdtCodif',fld:'vSDTCODIF',grid:29},{av:'AV36CodificacaoEstEmpresaId',fld:'vCODIFICACAOESTEMPRESAID'},{av:'AV37CodifiPrincipal',fld:'vCODIFIPRINCIPAL'},{av:'GDRCLASSIF_nFirstRecordOnPage'},{av:'GDRCLASSIF_nEOF'},{av:'subGdrclassif_Rows'},{av:'AV51SdtClassif',fld:'vSDTCLASSIF',grid:47},{av:'AV35ClassificacaoEstEmpresaId',fld:'vCLASSIFICACAOESTEMPRESAID'},{av:'AV33SnAbaClass',fld:'vSNABACLASS'},{av:'AV34SnAbaCodif',fld:'vSNABACODIF'},{av:'Gx_mode',fld:'vMODE',hsh:true}],[{av:'gx.fn.getCtrlProperty("GDRCLASSIF","Visible")',ctrl:'GDRCLASSIF',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TXTABACLASSI","Visible")',ctrl:'TXTABACLASSI',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TXTABACODIFI","Visible")',ctrl:'TXTABACODIFI',prop:'Visible'},{av:'gx.fn.getCtrlProperty("GDRCODIF","Visible")',ctrl:'GDRCODIF',prop:'Visible'},{ctrl:'vCODIFICACAOESTID'},{ctrl:'CTLCODIFICACAOESTID',prop:'Enabled'},{ctrl:'CTLPRODUTOCODIFICACAOVALOR',prop:'Enabled'},{ctrl:'CTLCODIFICACAOESTUSUARIOALT',prop:'Enabled'},{ctrl:'CTLCODIFICACAOESTDATAHORAALT',prop:'Enabled'},{ctrl:'CTLSNREMOVE',prop:'Visible'},{ctrl:'vCLASSIFICACAOESTID'},{ctrl:'CTLSNREMOVE1',prop:'Visible'},{ctrl:'CTLCLASSIFICACAOESTID',prop:'Enabled'},{ctrl:'CTLPRODUTOCLASSIFICACAOVALOR',prop:'Enabled'},{ctrl:'CTLCLASSIFICACAOESTDATAHORAALT',prop:'Enabled'},{ctrl:'CTLCLASSIFICACAOESTUSUARIOALT',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'AV39SnErro',fld:'vSNERRO'},{av:'AV50SdtCodif',fld:'vSDTCODIF',grid:29},{av:'AV28ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID',hsh:true},{av:'AV29ProdutoId',fld:'vPRODUTOID',hsh:true},{av:'AV36CodificacaoEstEmpresaId',fld:'vCODIFICACAOESTEMPRESAID'},{av:'AV51SdtClassif',fld:'vSDTCLASSIF',grid:47},{av:'AV35ClassificacaoEstEmpresaId',fld:'vCLASSIFICACAOESTEMPRESAID'},{av:'Gx_mode',fld:'vMODE',hsh:true},{av:'AV34SnAbaCodif',fld:'vSNABACODIF'},{av:'A2937CodificacaoEstId',fld:'CODIFICACAOESTID'},{av:'AV37CodifiPrincipal',fld:'vCODIFIPRINCIPAL'},{av:'A2933CodificacaoEstSnObrigatorio',fld:'CODIFICACAOESTSNOBRIGATORIO'},{av:'A2932CodificacaoEstDescricao',fld:'CODIFICACAOESTDESCRICAO'},{av:'AV33SnAbaClass',fld:'vSNABACLASS'},{av:'A2930ClassificacaoEstId',fld:'CLASSIFICACAOESTID'},{av:'AV42ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'A2923ClassificacaoEstSnObrigatorio',fld:'CLASSIFICACAOESTSNOBRIGATORIO'},{av:'A2922ClassificacaoEstDescricao',fld:'CLASSIFICACAOESTDESCRICAO'}],[{av:'AV72GXV3',fld:'vGXV3'},{av:'AV46SdtCodifItem',fld:'vSDTCODIFITEM'},{av:'AV36CodificacaoEstEmpresaId',fld:'vCODIFICACAOESTEMPRESAID'},{av:'AV29ProdutoId',fld:'vPRODUTOID',hsh:true},{av:'AV28ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID',hsh:true},{av:'AV73GXV4',fld:'vGXV4'},{av:'AV45SdtClassifItem',fld:'vSDTCLASSIFITEM'},{av:'AV35ClassificacaoEstEmpresaId',fld:'vCLASSIFICACAOESTEMPRESAID'},{av:'AV74GXV5',fld:'vGXV5'},{av:'Gx_mode',fld:'vMODE',hsh:true},{av:'AV75GXV6',fld:'vGXV6'},{av:'AV39SnErro',fld:'vSNERRO'},{av:'AV40CodificacaoEstIdConsiste',fld:'vCODIFICACAOESTIDCONSISTE'},{av:'AV41CodificacaoEstDescricaoConsiste',fld:'vCODIFICACAOESTDESCRICAOCONSISTE'},{av:'AV77GXV7',fld:'vGXV7'},{av:'AV38SnObrigatorio',fld:'vSNOBRIGATORIO'},{av:'AV78GXV8',fld:'vGXV8'},{av:'AV43ClassificacaoEstIdConsiste',fld:'vCLASSIFICACAOESTIDCONSISTE'},{av:'AV44ClassificacaoEstDescricaoConsiste',fld:'vCLASSIFICACAOESTDESCRICAOCONSISTE'},{av:'AV80GXV9',fld:'vGXV9'},{av:'AV81GXV10',fld:'vGXV10'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["GDRCODIF.LOAD"] = [[{av:'AV50SdtCodif',fld:'vSDTCODIF',grid:29},{av:'Gx_mode',fld:'vMODE',hsh:true}],[{av:'AV52IdxCod',fld:'vIDXCOD'},{av:'AV48CodificacaoEstId',fld:'vCODIFICACAOESTID'},{ctrl:'CTLSNREMOVE',prop:'Enabled'},{ctrl:'CTLCODIFICACAOESTID',prop:'Enabled'},{ctrl:'CTLPRODUTOCODIFICACAOVALOR',prop:'Enabled'}]];
   this.EvtParms["GDRCLASSIF.LOAD"] = [[{av:'AV51SdtClassif',fld:'vSDTCLASSIF',grid:47},{av:'Gx_mode',fld:'vMODE',hsh:true}],[{av:'AV53IdxCla',fld:'vIDXCLA'},{av:'AV49ClassificacaoEstId',fld:'vCLASSIFICACAOESTID'},{ctrl:'CTLSNREMOVE1',prop:'Enabled'},{ctrl:'CTLCLASSIFICACAOESTID',prop:'Enabled'},{ctrl:'CTLPRODUTOCLASSIFICACAOVALOR',prop:'Enabled'}]];
   this.EvtParms["VCODIFICACAOESTID.CLICK"] = [[{av:'AV48CodificacaoEstId',fld:'vCODIFICACAOESTID'},{av:'AV50SdtCodif',fld:'vSDTCODIF',grid:29},{av:'GDRCODIF_nFirstRecordOnPage'},{av:'GDRCODIF_nEOF'},{av:'subGdrcodif_Rows'},{av:'AV33SnAbaClass',fld:'vSNABACLASS'},{av:'AV34SnAbaCodif',fld:'vSNABACODIF'},{av:'Gx_mode',fld:'vMODE',hsh:true},{av:'AV36CodificacaoEstEmpresaId',fld:'vCODIFICACAOESTEMPRESAID'},{av:'AV37CodifiPrincipal',fld:'vCODIFIPRINCIPAL'}],[{av:'AV50SdtCodif',fld:'vSDTCODIF',grid:29}]];
   this.EvtParms["VCLASSIFICACAOESTID.CLICK"] = [[{av:'AV49ClassificacaoEstId',fld:'vCLASSIFICACAOESTID'},{av:'AV51SdtClassif',fld:'vSDTCLASSIF',grid:47},{av:'GDRCLASSIF_nFirstRecordOnPage'},{av:'GDRCLASSIF_nEOF'},{av:'subGdrclassif_Rows'},{av:'AV33SnAbaClass',fld:'vSNABACLASS'},{av:'AV34SnAbaCodif',fld:'vSNABACODIF'},{av:'Gx_mode',fld:'vMODE',hsh:true},{av:'AV35ClassificacaoEstEmpresaId',fld:'vCLASSIFICACAOESTEMPRESAID'}],[{av:'AV51SdtClassif',fld:'vSDTCLASSIF',grid:47}]];
   this.EvtParms["GDRCODIF_FIRSTPAGE"] = [[{av:'GDRCODIF_nFirstRecordOnPage'},{av:'GDRCODIF_nEOF'},{av:'subGdrcodif_Rows'},{av:'AV36CodificacaoEstEmpresaId',fld:'vCODIFICACAOESTEMPRESAID'},{av:'AV37CodifiPrincipal',fld:'vCODIFIPRINCIPAL'},{av:'AV33SnAbaClass',fld:'vSNABACLASS'},{av:'AV34SnAbaCodif',fld:'vSNABACODIF'},{av:'Gx_mode',fld:'vMODE',hsh:true},{av:'AV50SdtCodif',fld:'vSDTCODIF',grid:29}],[{av:'gx.fn.getCtrlProperty("GDRCLASSIF","Visible")',ctrl:'GDRCLASSIF',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TXTABACLASSI","Visible")',ctrl:'TXTABACLASSI',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TXTABACODIFI","Visible")',ctrl:'TXTABACODIFI',prop:'Visible'},{av:'gx.fn.getCtrlProperty("GDRCODIF","Visible")',ctrl:'GDRCODIF',prop:'Visible'},{ctrl:'vCODIFICACAOESTID'},{ctrl:'CTLCODIFICACAOESTID',prop:'Enabled'},{ctrl:'CTLPRODUTOCODIFICACAOVALOR',prop:'Enabled'},{ctrl:'CTLCODIFICACAOESTUSUARIOALT',prop:'Enabled'},{ctrl:'CTLCODIFICACAOESTDATAHORAALT',prop:'Enabled'},{ctrl:'CTLSNREMOVE',prop:'Visible'},{ctrl:'vCLASSIFICACAOESTID'},{ctrl:'CTLSNREMOVE1',prop:'Visible'},{ctrl:'CTLCLASSIFICACAOESTID',prop:'Enabled'},{ctrl:'CTLPRODUTOCLASSIFICACAOVALOR',prop:'Enabled'},{ctrl:'CTLCLASSIFICACAOESTDATAHORAALT',prop:'Enabled'},{ctrl:'CTLCLASSIFICACAOESTUSUARIOALT',prop:'Enabled'}]];
   this.EvtParms["GDRCODIF_PREVPAGE"] = [[{av:'GDRCODIF_nFirstRecordOnPage'},{av:'GDRCODIF_nEOF'},{av:'subGdrcodif_Rows'},{av:'AV36CodificacaoEstEmpresaId',fld:'vCODIFICACAOESTEMPRESAID'},{av:'AV37CodifiPrincipal',fld:'vCODIFIPRINCIPAL'},{av:'AV33SnAbaClass',fld:'vSNABACLASS'},{av:'AV34SnAbaCodif',fld:'vSNABACODIF'},{av:'Gx_mode',fld:'vMODE',hsh:true},{av:'AV50SdtCodif',fld:'vSDTCODIF',grid:29}],[{av:'gx.fn.getCtrlProperty("GDRCLASSIF","Visible")',ctrl:'GDRCLASSIF',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TXTABACLASSI","Visible")',ctrl:'TXTABACLASSI',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TXTABACODIFI","Visible")',ctrl:'TXTABACODIFI',prop:'Visible'},{av:'gx.fn.getCtrlProperty("GDRCODIF","Visible")',ctrl:'GDRCODIF',prop:'Visible'},{ctrl:'vCODIFICACAOESTID'},{ctrl:'CTLCODIFICACAOESTID',prop:'Enabled'},{ctrl:'CTLPRODUTOCODIFICACAOVALOR',prop:'Enabled'},{ctrl:'CTLCODIFICACAOESTUSUARIOALT',prop:'Enabled'},{ctrl:'CTLCODIFICACAOESTDATAHORAALT',prop:'Enabled'},{ctrl:'CTLSNREMOVE',prop:'Visible'},{ctrl:'vCLASSIFICACAOESTID'},{ctrl:'CTLSNREMOVE1',prop:'Visible'},{ctrl:'CTLCLASSIFICACAOESTID',prop:'Enabled'},{ctrl:'CTLPRODUTOCLASSIFICACAOVALOR',prop:'Enabled'},{ctrl:'CTLCLASSIFICACAOESTDATAHORAALT',prop:'Enabled'},{ctrl:'CTLCLASSIFICACAOESTUSUARIOALT',prop:'Enabled'}]];
   this.EvtParms["GDRCODIF_NEXTPAGE"] = [[{av:'GDRCODIF_nFirstRecordOnPage'},{av:'GDRCODIF_nEOF'},{av:'subGdrcodif_Rows'},{av:'AV36CodificacaoEstEmpresaId',fld:'vCODIFICACAOESTEMPRESAID'},{av:'AV37CodifiPrincipal',fld:'vCODIFIPRINCIPAL'},{av:'AV33SnAbaClass',fld:'vSNABACLASS'},{av:'AV34SnAbaCodif',fld:'vSNABACODIF'},{av:'Gx_mode',fld:'vMODE',hsh:true},{av:'AV50SdtCodif',fld:'vSDTCODIF',grid:29}],[{av:'gx.fn.getCtrlProperty("GDRCLASSIF","Visible")',ctrl:'GDRCLASSIF',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TXTABACLASSI","Visible")',ctrl:'TXTABACLASSI',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TXTABACODIFI","Visible")',ctrl:'TXTABACODIFI',prop:'Visible'},{av:'gx.fn.getCtrlProperty("GDRCODIF","Visible")',ctrl:'GDRCODIF',prop:'Visible'},{ctrl:'vCODIFICACAOESTID'},{ctrl:'CTLCODIFICACAOESTID',prop:'Enabled'},{ctrl:'CTLPRODUTOCODIFICACAOVALOR',prop:'Enabled'},{ctrl:'CTLCODIFICACAOESTUSUARIOALT',prop:'Enabled'},{ctrl:'CTLCODIFICACAOESTDATAHORAALT',prop:'Enabled'},{ctrl:'CTLSNREMOVE',prop:'Visible'},{ctrl:'vCLASSIFICACAOESTID'},{ctrl:'CTLSNREMOVE1',prop:'Visible'},{ctrl:'CTLCLASSIFICACAOESTID',prop:'Enabled'},{ctrl:'CTLPRODUTOCLASSIFICACAOVALOR',prop:'Enabled'},{ctrl:'CTLCLASSIFICACAOESTDATAHORAALT',prop:'Enabled'},{ctrl:'CTLCLASSIFICACAOESTUSUARIOALT',prop:'Enabled'}]];
   this.EvtParms["GDRCODIF_LASTPAGE"] = [[{av:'GDRCODIF_nFirstRecordOnPage'},{av:'GDRCODIF_nEOF'},{av:'subGdrcodif_Rows'},{av:'AV36CodificacaoEstEmpresaId',fld:'vCODIFICACAOESTEMPRESAID'},{av:'AV37CodifiPrincipal',fld:'vCODIFIPRINCIPAL'},{av:'AV33SnAbaClass',fld:'vSNABACLASS'},{av:'AV34SnAbaCodif',fld:'vSNABACODIF'},{av:'Gx_mode',fld:'vMODE',hsh:true},{av:'AV50SdtCodif',fld:'vSDTCODIF',grid:29}],[{av:'gx.fn.getCtrlProperty("GDRCLASSIF","Visible")',ctrl:'GDRCLASSIF',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TXTABACLASSI","Visible")',ctrl:'TXTABACLASSI',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TXTABACODIFI","Visible")',ctrl:'TXTABACODIFI',prop:'Visible'},{av:'gx.fn.getCtrlProperty("GDRCODIF","Visible")',ctrl:'GDRCODIF',prop:'Visible'},{ctrl:'vCODIFICACAOESTID'},{ctrl:'CTLCODIFICACAOESTID',prop:'Enabled'},{ctrl:'CTLPRODUTOCODIFICACAOVALOR',prop:'Enabled'},{ctrl:'CTLCODIFICACAOESTUSUARIOALT',prop:'Enabled'},{ctrl:'CTLCODIFICACAOESTDATAHORAALT',prop:'Enabled'},{ctrl:'CTLSNREMOVE',prop:'Visible'},{ctrl:'vCLASSIFICACAOESTID'},{ctrl:'CTLSNREMOVE1',prop:'Visible'},{ctrl:'CTLCLASSIFICACAOESTID',prop:'Enabled'},{ctrl:'CTLPRODUTOCLASSIFICACAOVALOR',prop:'Enabled'},{ctrl:'CTLCLASSIFICACAOESTDATAHORAALT',prop:'Enabled'},{ctrl:'CTLCLASSIFICACAOESTUSUARIOALT',prop:'Enabled'}]];
   this.EvtParms["GDRCLASSIF_FIRSTPAGE"] = [[{av:'GDRCLASSIF_nFirstRecordOnPage'},{av:'GDRCLASSIF_nEOF'},{av:'subGdrclassif_Rows'},{av:'AV35ClassificacaoEstEmpresaId',fld:'vCLASSIFICACAOESTEMPRESAID'},{av:'AV33SnAbaClass',fld:'vSNABACLASS'},{av:'AV34SnAbaCodif',fld:'vSNABACODIF'},{av:'Gx_mode',fld:'vMODE',hsh:true},{av:'AV51SdtClassif',fld:'vSDTCLASSIF',grid:47}],[{av:'gx.fn.getCtrlProperty("GDRCLASSIF","Visible")',ctrl:'GDRCLASSIF',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TXTABACLASSI","Visible")',ctrl:'TXTABACLASSI',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TXTABACODIFI","Visible")',ctrl:'TXTABACODIFI',prop:'Visible'},{av:'gx.fn.getCtrlProperty("GDRCODIF","Visible")',ctrl:'GDRCODIF',prop:'Visible'},{ctrl:'vCODIFICACAOESTID'},{ctrl:'CTLCODIFICACAOESTID',prop:'Enabled'},{ctrl:'CTLPRODUTOCODIFICACAOVALOR',prop:'Enabled'},{ctrl:'CTLCODIFICACAOESTUSUARIOALT',prop:'Enabled'},{ctrl:'CTLCODIFICACAOESTDATAHORAALT',prop:'Enabled'},{ctrl:'CTLSNREMOVE',prop:'Visible'},{ctrl:'vCLASSIFICACAOESTID'},{ctrl:'CTLSNREMOVE1',prop:'Visible'},{ctrl:'CTLCLASSIFICACAOESTID',prop:'Enabled'},{ctrl:'CTLPRODUTOCLASSIFICACAOVALOR',prop:'Enabled'},{ctrl:'CTLCLASSIFICACAOESTDATAHORAALT',prop:'Enabled'},{ctrl:'CTLCLASSIFICACAOESTUSUARIOALT',prop:'Enabled'}]];
   this.EvtParms["GDRCLASSIF_PREVPAGE"] = [[{av:'GDRCLASSIF_nFirstRecordOnPage'},{av:'GDRCLASSIF_nEOF'},{av:'subGdrclassif_Rows'},{av:'AV35ClassificacaoEstEmpresaId',fld:'vCLASSIFICACAOESTEMPRESAID'},{av:'AV33SnAbaClass',fld:'vSNABACLASS'},{av:'AV34SnAbaCodif',fld:'vSNABACODIF'},{av:'Gx_mode',fld:'vMODE',hsh:true},{av:'AV51SdtClassif',fld:'vSDTCLASSIF',grid:47}],[{av:'gx.fn.getCtrlProperty("GDRCLASSIF","Visible")',ctrl:'GDRCLASSIF',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TXTABACLASSI","Visible")',ctrl:'TXTABACLASSI',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TXTABACODIFI","Visible")',ctrl:'TXTABACODIFI',prop:'Visible'},{av:'gx.fn.getCtrlProperty("GDRCODIF","Visible")',ctrl:'GDRCODIF',prop:'Visible'},{ctrl:'vCODIFICACAOESTID'},{ctrl:'CTLCODIFICACAOESTID',prop:'Enabled'},{ctrl:'CTLPRODUTOCODIFICACAOVALOR',prop:'Enabled'},{ctrl:'CTLCODIFICACAOESTUSUARIOALT',prop:'Enabled'},{ctrl:'CTLCODIFICACAOESTDATAHORAALT',prop:'Enabled'},{ctrl:'CTLSNREMOVE',prop:'Visible'},{ctrl:'vCLASSIFICACAOESTID'},{ctrl:'CTLSNREMOVE1',prop:'Visible'},{ctrl:'CTLCLASSIFICACAOESTID',prop:'Enabled'},{ctrl:'CTLPRODUTOCLASSIFICACAOVALOR',prop:'Enabled'},{ctrl:'CTLCLASSIFICACAOESTDATAHORAALT',prop:'Enabled'},{ctrl:'CTLCLASSIFICACAOESTUSUARIOALT',prop:'Enabled'}]];
   this.EvtParms["GDRCLASSIF_NEXTPAGE"] = [[{av:'GDRCLASSIF_nFirstRecordOnPage'},{av:'GDRCLASSIF_nEOF'},{av:'subGdrclassif_Rows'},{av:'AV35ClassificacaoEstEmpresaId',fld:'vCLASSIFICACAOESTEMPRESAID'},{av:'AV33SnAbaClass',fld:'vSNABACLASS'},{av:'AV34SnAbaCodif',fld:'vSNABACODIF'},{av:'Gx_mode',fld:'vMODE',hsh:true},{av:'AV51SdtClassif',fld:'vSDTCLASSIF',grid:47}],[{av:'gx.fn.getCtrlProperty("GDRCLASSIF","Visible")',ctrl:'GDRCLASSIF',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TXTABACLASSI","Visible")',ctrl:'TXTABACLASSI',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TXTABACODIFI","Visible")',ctrl:'TXTABACODIFI',prop:'Visible'},{av:'gx.fn.getCtrlProperty("GDRCODIF","Visible")',ctrl:'GDRCODIF',prop:'Visible'},{ctrl:'vCODIFICACAOESTID'},{ctrl:'CTLCODIFICACAOESTID',prop:'Enabled'},{ctrl:'CTLPRODUTOCODIFICACAOVALOR',prop:'Enabled'},{ctrl:'CTLCODIFICACAOESTUSUARIOALT',prop:'Enabled'},{ctrl:'CTLCODIFICACAOESTDATAHORAALT',prop:'Enabled'},{ctrl:'CTLSNREMOVE',prop:'Visible'},{ctrl:'vCLASSIFICACAOESTID'},{ctrl:'CTLSNREMOVE1',prop:'Visible'},{ctrl:'CTLCLASSIFICACAOESTID',prop:'Enabled'},{ctrl:'CTLPRODUTOCLASSIFICACAOVALOR',prop:'Enabled'},{ctrl:'CTLCLASSIFICACAOESTDATAHORAALT',prop:'Enabled'},{ctrl:'CTLCLASSIFICACAOESTUSUARIOALT',prop:'Enabled'}]];
   this.EvtParms["GDRCLASSIF_LASTPAGE"] = [[{av:'GDRCLASSIF_nFirstRecordOnPage'},{av:'GDRCLASSIF_nEOF'},{av:'subGdrclassif_Rows'},{av:'AV35ClassificacaoEstEmpresaId',fld:'vCLASSIFICACAOESTEMPRESAID'},{av:'AV33SnAbaClass',fld:'vSNABACLASS'},{av:'AV34SnAbaCodif',fld:'vSNABACODIF'},{av:'Gx_mode',fld:'vMODE',hsh:true},{av:'AV51SdtClassif',fld:'vSDTCLASSIF',grid:47}],[{av:'gx.fn.getCtrlProperty("GDRCLASSIF","Visible")',ctrl:'GDRCLASSIF',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TXTABACLASSI","Visible")',ctrl:'TXTABACLASSI',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TXTABACODIFI","Visible")',ctrl:'TXTABACODIFI',prop:'Visible'},{av:'gx.fn.getCtrlProperty("GDRCODIF","Visible")',ctrl:'GDRCODIF',prop:'Visible'},{ctrl:'vCODIFICACAOESTID'},{ctrl:'CTLCODIFICACAOESTID',prop:'Enabled'},{ctrl:'CTLPRODUTOCODIFICACAOVALOR',prop:'Enabled'},{ctrl:'CTLCODIFICACAOESTUSUARIOALT',prop:'Enabled'},{ctrl:'CTLCODIFICACAOESTDATAHORAALT',prop:'Enabled'},{ctrl:'CTLSNREMOVE',prop:'Visible'},{ctrl:'vCLASSIFICACAOESTID'},{ctrl:'CTLSNREMOVE1',prop:'Visible'},{ctrl:'CTLCLASSIFICACAOESTID',prop:'Enabled'},{ctrl:'CTLPRODUTOCLASSIFICACAOVALOR',prop:'Enabled'},{ctrl:'CTLCLASSIFICACAOESTDATAHORAALT',prop:'Enabled'},{ctrl:'CTLCLASSIFICACAOESTUSUARIOALT',prop:'Enabled'}]];
   this.EnterCtrl = ["BTNCONFIRMAR"];
   this.setVCMap("AV33SnAbaClass", "vSNABACLASS", 0, "char");
   this.setVCMap("AV34SnAbaCodif", "vSNABACODIF", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("AV50SdtCodif", "vSDTCODIF", 0, "CollSdtCodificEst.SdtCodificEstItem");
   this.setVCMap("AV28ProdutoEmpresaId", "vPRODUTOEMPRESAID", 0, "char");
   this.setVCMap("AV54SnConsiste", "vSNCONSISTE", 0, "char");
   this.setVCMap("AV33SnAbaClass", "vSNABACLASS", 0, "char");
   this.setVCMap("AV34SnAbaCodif", "vSNABACODIF", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("AV50SdtCodif", "vSDTCODIF", 0, "CollSdtCodificEst.SdtCodificEstItem");
   GdrcodifContainer.addRefreshingVar({rfrVar:"AV33SnAbaClass"});
   GdrcodifContainer.addRefreshingVar({rfrVar:"AV34SnAbaCodif"});
   GdrcodifContainer.addRefreshingVar({rfrVar:"Gx_mode"});
   GdrcodifContainer.addRefreshingVar({rfrVar:"AV50SdtCodif"});
   GdrclassifContainer.addRefreshingVar({rfrVar:"AV33SnAbaClass"});
   GdrclassifContainer.addRefreshingVar({rfrVar:"AV34SnAbaCodif"});
   GdrclassifContainer.addRefreshingVar({rfrVar:"Gx_mode"});
   GdrclassifContainer.addRefreshingVar({rfrVar:"AV51SdtClassif"});
   this.addGridBCProperty("Sdtcodif", ["SnRemove"], this.GXValidFnc[30], "AV50SdtCodif");
   this.addGridBCProperty("Sdtcodif", ["Idx"], this.GXValidFnc[31], "AV50SdtCodif");
   this.addGridBCProperty("Sdtcodif", ["CodificacaoEstId"], this.GXValidFnc[33], "AV50SdtCodif");
   this.addGridBCProperty("Sdtcodif", ["ProdutoCodificacaoValor"], this.GXValidFnc[34], "AV50SdtCodif");
   this.addGridBCProperty("Sdtcodif", ["CodificacaoEstUsuarioAlt"], this.GXValidFnc[35], "AV50SdtCodif");
   this.addGridBCProperty("Sdtcodif", ["CodificacaoEstDataHoraAlt"], this.GXValidFnc[36], "AV50SdtCodif");
   this.addGridBCProperty("Sdtclassif", ["Idx"], this.GXValidFnc[48], "AV51SdtClassif");
   this.addGridBCProperty("Sdtclassif", ["SnRemove"], this.GXValidFnc[49], "AV51SdtClassif");
   this.addGridBCProperty("Sdtclassif", ["ClassificacaoEstId"], this.GXValidFnc[51], "AV51SdtClassif");
   this.addGridBCProperty("Sdtclassif", ["ProdutoClassificacaoValor"], this.GXValidFnc[52], "AV51SdtClassif");
   this.addGridBCProperty("Sdtclassif", ["ClassificacaoEstUsuarioAlt"], this.GXValidFnc[53], "AV51SdtClassif");
   this.addGridBCProperty("Sdtclassif", ["ClassificacaoEstDataHoraAlt"], this.GXValidFnc[54], "AV51SdtClassif");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hcodclaproduto());
