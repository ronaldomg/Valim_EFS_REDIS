/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:8:22.35
*/
gx.evt.autoSkip = false;
gx.define('hretornafornecedor', false, function () {
   this.ServerClass =  "hretornafornecedor" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("6", "'GXM_FIRST'");
   this.addKeyListener("7", "'GXM_PREVIOUS'");
   this.addKeyListener("8", "'GXM_NEXT'");
   this.addKeyListener("9", "'GXM_LAST'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
   };
   this.Validv_Pessoatipopessoa=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPESSOATIPOPESSOA");
         this.AnyError  = 0;
         if ( ! ( this.AV14PessoaTipoPessoa == "F" || this.AV14PessoaTipoPessoa == "J" || (""==this.AV14PessoaTipoPessoa) ) )
         {
            try {
               gxballoon.setError("Campo PessoaTipoPessoa fora do intervalo");
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
   this.e23q92_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hmodalpessoa",[this.A69PessoaId, "UPD", "F"]), []);
      this.refreshOutputs([]);
   };
   this.e15q92_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e11q92_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12q92_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13q92_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14q92_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e20q92_client=function()
   {
      this.executeServerEvent("'RETORNAFORNECEDOR'", true, arguments[0], false, false);
   };
   this.e16q92_client=function()
   {
      this.executeServerEvent("'NOVO'", false, null, false, false);
   };
   this.e17q92_client=function()
   {
      this.executeServerEvent("'FECHAR'", true, null, false, false);
   };
   this.e18q92_client=function()
   {
      this.executeServerEvent("'FINALIZAR'", true, null, false, false);
   };
   this.e24q92_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e25q92_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,11,13,15,16,17,22,24,26,28,31,33,37,39,44,46,49,55,56,57,58,59,60,61,62,63,64,65,66,67,70,73,75,77,79,81,83,84,85,86];
   this.GXLastCtrlId =86;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",54,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"hretornafornecedor",[],false,1,true,true,10,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Retforn","vRETFORN",55,0,"px",17,"px","e20q92_client","","","Image","GridColumnImage");
   Grid1Container.addSingleLineEdit(69,56,"PESSOAID","","","PessoaId","int",0,"px",7,7,"right",null,[],69,"PessoaId",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit("Pessoarazaosocialgrid",57,"vPESSOARAZAOSOCIALGRID","","","PessoaRazaoSocialGrid","char",0,"px",60,60,"left",null,[],"Pessoarazaosocialgrid","PessoaRazaoSocialGrid",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit("Pessoafantasiagrid",58,"vPESSOAFANTASIAGRID","","","PessoaFantasiaGrid","char",0,"px",60,60,"left",null,[],"Pessoafantasiagrid","PessoaFantasiaGrid",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit(72,59,"PESSOATELEFONE","","","PessoaTelefone","svchar",0,"px",15,15,"left",null,[],72,"PessoaTelefone",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit("Cnpjcpf",60,"vCNPJCPF","CNPJ/CPF","","CnpjCpf","char",0,"px",18,18,"left",null,[],"Cnpjcpf","CnpjCpf",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addComboBox(428,61,"PESSOATIPOPESSOA","","PessoaTipoPessoa","char",null,0,true,false,0,"px","");
   Grid1Container.addBitmap("&Bmpalt","vBMPALT",62,0,"px",17,"px","e23q92_client","","Alterar","Image","GridColumnImage");
   Grid1Container.addSingleLineEdit(473,63,"PESSOACPF","CPF Cliente/Fornecedor","","PessoaCPF","char",0,"px",14,14,"left",null,[],473,"PessoaCPF",false,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit(472,64,"PESSOACNPJ","CNPJ Cliente/Fornecedor","","PessoaCNPJ","char",0,"px",18,18,"left",null,[],472,"PessoaCNPJ",false,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit(70,65,"PESSOARAZAOSOCIAL","Razão Social Cliente/Fornecedor","","PessoaRazaoSocial","svchar",0,"px",100,80,"left",null,[],70,"PessoaRazaoSocial",false,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit(71,66,"PESSOAFANTASIA","Nome Cliente/Fornecedor","","PessoaFantasia","svchar",0,"px",60,60,"left",null,[],71,"PessoaFantasia",false,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit(446,67,"PESSOAFORNECEDOR","Fornecedor SN","","PessoaFornecedor","char",0,"px",1,1,"left",null,[],446,"PessoaFornecedor",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE5",grid:0};
   GXValidFnc[5]={fld:"TABLE4",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vPESSOAID",gxz:"ZV11PessoaId",gxold:"OV11PessoaId",gxvar:"AV11PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11PessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAID",gx.O.AV11PessoaId,0)},c2v:function(){gx.O.AV11PessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[11]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCHAVEFONETICA",gxz:"ZV34ChaveFonetica",gxold:"OV34ChaveFonetica",gxvar:"AV34ChaveFonetica",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34ChaveFonetica=Value},v2z:function(Value){gx.O.ZV34ChaveFonetica=Value},v2c:function(){gx.fn.setControlValue("vCHAVEFONETICA",gx.O.AV34ChaveFonetica,0)},c2v:function(){gx.O.AV34ChaveFonetica=this.val()},val:function(){return gx.fn.getControlValue("vCHAVEFONETICA")},nac:gx.falseFn};
   GXValidFnc[13]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoatipopessoa,isvalid:null,rgrid:[],fld:"vPESSOATIPOPESSOA",gxz:"ZV14PessoaTipoPessoa",gxold:"OV14PessoaTipoPessoa",gxvar:"AV14PessoaTipoPessoa",ucs:[],op:[15],ip:[15],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV14PessoaTipoPessoa=Value},v2z:function(Value){gx.O.ZV14PessoaTipoPessoa=Value},v2c:function(){gx.fn.setComboBoxValue("vPESSOATIPOPESSOA",gx.O.AV14PessoaTipoPessoa)},c2v:function(){gx.O.AV14PessoaTipoPessoa=this.val()},val:function(){return gx.fn.getControlValue("vPESSOATIPOPESSOA")},nac:gx.falseFn};
   GXValidFnc[16]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vPESSOAEMPRESAID",gxz:"ZV27PessoaEmpresaId",gxold:"OV27PessoaEmpresaId",gxvar:"AV27PessoaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27PessoaEmpresaId=Value},v2z:function(Value){gx.O.ZV27PessoaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vPESSOAEMPRESAID",gx.O.AV27PessoaEmpresaId,0)},c2v:function(){gx.O.AV27PessoaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vORDEREDBY",gxz:"ZV31OrderedBy",gxold:"OV31OrderedBy",gxvar:"AV31OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV31OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV31OrderedBy,0)},c2v:function(){gx.O.AV31OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vPESSOARAZAOSOCIAL",gxz:"ZV13PessoaRazaoSocial",gxold:"OV13PessoaRazaoSocial",gxvar:"AV13PessoaRazaoSocial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13PessoaRazaoSocial=Value},v2z:function(Value){gx.O.ZV13PessoaRazaoSocial=Value},v2c:function(){gx.fn.setControlValue("vPESSOARAZAOSOCIAL",gx.O.AV13PessoaRazaoSocial,0)},c2v:function(){gx.O.AV13PessoaRazaoSocial=this.val()},val:function(){return gx.fn.getControlValue("vPESSOARAZAOSOCIAL")},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"char",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vPESSOACNPJ",gxz:"ZV17PessoaCNPJ",gxold:"OV17PessoaCNPJ",gxvar:"AV17PessoaCNPJ",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17PessoaCNPJ=Value},v2z:function(Value){gx.O.ZV17PessoaCNPJ=Value},v2c:function(){gx.fn.setControlValue("vPESSOACNPJ",gx.O.AV17PessoaCNPJ,0)},c2v:function(){gx.O.AV17PessoaCNPJ=this.val()},val:function(){return gx.fn.getControlValue("vPESSOACNPJ")},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vPESSOAFANTASIA",gxz:"ZV15PessoaFantasia",gxold:"OV15PessoaFantasia",gxvar:"AV15PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15PessoaFantasia=Value},v2z:function(Value){gx.O.ZV15PessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("vPESSOAFANTASIA",gx.O.AV15PessoaFantasia,0)},c2v:function(){gx.O.AV15PessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:14,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vPESSOACPF",gxz:"ZV18PessoaCPF",gxold:"OV18PessoaCPF",gxvar:"AV18PessoaCPF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18PessoaCPF=Value},v2z:function(Value){gx.O.ZV18PessoaCPF=Value},v2c:function(){gx.fn.setControlValue("vPESSOACPF",gx.O.AV18PessoaCPF,0)},c2v:function(){gx.O.AV18PessoaCPF=this.val()},val:function(){return gx.fn.getControlValue("vPESSOACPF")},nac:gx.falseFn};
   GXValidFnc[44]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[46]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vPESSOATELEFONE",gxz:"ZV16PessoaTelefone",gxold:"OV16PessoaTelefone",gxvar:"AV16PessoaTelefone",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16PessoaTelefone=Value},v2z:function(Value){gx.O.ZV16PessoaTelefone=Value},v2c:function(){gx.fn.setControlValue("vPESSOATELEFONE",gx.O.AV16PessoaTelefone,0)},c2v:function(){gx.O.AV16PessoaTelefone=this.val()},val:function(){return gx.fn.getControlValue("vPESSOATELEFONE")},nac:gx.falseFn};
   GXValidFnc[49]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vBUSCAFONETICA",gxz:"ZV33BuscaFonetica",gxold:"OV33BuscaFonetica",gxvar:"AV33BuscaFonetica",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV33BuscaFonetica=Value},v2z:function(Value){gx.O.ZV33BuscaFonetica=Value},v2c:function(){gx.fn.setCheckBoxValue("vBUSCAFONETICA",gx.O.AV33BuscaFonetica,"S")},c2v:function(){gx.O.AV33BuscaFonetica=this.val()},val:function(){return gx.fn.getControlValue("vBUSCAFONETICA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[55]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:54,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vRETFORN",gxz:"ZV25retForn",gxold:"OV25retForn",gxvar:"AV25retForn",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV25retForn=Value},v2z:function(Value){gx.O.ZV25retForn=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vRETFORN",row || gx.fn.currentGridRowImpl(54),gx.O.AV25retForn,gx.O.AV46Retforn_GXI)},c2v:function(){gx.O.AV46Retforn_GXI=this.val_GXI();gx.O.AV25retForn=this.val()},val:function(row){return gx.fn.getGridControlValue("vRETFORN",row || gx.fn.currentGridRowImpl(54))},val_GXI:function(row){return gx.fn.getGridControlValue("vRETFORN_GXI",row || gx.fn.currentGridRowImpl(54))}, gxvar_GXI:'AV46Retforn_GXI',nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:54,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PESSOAID",gxz:"Z69PessoaId",gxold:"O69PessoaId",gxvar:"A69PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A69PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z69PessoaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PESSOAID",row || gx.fn.currentGridRowImpl(54),gx.O.A69PessoaId,0)},c2v:function(){gx.O.A69PessoaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PESSOAID",row || gx.fn.currentGridRowImpl(54),'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"char",len:60,dec:0,sign:false,ro:0,isacc:0,grid:54,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOARAZAOSOCIALGRID",gxz:"ZV28PessoaRazaoSocialGrid",gxold:"OV28PessoaRazaoSocialGrid",gxvar:"AV28PessoaRazaoSocialGrid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV28PessoaRazaoSocialGrid=Value},v2z:function(Value){gx.O.ZV28PessoaRazaoSocialGrid=Value},v2c:function(row){gx.fn.setGridControlValue("vPESSOARAZAOSOCIALGRID",row || gx.fn.currentGridRowImpl(54),gx.O.AV28PessoaRazaoSocialGrid,0)},c2v:function(){gx.O.AV28PessoaRazaoSocialGrid=this.val()},val:function(row){return gx.fn.getGridControlValue("vPESSOARAZAOSOCIALGRID",row || gx.fn.currentGridRowImpl(54))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"char",len:60,dec:0,sign:false,ro:0,isacc:0,grid:54,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAFANTASIAGRID",gxz:"ZV29PessoaFantasiaGrid",gxold:"OV29PessoaFantasiaGrid",gxvar:"AV29PessoaFantasiaGrid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV29PessoaFantasiaGrid=Value},v2z:function(Value){gx.O.ZV29PessoaFantasiaGrid=Value},v2c:function(row){gx.fn.setGridControlValue("vPESSOAFANTASIAGRID",row || gx.fn.currentGridRowImpl(54),gx.O.AV29PessoaFantasiaGrid,0)},c2v:function(){gx.O.AV29PessoaFantasiaGrid=this.val()},val:function(row){return gx.fn.getGridControlValue("vPESSOAFANTASIAGRID",row || gx.fn.currentGridRowImpl(54))},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"svchar",len:15,dec:0,sign:false,ro:1,isacc:0,grid:54,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PESSOATELEFONE",gxz:"Z72PessoaTelefone",gxold:"O72PessoaTelefone",gxvar:"A72PessoaTelefone",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A72PessoaTelefone=Value},v2z:function(Value){gx.O.Z72PessoaTelefone=Value},v2c:function(row){gx.fn.setGridControlValue("PESSOATELEFONE",row || gx.fn.currentGridRowImpl(54),gx.O.A72PessoaTelefone,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A72PessoaTelefone=this.val()},val:function(row){return gx.fn.getGridControlValue("PESSOATELEFONE",row || gx.fn.currentGridRowImpl(54))},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"char",len:18,dec:0,sign:false,ro:0,isacc:0,grid:54,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vCNPJCPF",gxz:"ZV37CnpjCpf",gxold:"OV37CnpjCpf",gxvar:"AV37CnpjCpf",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV37CnpjCpf=Value},v2z:function(Value){gx.O.ZV37CnpjCpf=Value},v2c:function(row){gx.fn.setGridControlValue("vCNPJCPF",row || gx.fn.currentGridRowImpl(54),gx.O.AV37CnpjCpf,0)},c2v:function(){gx.O.AV37CnpjCpf=this.val()},val:function(row){return gx.fn.getGridControlValue("vCNPJCPF",row || gx.fn.currentGridRowImpl(54))},nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:54,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PESSOATIPOPESSOA",gxz:"Z428PessoaTipoPessoa",gxold:"O428PessoaTipoPessoa",gxvar:"A428PessoaTipoPessoa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A428PessoaTipoPessoa=Value},v2z:function(Value){gx.O.Z428PessoaTipoPessoa=Value},v2c:function(row){gx.fn.setGridComboBoxValue("PESSOATIPOPESSOA",row || gx.fn.currentGridRowImpl(54),gx.O.A428PessoaTipoPessoa);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A428PessoaTipoPessoa=this.val()},val:function(row){return gx.fn.getGridControlValue("PESSOATIPOPESSOA",row || gx.fn.currentGridRowImpl(54))},nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:54,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV23bmpAlt",gxold:"OV23bmpAlt",gxvar:"AV23bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV23bmpAlt=Value},v2z:function(Value){gx.O.ZV23bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(54),gx.O.AV23bmpAlt,gx.O.AV45Bmpalt_GXI)},c2v:function(){gx.O.AV45Bmpalt_GXI=this.val_GXI();gx.O.AV23bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(54))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(54))}, gxvar_GXI:'AV45Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[63]={lvl:2,type:"char",len:14,dec:0,sign:false,ro:1,isacc:0,grid:54,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PESSOACPF",gxz:"Z473PessoaCPF",gxold:"O473PessoaCPF",gxvar:"A473PessoaCPF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A473PessoaCPF=Value},v2z:function(Value){gx.O.Z473PessoaCPF=Value},v2c:function(row){gx.fn.setGridControlValue("PESSOACPF",row || gx.fn.currentGridRowImpl(54),gx.O.A473PessoaCPF,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A473PessoaCPF=this.val()},val:function(row){return gx.fn.getGridControlValue("PESSOACPF",row || gx.fn.currentGridRowImpl(54))},nac:gx.falseFn};
   GXValidFnc[64]={lvl:2,type:"char",len:18,dec:0,sign:false,ro:1,isacc:0,grid:54,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PESSOACNPJ",gxz:"Z472PessoaCNPJ",gxold:"O472PessoaCNPJ",gxvar:"A472PessoaCNPJ",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A472PessoaCNPJ=Value},v2z:function(Value){gx.O.Z472PessoaCNPJ=Value},v2c:function(row){gx.fn.setGridControlValue("PESSOACNPJ",row || gx.fn.currentGridRowImpl(54),gx.O.A472PessoaCNPJ,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A472PessoaCNPJ=this.val()},val:function(row){return gx.fn.getGridControlValue("PESSOACNPJ",row || gx.fn.currentGridRowImpl(54))},nac:gx.falseFn};
   GXValidFnc[65]={lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:1,isacc:0,grid:54,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PESSOARAZAOSOCIAL",gxz:"Z70PessoaRazaoSocial",gxold:"O70PessoaRazaoSocial",gxvar:"A70PessoaRazaoSocial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A70PessoaRazaoSocial=Value},v2z:function(Value){gx.O.Z70PessoaRazaoSocial=Value},v2c:function(row){gx.fn.setGridControlValue("PESSOARAZAOSOCIAL",row || gx.fn.currentGridRowImpl(54),gx.O.A70PessoaRazaoSocial,0)},c2v:function(){gx.O.A70PessoaRazaoSocial=this.val()},val:function(row){return gx.fn.getGridControlValue("PESSOARAZAOSOCIAL",row || gx.fn.currentGridRowImpl(54))},nac:gx.falseFn};
   GXValidFnc[66]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:1,isacc:0,grid:54,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PESSOAFANTASIA",gxz:"Z71PessoaFantasia",gxold:"O71PessoaFantasia",gxvar:"A71PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A71PessoaFantasia=Value},v2z:function(Value){gx.O.Z71PessoaFantasia=Value},v2c:function(row){gx.fn.setGridControlValue("PESSOAFANTASIA",row || gx.fn.currentGridRowImpl(54),gx.O.A71PessoaFantasia,0)},c2v:function(){gx.O.A71PessoaFantasia=this.val()},val:function(row){return gx.fn.getGridControlValue("PESSOAFANTASIA",row || gx.fn.currentGridRowImpl(54))},nac:gx.falseFn};
   GXValidFnc[67]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:54,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PESSOAFORNECEDOR",gxz:"Z446PessoaFornecedor",gxold:"O446PessoaFornecedor",gxvar:"A446PessoaFornecedor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A446PessoaFornecedor=Value},v2z:function(Value){gx.O.Z446PessoaFornecedor=Value},v2c:function(row){gx.fn.setGridControlValue("PESSOAFORNECEDOR",row || gx.fn.currentGridRowImpl(54),gx.O.A446PessoaFornecedor,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A446PessoaFornecedor=this.val()},val:function(row){return gx.fn.getGridControlValue("PESSOAFORNECEDOR",row || gx.fn.currentGridRowImpl(54))},nac:gx.falseFn};
   GXValidFnc[70]={fld:"TABLE3",grid:0};
   GXValidFnc[73]={fld:"UPDPRODUTO",grid:0};
   GXValidFnc[75]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[77]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[79]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[81]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[83]={fld:"IMAGE6",grid:0};
   GXValidFnc[84]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV41PaginaAux",gxold:"OV41PaginaAux",gxvar:"AV41PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV41PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV41PaginaAux,0)},c2v:function(){gx.O.AV41PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[85]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV32Pagina",gxold:"OV32Pagina",gxvar:"AV32Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV32Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV32Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV32Pagina)},c2v:function(){gx.O.AV32Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[86]={fld:"JS", format:2,grid:0};
   this.AV11PessoaId = 0 ;
   this.ZV11PessoaId = 0 ;
   this.OV11PessoaId = 0 ;
   this.AV34ChaveFonetica = "" ;
   this.ZV34ChaveFonetica = "" ;
   this.OV34ChaveFonetica = "" ;
   this.AV14PessoaTipoPessoa = "" ;
   this.ZV14PessoaTipoPessoa = "" ;
   this.OV14PessoaTipoPessoa = "" ;
   this.AV27PessoaEmpresaId = "" ;
   this.ZV27PessoaEmpresaId = "" ;
   this.OV27PessoaEmpresaId = "" ;
   this.AV31OrderedBy = 0 ;
   this.ZV31OrderedBy = 0 ;
   this.OV31OrderedBy = 0 ;
   this.AV13PessoaRazaoSocial = "" ;
   this.ZV13PessoaRazaoSocial = "" ;
   this.OV13PessoaRazaoSocial = "" ;
   this.AV17PessoaCNPJ = "" ;
   this.ZV17PessoaCNPJ = "" ;
   this.OV17PessoaCNPJ = "" ;
   this.AV15PessoaFantasia = "" ;
   this.ZV15PessoaFantasia = "" ;
   this.OV15PessoaFantasia = "" ;
   this.AV18PessoaCPF = "" ;
   this.ZV18PessoaCPF = "" ;
   this.OV18PessoaCPF = "" ;
   this.AV16PessoaTelefone = "" ;
   this.ZV16PessoaTelefone = "" ;
   this.OV16PessoaTelefone = "" ;
   this.AV33BuscaFonetica = "" ;
   this.ZV33BuscaFonetica = "" ;
   this.OV33BuscaFonetica = "" ;
   this.ZV25retForn = "" ;
   this.OV25retForn = "" ;
   this.Z69PessoaId = 0 ;
   this.O69PessoaId = 0 ;
   this.ZV28PessoaRazaoSocialGrid = "" ;
   this.OV28PessoaRazaoSocialGrid = "" ;
   this.ZV29PessoaFantasiaGrid = "" ;
   this.OV29PessoaFantasiaGrid = "" ;
   this.Z72PessoaTelefone = "" ;
   this.O72PessoaTelefone = "" ;
   this.ZV37CnpjCpf = "" ;
   this.OV37CnpjCpf = "" ;
   this.Z428PessoaTipoPessoa = "" ;
   this.O428PessoaTipoPessoa = "" ;
   this.ZV23bmpAlt = "" ;
   this.OV23bmpAlt = "" ;
   this.Z473PessoaCPF = "" ;
   this.O473PessoaCPF = "" ;
   this.Z472PessoaCNPJ = "" ;
   this.O472PessoaCNPJ = "" ;
   this.Z70PessoaRazaoSocial = "" ;
   this.O70PessoaRazaoSocial = "" ;
   this.Z71PessoaFantasia = "" ;
   this.O71PessoaFantasia = "" ;
   this.Z446PessoaFornecedor = "" ;
   this.O446PessoaFornecedor = "" ;
   this.AV41PaginaAux = 0 ;
   this.ZV41PaginaAux = 0 ;
   this.OV41PaginaAux = 0 ;
   this.AV32Pagina = 0 ;
   this.ZV32Pagina = 0 ;
   this.OV32Pagina = 0 ;
   this.AV11PessoaId = 0 ;
   this.AV34ChaveFonetica = "" ;
   this.AV14PessoaTipoPessoa = "" ;
   this.AV27PessoaEmpresaId = "" ;
   this.AV31OrderedBy = 0 ;
   this.AV13PessoaRazaoSocial = "" ;
   this.AV17PessoaCNPJ = "" ;
   this.AV15PessoaFantasia = "" ;
   this.AV18PessoaCPF = "" ;
   this.AV16PessoaTelefone = "" ;
   this.AV33BuscaFonetica = "" ;
   this.AV41PaginaAux = 0 ;
   this.AV32Pagina = 0 ;
   this.A3203PessoaFantasiaSemAcento = "" ;
   this.A3202PessoaRazaoSocialSemAcento = "" ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.AV25retForn = "" ;
   this.A69PessoaId = 0 ;
   this.AV28PessoaRazaoSocialGrid = "" ;
   this.AV29PessoaFantasiaGrid = "" ;
   this.A72PessoaTelefone = "" ;
   this.AV37CnpjCpf = "" ;
   this.A428PessoaTipoPessoa = "" ;
   this.AV23bmpAlt = "" ;
   this.A473PessoaCPF = "" ;
   this.A472PessoaCNPJ = "" ;
   this.A70PessoaRazaoSocial = "" ;
   this.A71PessoaFantasia = "" ;
   this.A446PessoaFornecedor = "" ;
   this.Events = {"e15q92_client": ["'PROCURAR'", true] ,"e11q92_client": ["'GXM_FIRST'", true] ,"e12q92_client": ["'GXM_PREVIOUS'", true] ,"e13q92_client": ["'GXM_NEXT'", true] ,"e14q92_client": ["'GXM_LAST'", true] ,"e20q92_client": ["'RETORNAFORNECEDOR'", true] ,"e16q92_client": ["'NOVO'", true] ,"e17q92_client": ["'FECHAR'", true] ,"e18q92_client": ["'FINALIZAR'", true] ,"e24q92_client": ["ENTER", true] ,"e25q92_client": ["CANCEL", true] ,"e23q92_client": ["'ALTERAR'", false]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV11PessoaId',fld:'vPESSOAID'},{av:'AV34ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV27PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'AV13PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV17PessoaCNPJ',fld:'vPESSOACNPJ'},{av:'AV15PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV18PessoaCPF',fld:'vPESSOACPF'},{av:'AV16PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV33BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV23bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV25retForn',fld:'vRETFORN'},{av:'gx.fn.getCtrlProperty("vRETFORN","Tooltiptext")',ctrl:'vRETFORN',prop:'Tooltiptext'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A428PessoaTipoPessoa',fld:'PESSOATIPOPESSOA'},{av:'A473PessoaCPF',fld:'PESSOACPF'},{av:'A472PessoaCNPJ',fld:'PESSOACNPJ'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV31OrderedBy',fld:'vORDEREDBY'}],[{ctrl:'PESSOAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PESSOAID","Title")',ctrl:'PESSOAID',prop:'Title'},{av:'AV30Imagem',fld:'vIMAGEM'},{ctrl:'vPESSOARAZAOSOCIALGRID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vPESSOARAZAOSOCIALGRID","Title")',ctrl:'vPESSOARAZAOSOCIALGRID',prop:'Title'},{ctrl:'vPESSOAFANTASIAGRID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vPESSOAFANTASIAGRID","Title")',ctrl:'vPESSOAFANTASIAGRID',prop:'Title'},{ctrl:'PESSOATIPOPESSOA'},{ctrl:'PESSOATELEFONE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PESSOATELEFONE","Title")',ctrl:'PESSOATELEFONE',prop:'Title'},{av:'AV41PaginaAux',fld:'vPAGINAAUX'},{av:'AV32Pagina',fld:'vPAGINA'},{av:'AV40NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV11PessoaId',fld:'vPESSOAID'},{av:'AV34ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV27PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'AV31OrderedBy',fld:'vORDEREDBY'},{av:'AV13PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV17PessoaCNPJ',fld:'vPESSOACNPJ'},{av:'AV15PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV18PessoaCPF',fld:'vPESSOACPF'},{av:'AV16PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV33BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV23bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV25retForn',fld:'vRETFORN'},{av:'gx.fn.getCtrlProperty("vRETFORN","Tooltiptext")',ctrl:'vRETFORN',prop:'Tooltiptext'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A428PessoaTipoPessoa',fld:'PESSOATIPOPESSOA'},{av:'A473PessoaCPF',fld:'PESSOACPF'},{av:'A472PessoaCNPJ',fld:'PESSOACNPJ'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV14PessoaTipoPessoa',fld:'vPESSOATIPOPESSOA'}],[{av:'AV12RazaoFantasia',fld:'vRAZAOFANTASIA'},{av:'AV34ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV31OrderedBy',fld:'vORDEREDBY'},{av:'AV32Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV11PessoaId',fld:'vPESSOAID'},{av:'AV34ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV27PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'AV31OrderedBy',fld:'vORDEREDBY'},{av:'AV13PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV17PessoaCNPJ',fld:'vPESSOACNPJ'},{av:'AV15PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV18PessoaCPF',fld:'vPESSOACPF'},{av:'AV16PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV33BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV23bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV25retForn',fld:'vRETFORN'},{av:'gx.fn.getCtrlProperty("vRETFORN","Tooltiptext")',ctrl:'vRETFORN',prop:'Tooltiptext'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A428PessoaTipoPessoa',fld:'PESSOATIPOPESSOA'},{av:'A473PessoaCPF',fld:'PESSOACPF'},{av:'A472PessoaCNPJ',fld:'PESSOACNPJ'},{av:'A69PessoaId',fld:'PESSOAID'}],[{av:'AV32Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV11PessoaId',fld:'vPESSOAID'},{av:'AV34ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV27PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'AV31OrderedBy',fld:'vORDEREDBY'},{av:'AV13PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV17PessoaCNPJ',fld:'vPESSOACNPJ'},{av:'AV15PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV18PessoaCPF',fld:'vPESSOACPF'},{av:'AV16PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV33BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV23bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV25retForn',fld:'vRETFORN'},{av:'gx.fn.getCtrlProperty("vRETFORN","Tooltiptext")',ctrl:'vRETFORN',prop:'Tooltiptext'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A428PessoaTipoPessoa',fld:'PESSOATIPOPESSOA'},{av:'A473PessoaCPF',fld:'PESSOACPF'},{av:'A472PessoaCNPJ',fld:'PESSOACNPJ'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV32Pagina',fld:'vPAGINA'}],[{av:'AV32Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV11PessoaId',fld:'vPESSOAID'},{av:'AV34ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV27PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'AV31OrderedBy',fld:'vORDEREDBY'},{av:'AV13PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV17PessoaCNPJ',fld:'vPESSOACNPJ'},{av:'AV15PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV18PessoaCPF',fld:'vPESSOACPF'},{av:'AV16PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV33BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV23bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV25retForn',fld:'vRETFORN'},{av:'gx.fn.getCtrlProperty("vRETFORN","Tooltiptext")',ctrl:'vRETFORN',prop:'Tooltiptext'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A428PessoaTipoPessoa',fld:'PESSOATIPOPESSOA'},{av:'A473PessoaCPF',fld:'PESSOACPF'},{av:'A472PessoaCNPJ',fld:'PESSOACNPJ'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV32Pagina',fld:'vPAGINA'}],[{av:'AV32Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV11PessoaId',fld:'vPESSOAID'},{av:'AV34ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV27PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'AV31OrderedBy',fld:'vORDEREDBY'},{av:'AV13PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV17PessoaCNPJ',fld:'vPESSOACNPJ'},{av:'AV15PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV18PessoaCPF',fld:'vPESSOACPF'},{av:'AV16PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV33BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV23bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV25retForn',fld:'vRETFORN'},{av:'gx.fn.getCtrlProperty("vRETFORN","Tooltiptext")',ctrl:'vRETFORN',prop:'Tooltiptext'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A428PessoaTipoPessoa',fld:'PESSOATIPOPESSOA'},{av:'A473PessoaCPF',fld:'PESSOACPF'},{av:'A472PessoaCNPJ',fld:'PESSOACNPJ'},{av:'A69PessoaId',fld:'PESSOAID'}],[{av:'AV32Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'RETORNAFORNECEDOR'"] = [[{av:'A69PessoaId',fld:'PESSOAID'}],[{av:'AV38splitPessoa',fld:'vSPLITPESSOA'}]];
   this.EvtParms["GRID1.LOAD"] = [[{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A428PessoaTipoPessoa',fld:'PESSOATIPOPESSOA'},{av:'A473PessoaCPF',fld:'PESSOACPF'},{av:'A472PessoaCNPJ',fld:'PESSOACNPJ'},{av:'A69PessoaId',fld:'PESSOAID'}],[{av:'AV28PessoaRazaoSocialGrid',fld:'vPESSOARAZAOSOCIALGRID'},{av:'AV29PessoaFantasiaGrid',fld:'vPESSOAFANTASIAGRID'},{av:'AV37CnpjCpf',fld:'vCNPJCPF'},{av:'AV38splitPessoa',fld:'vSPLITPESSOA'},{av:'AV26PessoaCodigo',fld:'vPESSOACODIGO'},{av:'AV47GXV1',fld:'vGXV1'},{av:'AV39PessoaAux',fld:'vPESSOAAUX'},{av:'gx.fn.getCtrlProperty("PESSOAID","Fontbold")',ctrl:'PESSOAID',prop:'Fontbold'},{av:'gx.fn.getCtrlProperty("PESSOAID","Forecolor")',ctrl:'PESSOAID',prop:'Forecolor'},{av:'gx.fn.getCtrlProperty("vPESSOARAZAOSOCIALGRID","Fontbold")',ctrl:'vPESSOARAZAOSOCIALGRID',prop:'Fontbold'},{av:'gx.fn.getCtrlProperty("vPESSOARAZAOSOCIALGRID","Forecolor")',ctrl:'vPESSOARAZAOSOCIALGRID',prop:'Forecolor'},{av:'gx.fn.getCtrlProperty("vPESSOAFANTASIAGRID","Fontbold")',ctrl:'vPESSOAFANTASIAGRID',prop:'Fontbold'},{av:'gx.fn.getCtrlProperty("vPESSOAFANTASIAGRID","Forecolor")',ctrl:'vPESSOAFANTASIAGRID',prop:'Forecolor'},{av:'gx.fn.getCtrlProperty("PESSOATELEFONE","Fontbold")',ctrl:'PESSOATELEFONE',prop:'Fontbold'},{av:'gx.fn.getCtrlProperty("PESSOATELEFONE","Forecolor")',ctrl:'PESSOATELEFONE',prop:'Forecolor'},{av:'gx.fn.getCtrlProperty("vCNPJCPF","Fontbold")',ctrl:'vCNPJCPF',prop:'Fontbold'},{av:'gx.fn.getCtrlProperty("vCNPJCPF","Forecolor")',ctrl:'vCNPJCPF',prop:'Forecolor'},{ctrl:'PESSOATIPOPESSOA'}]];
   this.EvtParms["'NOVO'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV11PessoaId',fld:'vPESSOAID'},{av:'AV34ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV27PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'AV31OrderedBy',fld:'vORDEREDBY'},{av:'AV13PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV17PessoaCNPJ',fld:'vPESSOACNPJ'},{av:'AV15PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV18PessoaCPF',fld:'vPESSOACPF'},{av:'AV16PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV33BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV23bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV25retForn',fld:'vRETFORN'},{av:'gx.fn.getCtrlProperty("vRETFORN","Tooltiptext")',ctrl:'vRETFORN',prop:'Tooltiptext'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A428PessoaTipoPessoa',fld:'PESSOATIPOPESSOA'},{av:'A473PessoaCPF',fld:'PESSOACPF'},{av:'A472PessoaCNPJ',fld:'PESSOACNPJ'},{av:'A69PessoaId',fld:'PESSOAID'}],[]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A69PessoaId',fld:'PESSOAID'}],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV26PessoaCodigo',fld:'vPESSOACODIGO'}],[]];
   this.EvtParms["'FINALIZAR'"] = [[{av:'AV26PessoaCodigo',fld:'vPESSOACODIGO'}],[{av:'AV26PessoaCodigo',fld:'vPESSOACODIGO'}]];
   Grid1Container.addRefreshingVar(this.GXValidFnc[10]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[11]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[16]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[17]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[28]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[33]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[46]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[49]);
   Grid1Container.addRefreshingVar({rfrVar:"AV23bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   Grid1Container.addRefreshingVar({rfrVar:"AV23bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   Grid1Container.addRefreshingVar({rfrVar:"AV25retForn", rfrProp:"Value", gxAttId:"Retforn"});
   Grid1Container.addRefreshingVar({rfrVar:"AV25retForn", rfrProp:"Tooltiptext", gxAttId:"Retforn"});
   Grid1Container.addRefreshingVar({rfrVar:"A70PessoaRazaoSocial", rfrProp:"Value", gxAttId:"70"});
   Grid1Container.addRefreshingVar({rfrVar:"A71PessoaFantasia", rfrProp:"Value", gxAttId:"71"});
   Grid1Container.addRefreshingVar({rfrVar:"A428PessoaTipoPessoa", rfrProp:"Value", gxAttId:"428"});
   Grid1Container.addRefreshingVar({rfrVar:"A473PessoaCPF", rfrProp:"Value", gxAttId:"473"});
   Grid1Container.addRefreshingVar({rfrVar:"A472PessoaCNPJ", rfrProp:"Value", gxAttId:"472"});
   Grid1Container.addRefreshingVar({rfrVar:"A69PessoaId", rfrProp:"Value", gxAttId:"69"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hretornafornecedor());
